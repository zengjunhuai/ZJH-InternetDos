import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as c,c as l,d as n,e as s,b as t,f as i}from"./app-b5233593.js";const r={},u=n("h2",{id:"项目一",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#项目一","aria-hidden":"true"},"#"),s(" 项目一")],-1),k=n("br",null,null,-1),d={href:"https://github.com/zengjunhuai/Code/tree/master/MQProject/RabbitMQProject/Hellow%20World",title:"悬停显示",target:"_blank",rel:"noopener noreferrer"},v=i(`<h3 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤" aria-hidden="true">#</a> 步骤：</h3><h6 id="依赖" tabindex="-1"><a class="header-anchor" href="#依赖" aria-hidden="true">#</a> 依赖</h6><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>指定jdk编译版本<span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>build<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>plugins<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>plugin<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>groupId<span class="token operator">&gt;</span>org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>maven<span class="token punctuation">.</span>plugins<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>artifactId<span class="token operator">&gt;</span>maven<span class="token operator">-</span>compiler<span class="token operator">-</span>plugin<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>configuration<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>source<span class="token operator">&gt;</span><span class="token number">8</span><span class="token operator">&lt;</span><span class="token operator">/</span>source<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>target<span class="token operator">&gt;</span><span class="token number">8</span><span class="token operator">&lt;</span><span class="token operator">/</span>target<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>configuration<span class="token operator">&gt;</span> <span class="token operator">&lt;</span><span class="token operator">/</span>plugin<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>plugins<span class="token operator">&gt;</span> <span class="token operator">&lt;</span><span class="token operator">/</span>build<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>dependencies<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>rabbitmq依赖客户端<span class="token operator">--</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>dependency<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>groupId<span class="token operator">&gt;</span>com<span class="token punctuation">.</span>rabbitmq<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>artifactId<span class="token operator">&gt;</span>amqp<span class="token operator">-</span>client<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>version<span class="token operator">&gt;</span><span class="token number">5.8</span><span class="token number">.0</span><span class="token operator">&lt;</span><span class="token operator">/</span>version<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>dependency<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>操作文件流的一个依赖<span class="token operator">--</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>dependency<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>groupId<span class="token operator">&gt;</span>commons<span class="token operator">-</span>io<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>artifactId<span class="token operator">&gt;</span>commons<span class="token operator">-</span>io<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>version<span class="token operator">&gt;</span><span class="token number">2.6</span><span class="token operator">&lt;</span><span class="token operator">/</span>version<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>dependency<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>dependencies<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="消息生产者" tabindex="-1"><a class="header-anchor" href="#消息生产者" aria-hidden="true">#</a> 消息生产者</h6><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Producer</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> final <span class="token keyword">static</span> String <span class="token constant">QUEUE_NAME</span> <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span>String<span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> throws Exception <span class="token punctuation">{</span>
        <span class="token comment">//创建一个连接工厂</span>
        ConnectionFactory factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConnectionFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        factory<span class="token punctuation">.</span><span class="token function">setHost</span><span class="token punctuation">(</span><span class="token string">&quot;168.192.8.63&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        factory<span class="token punctuation">.</span><span class="token function">setUsername</span><span class="token punctuation">(</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        factory<span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//channel实现了自动close接口 自动关闭 不需要显示关闭</span>
        <span class="token keyword">try</span><span class="token punctuation">(</span>Connection connection <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">newConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            Channel channel <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token doc-comment comment">/**
             * 生成一个队列
             * 1.队列名称
             * 2.队列里面的消息是否持久化 默认消息存储在内存中
             * 3.该队列是否只供一个消费者进行消费 是否进行共享 true可以多个消费者消费
             * 4.是否自动删除 最后一个消费者端开连接以后 该队列是否自动删除 true 自动删除
             * 5.其他参数 */</span>
            channel<span class="token punctuation">.</span><span class="token function">queueDeclare</span><span class="token punctuation">(</span><span class="token constant">QUEUE_NAME</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            String message<span class="token operator">=</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">;</span>
            <span class="token doc-comment comment">/**
             * 发送一个消息
             * 1.发送到那个交换机
             * 2.路由的key是哪个
             * 3.其他的参数信息
             * 4.发送消息的消息体 */</span>
            channel<span class="token punctuation">.</span><span class="token function">basicPublish</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token constant">QUEUE_NAME</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span>message<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;消息发送完毕&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="消息消费者" tabindex="-1"><a class="header-anchor" href="#消息消费者" aria-hidden="true">#</a> 消息消费者</h6><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Consumer</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> final <span class="token keyword">static</span> String <span class="token constant">QUEUE_NAME</span> <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span>String<span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> throws Exception <span class="token punctuation">{</span>
        ConnectionFactory factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConnectionFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        factory<span class="token punctuation">.</span><span class="token function">setHost</span><span class="token punctuation">(</span><span class="token string">&quot;168.192.8.63&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        factory<span class="token punctuation">.</span><span class="token function">setUsername</span><span class="token punctuation">(</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> factory<span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        Connection connection <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">newConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        Channel channel <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;等待接收消息....&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//推送的消息如何进行消费的接口回调</span>
        DeliverCallback deliverCallback<span class="token operator">=</span><span class="token punctuation">(</span>consumerTag<span class="token punctuation">,</span> delivery<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>
            String message<span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>delivery<span class="token punctuation">.</span><span class="token function">getBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token comment">//取消消费的一个回调接口 如在消费的时候队列被删除掉了</span>
        CancelCallback cancelCallback<span class="token operator">=</span><span class="token punctuation">(</span>consumerTag<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>
            System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;消息消费被中断&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token doc-comment comment">/**
         * 消费者消费消息
         * 1.消费哪个队列
         * 2.消费成功之后是否要自动应答 true代表自动应答 false手动应答
         * 3.消费者未成功消费的回调 */</span>
        channel<span class="token punctuation">.</span><span class="token function">basicConsume</span><span class="token punctuation">(</span><span class="token constant">QUEUE_NAME</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">,</span>deliverCallback<span class="token punctuation">,</span>cancelCallback<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function m(b,g){const p=a("ExternalLinkIcon"),o=a("Mermaid");return c(),l("div",null,[u,n("p",null,[s("简介：实现一个生产者生产消息到rabbitmq，一个消费者消费消息"),k,n("a",d,[s("代码"),t(p)])]),t(o,{id:"mermaid-6",code:"eJxTAIO0nPzy5IzEohIFnyBrLogYGAQU5aeUJqcW6eragbiBpamlqSAGkO+cn1dcmptaZM0FAFJzEfg="}),v])}const y=e(r,[["render",m],["__file","RabbitMQ项目_HelloWorld.html.vue"]]);export{y as default};
