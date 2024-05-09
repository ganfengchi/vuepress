# 大文件切片

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>大文件切片</title>
  </head>

  <body>
    <input type="file" id="ipt" />

    <script src="./spark-md5.js"></script>
    <script>
      const ipt = document.querySelector("#ipt");
      ipt.onchange = async function (e) {
        console.log(e);
        const file = e.target.files[0];
        console.time("cutFile");
        const chunks = await cutFile(file);
        console.timeEnd("cutFile");
        console.log(chunks);
        //完成
      };

      const CHUNK_SIZE = 1024 * 1024 * 5;
      const THREAD_COUNT = navigator.hardwareConcurrency || 4; //线程数量


      async function cutFile(file) {
        return new Promise((resolve, reject) => {
          console.log(1111);
          const chunkCount = Math.ceil(file.size / CHUNK_SIZE); //切片总数量
          const result = [];
          let finishCount = 0;
          //方法1 时间太长
          // const proms = [];
          // for (let i = 0; i < chunkCount; i++) {
          //   proms.push( await createChunk(file, i, CHUNK_SIZE))
          //   // result.push(chunk);
          // }
          // const result =await Promise.all(proms);
          // return result;
          //方法2
          const threadChunkCount = Math.ceil(chunkCount / THREAD_COUNT); //每个线程分几个切片
          console.log(threadChunkCount);
          for (let i = 0; i < THREAD_COUNT; i++) {
            //创建1个线程，分配1个任务
            const worker = new Worker("./worker.js", {
              type: "module",
            });
            console.log(worker);
            let end = [i + 1] * threadChunkCount;
            const start = i * threadChunkCount;
            if (end >= chunkCount) {
              end = chunkCount;
            }
            worker.postMessage({
              file,
              CHUNK_SIZE,
              startChunkIndex: start,
              endChunkIndex: end,
            });
            worker.onmessage = (e) => {
              console.log(e);
              for (let i = start; i < end; i++) {
                result[i] = e.data[i - start];
              }
              worker.terminate();
              finishCount++;
              if (finishCount === THREAD_COUNT) {
                console.log(result);
                resolve(result);
              }
            };
          }
        });
      }

      // function createChunk(file, index, chunkSize) {
      //   return new Promise((resolve) => {
      //     const start = index * chunkSize;
      //     const end = start + chunkSize;
      //     const spark = new SparkMD5.ArrayBuffer();
      //     const fileReader = new FileReader();
      //     const blob = file.slice(start, end);
      //     fileReader.onload = (e) => {
      //       spark.append(e.target.result);
      //       resolve({
      //         start,
      //         end,
      //         blob,
      //         index,
      //         hash: spark.end(),
      //       });
      //     };
      //     fileReader.readAsArrayBuffer(blob);
      //   });
      // }
    </script>
  </body>
</html>

```

createChunk.js
```js
import SparkMD5 from './spark-md5'
export function createChunk(file, index, chunkSize) {
    return new Promise((resolve) => {
      const start = index * chunkSize;
      const end = start + chunkSize;
      const spark = new SparkMD5.ArrayBuffer();
      const fileReader = new FileReader();
      const blob = file.slice(start, end);
      fileReader.onload = (e) => {
        spark.append(e.target.result);
        resolve({
          start,
          end,
          blob,
          index,
          hash: spark.end(),
        });
      };
      fileReader.readAsArrayBuffer(blob);
    });
  }
```

worker.js
```js
onmessage = async (e) => {
  console.log(e.data);
  const {
    file,
    CHUNK_SIZE,
    startChunkIndex: start,
    endChunkIndex: end,
  } = e.data;
  const proms = [];
  for (let i = start; i < end; i++) {
    proms.push(await createChunk(file, i, CHUNK_SIZE));
  }
  const chunks = await Promise.all(proms);
  console.log(chunks);
  postMessage(chunks);
};
function createChunk(file, index, chunkSize) {
  return new Promise((resolve) => {
    const start = index * chunkSize;
    const end = start + chunkSize;
    const fileReader = new FileReader();
    const blob = file.slice(start, end);
    fileReader.onload = (e) => {
      resolve({
        start,
        end,
        blob,
        index,
        hash:getRandomString(32),
      });
    };
    fileReader.readAsArrayBuffer(blob);
  });
}

function getRandomString(len = 16) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < len; i++) {
    result += characters[Math.floor(Math.random() * characters.length) + 1];
  }
  console.log(result);
  return result;
}
```