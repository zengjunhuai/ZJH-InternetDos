import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as n,c as r,d as e,e as t,b as d,f as l}from"./app-b5233593.js";const c="/ZJH-InternetDos/assets/image/RabbitMQ_02.png",o="/ZJH-InternetDos/assets/image/RabbitMQ_03.png",m="/ZJH-InternetDos/assets/image/RabbitMQ_04.png",b="/ZJH-InternetDos/assets/image/RabbitMQ_05.png",u={},v=e("h3",{id:"官方网站",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#官方网站","aria-hidden":"true"},"#"),t(" 官方网站")],-1),h={href:"https://www.rabbitmq.com/download.html",target:"_blank",rel:"noopener noreferrer"},_=l('<h3 id="文件上传" tabindex="-1"><a class="header-anchor" href="#文件上传" aria-hidden="true">#</a> 文件上传</h3><p>上传到/usr/local/software目录下(如果没有software需要自己创建)<br><img src="'+c+`" title="图片标题" width=""></p><h3 id="安装文件-分别按照以下顺序安装" tabindex="-1"><a class="header-anchor" href="#安装文件-分别按照以下顺序安装" aria-hidden="true">#</a> 安装文件（分别按照以下顺序安装）</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rpm -ivh erlang-21.3-1.el7.x86_64.rpm
yum install socat -y
rpm -ivh rabbitmq-server-3.8.8-1.el7.noarch.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常用命令-按照以下顺序执行" tabindex="-1"><a class="header-anchor" href="#常用命令-按照以下顺序执行" aria-hidden="true">#</a> 常用命令(按照以下顺序执行)</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>添加开机启动RabbitMQ服务：chkconfig rabbitmq-server on
启动服务：/sbin/service rabbitmq-server start
查看服务状态：/sbin/service rabbitmq-server status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+o+`" title="图片标题" width=""><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>停止服务(选择执行)：/sbin/service rabbitmq-server stop
开启web管理插件：rabbitmq-plugins enable rabbitmq_management
用默认账号密码(guest)访问地址http://47.115.185.244:15672/出现权限问题
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+m+`" title="图片标题" width=""><h3 id="添加一个新的用户" tabindex="-1"><a class="header-anchor" href="#添加一个新的用户" aria-hidden="true">#</a> 添加一个新的用户</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>创建账号：rabbitmqctl add_user admin 123
设置用户角色：rabbitmqctl set_user_tags admin administrator
设置用户权限：set_permissions [-p &lt;vhostpath&gt;] &lt;user&gt; &lt;conf&gt; &lt;write&gt; &lt;read&gt;
rabbitmqctl set_permissions -p &quot;/&quot; admin &quot;.*&quot; &quot;.*&quot; &quot;.*&quot;
用户user_admin具有/vhost1这个virtual host中所有资源的配置、写、读权限
当前用户和角色：rabbitmqctl list_users
5.再次利用admin用户登录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+b+`" title="图片标题" width=""><h3 id="重置命令" tabindex="-1"><a class="header-anchor" href="#重置命令" aria-hidden="true">#</a> 重置命令</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>关闭应用的命令为：rabbitmqctl stop_app
清除的命令为：rabbitmqctl reset
重新启动命令为：rabbitmqctl start_app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function p(g,x){const a=s("ExternalLinkIcon");return n(),r("div",null,[v,e("p",null,[e("a",h,[t("https://www.rabbitmq.com/download.html"),d(a)])]),_])}const w=i(u,[["render",p],["__file","RabbitMQ项目_安装.html.vue"]]);export{w as default};
