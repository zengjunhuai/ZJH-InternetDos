import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as a,c as l,d as e,b as r,w as t,e as i,f as c}from"./app-b5233593.js";const v="/ZJH-InternetDos/assets/image/MyCat_21.png",m="/ZJH-InternetDos/assets/image/MyCat_22.png",u="/ZJH-InternetDos/assets/image/MyCat_23.png",o="/ZJH-InternetDos/assets/image/MyCat_24.png",b={},_=e("h3",{id:"安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),i(" 安装")],-1),p=c('<p>一个数据库由很多表的构成，每个表对应着不同的业务，垂直切分是指按照业务将表进行分类，分布到不同的数据库上面，这样也就将数据或者说压力分担到不同的数据库，如下图：</p><img src="'+v+`" title="图片标题" width=""><h3 id="如何划分表" tabindex="-1"><a class="header-anchor" href="#如何划分表" aria-hidden="true">#</a> 如何划分表</h3><p>分库原则：有紧密关联的表应该在一个库里，相互没有关联的表可以分到不同的库里。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#客户表 rows:20万
CREATE TABLE customer(
    id INT AUTO_INCREMENT,
    NAME VARCHAR(200),
    PRIMARY KEY(id)
);

#订单 rows:600万
CREATE TABLE ordes(
    id INT AUTO_INCREMENT,
    order_type INT,
    customer_id INT,
    amount DECIMAL(10,2),
    PRIMARY KEY(id)
);

#订单详情表  row:600万
CREATE TABLE orders_detail(
    id INT AUTO_INCREMENT,
    detail VARCHAR(2000),
    order_id INT,
    PRIMARY KEY(id)
);

#订单状态字典表 rows:20
CREATE TABLE order_type(
    id INT AUTO_INCREMENT,
    order_type VARCHAR(200),
    PRIMARY KEY(id)
);

#以上四个表如何分库？客户表分在一个数据库，另外三张都需要关联查询，分在另外一个数据库。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实现分库" tabindex="-1"><a class="header-anchor" href="#实现分库" aria-hidden="true">#</a> 实现分库</h3><p>1、修改schema配置文件<br><img src="`+m+`" title="图片标题" width=""></p><p>2、新增两个空白库<br> 分库操作不是在原来的老数据库上进行操作，需要准备两台机器分别安装新的数据库</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#在数据库节点dn1、dn2上分别创建数据库orders
CREATE DATABASE orders;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>3、启动MyCat</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./mycat console
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img src="`+u+`" title="图片标题" width=""><p>4、访问MyCat进行分库</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#访问MyCat
mysql -umycat -p123456 -h 192.168.140.128 -P 8066

#切换到TESTDB
#创建4张表
#查看表信息，可以看到成功分库
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+o+'" title="图片标题" width="">',15);function h(E,g){const n=d("RouterLink");return a(),l("div",null,[_,e("ul",null,[e("li",null,[r(n,{to:"/demo/MyCat.html"},{default:t(()=>[i("MyCat安装指南")]),_:1})])]),p])}const C=s(b,[["render",h],["__file","MyCat垂直拆分.html.vue"]]);export{C as default};
