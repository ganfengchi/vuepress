# vueHook 封装

###  useDownload 下载
```js
import { ElNotification } from "element-plus";

/**
 * @description 接收数据流生成 blob，创建链接，下载文件
 * @param {Function} api 导出表格的api方法 (必传)
 * @param {String} tempName 导出的文件名 (必传)
 * @param {Object} params 导出的参数 (默认{})
 * @param {Boolean} isNotify 是否有导出消息提示 (默认为 true)
 * @param {String} fileType 导出的文件格式 (默认为.xlsx)
 * */
export const useDownload = async (
  api: (param: any) => Promise<any>,
  tempName: string,
  params: any = {},
  isNotify: boolean = true,
  fileType: string = ".xlsx"
) => {
  if (isNotify) {
    ElNotification({
      title: "温馨提示",
      message: "如果数据庞大会导致下载缓慢哦，请您耐心等待！",
      type: "info",
      duration: 3000
    });
  }
  try {
    const res = await api(params);
    const blob = new Blob([res]);
    // 兼容 edge 不支持 createObjectURL 方法
    if ("msSaveOrOpenBlob" in navigator) return window.navigator.msSaveOrOpenBlob(blob, tempName + fileType);
    const blobUrl = window.URL.createObjectURL(blob);
    const exportFile = document.createElement("a");
    exportFile.style.display = "none";
    exportFile.download = `${tempName}${fileType}`;
    exportFile.href = blobUrl;
    document.body.appendChild(exportFile);
    exportFile.click();
    // 去除下载对 url 的影响
    document.body.removeChild(exportFile);
    window.URL.revokeObjectURL(blobUrl);
  } catch (error) {
    console.log(error);
  }
};

```

### useHandleData  二次确认弹框
```js
import { ElMessageBox, ElMessage } from "element-plus";
import { HandleData } from "./interface";

/**
 * @description 操作单条数据信息 (二次确认【删除、禁用、启用、重置密码】)
 * @param {Function} api 操作数据接口的api方法 (必传)
 * @param {Object} params 携带的操作数据参数 {id,params} (必传)
 * @param {String} message 提示信息 (必传)
 * @param {String} confirmType icon类型 (不必传,默认为 warning)
 * @returns {Promise}
 */
export const useHandleData = (
  api: (params: any) => Promise<any>,
  params: any = {},
  message: string,
  confirmType: HandleData.MessageType = "warning"
) => {
  return new Promise((resolve, reject) => {
    ElMessageBox.confirm(`是否${message}?`, "温馨提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: confirmType,
      draggable: true
    }).then(async () => {
      const res = await api(params);
      if (!res) return reject(false);
      ElMessage({
        type: "success",
        message: `${message}成功!`
      });
      resolve(true);
    });
  });
};

```