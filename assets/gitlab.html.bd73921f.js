import{_ as n,o as s,c as a,e}from"./app.e2bae0d3.js";var t="/myblog/assets/1.d4c3a019.png",p="/myblog/assets/2.cc9a25e7.png",i="/myblog/assets/3.948718f4.png",l="/myblog/assets/4.43eaf4ea.png",o="/myblog/assets/5.83ac27e4.png",c="/myblog/assets/5.83ac27e4.png",u="/myblog/assets/7.e5bb5e8b.png",r="/myblog/assets/8.8c8c6c82.png",d="/myblog/assets/9.fd08be09.png";const k={},v=e('<h1 id="gitlab-\u81EA\u52A8\u5316\u6784\u5EFA" tabindex="-1"><a class="header-anchor" href="#gitlab-\u81EA\u52A8\u5316\u6784\u5EFA" aria-hidden="true">#</a> gitlab \u81EA\u52A8\u5316\u6784\u5EFA</h1><h3 id="_1-1-\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#_1-1-\u6982\u5FF5" aria-hidden="true">#</a> 1.1.\u6982\u5FF5</h3><ul><li>CI \u4E3B\u8981\u662F\u7528\u6765\u505A\u6784\u5EFA\u4EFB\u52A1\u7684\uFF0C\u5982\u6253\u5305\u3001\u7F16\u8BD1\u3001\u4EE3\u7801\u6D4B\u8BD5\u3001\u4EE3\u7801\u8986\u76D6\u7387\u6D4B\u8BD5\u3002</li><li>\u4E00\u822C\u6765\u8BF4\u6784\u5EFA\u4EFB\u52A1\u4F1A\u5360\u7528\u5F88\u591A\u7CFB\u7EDF\u8D44\u6E90\uFF0Cgitlab \u670D\u52A1\u4E0A\u6709\u591A\u4E2A\u4E0D\u540C\u7684\u6784\u5EFA\u4EFB\u52A1\uFF0C\u6240\u4EE5\u4E0D\u80FD\u5C06\u6240\u6709\u7684\u4EFB\u52A1\u653E\u5728 gitlab \u670D\u52A1\u4E0A\u6765\u6267\u884C\u3002</li><li>GITLAB CI \u5728\u670D\u52A1\u7AEF\uFF0C\u7528\u4F5C\u6765\u7BA1\u7406\u5404\u4E2A\u9879\u76EE\u7684\u6784\u5EFA\u72B6\u6001\uFF0C\u5177\u4F53\u6267\u884C\u6784\u5EFA\u7684\u4EA4\u7ED9 GITLAB RUNNER \u6765\u5904\u7406\uFF0C\u6240\u4EE5 RUNNER \u53EF\u4EE5\u5B89\u88C5\u5230\u4E0D\u540C\u7684\u673A\u5668\uFF0C\u901A\u8FC7\u6CE8\u518C\u6765\u7ED1\u5B9A\u6784\u5EFA\u4EFB\u52A1\uFF0C\u6267\u884C\u65F6\u7531 CI \u6765\u5206\u53D1\u3002 <img src="'+t+`" alt="alt 1"></li></ul><h3 id="_2-\u5B89\u88C5\u3001\u6CE8\u518C" tabindex="-1"><a class="header-anchor" href="#_2-\u5B89\u88C5\u3001\u6CE8\u518C" aria-hidden="true">#</a> 2.\u5B89\u88C5\u3001\u6CE8\u518C</h3><h4 id="_2-1-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_2-1-\u5B89\u88C5" aria-hidden="true">#</a> 2.1 \u5B89\u88C5</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>	 yum install gitlab<span class="token operator">-</span>ci<span class="token operator">-</span>multi<span class="token operator">-</span><span class="token function">runner</span> <span class="token punctuation">(</span>\u9700\u8981\u66F4\u65B0yum\u6E90<span class="token punctuation">)</span>
	<span class="token comment">//  \u6216\u8005\u4ECE\u5B98\u7F51\u76F4\u63A5\u4E0B\u8F7D\u4E8C\u8FDB\u5236\u5305</span>
	 \u4EE5\u4E0Brunner\u91CD\u547D\u540D\u4E3Agitlab<span class="token operator">-</span>runner
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-\u6CE8\u518C" tabindex="-1"><a class="header-anchor" href="#_2-2-\u6CE8\u518C" aria-hidden="true">#</a> 2.2 \u6CE8\u518C</h4><h5 id="_2-2-1-\u83B7\u53D6-gitlab-url-\u548C-token" tabindex="-1"><a class="header-anchor" href="#_2-2-1-\u83B7\u53D6-gitlab-url-\u548C-token" aria-hidden="true">#</a> 2.2.1 \u83B7\u53D6 gitlab url \u548C token</h5><pre><code>\u4ECEgitlab\u9879\u76EE \u4E2D\u6253\u5F00\u9875\u9762 http://172.24.148.169/cdhgroup/pressure-test-tools-aft/-/settings/ci_cd
</code></pre><p><img src="`+p+'" alt="alt "></p><h5 id="_2-2-2-\u670D\u52A1\u5668\u4E0A\u6CE8\u518C-runner" tabindex="-1"><a class="header-anchor" href="#_2-2-2-\u670D\u52A1\u5668\u4E0A\u6CE8\u518C-runner" aria-hidden="true">#</a> 2.2.2 \u670D\u52A1\u5668\u4E0A\u6CE8\u518C runner</h5><p><img src="'+i+'" alt="alt "></p><h3 id="_3-\u914D\u7F6E\u3001\u6267\u884C-ci" tabindex="-1"><a class="header-anchor" href="#_3-\u914D\u7F6E\u3001\u6267\u884C-ci" aria-hidden="true">#</a> 3.\u914D\u7F6E\u3001\u6267\u884C CI</h3><h4 id="_3-1-\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u914D\u7F6E-yaml" tabindex="-1"><a class="header-anchor" href="#_3-1-\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u914D\u7F6E-yaml" aria-hidden="true">#</a> 3.1 \u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u914D\u7F6E yaml</h4><p>\u4FEE\u6539.gitlab-ci.yml\uFF0C \u4E0B\u9762\u5217\u51FA\u57FA\u672C\u7684\u914D\u7F6E\uFF0C\u8BE6\u60C5\u8BF7\u67E5\u8BE2\u5B98\u65B9\u6587\u6863 <img src="'+l+'" alt="alt "></p><h4 id="_3-2-\u67E5\u770B\u6D41\u6C34\u7EBF\u4EFB\u52A1\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#_3-2-\u67E5\u770B\u6D41\u6C34\u7EBF\u4EFB\u52A1\u4FE1\u606F" aria-hidden="true">#</a> 3.2 \u67E5\u770B\u6D41\u6C34\u7EBF\u4EFB\u52A1\u4FE1\u606F</h4><p><img src="'+o+'" alt="alt "><img src="'+c+'" alt="alt "><img src="'+u+`" alt="alt "></p><h3 id="_4-\u914D\u7F6E-webhooks" tabindex="-1"><a class="header-anchor" href="#_4-\u914D\u7F6E-webhooks" aria-hidden="true">#</a> 4.\u914D\u7F6E webhooks</h3><pre><code>webhooks \u53EF\u4EE5\u5728git\u4E8B\u4EF6\u6709\u4E00\u4E2Ahook\u89E6\u53D1\u6211\u4EEC\u914D\u7F6E\u7684\u94FE\u63A5\uFF0C\u6211\u4EEC\u53EF\u4EE5\u81EA\u5B9A\u4E49\u94A9\u5B50\u6765\u5BF9\u89E6\u53D1\u4E8B\u4EF6\u505A\u4E00\u4E9B\u4E1A\u52A1\u3002

\u5982\u679C\u9009\u62E9\u63A8\u9001\u4E8B\u4EF6\uFF0C\u5F53\u6709\u63A8\u9001\u65F6\uFF0Cgitlab\u670D\u52A1\u5668\u4F1A\u53D1\u9001\u4E00\u4E2APOST\u8BF7\u6C42\u5230\u6211\u4EEC\u914D\u7F6E\u7684\u7F51\u5740\u4E0A\uFF0C\u6211\u4EEC\u5C06\u6709\u4E00\u4E2A\u670D\u52A1\u6765\u5904\u7406\u94A9\u5B50\u4E8B\u4EF6\u3002POST\u6570\u636E\u5982\u56FE\u3002Webhooks\u652F\u6301\u6D4B\u8BD5\u3001\u65E5\u5FD7\u67E5\u8BE2\u3001\u91CD\u8BD5\u3002
</code></pre><p><img src="`+r+'" alt="alt "><img src="'+d+`" alt="alt "></p><h3 id="_5-\u6D4B\u8BD5\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#_5-\u6D4B\u8BD5\u811A\u672C" aria-hidden="true">#</a> 5.\u6D4B\u8BD5\u811A\u672C</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># coding: utf-8</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;Simple HTTP Server.

This module builds on BaseHTTPServer by implementing the standard GET
and HEAD requests in a fairly straightforward manner.

&quot;&quot;&quot;</span>


__version__ <span class="token operator">=</span> <span class="token string">&quot;0.6&quot;</span>

__all__ <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;SimpleHTTPRequestHandler&quot;</span><span class="token punctuation">]</span>

<span class="token keyword">import</span> os
<span class="token keyword">import</span> posixpath
<span class="token keyword">import</span> BaseHTTPServer
<span class="token keyword">import</span> urllib
<span class="token keyword">import</span> cgi
<span class="token keyword">import</span> sys
<span class="token keyword">import</span> shutil
<span class="token keyword">import</span> mimetypes
<span class="token keyword">import</span> SocketServer
<span class="token keyword">import</span> urlparse
<span class="token keyword">import</span> json
<span class="token keyword">try</span><span class="token punctuation">:</span>
    <span class="token keyword">from</span> cStringIO <span class="token keyword">import</span> StringIO
<span class="token keyword">except</span> ImportError<span class="token punctuation">:</span>
    <span class="token keyword">from</span> StringIO <span class="token keyword">import</span> StringIO

GIT_TOKEN <span class="token operator">=</span> <span class="token string">&quot;9f9b9af638da7618513935357b52399b&quot;</span>

<span class="token keyword">class</span> <span class="token class-name">TagHandler</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> data<span class="token punctuation">,</span> header<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>data <span class="token operator">=</span> data
        self<span class="token punctuation">.</span>header <span class="token operator">=</span> header

    <span class="token keyword">def</span> <span class="token function">get_ref</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>data<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;ref&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>

    <span class="token keyword">def</span> <span class="token function">get_kind</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>header<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;X-Gitlab-Event&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">is_tag_push</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>get_kind<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;Tag Push Hook&quot;</span>

    <span class="token keyword">def</span> <span class="token function">get_token</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>header<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;X-Gitlab-Token&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">is_gitlab_token</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>get_token<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> GIT_TOKEN

    <span class="token keyword">def</span> <span class="token function">check</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span>self<span class="token punctuation">.</span>is_gitlab_token<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> self<span class="token punctuation">.</span>is_tag_push<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> self<span class="token punctuation">.</span>get_ref<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">True</span>
        <span class="token keyword">return</span> <span class="token boolean">False</span>

    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>check<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token comment"># os.system(&quot;nohup sh /opt/webBuild/web_build.sh %s &gt;&gt; /tmp/aa.log &amp;&quot; % self.get_ref())</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;\u65E5\u5FD7\u8BB0\u5F55\u5728/tmp/aa.log\u91CC&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">HTTPSeverHandler</span><span class="token punctuation">(</span>BaseHTTPServer<span class="token punctuation">.</span>BaseHTTPRequestHandler<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">do_GET</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>_do<span class="token punctuation">(</span>self<span class="token punctuation">.</span>path<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">do_POST</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>path <span class="token operator">==</span> <span class="token string">&quot;/gitlab&quot;</span><span class="token punctuation">:</span>
            handle <span class="token operator">=</span> TagHandler<span class="token punctuation">(</span>self<span class="token punctuation">.</span>getBody<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> self<span class="token punctuation">.</span>headers<span class="token punctuation">)</span>
            handle<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span>
            data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;code&quot;</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;message&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">}</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            header <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span> <span class="token keyword">in</span> self<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                header<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> j
            data <span class="token operator">=</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;path&quot;</span><span class="token punctuation">:</span> self<span class="token punctuation">.</span>path<span class="token punctuation">,</span>
                <span class="token string">&quot;header&quot;</span><span class="token punctuation">:</span> header<span class="token punctuation">,</span>
                <span class="token string">&quot;data&quot;</span><span class="token punctuation">:</span> self<span class="token punctuation">.</span>getBody<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>


        self<span class="token punctuation">.</span>_do<span class="token punctuation">(</span>json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">getBody</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        result <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        datas <span class="token operator">=</span> self<span class="token punctuation">.</span>rfile<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;content-length&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

        types <span class="token operator">=</span> self<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;content-type&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>lower<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> types<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;application/json&quot;</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">:</span>
            result <span class="token operator">=</span> json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>datas<span class="token punctuation">)</span>
        <span class="token keyword">elif</span> types<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;application/x-www-form-urlencoded&quot;</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">:</span>
            <span class="token keyword">for</span> item <span class="token keyword">in</span> datas<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;&amp;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                key<span class="token punctuation">,</span> value <span class="token operator">=</span> item<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;=&quot;</span><span class="token punctuation">)</span>
                result<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            result <span class="token operator">=</span> datas
        <span class="token keyword">return</span> result

    <span class="token keyword">def</span> <span class="token function">_do</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>send_response<span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>send_header<span class="token punctuation">(</span><span class="token string">&quot;content-type&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;application/json&quot;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>send_header<span class="token punctuation">(</span><span class="token string">&quot;Content-Length&quot;</span><span class="token punctuation">,</span> <span class="token builtin">str</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>end_headers<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>wfile<span class="token punctuation">.</span>write<span class="token punctuation">(</span>message<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">test</span><span class="token punctuation">(</span>HandlerClass <span class="token operator">=</span> HTTPSeverHandler<span class="token punctuation">,</span>
         ServerClass <span class="token operator">=</span> BaseHTTPServer<span class="token punctuation">.</span>HTTPServer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    BaseHTTPServer<span class="token punctuation">.</span>test<span class="token punctuation">(</span>HandlerClass<span class="token punctuation">,</span> ServerClass<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    test<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span> <span class="token parameter variable">-x</span>

<span class="token builtin class-name">echo</span> <span class="token variable">$1</span>
<span class="token assign-left variable">curPath</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>readlink <span class="token parameter variable">-f</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">dirname</span> <span class="token string">&quot;<span class="token variable">$0</span>&quot;</span><span class="token variable">)</span></span>&quot;</span><span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> <span class="token variable">$curPath</span>  

<span class="token assign-left variable">webSourceGit</span><span class="token operator">=</span><span class="token variable">$curPath</span>/pressure-test-tools-aft
<span class="token assign-left variable">nodeModulePath</span><span class="token operator">=</span><span class="token variable">$curPath</span>/node_modules
<span class="token assign-left variable">distPath</span><span class="token operator">=</span><span class="token variable">$webSourceGit</span>/dist
<span class="token assign-left variable">destNodeMoudlePath</span><span class="token operator">=</span><span class="token variable">$webSourceGit</span>/node_modules
<span class="token assign-left variable">finallyDestZip</span><span class="token operator">=</span><span class="token variable">$webSourceGit</span>/dist.<span class="token variable">$1</span>.zip
<span class="token assign-left variable">pushFoldTag</span><span class="token operator">=</span><span class="token variable">$curPath</span>/webbuildpush


<span class="token keyword">function</span> <span class="token function-name function">check_fold</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable">$curPath</span> <span class="token operator">=~</span> ^/opt/web <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u76EE\u5F55\u68C0\u67E5\u901A\u8FC7.&quot;</span>
    <span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u4E0D\u5728\u6307\u5B9A\u76EE\u5F55\u4E0B\u6267\u884C\uFF0C\u9000\u51FA.&quot;</span>
        <span class="token builtin class-name">exit</span> <span class="token number">1</span>
    <span class="token keyword">fi</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-d</span> <span class="token variable">$pushFoldTag</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u53D1\u5E03\u76EE\u5F55\u4E0D\u5B58\u5728\uFF0C\u9000\u51FA, exit.&quot;</span>
        <span class="token builtin class-name">exit</span> <span class="token number">1</span>
    <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

check_fold

<span class="token keyword">function</span> <span class="token function-name function">check_web_source_git</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u76EE\u5F55\uFF1A <span class="token variable">$webSourceGit</span>&quot;</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token variable">$webSourceGit</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u76EE\u5F55\u5B58\u5728\uFF0C\u5C06\u88AB\u5220\u9664&quot;</span>
        <span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token variable">$webSourceGit</span>
    <span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u76EE\u5F55\u4E0D\u5B58\u5728&quot;</span>
    <span class="token keyword">fi</span>
<span class="token punctuation">}</span>


check_web_source_git

<span class="token keyword">function</span> <span class="token function-name function">check_web_git_and_enter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token variable">$webSourceGit</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
        <span class="token builtin class-name">cd</span> <span class="token variable">$webSourceGit</span>
        <span class="token function">ls</span>
    <span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;git fail, exit&quot;</span>
        <span class="token builtin class-name">exit</span> <span class="token number">1</span>
    <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function-name function">get_web_source_git</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">git</span> clone <span class="token parameter variable">--branch</span> <span class="token variable">$1</span> git@172.24.148.169:cdhgroup/pressure-test-tools-aft.git

<span class="token punctuation">}</span>

get_web_source_git <span class="token variable">$1</span>
check_web_git_and_enter

<span class="token keyword">function</span> <span class="token function-name function">install_node_module</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment"># \u5C06\u6A21\u5757\u79FB\u5165\u5DE5\u7A0B</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token variable">$nodeModulePath</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u5DF2\u7ECF\u5B58\u5728node_moudle.&quot;</span>
        <span class="token comment"># \u5982\u679C\u5B58\u5728node module\u76EE\u5F55\uFF0C\u5219\u5EFA\u7ACB\u8F6F\u94FE\u63A5\uFF0C\u8FD9\u6837\u9632\u6B62\u672A\u77E5bug</span>
        <span class="token function">mv</span> <span class="token variable">$nodeModulePath</span> <span class="token variable">$webSourceGit</span>
    <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function-name function">uninstall_node_module</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment"># \u5C06node module\u79FB\u51FA\u5DE5\u7A0B</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token variable">$nodeModulePath</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token function">rm</span> <span class="token parameter variable">-rf</span>  <span class="token variable">$nodeModulePath</span>
    <span class="token keyword">else</span>
        <span class="token function">mv</span> <span class="token variable">$destNodeMoudlePath</span> <span class="token variable">$nodeModulePath</span>
    <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function-name function">install_pkg</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token variable">$destNodeMoudlePath</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u5220\u9664\u539Fnode_modules: <span class="token variable">$destNodeMoudlePath</span>&quot;</span>
    <span class="token keyword">fi</span>

    <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token variable">$distPath</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u5220\u9664dist: <span class="token variable">$distPath</span>&quot;</span>
    <span class="token keyword">fi</span>

    install_node_module

    <span class="token builtin class-name">source</span> /etc/profile<span class="token punctuation">;</span>
    <span class="token builtin class-name">cd</span> <span class="token variable">$webSourceGit</span><span class="token punctuation">;</span>
    <span class="token function">npm</span> <span class="token function">install</span> <span class="token punctuation">;</span>
    
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;done&quot;</span>
<span class="token punctuation">}</span>


<span class="token keyword">function</span> <span class="token function-name function">build_pkg</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">source</span> /etc/profile<span class="token punctuation">;</span>
    <span class="token builtin class-name">cd</span> <span class="token variable">$webSourceGit</span><span class="token punctuation">;</span>

    <span class="token function">npm</span> run build<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token variable">$distPath</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
        <span class="token function">zip</span> <span class="token variable">$finallyDestZip</span> <span class="token variable">$distPath</span>
    <span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;not dist fold. exit&quot;</span>
        <span class="token builtin class-name">exit</span> <span class="token number">1</span>
    <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

install_pkg

build_pkg
uninstall_node_module


<span class="token comment">####Push start########################</span>
<span class="token comment"># \u63A8\u9001\u6253\u5305\u5230gitlab</span>
<span class="token keyword">function</span> <span class="token function-name function">pkg_push</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">mv</span> <span class="token variable">$finallyDestZip</span> <span class="token variable">$pushFoldTag</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">cd</span> <span class="token variable">$pushFoldTag</span><span class="token punctuation">;</span>
    <span class="token function">git</span> <span class="token function">add</span> ./<span class="token punctuation">;</span>
    <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;build <span class="token variable">$1</span>&quot;</span>
    <span class="token function">git</span> push<span class="token punctuation">;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u53D1\u5E03\u6210\u529F.&quot;</span>
<span class="token punctuation">}</span>
pkg_push <span class="token variable">$1</span>
<span class="token comment">####Push end##########################</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),b=[v];function m(f,h){return s(),a("div",null,b)}var _=n(k,[["render",m],["__file","gitlab.html.vue"]]);export{_ as default};
