import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as a,c as t,d as e,b as l,w as r,e as i,f as v}from"./app-b5233593.js";const c="/ZJH-InternetDos/assets/image/MyCat_6.png",m="/ZJH-InternetDos/assets/image/MyCat_7.png",u="/ZJH-InternetDos/assets/image/MyCat_8.png",b="/ZJH-InternetDos/assets/image/MyCat_9.png",o="/ZJH-InternetDos/assets/image/MyCat_10.png",g="/ZJH-InternetDos/assets/image/MyCat_11.png",p="/ZJH-InternetDos/assets/image/MyCat_12.png",_="/ZJH-InternetDos/assets/image/MyCat_13.png",x="/ZJH-InternetDos/assets/image/MyCat_14.png",h="/ZJH-InternetDos/assets/image/MyCat_15.png",M="/ZJH-InternetDos/assets/image/MyCat_16.png",y="/ZJH-InternetDos/assets/image/MyCat_17.png",S="/ZJH-InternetDos/assets/image/MyCat_18.png",I="/ZJH-InternetDos/assets/image/MyCat_19.png",T="/ZJH-InternetDos/assets/image/MyCat_20.png",E={},f=e("h4",{id:"安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),i(" 安装：")],-1),C=v('<h4 id="单主单从" tabindex="-1"><a class="header-anchor" href="#单主单从" aria-hidden="true">#</a> 单主单从</h4><p>一个主机用于处理所有写请求，一台从机负责所有读请求<br> 1、搭建MySQL数据库主从复制<br> （1）MySQL主从复制原理<br><img src="'+c+`" title="图片标题" width=""><br> （2）主机配置（host79）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>修改配置文件：vim /etc/my/cnf
#主服务器唯一ID
server-id = 1
#启用二进制日志
log-bin=mysql-bin
#设置不要复制的数据库（可设置多个）
binlog-ignore-db=mysql
binlog-ignore-db=information_schema
#设置需要复制的数据库
binlog-do-db=需要复制的主数据库名字
#设置binlog格式
binlog_format=STATEMENT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>binlog日志三种格式<br><img src="`+m+`" title="图片标题" width=""></p><p>（3）从机配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>修改配置文件：vim /etc/my.cnf
#从服务器唯一ID
server-id=2
#启用中继日志
relay-log=mysql-relay
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（4）主机、从机重启MySQL服务<br> （5）主机从机都关闭防火墙<br> （6）在主机建立账户并授权slave</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#在主机MySQL里执行授权命令
GRANT REPLICATION SLAVE ON *.* TO &#39;slave&#39;@&#39;%&#39; IDENTIFIED BY &#39;123123&#39;;
#查询master的状态
show master status;
#记录下File和Position的值
#执行完此步骤后不要再操作主服务器MySQL.防止主服务器状态值变化
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+u+`" title="图片标题" width=""><p>（7）在从机配置需要复制的主机</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#复制主机的命令
CHANGE MASTER TO MASTER_HOST=&#39;主机的IP地址&#39;,
MASTER_USER=&#39;slave&#39;,
MASTER_PASSWORD=&#39;123123&#39;,
MASTER_LOG_FILE=&#39;mysql-bin.具体数字&#39;,
MASTER_LOG_POS=具体值;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+b+`" title="图片标题" width=""><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#启动从服务器复制功能
start slave
#查看从服务器状态
show slave status\\G;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+o+`" title="图片标题" width=""><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#下面两个参数都是Yes，则说明主从配置成功
#Slave_IO_Running:Yes
#Slave_SQL_Running:Yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（8）主机新建库、新建表、insert记录,从机复制<br><img src="`+g+`" title="图片标题" width=""></p><p>（9）如何停止从服务器复制功能</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>stop slave;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（10）如何重新配置主从</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>stop slave;
reset master;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2、修改MyCat的配置文件schema.xml<br> （1）之前的配置已配置了读写主机，是否已实现读写分离？验证读写分离</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>（a）在写主机插入：insert into mytbl values (1,@@hostname);#主从数据不一致了
（b）在MyCat里面查询：select * from mytbl;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）修改dataHost的balance属性，通过此属性配置读写分离的类型</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>（a）balance=&quot;0&quot;, 不开启读写分离机制，所有读操作都发送到当前可用的 writeHost 上。
（b）balance=&quot;1&quot;，全部的 readHost 与 stand by writeHost 参与 select语句的负载均衡，简单的说，当双主双从模式(M1-&gt;S1，M2-&gt;S2，并且M1与M2互为主备)，正常情况下，M2,S1,S2 都参与select语句的负载均衡。
（c）balance=&quot;2&quot;，所有读操作都随机的在 writeHost、readhost 上分发。
（d）balance=&quot;3&quot;，所有读请求随机的分发到 readhost 执行，writerHost 不负担读压力
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、启动MyCat</p><p>4、验证读写分离</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>（a）在写主机数据库表mytbl中插入带系统变量数据，造成主从数据不一致
INSERT INTO mytbl VALUES(2,@@hostname);
（b）在MyCat里查询mytbl表，可以看到查询语句在主从两个主机间切换
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+p+'" title="图片标题" width=""><img src="'+_+'" title="图片标题" width=""><h4 id="双主双从" tabindex="-1"><a class="header-anchor" href="#双主双从" aria-hidden="true">#</a> 双主双从</h4><p>一个主机m1用于处理所有的写请求，它的从机s1和另一台主机m2还有它的从机s2负责所有读请求。当m1主机宕机后，m2主机负责写请求，m1、m2互为备机。架构图如下：<br><img src="'+x+`" title="图片标题" width=""></p><table><thead><tr><th>编号</th><th>角色</th><th>IP地址</th><th>机器名</th></tr></thead><tbody><tr><td>1</td><td>Master1</td><td>192.168.140.128</td><td>host79</td></tr><tr><td>2</td><td>Slave1</td><td>192.168.140.127</td><td>host80</td></tr><tr><td>3</td><td>Master2</td><td>192.168.140.126</td><td>host81</td></tr><tr><td>4</td><td>Slave2</td><td>192.168.140.125</td><td>host82</td></tr></tbody></table><p>1、搭建MySQL数据库主从复制（双主双从）<br> （1）双主机配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Master1配置
修改配置文件： vim /etc/my.cnf
#z主服务器 唯一ID
server-id=1
#启用二进制日志
log-bin=mysql-bin
#设置不要复制的数据库（可设置多个）
binlog-ignore-db=mysql
binlog-ignore-db=information_schema
#设置需要复制的数据库
binlog-do-db=需要复制的数据库名字
#设置logbin格式
binlog_format=STATEMENT
#在作为从数据库的时候，有写入操作也要更新二进制日志文件
log-slave-updates
#表示自增长字段每次递增的量，指自增字段的起始值，其默认值是1，取值范围1~65535
auto-increment-increment=2
#表示自增长字段从哪个数开始，指字段一次递增多少，他的取值范围1~65535
auto-increment-offset=1

Master2配置
修改配置文件：vim /etc/my.cnf
#主服务器唯一ID
server-id=3
#启用二进制日志
log-bin=mysql-bin
#设置不要复制的数据库（可设置多个）
binlog-ignore-db=mysql
binlog-ignore-db=information_schema
#设置需要复制的数据库
binlog-do-db=需要复制的数据库名字
#设置logbin格式
binlog_format=STATEMENT
#在作为从数据库的时候，有写入操作也要更新二进制日志文件
log-slave-updates
#表示自增长字段每次递增的量，指自增字段的起始值，其默认值是1，取值范围1~65535
auto-increment-increment=2
#表示自增长字段从哪个数开始，指字段一次递增多少，他的取值范围1~65535
auto-increment-offset=2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）双从机配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Slave1配置
修改配置文件：vim /etc/my.cnf
#从服务器唯一ID
server-id=2
#启用中继日志
relay-log=mysql-relay

Slave2配置
修改配置文件：vim /etc/my.cnf
#从服务器唯一ID
server-id=4
#启用中继日志
relay-log=mysql-relay
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）双主机、双从机重启mysql服务<br> （4）主机从机都关闭防火墙<br> （5）在两台主机上建立账户并授权slave</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在主机MySQL里执行授权命令
GRANT REPLICATION SLAVE ON *.* TO &#39;slave&#39;@&#39;%&#39; IDENTIFIED BY &#39;123123&#39;;
#查询Master1的状态
show master status;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+h+`" title="图片标题" width=""><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#查询Master2的状态
show master status;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+M+`" title="图片标题" width=""><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#分别记录下File和Position的值
#执行完此步骤后不要再操作主服务器MYSQL，防止主服务器状态发生变化
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>（6）在从机上配置需要复制的主机<br> Slave1复制Master1,Slave2复制Master2</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#复制主机的命令
CHANGE MASTER TO MASTER_HOST=&#39;主机的IP地址&#39;
MASTER_USER=&#39;slave&#39;,
MASTER_PASSWORD=&#39;123123&#39;,
MASTER_LOG_FILE=&#39;mysql-bin.具体数字&#39;,
MASTER_LOG_POS=具体值;

Slave1的复制命令
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+y+`" title="图片标题" width=""><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Slave2的复制命令
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img src="`+S+`" title="图片标题" width=""><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#启动两台从服务器复制功能
start slave;
#查看从服务器状态
show slave status\\G;

#Slave1的复制Master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+I+`" title="图片标题" width=""><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#Slave2的复制Master2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img src="`+T+`" title="图片标题" width=""><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#下面两个参数都是Yes，则说明主从配置成功！
#Slave_IO_Running:Yes
#Slave_SQL_Running:Yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（7）两个主机互相复制<br> Master2复制Master1，Master1复制Master2</p>`,53);function D(R,w){const n=d("RouterLink");return a(),t("div",null,[f,e("ul",null,[e("li",null,[l(n,{to:"/demo/MyCat.html"},{default:r(()=>[i("MyCat安装指南")]),_:1})])]),C])}const L=s(E,[["render",D],["__file","MyCat读写分离.html.vue"]]);export{L as default};
