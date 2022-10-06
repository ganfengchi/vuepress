# axios  封装 

为什么要封装axios呢,因为页面也可太多 ，太分散不太好管理
http.js
```js
import axios from "axios";

let baseURL;

// 环境的切换
if (process.env.NODE_ENV == "development") {
  // baseURL = 'http://172.24.148.199:7003';
  baseURL = "http://172.24.152.247:7070";
} else if (process.env.NODE_ENV == "production") {
  baseURL = "http://172.24.148.199:5000";
  // axios.defaults.baseURL = 'http://172.24.148.199:7003';
}

const request = axios.create({
  // API 请求的默认前缀
  // baseURL: process.env.VUE_APP_API_BASE_URL,
  baseURL,
  timeout: 30000, // 请求超时时间
});
// 异常拦截处理器
const errorHandler = (error) => {
  if (error.response) {
    const data = error.response.data;
    // 从 localstorage 获取 token
    if (error.response.status === 403) {
      notification.error({
        message: "Forbidden",
        description: data.message,
      });
    }
    if (
      error.response.status === 401 &&
      !(data.result && data.result.isLogin)
    ) {
      notification.error({
        message: "Unauthorized",
        description: "Authorization verification failed",
      });
      // if (token) {
      //   store.dispatch('Logout').then(() => {
      //     setTimeout(() => {
      //       window.location.reload()
      //     }, 1500)
      //   })
      // }
    }
  }
  return Promise.reject(error);
};

// 取消请求
const CancelToken = axios.CancelToken;
let axiosCancel = null; //定义存放取消的请求方法
let requestText;
let responseText;

// request interceptor
request.interceptors.request.use((config) => {
  if (config.params && config.params.searchingText) {
    //模糊查询的时候避免输入太快，直接取最后一次请求返回的结果
    requestText = config.params.searchingText;
    if (typeof axiosCancel === "function") {
      //在请求发出前取消上一次未完成的请求
      axiosCancel("终止请求"); //取消请求
    }
    config.cancelToken = new CancelToken(function executor(c) {
      axiosCancel = c;
    });
  }

  return requestText || config;
  // return config
}, errorHandler);

// response interceptor
request.interceptors.response.use(
  (response) => {
    if (response.config.params && response.config.params.searchingText) {
      responseText = response.config.params.searchingText;
      axiosCancel = null;
    }

    return responseText || response;
    // return response
  },
  (err) => {
    if (axios.isCancel(err)) {
      console.log("Rquest canceled：", err.message); //请求如果被取消，这里是返回取消的message
    } else {
      if (err && err.response) {
      }
      return Promise.reject(err);
    }
  }
);

const installer = {
  vm: {},
  install(Vue) {
    Vue.use(VueAxios, request);
  },
};

export default request;

```
api.js

```js
import request from './http'


/**
 * login func
 * parameter: {
 *     username: '',
 *     password: '',
 *     remember_me: true,
 *     captcha: '12345'
 * }
 * @param parameter
 * @returns {*}
 */
const Api = {
  getListTableData: 'api/tpl',
  getTypeData: "/api/type",
  deleteLog: "/api/tpl",
  putLog:"/api/tpl",
  postLog:"/api/tpl",
  // getAllHistoryTime: '/visualAll/getAllHistoryTime', //获取压测时间
  // leftMainBusiness: '/visual/leftMainBusiness', //获取左侧导航栏
  // clusterTps: "/visualAll/clusterTps", //获取压测总览 金桥，福田，东莞大概
  // getPandectList: '/visualAll/list', //获取压测总览list
  // searchChildBusiness: "/visual/searchChildBusiness", //交易页面 下拉菜单业务数据
  // visualSearchUrl: "/visual/searchUrl", //交易页面 下拉菜单 url数据 
  // visualList: '/visual/list', //交易页面 查询所有list
  // newVisualList: "/visual/listPage", //交易页面  分页查询所有list
  // getToolUrl: "/common/getToolUrl", // 获取配置系统url
  // getChartsUrl: "/testData", // 获取图表数据
  // searchUrl: "/visual/searchUrlJump", // 模糊匹配查找url列表
}


export function ListTableData(current, pageSize) {
  return request({
    url: Api.getListTableData + `?current=${current}&pageSize=${pageSize}`,
    method: 'get',
  })
}


export function getTypeData() {
  return request({
    url: Api.getTypeData,
    method: 'get',
  })
}
export function deleteLog(_self) {
  return request({
    url: Api.deleteLog+`/${_self.dellogData.template_type}/${_self.dellogData.servicename}`,
    method: 'delete',
  })
}

export function putLog(_self,data) {
  return request({
    url: Api.putLog+`/${_self.template_typeData}/${_self.servicenameData}`,
    method: 'put',
    data:data,
  })
}

export function postLog(_self,data) { ///api/tpl/${this.template_typeData}/${this.servicenameData}
  return request({
    url: Api.postLog+`/${_self.template_typeData}/${_self.servicenameData}`,
    method: 'post',
    data:data,
  })
}
```