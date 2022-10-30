# MIME

### MIME type

这是一份 MIME 类型列表，以及各个类型的文档类别，按照它们的常见扩展名排序。

两种主要的 MIME 类型在默认类型中扮演了重要的角色：

`text/plain` 表示文本文件的默认值。一个文本文件应当是人类可读的，并且不包含二进制数据。<br/>
`application/octet-stream` 表示所有其他情况的默认值。一种未知的文件类型应当使用此类型。浏览器在处理这些文件时会特别小心, 试图防止、避免用户的危险行为.
IANA 是 MIME 媒体类型的官方注册机构，并维护了 list of all the official MIME types。下面的表格列出了 Web 上的一些重要 MIME 类型:<br/>

| 扩展名 | 文档类型                                   |                         MIME 类型                         |
| :-----| ---- | :----: |
| `.aac` | AAC audio                                  |          audio/aac<br/>           
| `.abw` | AbiWord document                           |    application/x-abiword<br/>     
| `.arc` | Archive document (multiple files embedded) |    application/x-freearc<br/>     
| `.avi` | AVI: Audio Video Interleave                |       video/x-msvideo<br/>        
| `.azw` | Amazon Kindle eBook format                 | application/vnd.amazon.ebook<br/> 
| `.bin` | Any kind of binary data                    |   application/octet-stream<br/>   
| `.bmp` | Windows OS/2 Bitmap Graphics               |          image/bmp<br/>           
| `.bz`  | BZip archive                               |      application/x-bzip<br/>      
|`.bz2` |  BZip2 archive |application/x-bzip2<br/>
|`.csh`| C-Shell script |application/x-csh<br/>
|`.css` |Cascading Style Sheets (CSS) |text/css<br/>
|`.csv` |Comma-separated values (CSV) |text/csv<br/>
|`.doc` |Microsoft Word  |application/msword<br/>
|`.docx` |Microsoft Word (OpenXML) |application/vnd.openxmlformats-officedocument.wordprocessingml.document<br/>
|`.eot` |MS Embedded OpenType fonts |application/vnd.ms-fontobject<br/>
|`.epub` |Electronic publication (EPUB) |application/epub+zip<br/>
|`.gif` |Graphics Interchange Format (GIF) |image/gif<br/>
|`.html` |HyperText Markup Language (HTML) |text/html<br/>
|`.ico` |Icon format |image/vnd.microsoft.icon<br/>
|`.ics` |iCalendar format |text/calendar<br/>
|`.jar` |Java Archive (JAR) |application/java-archive<br/>
|`.jpg` |JPEG images |image/jpeg<br/>
|`.js` |JavaScript |text/javascript<br/>
|`.json` |JSON format |application/json<br/>
|`.jsonld`| JSON-LD format |application/ld+json<br/>
|`.midi` |Musical Instrument Digital Interface (MIDI) |audio/midi audio/x-midi<br/>
|`.mjs` |JavaScript module |text/javascript<br/>
|`.mp3` |MP3 audio |audio/mpeg<br/>
|`.mpeg` |MPEG Video |video/mpeg<br/>
|`.mpkg` |Apple Installer Package |application/vnd.apple.installer+xml<br/>
|`.odp` |OpenDocument presentation document |application/vnd.oasis.opendocument.presentation<br/>
|`.ods` |OpenDocument spreadsheet document |application/vnd.oasis.opendocument.spreadsheet<br/>
|`.odt` |OpenDocument text document |application/vnd.oasis.opendocument.text<br/>
|`.oga` |OGG audio |audio/ogg<br/>
|`.ogv` |OGG video |video/ogg<br/>
|`.ogx` |OGG |application/ogg<br/>
|`.otf` |OpenType font |font/otf<br/>
|`.png` |Portable Network Graphics |image/png<br/>
|`.pdf` |Adobe Portable Document Format (PDF) |application/pdf<br/>
|`.ppt` |Microsoft PowerPoint |application/vnd.ms-powerpoint<br/>
|`.pptx` |Microsoft PowerPoint (OpenXML) |application/vnd.openxmlformats-officedocument.presentationml.presentation<br/>
|`.rar` |RAR archive |application/x-rar-compressed<br/>
|`.rtf` |Rich Text Format (RTF) |application/rtf<br/>
|`.sh` |Bourne shell script |application/x-sh<br/>
|`.svg` |Scalable Vector Graphics (SVG) |image/svg+xml<br/>
|`.swf` |Small web format (SWF) or Adobe Flash document |application/x-shockwave-flash<br/>
|`.tar` |Tape Archive (TAR) |application/x-tar<br/>
|`.tiff` |Tagged Image File Format (TIFF) |image/tiff<br/>
|`.ttf` |TrueType Font |font/ttf<br/>
|`.txt` |Text, (generally ASCII or ISO 8859-n) text/plain<br/>
|`.vsd` |Microsoft Visio |application/vnd.visio<br/>
|`.wav` ||Waveform Audio Format |audio/wav<br/>
|`.weba` |WEBM audio |audio/webm<br/>
|`.webm` |WEBM video |video/webm<br/>
|`.webp` |WEBP image |image/webp<br/>
|`.woff` ||Web Open Font Format (WOFF) |font/woff<br/>
|`.woff2` |Web Open Font Format (WOFF) |font/woff2<br/>
`.xhtml` |XHTML |application/xhtml+xml<br/>
|`.xls` |Microsoft Excel |application/vnd.ms-excel<br/>
|`.xlsx`| Microsoft Excel (OpenXML) |application/vnd.openxmlformats-officedocument.spreadsheetml.sheet<br/>
|`.xml` |XML |application/xml 代码对普通用户来说不可读 (RFC 3023, section 3)text/xml 代码对普通用户来说可读 (RFC 3023, section 3)<br/>
|`.xul` |XUL |application/vnd.mozilla.xul+xml<br/>
|`.zip`| ZIP archive |application/zip<br/>
|`.3gp`| 3GPP audio/video container |video/3gpp
audio/3gpp（若不含视频）<br/>
|`.3g2`| 3GPP2 audio/video container |video/3gpp2
audio/3gpp2（若不含视频）<br/>
|`.7z`| 7-zip archive |application/x-7z-compressed<br/>

