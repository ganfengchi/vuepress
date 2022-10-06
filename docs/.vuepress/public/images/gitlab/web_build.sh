#!/bin/bash
set -e -x

echo $1
curPath=$(readlink -f "$(dirname "$0")")
echo $curPath  

webSourceGit=$curPath/pressure-test-tools-aft
nodeModulePath=$curPath/node_modules
distPath=$webSourceGit/dist
destNodeMoudlePath=$webSourceGit/node_modules
finallyDestZip=$webSourceGit/dist.$1.zip
pushFoldTag=$curPath/webbuildpush


function check_fold(){
    if [[ $curPath =~ ^/opt/web ]];then
        echo "目录检查通过."
    else
        echo "不在指定目录下执行，退出."
        exit 1
    fi
    if [[ ! -d $pushFoldTag ]];then
        echo "发布目录不存在，退出, exit."
        exit 1
    fi
}

check_fold

function check_web_source_git() {
    echo "目录： $webSourceGit"
    if [[ -d $webSourceGit ]]; then
        echo "目录存在，将被删除"
        rm -rf $webSourceGit
    else
        echo "目录不存在"
    fi
}


check_web_source_git

function check_web_git_and_enter(){
    if [[ -d $webSourceGit ]];then
        cd $webSourceGit
        ls
    else
        echo "git fail, exit"
        exit 1
    fi
}

function get_web_source_git() {
    git clone --branch $1 git@172.24.148.169:cdhgroup/pressure-test-tools-aft.git

}

get_web_source_git $1
check_web_git_and_enter

function install_node_module() {
    # 将模块移入工程
    if [[ -d $nodeModulePath ]]; then
        echo "已经存在node_moudle."
        # 如果存在node module目录，则建立软链接，这样防止未知bug
        mv $nodeModulePath $webSourceGit
    fi
}

function uninstall_node_module() {
    # 将node module移出工程
    if [[ -d $nodeModulePath ]]; then
        rm -rf  $nodeModulePath
    else
        mv $destNodeMoudlePath $nodeModulePath
    fi
}

function install_pkg() {

    if [[ -d $destNodeMoudlePath ]]; then
        echo "删除原node_modules: $destNodeMoudlePath"
    fi

    if [[ -d $distPath ]];then
        echo "删除dist: $distPath"
    fi

    install_node_module

    source /etc/profile;
    cd $webSourceGit;
    npm install ;
    
    echo "done"
}


function build_pkg() {
    source /etc/profile;
    cd $webSourceGit;

    npm run build;
    if [[ -d $distPath ]];then
        zip $finallyDestZip $distPath
    else
        echo "not dist fold. exit"
        exit 1
    fi
}

install_pkg

build_pkg
uninstall_node_module


####Push start########################
# 推送打包到gitlab
function pkg_push() {
    mv $finallyDestZip $pushFoldTag;
    cd $pushFoldTag;
    git add ./;
    git commit -m "build $1"
    git push;
    echo "发布成功."
}
pkg_push $1
####Push end##########################