import{_ as e,o as t,c as i,e as o}from"./app.0540713c.js";const p={},s=o('<h3 id="\u8DE8\u57DF\u4E2Doption\u8BF7\u6C42\u8BE6\u89E3" tabindex="-1"><a class="header-anchor" href="#\u8DE8\u57DF\u4E2Doption\u8BF7\u6C42\u8BE6\u89E3" aria-hidden="true">#</a> \u8DE8\u57DF\u4E2Doption\u8BF7\u6C42\u8BE6\u89E3</h3><p>\u5728\u6B63\u5F0F\u8DE8\u57DF\u7684\u8BF7\u6C42\u524D\uFF0C\u6D4F\u89C8\u5668\u4F1A\u6839\u636E\u9700\u8981\uFF0C\u53D1\u8D77\u4E00\u4E2A\u201CPreFlight\u201D\uFF08\u4E5F\u5C31\u662FOption\u8BF7\u6C42\uFF09\uFF0C\u7528\u6765\u8BA9\u670D\u52A1\u7AEF\u8FD4\u56DE\u5141\u8BB8\u7684\u65B9\u6CD5\uFF08\u5982get\u3001post\uFF09\uFF0C\u88AB\u8DE8\u57DF\u8BBF\u95EE\u7684Origin\uFF08\u6765\u6E90\uFF0C\u6216\u8005\u57DF\uFF09\uFF0C\u8FD8\u6709\u662F\u5426\u9700\u8981Credentials(\u8BA4\u8BC1\u4FE1\u606F\uFF09</p><div class="custom-container tip"><p class="custom-container-title"></p><p>\u4E09\u79CD\u573A\u666F\uFF1A</p><ol><li>\u5982\u679C\u8DE8\u57DF\u7684\u8BF7\u6C42\u662FSimple Request\uFF08\u7B80\u5355\u8BF7\u6C42 \uFF09\uFF0C\u5219\u4E0D\u4F1A\u89E6\u53D1\u201CPreFlight\u201D\u3002Mozilla\u5BF9\u4E8E\u7B80\u5355\u8BF7\u6C42\u7684\u8981\u6C42\u662F\uFF1A \u4EE5\u4E0B\u4E09\u9879\u5FC5\u987B\u90FD\u6210\u7ACB\uFF1A</li><li>\u53EA\u80FD\u662FGet\u3001Head\u3001Post\u65B9\u6CD5</li><li>\u9664\u4E86\u6D4F\u89C8\u5668\u81EA\u5DF1\u5728Http\u5934\u4E0A\u52A0\u7684\u4FE1\u606F\uFF08\u5982Connection\u3001User-Agent\uFF09\uFF0C\u5F00\u53D1\u8005\u53EA\u80FD\u52A0\u8FD9\u51E0\u4E2A\uFF1AAccept\u3001Accept-Language\u3001Content-Type\u3001\u3002\u3002\u3002\u3002</li><li>Content-Type\u53EA\u80FD\u53D6\u8FD9\u51E0\u4E2A\u503C\uFF1A application/x-www-form-urlencoded multipart/form-data text/plain</li></ol></div><h4 id="\u4E00\u3001\u4E3A\u4EC0\u4E48\u4F1A\u51FA\u73B0options\u8BF7\u6C42\u5462" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u4E3A\u4EC0\u4E48\u4F1A\u51FA\u73B0options\u8BF7\u6C42\u5462" aria-hidden="true">#</a> \u4E00\u3001\u4E3A\u4EC0\u4E48\u4F1A\u51FA\u73B0options\u8BF7\u6C42\u5462\uFF1F</h4><div class="custom-container tip"><p class="custom-container-title"></p><p>\u8DE8\u57DF\u8BF7\u6C42\u4E2D\uFF0Coptions\u8BF7\u6C42\u662F\u6D4F\u89C8\u5668\u81EA\u53D1\u8D77\u7684preflight request(\u9884\u68C0\u8BF7\u6C42)\uFF0C\u4EE5\u68C0\u6D4B\u5B9E\u9645\u8BF7\u6C42\u662F\u5426\u53EF\u4EE5\u88AB\u6D4F\u89C8\u5668\u63A5\u53D7\u3002</p><p>preflight request\u8BF7\u6C42\u62A5\u6587\u4E2D\u6709\u4E24\u4E2A\u9700\u8981\u5173\u6CE8\u7684\u9996\u90E8\u5B57\u6BB5\uFF1A</p><p>\uFF081\uFF09Access-Control-Request-Method\uFF1A\u544A\u77E5\u670D\u52A1\u5668\u5B9E\u9645\u8BF7\u6C42\u6240\u4F7F\u7528\u7684HTTP\u65B9\u6CD5\uFF1B</p><p>\uFF082\uFF09Access-Control-Request-Headers\uFF1A\u544A\u77E5\u670D\u52A1\u5668\u5B9E\u9645\u8BF7\u6C42\u6240\u643A\u5E26\u7684\u81EA\u5B9A\u4E49\u9996\u90E8\u5B57\u6BB5\u3002</p><p>\u540C\u65F6\u670D\u52A1\u5668\u4E5F\u4F1A\u6DFB\u52A0origin header,\u544A\u77E5\u670D\u52A1\u5668\u5B9E\u9645\u8BF7\u6C42\u7684\u5BA2\u6237\u7AEF\u7684\u5730\u5740\u3002\u670D\u52A1\u5668\u57FA\u4E8E\u4ECE\u9884\u68C0\u8BF7\u6C42\u83B7\u5F97\u7684\u4FE1\u606F\u6765\u5224\u65AD\uFF0C\u662F\u5426\u63A5\u53D7\u63A5\u4E0B\u6765\u7684\u5B9E\u9645\u8BF7\u6C42\u3002</p><p>\u670D\u52A1\u5668\u6240\u8FD4\u56DE\u7684Access-Control-Allow-Methods\u9996\u90E8\u5B57\u6BB5\u5C06\u6240\u6709\u5141\u8BB8\u7684\u8BF7\u6C42\u65B9\u6CD5\u544A\u77E5\u5BA2\u6237\u7AEF\uFF0C\u8FD4\u56DE\u5C06\u6240\u6709Access-Control-Request-Headers\u9996\u90E8\u5B57\u6BB5\u5C06\u6240\u6709\u5141\u8BB8\u7684\u81EA\u5B9A\u4E49\u9996\u90E8\u5B57\u6BB5\u544A\u77E5\u5BA2\u6237\u7AEF\u3002\u6B64\u5916\uFF0C\u670D\u52A1\u5668\u7AEF\u53EF\u8FD4\u56DEAccess-Control-Max-Age\u9996\u90E8\u5B57\u6BB5\uFF0C\u5141\u8BB8\u6D4F\u89C8\u5668\u5728\u6307\u5B9A\u65F6\u95F4\u5185\uFF0C\u65E0\u9700\u518D\u53D1\u9001\u9884\u68C0\u8BF7\u6C42\uFF0C\u76F4\u63A5\u7528\u672C\u6B21\u7ED3\u679C\u5373\u53EF\u3002</p><p>\u5728\u6211\u4EEC\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u51FA\u73B0\u7684\u6D4F\u89C8\u5668\u81EA\u53D1\u8D77\u7684options\u8BF7\u6C42\u5C31\u662F\u4E0A\u9762\u7684\u7B2C\u4E8C\u79CD\u60C5\u51B5\u3002\u5B9E\u9645\u4E0A\uFF0C\u8DE8\u57DF\u8BF7\u6C42\u4E2D\u7684\u201D\u590D\u6742\u8BF7\u6C42\u201D\u53D1\u51FA\u524D\u4F1A\u8FDB\u884C\u4E00\u6B21\u65B9\u6CD5\u662Foptions\u7684preflight request\u3002</p></div><h4 id="\u4E8C\u3001\u5F53\u8DE8\u57DF\u8BF7\u6C42\u662F\u7B80\u5355\u8BF7\u6C42\u65F6\u4E0D\u4F1A\u8FDB\u884Cpreflight-request-\u53EA\u6709\u590D\u6742\u8BF7\u6C42\u624D\u4F1A\u8FDB\u884Cpreflight-request\u3002" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5F53\u8DE8\u57DF\u8BF7\u6C42\u662F\u7B80\u5355\u8BF7\u6C42\u65F6\u4E0D\u4F1A\u8FDB\u884Cpreflight-request-\u53EA\u6709\u590D\u6742\u8BF7\u6C42\u624D\u4F1A\u8FDB\u884Cpreflight-request\u3002" aria-hidden="true">#</a> \u4E8C\u3001\u5F53\u8DE8\u57DF\u8BF7\u6C42\u662F\u7B80\u5355\u8BF7\u6C42\u65F6\u4E0D\u4F1A\u8FDB\u884Cpreflight request,\u53EA\u6709\u590D\u6742\u8BF7\u6C42\u624D\u4F1A\u8FDB\u884Cpreflight request\u3002</h4><div class="custom-container tip"><p class="custom-container-title"></p><p>\u8DE8\u57DF\u8BF7\u6C42\u5206\u4E24\u79CD\uFF1A\u7B80\u5355\u8BF7\u6C42\u3001\u590D\u6742\u8BF7\u6C42\uFF1B</p><p>\u7B26\u5408\u4EE5\u4E0B\u4EFB\u4E00\u60C5\u51B5\u7684\u5C31\u662F\u590D\u6742\u8BF7\u6C42\uFF1A</p><p>1.\u4F7F\u7528\u65B9\u6CD5put\u6216\u8005delete;</p><p>2.\u53D1\u9001json\u683C\u5F0F\u7684\u6570\u636E\uFF08content-type: application/json\uFF09</p><p>3.\u8BF7\u6C42\u4E2D\u5E26\u6709\u81EA\u5B9A\u4E49\u5934\u90E8\uFF1B</p><p>\u9664\u4E86\u6EE1\u8DB3\u4EE5\u4E0A\u6761\u4EF6\u7684\u590D\u6742\u8BF7\u6C42\u5176\u4ED6\u7684\u5C31\u662F\u7B80\u5355\u8BF7\u6C42\u55BD\uFF01</p></div><h4 id="\u4E09\u3001\u4E3A\u4EC0\u4E48\u8DE8\u57DF\u7684\u590D\u6742\u8BF7\u6C42\u9700\u8981preflight-request" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u4E3A\u4EC0\u4E48\u8DE8\u57DF\u7684\u590D\u6742\u8BF7\u6C42\u9700\u8981preflight-request" aria-hidden="true">#</a> \u4E09\u3001\u4E3A\u4EC0\u4E48\u8DE8\u57DF\u7684\u590D\u6742\u8BF7\u6C42\u9700\u8981preflight request\uFF1F</h4><div class="custom-container tip"><p class="custom-container-title"></p><p>\u590D\u6742\u8BF7\u6C42\u53EF\u80FD\u5BF9\u670D\u52A1\u5668\u6570\u636E\u4EA7\u751F\u526F\u4F5C\u7528\u3002\u4F8B\u5982delete\u6216\u8005put,\u90FD\u4F1A\u5BF9\u670D\u52A1\u5668\u6570\u636E\u8FDB\u884C\u4FEE\u6539,\u6240\u4EE5\u5728\u8BF7\u6C42\u4E4B\u524D\u90FD\u8981\u5148\u8BE2\u95EE\u670D\u52A1\u5668\uFF0C\u5F53\u524D\u7F51\u9875\u6240\u5728\u57DF\u540D\u662F\u5426\u5728\u670D\u52A1\u5668\u7684\u8BB8\u53EF\u540D\u5355\u4E2D\uFF0C\u670D\u52A1\u5668\u5141\u8BB8\u540E\uFF0C\u6D4F\u89C8\u5668\u624D\u4F1A\u53D1\u51FA\u6B63\u5F0F\u7684\u8BF7\u6C42\uFF0C\u5426\u5219\u4E0D\u53D1\u9001\u6B63\u5F0F\u8BF7\u6C42</p></div>',9),r=[s];function a(n,c){return t(),i("div",null,r)}var d=e(p,[["render",a],["__file","optionRequest.html.vue"]]);export{d as default};