### 前端下载文件流

#### 一、iframe 下载

这种方式不能在下载时名命文件，需要后端设置文件名

```js
let iframe = document.createElement("iframe");
iframe.src = "http://localhost:8080/api/getStream";
iframe.style.display = "none";
iframe.style.height = 0;
document.body.appendChild(iframe);
setTimeout(() => {
  iframe.remove();
}, 60 * 1000);
```

#### 二、a 标签下载

a 标签的 download 属性，ie 浏览器是不支持的
请求的时候记得加 responseType 为 blob,不然下载后点开是空白文件
前端可以对文件名命

```js
axios
  .get("/api/getStream", {
    responseType: "blob",
  })
  .then((res) => {
    let blob = new Blob([res.data], {
      type: "application/pdf;charset-UTF-8",
    });
    if (navigator.msSaveOrOpenBlob) {
      navigator.msSaveOrOpenBlob(blob, "fileName.pdf");
    } else {
      const blobUrl = URL.createObjectURL(blob);
      let a = document.createElement("a");
      a.href = blobUrl;
      a.download = "fileName.pdf";
      a.style.display = "none";
      a.click();
      URL.revokeObjectURL(blobUrl);
    }
  });
```

如果我们要使用后端返回的文件名（一般都在`content-disposition`中）

```js
let fileName = "";
const contentDisposition = res.headers["content-disposition"];
if (contentDisposition) {
  fileName = window.decodeURI(
    res.headers["content-disposition"].split("=")[1],
    "UTF-8"
  );
}
```

### blob、MIME 相关补充

基本语法

blob 表示二进制大对象`（binary larget object）`,是 js 对不可修改的二进制数据的封装类型，主要用于存储二进制大对象,例如可以存储图片,音视频等文件;

它的数据可以按文本或二进制的格式进行读取，也可以转换成 ReadableStream 来用于数据操作

```js
const blob = new Blob([data], {
  type: "application/pdf",
  endings: "transparent",
});
```

第一个为一个数据序列，可以是任意格式的值，例如，任意数量的字符串，Blobs 以及 ArrayBuffers。

第二个参数，是一个包含了两个属性的对象，其两个属性分别是：

type – MIME 的类型

endings – 决定 append() 的数据格式，（数据中的 \n 如何被转换）可以取值为 “transparent” 或者 “native”（t ransparent 的话不变，native 的话按操作系统转换；transparent 为默认）

```js
const blob = new Blob(["hello", "go"], {
  type: "application/json",
});
console.log(blob);
console.log(blob.slice(0, 5));
```

blob 对象 size 和 type 属性，还有一个 slice 方法

对象 URL 于 blob

```js
window.URL.createObjectURL();
```

传入一个 File 或 blob 对象，返回一个指向内存中地址的字符串，这个字符串是 url，所以可以直接在 dom 中使用

URL 对象优点：不用把文件读取到 js 也可以使用文件

使用完通过 `window.URL.revokeObjectURL() `释放内存
