//获取当前的播放器对象
let videoContainerEle=document.getElementById('video-container')
//获取视频对象--HTMLVideoElement
let videoEle = document.getElementById('video');
// 获取控制按钮对象(播放/暂停)
let controlButtonEle = document.getElementById('control-button');
// 获取控制图标对象
let controlIconEle = document.getElementById('control-icon');
// 获取控制音量的按钮对象
let volumeButtonEle = document.getElementById('volume-button');
// 获取音量图标对象
let volumeIconEle = document.getElementById('volume-icon');
// 获取音量滑动对象
let volumeEle = document.getElementById('volume');
// 获取当前时间对象
let timeElapsedEle = document.getElementById('time-elapsed');
// 获取总时长对象
let durationEle = document.getElementById('duration');
//获取全屏按钮
let fullscreenButtonEle=document.getElementById('fullscreen-button')
//获取全屏图标对象
let fullsceenIconEle = document.getElementById('fullsceen-icon');
//获取进度条滑块对象
let seekEle=document.getElementById("seek")

// 控制按钮对象的单击事件
controlButtonEle.addEventListener('click',()=>{  
  if(videoEle.paused || videoEle.ended){
    // 播放视频
    videoEle.play();
    // 设置控制图标
    controlIconEle.src = 'icons/pause.png';
  } else {
    // 暂停视频
    videoEle.pause();
    // 设置控制图标
    controlIconEle.src = 'icons/play.png';
  }
});

// 音量按钮对象的事件
volumeButtonEle.addEventListener('click',()=>{  
  videoEle.muted = !videoEle.muted;  
  if(videoEle.muted || volumeEle.dataVolume == 0){
    //将静音之前的音量存储到自定义属性 data-volume 中
    volumeEle.dataVolume = volumeEle.value;
    //调整音量滑块的值为0
    volumeEle.value = 0;
    //设置音量图标为静音
    volumeIconEle.src = 'icons/volume-off.png';
  } else {
    //设置音量图标为非静音
    volumeIconEle.src = 'icons/volume-on.png';
    //调整音量滑块的值为自定义属性 data-volume的值 
    volumeEle.value = volumeEle.dataVolume;
  }
});

// 音量滑块对象的事件
volumeEle.addEventListener('input',()=>{
    //如果视频已经静音了,现在只能向右滑动音量滑块
    if(videoEle.muted){
      videoEle.muted = false;
      volumeIconEle.src = 'icons/volume-on.png';
    }
    // 滑块滑动到最左侧
    if(volumeEle.value == 0){
      volumeIconEle.src = 'icons/volume-off.png';
    } else {
      volumeIconEle.src = 'icons/volume-on.png';
    }
    //视频对象的音量为音量滑块对象的值
    videoEle.volume = volumeEle.value;
    //将滑块音量存储到自定义属性 data-volume 中，为防止用户
    //两次拖动滑块后直接单击静音图标
    volumeEle.dataVolume = volumeEle.value;
});

//获取当前时间和总时长 -- 在loadeddata事件触发时
videoEle.addEventListener('loadeddata',()=>{
  //当前时间
  timeElapsedEle.innerText = formatTime(videoEle.currentTime);
  //总时长
  durationEle.innerText = formatTime(videoEle.duration);
   //调整进度条滑动的最大值
   seekEle.max = parseInt(videoEle.duration);
  
});

//实时更新当前时间 -- 在timeupdate事件触发时
videoEle.addEventListener('timeupdate',()=>{
  //当前时间
  timeElapsedEle.innerText = formatTime(videoEle.currentTime);
});


// 全屏按钮的事件
fullscreenButtonEle.addEventListener('click',()=>{
  if(document.fullscreenElement){
    //退出全屏
    document.exitFullscreen();
    fullsceenIconEle.src = 'icons/fullscreen.png';
  } else {
    //进入全屏    
    videoContainerEle.requestFullscreen();
    fullsceenIconEle.src = 'icons/fullscreen-exit.png';
  }

});




//格式化时间的自定义函数
function formatTime(time){
  time = parseInt(time);
  let minutes = parseInt(time / 60);
  let seconds = parseInt(time % 60);
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  return minutes + ':' + seconds;
}