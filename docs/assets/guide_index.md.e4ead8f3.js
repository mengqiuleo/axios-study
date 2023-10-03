import{_ as e,o as a,c as i,V as o}from"./chunks/framework.d97f05f3.js";const t="/axios-plugin/assets/logo.61cd8a74.svg",l="/axios-plugin/assets/pluginify.e8dc19ab.jpg",m=JSON.parse('{"title":"@axios-plugin","description":"","frontmatter":{},"headers":[],"relativePath":"guide/index.md","filePath":"guide/index.md","lastUpdated":1695859089000}'),r={name:"guide/index.md"},n=o('<h1 id="axios-plugin" tabindex="-1">@axios-plugin <a class="header-anchor" href="#axios-plugin" aria-label="Permalink to &quot;@axios-plugin&quot;">​</a></h1><p><img src="'+t+'" alt="logo"></p><h2 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h2><p>我希望将 <code>@axios-plugin</code> 称为一套 axios <strong>请求层拦截器调度解决方案</strong>。</p><p>它将项目中自定义封装的请求、响应拦截器进行解构，封装成一个插件，并且通过 <code>@axios-plugin/core</code> 将 axios 插件化， 之后就可以在插件化之后的 axios 实例身上挂载各种功能插件。</p><p><code>@axios-plugin</code>针对诸如 Token 的添加，接口缓存、错误重试、响应状态码处理、超时处理等常见业务场景，提供了解决方案。另外当这些功能不满足你的需求时，可以通过<a href="./../guide/diy.html">自定义插件</a>的方式快速封装。</p><p>通过插件化的开发，可以实现所有<strong>拦截器职责单一</strong>、方便维护、并<strong>统一维护</strong>和<strong>自动调度</strong>，避免实际业务中对每个项目的重复封装。</p><h2 id="如何运行的" tabindex="-1">如何运行的 <a class="header-anchor" href="#如何运行的" aria-label="Permalink to &quot;如何运行的&quot;">​</a></h2><p>在 <code>@axios-plugin/core</code> 内部，实现了一个 <code>AxiosPluginify</code> 类，并且通过向外暴露的 <code>pluginify</code> 函数，返回一个 <code>AxiosPluginify</code> 类的实例。 在 <code>AxiosPluginify</code> 类身上，有 <code>use</code> 方法，实现将传入的插件收集到数组中，以便挂载到 <code>axios</code> 实例上。 另外，该类还有 <code>generate</code> 方法，它会按照传入的插件顺序，依次将这些插件挂载到 传入的 <code>axios</code> 实例上，最后返回新的 <code>axios</code> 实例。</p><h2 id="特性" tabindex="-1">特性 <a class="header-anchor" href="#特性" aria-label="Permalink to &quot;特性&quot;">​</a></h2><ul><li>按需加载</li><li>对插件解构，降低代码耦合度</li><li>提供常见拦截器插件</li><li>支持自定义插件</li><li>包装已有类库</li><li>灵活性高</li></ul><h2 id="已经支持的插件" tabindex="-1">已经支持的插件 <a class="header-anchor" href="#已经支持的插件" aria-label="Permalink to &quot;已经支持的插件&quot;">​</a></h2><ul><li><a href="./../plugin/cache.html">@axios-plugin/cache</a></li><li><a href="./../plugin/interceptor.html">@axios-plugin/interceptor</a></li><li><a href="./../plugin/retry.html">@axios-plugin/retry</a></li><li><a href="./../plugin/throttle.html">@axios-plugin/throttle</a></li><li><a href="./../plugin/timeout.html">@axios-plugin/timeout</a></li><li><a href="./../plugin/download.html">@axios-plugin/download</a></li><li><a href="./../plugin/token.html">@axios-plugin/token</a></li></ul><h2 id="灵感" tabindex="-1">灵感 <a class="header-anchor" href="#灵感" aria-label="Permalink to &quot;灵感&quot;">​</a></h2><p>偶然一次在掘金阅读了这篇文章：<a href="https://juejin.cn/post/6876943860988772360" target="_blank" rel="noreferrer">从 13K 的前端开源项目我学到了啥？</a>， 了解到 <strong>插件化</strong> 的架构设计，插件化的好处之一就是可以支持按需加载，此外把独立功能都拆分成独立的插件，会让核心系统更加稳定，拥有一定的健壮性。</p><h2 id="关于插件化" tabindex="-1">关于插件化 <a class="header-anchor" href="#关于插件化" aria-label="Permalink to &quot;关于插件化&quot;">​</a></h2><p>插件化架构（Plug-in Architecture），是一种面向功能进行拆分的可扩展性架构，通常用于实现基于产品的应用。插件化架构模式允许你将其他应用程序功能作为插件添加到核心应用程序，从而提供可扩展性以及功能分离和隔离。</p><p>插件化架构模式包括两种类型的架构组件：核心系统（Core System）和插件模块（Plug-in modules）。应用逻辑被分割为独立的插件模块和核心系统，提供了可扩展性、灵活性、功能隔离和自定义处理逻辑的特性。</p><p><img src="'+l+'" alt="pluginify"></p><p>图中 Core System 的功能相对稳定，不会因为业务功能扩展而不断修改，而插件模块是可以根据实际业务功能的需要不断地调整或扩展。 插件化架构的本质就是将可能需要不断变化的部分封装在插件中，从而达到快速灵活扩展的目的，而又不影响整体系统的稳定。</p><p>插件化架构的核心系统通常提供系统运行所需的最小功能集。插件模块是独立的模块，包含特定的处理、额外的功能和自定义代码，来向核心系统增强或扩展额外的业务能力。 通常插件模块之间也是独立的，也有一些插件是依赖于若干其它插件的。重要的是，尽量减少插件之间的通信以避免依赖的问题。</p><p>摘自 <a href="https://juejin.cn/post/6876943860988772360" target="_blank" rel="noreferrer">从 13K 的前端开源项目我学到了啥？</a></p><h2 id="todo" tabindex="-1">TODO <a class="header-anchor" href="#todo" aria-label="Permalink to &quot;TODO&quot;">​</a></h2><ul><li>处理拦截器失败的情况(真的需要吗？该插件内部仍然会调用 axios 或 instance 上的 interceptors.response, 而 axios 内部对拦截器的调用做了 try catch 处理)</li><li>拦截器的中断(一次面试问到了插件的中断, 感觉这里并不需要，但还是记录一下...)</li><li>参考webpack插件机制tapable</li></ul><h2 id="faq" tabindex="-1">FAQ <a class="header-anchor" href="#faq" aria-label="Permalink to &quot;FAQ&quot;">​</a></h2><h3 id="插件的执行顺序是怎样的" tabindex="-1">插件的执行顺序是怎样的 <a class="header-anchor" href="#插件的执行顺序是怎样的" aria-label="Permalink to &quot;插件的执行顺序是怎样的&quot;">​</a></h3><p><code>@axios-plugin</code> 会按照 <code>use</code> 方法的执行顺序来处理它们的挂载.</p><p>唯一需要注意的是 <code>axios</code> 的拦截器是栈结构, 也就是说<strong>后挂载的拦截器先执行</strong>.</p><h3 id="我是否可以多次调用-generate-方法" tabindex="-1">我是否可以多次调用 <code>generate</code> 方法 <a class="header-anchor" href="#我是否可以多次调用-generate-方法" aria-label="Permalink to &quot;我是否可以多次调用 `generate` 方法&quot;">​</a></h3><p>可以, 不过 <code>@axios-plugin/core</code> 没有对 <code>beforeCreate</code> 和 <code>created</code> 所传入的参数做任何处理.</p><p>如果你在这些钩子函数中修改了传入钩子的参数, 则需要考虑这些插件在后续 <code>generate</code> 调用的时候的逻辑.</p><p>一个更加简单的方式是复用生产出的 <code>axios</code> 实例, 而不是多次调用 <code>generate</code> 方法.</p><h2 id="技术栈" tabindex="-1">技术栈 <a class="header-anchor" href="#技术栈" aria-label="Permalink to &quot;技术栈&quot;">​</a></h2><ul><li>TypeScript</li><li>Jest</li><li>Rollup</li><li>Lerna</li><li>VitePress</li></ul><h2 id="鸣谢" tabindex="-1">鸣谢 <a class="header-anchor" href="#鸣谢" aria-label="Permalink to &quot;鸣谢&quot;">​</a></h2><p><a href="https://juejin.cn/post/6960254713631604766#heading-14" target="_blank" rel="noreferrer">设计一个可插拔的请求库?</a></p><p><a href="https://www.yuque.com/wangpingan/cute-frontend/ocl9ah" target="_blank" rel="noreferrer">如何优雅的管理 HTTP 请求和响应拦截器</a></p><p><a href="https://github.com/uioz/axios-pluginify" target="_blank" rel="noreferrer">axios-pluginify</a></p><p>感谢各位前辈提供的思路和代码案例</p>',39),s=[n];function c(d,p,h,u,g,x){return a(),i("div",null,s)}const b=e(r,[["render",c]]);export{m as __pageData,b as default};
