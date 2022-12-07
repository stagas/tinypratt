

<h1>
tinypratt <a href="https://npmjs.org/package/tinypratt"><img src="https://img.shields.io/badge/npm-v1.1.0-F00.svg?colorA=000"/></a> <a href="src"><img src="https://img.shields.io/badge/loc-185-FFF.svg?colorA=000"/></a> <a href="https://cdn.jsdelivr.net/npm/tinypratt@1.1.0/dist/tinypratt.min.js"><img src="https://img.shields.io/badge/brotli-2.2K-333.svg?colorA=000"/></a> <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-F0B.svg?colorA=000"/></a>
</h1>

<p></p>

a tiny pratt parser implementation

<h4>
<table><tr><td title="Triple click to select and copy paste">
<code>npm i tinypratt </code>
</td><td title="Triple click to select and copy paste">
<code>pnpm add tinypratt </code>
</td><td title="Triple click to select and copy paste">
<code>yarn add tinypratt</code>
</td></tr></table>
</h4>


## API

<p>  <details id="ParserErrorCauses$64" title="Namespace" ><summary><span><a href="#ParserErrorCauses$64">#</a></span>  <code><strong>ParserErrorCauses</strong></code>    </summary>  <a href="src/causes.ts#L1">src/causes.ts#L1</a>  <ul>        <p>  <details id="BadImpl$94" title="Class" ><summary><span><a href="#BadImpl$94">#</a></span>  <code><strong>BadImpl</strong></code>    </summary>  <a href="src/causes.ts#L33">src/causes.ts#L33</a>  <ul>        <p>  <details id="constructor$95" title="Constructor" ><summary><span><a href="#constructor$95">#</a></span>  <code><strong>constructor</strong></code><em>(token, impl)</em>    </summary>  <a href="src/causes.ts#L35">src/causes.ts#L35</a>  <ul>    <p>  <details id="new BadImpl$96" title="ConstructorSignature" ><summary><span><a href="#new BadImpl$96">#</a></span>  <code><strong>new BadImpl</strong></code><em>()</em>    </summary>    <ul><p><a href="#BadImpl$94">BadImpl</a></p>      <p>  <details id="token$97" title="Parameter" ><summary><span><a href="#token$97">#</a></span>  <code><strong>token</strong></code>    </summary>    <ul><p><a href="#Token$35">Token</a></p>        </ul></details><details id="impl$98" title="Parameter" ><summary><span><a href="#impl$98">#</a></span>  <code><strong>impl</strong></code>    </summary>    <ul><p>keyof     <a href="#Impl$9">Impl</a></p>        </ul></details></p>  </ul></details></p>    </ul></details><details id="col$104" title="Property" ><summary><span><a href="#col$104">#</a></span>  <code><strong>col</strong></code>    </summary>  <a href="src/causes.ts#L9">src/causes.ts#L9</a>  <ul><p>number</p>        </ul></details><details id="impl$100" title="Property" ><summary><span><a href="#impl$100">#</a></span>  <code><strong>impl</strong></code>    </summary>  <a href="src/causes.ts#L35">src/causes.ts#L35</a>  <ul><p>keyof     <a href="#Impl$9">Impl</a></p>        </ul></details><details id="index$101" title="Property" ><summary><span><a href="#index$101">#</a></span>  <code><strong>index</strong></code>    </summary>  <a href="src/causes.ts#L6">src/causes.ts#L6</a>  <ul><p>number</p>        </ul></details><details id="input$102" title="Property" ><summary><span><a href="#input$102">#</a></span>  <code><strong>input</strong></code>    </summary>  <a href="src/causes.ts#L7">src/causes.ts#L7</a>  <ul><p>string</p>        </ul></details><details id="line$103" title="Property" ><summary><span><a href="#line$103">#</a></span>  <code><strong>line</strong></code>    </summary>  <a href="src/causes.ts#L8">src/causes.ts#L8</a>  <ul><p>number</p>        </ul></details><details id="message$105" title="Property" ><summary><span><a href="#message$105">#</a></span>  <code><strong>message</strong></code>    </summary>  <a href="src/causes.ts#L10">src/causes.ts#L10</a>  <ul><p>string</p>        </ul></details><details id="name$99" title="Property" ><summary><span><a href="#name$99">#</a></span>  <code><strong>name</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>'ParserBadImpl'</code></span>  </summary>  <a href="src/causes.ts#L34">src/causes.ts#L34</a>  <ul><p>string</p>        </ul></details><details id="short$107" title="Property" ><summary><span><a href="#short$107">#</a></span>  <code><strong>short</strong></code>    </summary>  <a href="src/causes.ts#L11">src/causes.ts#L11</a>  <ul><p>string</p>        </ul></details><details id="token$106" title="Property" ><summary><span><a href="#token$106">#</a></span>  <code><strong>token</strong></code>    </summary>  <a href="src/causes.ts#L11">src/causes.ts#L11</a>  <ul><p><a href="#Token$35">Token</a></p>        </ul></details></p></ul></details><details id="BadOp$121" title="Class" ><summary><span><a href="#BadOp$121">#</a></span>  <code><strong>BadOp</strong></code>    </summary>  <a href="src/causes.ts#L42">src/causes.ts#L42</a>  <ul>        <p>  <details id="constructor$122" title="Constructor" ><summary><span><a href="#constructor$122">#</a></span>  <code><strong>constructor</strong></code><em>(token, short)</em>    </summary>  <a href="src/causes.ts#L11">src/causes.ts#L11</a>  <ul>    <p>  <details id="new BadOp$123" title="ConstructorSignature" ><summary><span><a href="#new BadOp$123">#</a></span>  <code><strong>new BadOp</strong></code><em>()</em>    </summary>    <ul><p><a href="#BadOp$121">BadOp</a></p>      <p>  <details id="token$124" title="Parameter" ><summary><span><a href="#token$124">#</a></span>  <code><strong>token</strong></code>    </summary>    <ul><p><a href="#Token$35">Token</a></p>        </ul></details><details id="short$125" title="Parameter" ><summary><span><a href="#short$125">#</a></span>  <code><strong>short</strong></code>    </summary>    <ul><p>string</p>        </ul></details></p>  </ul></details></p>    </ul></details><details id="col$130" title="Property" ><summary><span><a href="#col$130">#</a></span>  <code><strong>col</strong></code>    </summary>  <a href="src/causes.ts#L9">src/causes.ts#L9</a>  <ul><p>number</p>        </ul></details><details id="index$127" title="Property" ><summary><span><a href="#index$127">#</a></span>  <code><strong>index</strong></code>    </summary>  <a href="src/causes.ts#L6">src/causes.ts#L6</a>  <ul><p>number</p>        </ul></details><details id="input$128" title="Property" ><summary><span><a href="#input$128">#</a></span>  <code><strong>input</strong></code>    </summary>  <a href="src/causes.ts#L7">src/causes.ts#L7</a>  <ul><p>string</p>        </ul></details><details id="line$129" title="Property" ><summary><span><a href="#line$129">#</a></span>  <code><strong>line</strong></code>    </summary>  <a href="src/causes.ts#L8">src/causes.ts#L8</a>  <ul><p>number</p>        </ul></details><details id="message$131" title="Property" ><summary><span><a href="#message$131">#</a></span>  <code><strong>message</strong></code>    </summary>  <a href="src/causes.ts#L10">src/causes.ts#L10</a>  <ul><p>string</p>        </ul></details><details id="name$126" title="Property" ><summary><span><a href="#name$126">#</a></span>  <code><strong>name</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>'ParserBadOp'</code></span>  </summary>  <a href="src/causes.ts#L43">src/causes.ts#L43</a>  <ul><p>string</p>        </ul></details><details id="short$133" title="Property" ><summary><span><a href="#short$133">#</a></span>  <code><strong>short</strong></code>    </summary>  <a href="src/causes.ts#L11">src/causes.ts#L11</a>  <ul><p>string</p>        </ul></details><details id="token$132" title="Property" ><summary><span><a href="#token$132">#</a></span>  <code><strong>token</strong></code>    </summary>  <a href="src/causes.ts#L11">src/causes.ts#L11</a>  <ul><p><a href="#Token$35">Token</a></p>        </ul></details></p></ul></details><details id="BadToken$108" title="Class" ><summary><span><a href="#BadToken$108">#</a></span>  <code><strong>BadToken</strong></code>    </summary>  <a href="src/causes.ts#L39">src/causes.ts#L39</a>  <ul>        <p>  <details id="constructor$109" title="Constructor" ><summary><span><a href="#constructor$109">#</a></span>  <code><strong>constructor</strong></code><em>(token, short)</em>    </summary>  <a href="src/causes.ts#L11">src/causes.ts#L11</a>  <ul>    <p>  <details id="new BadToken$110" title="ConstructorSignature" ><summary><span><a href="#new BadToken$110">#</a></span>  <code><strong>new BadToken</strong></code><em>()</em>    </summary>    <ul><p><a href="#BadToken$108">BadToken</a></p>      <p>  <details id="token$111" title="Parameter" ><summary><span><a href="#token$111">#</a></span>  <code><strong>token</strong></code>    </summary>    <ul><p><a href="#Token$35">Token</a></p>        </ul></details><details id="short$112" title="Parameter" ><summary><span><a href="#short$112">#</a></span>  <code><strong>short</strong></code>    </summary>    <ul><p>string</p>        </ul></details></p>  </ul></details></p>    </ul></details><details id="col$117" title="Property" ><summary><span><a href="#col$117">#</a></span>  <code><strong>col</strong></code>    </summary>  <a href="src/causes.ts#L9">src/causes.ts#L9</a>  <ul><p>number</p>        </ul></details><details id="index$114" title="Property" ><summary><span><a href="#index$114">#</a></span>  <code><strong>index</strong></code>    </summary>  <a href="src/causes.ts#L6">src/causes.ts#L6</a>  <ul><p>number</p>        </ul></details><details id="input$115" title="Property" ><summary><span><a href="#input$115">#</a></span>  <code><strong>input</strong></code>    </summary>  <a href="src/causes.ts#L7">src/causes.ts#L7</a>  <ul><p>string</p>        </ul></details><details id="line$116" title="Property" ><summary><span><a href="#line$116">#</a></span>  <code><strong>line</strong></code>    </summary>  <a href="src/causes.ts#L8">src/causes.ts#L8</a>  <ul><p>number</p>        </ul></details><details id="message$118" title="Property" ><summary><span><a href="#message$118">#</a></span>  <code><strong>message</strong></code>    </summary>  <a href="src/causes.ts#L10">src/causes.ts#L10</a>  <ul><p>string</p>        </ul></details><details id="name$113" title="Property" ><summary><span><a href="#name$113">#</a></span>  <code><strong>name</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>'ParserBadToken'</code></span>  </summary>  <a href="src/causes.ts#L40">src/causes.ts#L40</a>  <ul><p>string</p>        </ul></details><details id="short$120" title="Property" ><summary><span><a href="#short$120">#</a></span>  <code><strong>short</strong></code>    </summary>  <a href="src/causes.ts#L11">src/causes.ts#L11</a>  <ul><p>string</p>        </ul></details><details id="token$119" title="Property" ><summary><span><a href="#token$119">#</a></span>  <code><strong>token</strong></code>    </summary>  <a href="src/causes.ts#L11">src/causes.ts#L11</a>  <ul><p><a href="#Token$35">Token</a></p>        </ul></details></p></ul></details><details id="ParserErrorCause$65" title="Class" ><summary><span><a href="#ParserErrorCause$65">#</a></span>  <code><strong>ParserErrorCause</strong></code>    </summary>  <a href="src/causes.ts#L4">src/causes.ts#L4</a>  <ul>        <p>  <details id="constructor$66" title="Constructor" ><summary><span><a href="#constructor$66">#</a></span>  <code><strong>constructor</strong></code><em>(token, short)</em>    </summary>  <a href="src/causes.ts#L11">src/causes.ts#L11</a>  <ul>    <p>  <details id="new ParserErrorCause$67" title="ConstructorSignature" ><summary><span><a href="#new ParserErrorCause$67">#</a></span>  <code><strong>new ParserErrorCause</strong></code><em>()</em>    </summary>    <ul><p><a href="#ParserErrorCause$65">ParserErrorCause</a></p>      <p>  <details id="token$68" title="Parameter" ><summary><span><a href="#token$68">#</a></span>  <code><strong>token</strong></code>    </summary>    <ul><p><a href="#Token$35">Token</a></p>        </ul></details><details id="short$69" title="Parameter" ><summary><span><a href="#short$69">#</a></span>  <code><strong>short</strong></code>    </summary>    <ul><p>string</p>        </ul></details></p>  </ul></details></p>    </ul></details><details id="col$74" title="Property" ><summary><span><a href="#col$74">#</a></span>  <code><strong>col</strong></code>    </summary>  <a href="src/causes.ts#L9">src/causes.ts#L9</a>  <ul><p>number</p>        </ul></details><details id="index$71" title="Property" ><summary><span><a href="#index$71">#</a></span>  <code><strong>index</strong></code>    </summary>  <a href="src/causes.ts#L6">src/causes.ts#L6</a>  <ul><p>number</p>        </ul></details><details id="input$72" title="Property" ><summary><span><a href="#input$72">#</a></span>  <code><strong>input</strong></code>    </summary>  <a href="src/causes.ts#L7">src/causes.ts#L7</a>  <ul><p>string</p>        </ul></details><details id="line$73" title="Property" ><summary><span><a href="#line$73">#</a></span>  <code><strong>line</strong></code>    </summary>  <a href="src/causes.ts#L8">src/causes.ts#L8</a>  <ul><p>number</p>        </ul></details><details id="message$75" title="Property" ><summary><span><a href="#message$75">#</a></span>  <code><strong>message</strong></code>    </summary>  <a href="src/causes.ts#L10">src/causes.ts#L10</a>  <ul><p>string</p>        </ul></details><details id="name$70" title="Property" ><summary><span><a href="#name$70">#</a></span>  <code><strong>name</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>'ParserUnknownError'</code></span>  </summary>  <a href="src/causes.ts#L5">src/causes.ts#L5</a>  <ul><p>string</p>        </ul></details><details id="short$77" title="Property" ><summary><span><a href="#short$77">#</a></span>  <code><strong>short</strong></code>    </summary>  <a href="src/causes.ts#L11">src/causes.ts#L11</a>  <ul><p>string</p>        </ul></details><details id="token$76" title="Property" ><summary><span><a href="#token$76">#</a></span>  <code><strong>token</strong></code>    </summary>  <a href="src/causes.ts#L11">src/causes.ts#L11</a>  <ul><p><a href="#Token$35">Token</a></p>        </ul></details></p></ul></details><details id="UnexpectedToken$78" title="Class" ><summary><span><a href="#UnexpectedToken$78">#</a></span>  <code><strong>UnexpectedToken</strong></code>    </summary>  <a href="src/causes.ts#L27">src/causes.ts#L27</a>  <ul>        <p>  <details id="constructor$79" title="Constructor" ><summary><span><a href="#constructor$79">#</a></span>  <code><strong>constructor</strong></code><em>(token, group, value)</em>    </summary>  <a href="src/causes.ts#L29">src/causes.ts#L29</a>  <ul>    <p>  <details id="new UnexpectedToken$80" title="ConstructorSignature" ><summary><span><a href="#new UnexpectedToken$80">#</a></span>  <code><strong>new UnexpectedToken</strong></code><em>()</em>    </summary>    <ul><p><a href="#UnexpectedToken$78">UnexpectedToken</a></p>      <p>  <details id="token$81" title="Parameter" ><summary><span><a href="#token$81">#</a></span>  <code><strong>token</strong></code>    </summary>    <ul><p><a href="#Token$35">Token</a></p>        </ul></details><details id="group$82" title="Parameter" ><summary><span><a href="#group$82">#</a></span>  <code><strong>group</strong></code>    </summary>    <ul><p>string</p>        </ul></details><details id="value$83" title="Parameter" ><summary><span><a href="#value$83">#</a></span>  <code><strong>value</strong></code>    </summary>    <ul><p>string</p>        </ul></details></p>  </ul></details></p>    </ul></details><details id="col$90" title="Property" ><summary><span><a href="#col$90">#</a></span>  <code><strong>col</strong></code>    </summary>  <a href="src/causes.ts#L9">src/causes.ts#L9</a>  <ul><p>number</p>        </ul></details><details id="group$85" title="Property" ><summary><span><a href="#group$85">#</a></span>  <code><strong>group</strong></code>    </summary>  <a href="src/causes.ts#L29">src/causes.ts#L29</a>  <ul><p>string</p>        </ul></details><details id="index$87" title="Property" ><summary><span><a href="#index$87">#</a></span>  <code><strong>index</strong></code>    </summary>  <a href="src/causes.ts#L6">src/causes.ts#L6</a>  <ul><p>number</p>        </ul></details><details id="input$88" title="Property" ><summary><span><a href="#input$88">#</a></span>  <code><strong>input</strong></code>    </summary>  <a href="src/causes.ts#L7">src/causes.ts#L7</a>  <ul><p>string</p>        </ul></details><details id="line$89" title="Property" ><summary><span><a href="#line$89">#</a></span>  <code><strong>line</strong></code>    </summary>  <a href="src/causes.ts#L8">src/causes.ts#L8</a>  <ul><p>number</p>        </ul></details><details id="message$91" title="Property" ><summary><span><a href="#message$91">#</a></span>  <code><strong>message</strong></code>    </summary>  <a href="src/causes.ts#L10">src/causes.ts#L10</a>  <ul><p>string</p>        </ul></details><details id="name$84" title="Property" ><summary><span><a href="#name$84">#</a></span>  <code><strong>name</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>'ParserUnexpectedToken'</code></span>  </summary>  <a href="src/causes.ts#L28">src/causes.ts#L28</a>  <ul><p>string</p>        </ul></details><details id="short$93" title="Property" ><summary><span><a href="#short$93">#</a></span>  <code><strong>short</strong></code>    </summary>  <a href="src/causes.ts#L11">src/causes.ts#L11</a>  <ul><p>string</p>        </ul></details><details id="token$92" title="Property" ><summary><span><a href="#token$92">#</a></span>  <code><strong>token</strong></code>    </summary>  <a href="src/causes.ts#L11">src/causes.ts#L11</a>  <ul><p><a href="#Token$35">Token</a></p>        </ul></details><details id="value$86" title="Property" ><summary><span><a href="#value$86">#</a></span>  <code><strong>value</strong></code>    </summary>  <a href="src/causes.ts#L29">src/causes.ts#L29</a>  <ul><p>string</p>        </ul></details></p></ul></details></p></ul></details><details id="LexerError$146" title="Class" ><summary><span><a href="#LexerError$146">#</a></span>  <code><strong>LexerError</strong></code>    </summary>  <a href=""></a>  <ul>        <p>  <details id="constructor$157" title="Constructor" ><summary><span><a href="#constructor$157">#</a></span>  <code><strong>constructor</strong></code><em>(cause)</em>    </summary>  <a href=""></a>  <ul>    <p>  <details id="new LexerError$158" title="ConstructorSignature" ><summary><span><a href="#new LexerError$158">#</a></span>  <code><strong>new LexerError</strong></code><em>()</em>    </summary>    <ul><p><a href="#LexerError$146">LexerError</a></p>      <p>  <details id="cause$159" title="Parameter" ><summary><span><a href="#cause$159">#</a></span>  <code><strong>cause</strong></code>    </summary>    <ul><p><span>Error</span></p>        </ul></details></p>  </ul></details></p>    </ul></details><details id="cause$160" title="Property" ><summary><span><a href="#cause$160">#</a></span>  <code><strong>cause</strong></code>    </summary>  <a href=""></a>  <ul><p><span>UnexpectedToken</span></p>        </ul></details><details id="name$161" title="Property" ><summary><span><a href="#name$161">#</a></span>  <code><strong>name</strong></code>    </summary>  <a href=""></a>  <ul><p>string</p>        </ul></details><details id="prepareStackTrace$151" title="Property" ><summary><span><a href="#prepareStackTrace$151">#</a></span>  <code><strong>prepareStackTrace</strong></code>    </summary>  <a href=""></a>  <ul><p><details id="__type$152" title="Function" ><summary><span><a href="#__type$152">#</a></span>  <em>(err, stackTraces)</em>    </summary>    <ul>    <p>    <details id="err$154" title="Parameter" ><summary><span><a href="#err$154">#</a></span>  <code><strong>err</strong></code>    </summary>    <ul><p><span>Error</span></p>        </ul></details><details id="stackTraces$155" title="Parameter" ><summary><span><a href="#stackTraces$155">#</a></span>  <code><strong>stackTraces</strong></code>    </summary>    <ul><p><span>CallSite</span>  []</p>        </ul></details>  <p><strong></strong><em>(err, stackTraces)</em>  &nbsp;=&gt;  <ul>any</ul></p></p>    </ul></details></p>        </ul></details><details id="stackTraceLimit$156" title="Property" ><summary><span><a href="#stackTraceLimit$156">#</a></span>  <code><strong>stackTraceLimit</strong></code>    </summary>  <a href=""></a>  <ul><p>number</p>        </ul></details><details id="captureStackTrace$147" title="Method" ><summary><span><a href="#captureStackTrace$147">#</a></span>  <code><strong>captureStackTrace</strong></code><em>(targetObject, constructorOpt)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="targetObject$149" title="Parameter" ><summary><span><a href="#targetObject$149">#</a></span>  <code><strong>targetObject</strong></code>    </summary>    <ul><p>object</p>        </ul></details><details id="constructorOpt$150" title="Parameter" ><summary><span><a href="#constructorOpt$150">#</a></span>  <code><strong>constructorOpt</strong></code>    </summary>    <ul><p><span>Function</span></p>        </ul></details>  <p><strong>captureStackTrace</strong><em>(targetObject, constructorOpt)</em>  &nbsp;=&gt;  <ul>void</ul></p></p>    </ul></details></p></ul></details><details id="ParserError$12" title="Class" ><summary><span><a href="#ParserError$12">#</a></span>  <code><strong>ParserError</strong></code>    </summary>  <a href="src/index.ts#L58">src/index.ts#L58</a>  <ul>        <p>  <details id="constructor$23" title="Constructor" ><summary><span><a href="#constructor$23">#</a></span>  <code><strong>constructor</strong></code><em>(cause)</em>    </summary>  <a href="src/index.ts#L67">src/index.ts#L67</a>  <ul>    <p>  <details id="new ParserError$24" title="ConstructorSignature" ><summary><span><a href="#new ParserError$24">#</a></span>  <code><strong>new ParserError</strong></code><em>()</em>    </summary>    <ul><p><a href="#ParserError$12">ParserError</a></p>      <p>  <details id="cause$25" title="Parameter" ><summary><span><a href="#cause$25">#</a></span>  <code><strong>cause</strong></code>    </summary>    <ul><p><span>Error</span></p>        </ul></details></p>  </ul></details></p>    </ul></details><details id="cause$26" title="Property" ><summary><span><a href="#cause$26">#</a></span>  <code><strong>cause</strong></code>    </summary>  <a href="src/index.ts#L59">src/index.ts#L59</a>  <ul><p><a href="#UnexpectedToken$78">UnexpectedToken</a> | <a href="#BadImpl$94">BadImpl</a> | <a href="#BadToken$108">BadToken</a> | <a href="#BadOp$121">BadOp</a></p>        </ul></details><details id="name$27" title="Property" ><summary><span><a href="#name$27">#</a></span>  <code><strong>name</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>'ParserError'</code></span>  </summary>  <a href="src/index.ts#L66">src/index.ts#L66</a>  <ul><p>string</p>        </ul></details><details id="prepareStackTrace$17" title="Property" ><summary><span><a href="#prepareStackTrace$17">#</a></span>  <code><strong>prepareStackTrace</strong></code>    </summary>  <a href=""></a>  <ul><p><details id="__type$18" title="Function" ><summary><span><a href="#__type$18">#</a></span>  <em>(err, stackTraces)</em>    </summary>    <ul>    <p>    <details id="err$20" title="Parameter" ><summary><span><a href="#err$20">#</a></span>  <code><strong>err</strong></code>    </summary>    <ul><p><span>Error</span></p>        </ul></details><details id="stackTraces$21" title="Parameter" ><summary><span><a href="#stackTraces$21">#</a></span>  <code><strong>stackTraces</strong></code>    </summary>    <ul><p><span>CallSite</span>  []</p>        </ul></details>  <p><strong></strong><em>(err, stackTraces)</em>  &nbsp;=&gt;  <ul>any</ul></p></p>    </ul></details></p>        </ul></details><details id="stackTraceLimit$22" title="Property" ><summary><span><a href="#stackTraceLimit$22">#</a></span>  <code><strong>stackTraceLimit</strong></code>    </summary>  <a href=""></a>  <ul><p>number</p>        </ul></details><details id="captureStackTrace$13" title="Method" ><summary><span><a href="#captureStackTrace$13">#</a></span>  <code><strong>captureStackTrace</strong></code><em>(targetObject, constructorOpt)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="targetObject$15" title="Parameter" ><summary><span><a href="#targetObject$15">#</a></span>  <code><strong>targetObject</strong></code>    </summary>    <ul><p>object</p>        </ul></details><details id="constructorOpt$16" title="Parameter" ><summary><span><a href="#constructorOpt$16">#</a></span>  <code><strong>constructorOpt</strong></code>    </summary>    <ul><p><span>Function</span></p>        </ul></details>  <p><strong>captureStackTrace</strong><em>(targetObject, constructorOpt)</em>  &nbsp;=&gt;  <ul>void</ul></p></p>    </ul></details></p></ul></details><details id="Token$35" title="Class" ><summary><span><a href="#Token$35">#</a></span>  <code><strong>Token</strong></code>    </summary>  <a href=""></a>  <ul>        <p>  <details id="constructor$41" title="Constructor" ><summary><span><a href="#constructor$41">#</a></span>  <code><strong>constructor</strong></code><em>(value)</em>    </summary>  <a href=""></a>  <ul>    <p>  <details id="new Token$42" title="ConstructorSignature" ><summary><span><a href="#new Token$42">#</a></span>  <code><strong>new Token</strong></code><em>()</em>    </summary>    <ul><p><a href="#Token$35">Token</a></p>      <p>  <details id="value$43" title="Parameter" ><summary><span><a href="#value$43">#</a></span>  <code><strong>value</strong></code>    </summary>    <ul><p><a href="#TokenJson$138">TokenJson</a></p>        </ul></details></p>  </ul></details><details id="new Token$44" title="ConstructorSignature" ><summary><span><a href="#new Token$44">#</a></span>  <code><strong>new Token</strong></code><em>()</em>    </summary>    <ul><p><a href="#Token$35">Token</a></p>      <p>  <details id="value$45" title="Parameter" ><summary><span><a href="#value$45">#</a></span>  <code><strong>value</strong></code>    </summary>    <ul><p>string</p>        </ul></details><details id="group$46" title="Parameter" ><summary><span><a href="#group$46">#</a></span>  <code><strong>group</strong></code>    </summary>    <ul><p>string</p>        </ul></details><details id="source$47" title="Parameter" ><summary><span><a href="#source$47">#</a></span>  <code><strong>source</strong></code>    </summary>    <ul><p><span>RegExpMatchArrayLike</span></p>        </ul></details></p>  </ul></details></p>    </ul></details><details id="group$48" title="Property" ><summary><span><a href="#group$48">#</a></span>  <code><strong>group</strong></code>    </summary>  <a href=""></a>  <ul><p>string</p>        </ul></details><details id="source$53" title="Property" ><summary><span><a href="#source$53">#</a></span>  <code><strong>source</strong></code>    </summary>  <a href=""></a>  <ul><p><span>RegExpMatchArrayLike</span></p>        </ul></details><details id="index$51" title="Accessor" ><summary><span><a href="#index$51">#</a></span>  <code><strong>index</strong></code>    </summary>  <a href=""></a>  <ul>        </ul></details><details id="value$49" title="Accessor" ><summary><span><a href="#value$49">#</a></span>  <code><strong>value</strong></code>    </summary>  <a href=""></a>  <ul>        </ul></details><details id="as$60" title="Method" ><summary><span><a href="#as$60">#</a></span>  <code><strong>as</strong></code><em>(value, group)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="value$62" title="Parameter" ><summary><span><a href="#value$62">#</a></span>  <code><strong>value</strong></code>    </summary>    <ul><p>string</p>        </ul></details><details id="group$63" title="Parameter" ><summary><span><a href="#group$63">#</a></span>  <code><strong>group</strong></code>    </summary>    <ul><p>string</p>        </ul></details>  <p><strong>as</strong><em>(value, group)</em>  &nbsp;=&gt;  <ul><a href="#Token$35">Token</a></ul></p></p>    </ul></details><details id="is$56" title="Method" ><summary><span><a href="#is$56">#</a></span>  <code><strong>is</strong></code><em>(group, value)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="group$58" title="Parameter" ><summary><span><a href="#group$58">#</a></span>  <code><strong>group</strong></code>    </summary>    <ul><p>string</p>        </ul></details><details id="value$59" title="Parameter" ><summary><span><a href="#value$59">#</a></span>  <code><strong>value</strong></code>    </summary>    <ul><p>string</p>        </ul></details>  <p><strong>is</strong><em>(group, value)</em>  &nbsp;=&gt;  <ul>boolean</ul></p></p>    </ul></details><details id="toJSON$54" title="Method" ><summary><span><a href="#toJSON$54">#</a></span>  <code><strong>toJSON</strong></code><em>()</em>    </summary>  <a href=""></a>  <ul>    <p>      <p><strong>toJSON</strong><em>()</em>  &nbsp;=&gt;  <ul><a href="#TokenJson$138">TokenJson</a></ul></p></p>    </ul></details><details id="create$36" title="Method" ><summary><span><a href="#create$36">#</a></span>  <code><strong>create</strong></code><em>(value, group, source)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="value$38" title="Parameter" ><summary><span><a href="#value$38">#</a></span>  <code><strong>value</strong></code>    </summary>    <ul><p>string</p>        </ul></details><details id="group$39" title="Parameter" ><summary><span><a href="#group$39">#</a></span>  <code><strong>group</strong></code>    </summary>    <ul><p>string</p>        </ul></details><details id="source$40" title="Parameter" ><summary><span><a href="#source$40">#</a></span>  <code><strong>source</strong></code>    </summary>    <ul><p><span>RegExpMatchArrayLike</span></p>        </ul></details>  <p><strong>create</strong><em>(value, group, source)</em>  &nbsp;=&gt;  <ul><a href="#Token$35">Token</a></ul></p></p>    </ul></details></p></ul></details><details id="Impl$9" title="Interface" ><summary><span><a href="#Impl$9">#</a></span>  <code><strong>Impl</strong></code>    </summary>  <a href="src/index.ts#L28">src/index.ts#L28</a>  <ul>        <p>  <details id="led$10" title="Property" ><summary><span><a href="#led$10">#</a></span>  <code><strong>led</strong></code>    </summary>  <a href="src/index.ts#L29">src/index.ts#L29</a>  <ul><p><span>Fn</span></p>        </ul></details><details id="nud$11" title="Property" ><summary><span><a href="#nud$11">#</a></span>  <code><strong>nud</strong></code>    </summary>  <a href="src/index.ts#L30">src/index.ts#L30</a>  <ul><p><span>Fn</span></p>        </ul></details></p></ul></details><details id="NodeArray$1" title="Interface" ><summary><span><a href="#NodeArray$1">#</a></span>  <code><strong>NodeArray</strong></code>    </summary>  <a href="src/index.ts#L12">src/index.ts#L12</a>  <ul>        </ul></details><details id="TokenJson$138" title="Interface" ><summary><span><a href="#TokenJson$138">#</a></span>  <code><strong>TokenJson</strong></code>    </summary>  <a href=""></a>  <ul>        <p>  <details id="group$140" title="Property" ><summary><span><a href="#group$140">#</a></span>  <code><strong>group</strong></code>    </summary>  <a href=""></a>  <ul><p>string</p>        </ul></details><details id="source$141" title="Property" ><summary><span><a href="#source$141">#</a></span>  <code><strong>source</strong></code>    </summary>  <a href=""></a>  <ul><p>{<p>  <details id="index$144" title="Property" ><summary><span><a href="#index$144">#</a></span>  <code><strong>index</strong></code>    </summary>  <a href=""></a>  <ul><p>number</p>        </ul></details><details id="input$145" title="Property" ><summary><span><a href="#input$145">#</a></span>  <code><strong>input</strong></code>    </summary>  <a href=""></a>  <ul><p>string</p>        </ul></details><details id="match$143" title="Property" ><summary><span><a href="#match$143">#</a></span>  <code><strong>match</strong></code>    </summary>  <a href=""></a>  <ul><p>string  []</p>        </ul></details></p>}</p>        </ul></details><details id="value$139" title="Property" ><summary><span><a href="#value$139">#</a></span>  <code><strong>value</strong></code>    </summary>  <a href=""></a>  <ul><p>string</p>        </ul></details></p></ul></details><details id="Node$4" title="TypeAlias" ><summary><span><a href="#Node$4">#</a></span>  <code><strong>Node</strong></code>    </summary>  <a href="src/index.ts#L16">src/index.ts#L16</a>  <ul><p><a href="#NodeArray$1">NodeArray</a> | <a href="#Token$35">Token</a> &amp; {<p>  <details id="lexer$6" title="Property" ><summary><span><a href="#lexer$6">#</a></span>  <code><strong>lexer</strong></code>    </summary>  <a href="src/index.ts#L17">src/index.ts#L17</a>  <ul><p><span>Lexer</span></p>        </ul></details><details id="toString$7" title="Method" ><summary><span><a href="#toString$7">#</a></span>  <code><strong>toString</strong></code><em>()</em>    </summary>  <a href="src/index.ts#L18">src/index.ts#L18</a>  <ul>    <p>      <p><strong>toString</strong><em>()</em>  &nbsp;=&gt;  <ul>string</ul></p></p>    </ul></details></p>}</p>        </ul></details><details id="createParser$28" title="Function" ><summary><span><a href="#createParser$28">#</a></span>  <code><strong>createParser</strong></code><em>(regexp, fn)</em>    </summary>  <a href="src/index.ts#L72">src/index.ts#L72</a>  <ul>    <p>    <details id="regexp$30" title="Parameter" ><summary><span><a href="#regexp$30">#</a></span>  <code><strong>regexp</strong></code>    </summary>    <ul><p><span>RegExp</span></p>        </ul></details><details id="fn$31" title="Parameter" ><summary><span><a href="#fn$31">#</a></span>  <code><strong>fn</strong></code>    </summary>    <ul><p><span>ImplTableFactory</span></p>        </ul></details>  <p><strong>createParser</strong><em>(regexp, fn)</em>  &nbsp;=&gt;  <ul><details id="__type$32" title="Function" ><summary><span><a href="#__type$32">#</a></span>  <em>(input)</em>    </summary>    <ul>    <p>    <details id="input$34" title="Parameter" ><summary><span><a href="#input$34">#</a></span>  <code><strong>input</strong></code>    </summary>    <ul><p>string</p>        </ul></details>  <p><strong></strong><em>(input)</em>  &nbsp;=&gt;  <ul><a href="#Node$4">Node</a></ul></p></p>    </ul></details></ul></p></p>    </ul></details><details id="joinRegExp$134" title="Function" ><summary><span><a href="#joinRegExp$134">#</a></span>  <code><strong>joinRegExp</strong></code><em>(regexps, flags)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="regexps$136" title="Parameter" ><summary><span><a href="#regexps$136">#</a></span>  <code><strong>regexps</strong></code>    </summary>    <ul><p><span>RegExp</span> | <span>RegExp</span>  []  []</p>        </ul></details><details id="flags$137" title="Parameter" ><summary><span><a href="#flags$137">#</a></span>  <code><strong>flags</strong></code>    </summary>    <ul><p>string</p>        </ul></details>  <p><strong>joinRegExp</strong><em>(regexps, flags)</em>  &nbsp;=&gt;  <ul><span>RegExp</span></ul></p></p>    </ul></details></p>

## Credits
- [annotate-code](https://npmjs.org/package/annotate-code) by [stagas](https://github.com/stagas) &ndash; beautifully annotate source code with a message, given an index, like a parser or compiler
- [join-regexp](https://npmjs.org/package/join-regexp) by [stagas](https://github.com/stagas) &ndash; utility to join regexps together
- [lexer-next](https://npmjs.org/package/lexer-next) by [stagas](https://github.com/stagas) &ndash; lexer for recursive descent parsers

## Contributing

[Fork](https://github.com/stagas/tinypratt/fork) or [edit](https://github.dev/stagas/tinypratt) and submit a PR.

All contributions are welcome!

## License

<a href="LICENSE">MIT</a> &copy; 2022 [stagas](https://github.com/stagas)
