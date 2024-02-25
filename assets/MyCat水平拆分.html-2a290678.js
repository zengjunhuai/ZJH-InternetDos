import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as i,c as a,d as e,b as n,w as o,e as t,f as l}from"./app-b5233593.js";const c="/ZJH-InternetDos/assets/image/MyCat_25.png",m="/ZJH-InternetDos/assets/image/MyCat_26.png",u="/ZJH-InternetDos/assets/image/MyCat_27.png",v="/ZJH-InternetDos/assets/image/MyCat_28.png",_="/ZJH-InternetDos/assets/image/MyCat_29.png",p={},h=e("h3",{id:"安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),t(" 安装")],-1),b=l('<p>相对于垂直拆分，水平拆分不是将表做分类，而是按照某个字段的某种规则来分散到多个库之中，每个表中包含一部分数据。简单来说，我们可以将数据的水平切分理解为是按照数据行的切分，就是将表中的某些行切分到一个数据库，而另外的某些行又切分到其他的数据库中，如图：<br><img src="'+c+`" title="图片标题" width=""></p><h3 id="实现水平拆分" tabindex="-1"><a class="header-anchor" href="#实现水平拆分" aria-hidden="true">#</a> 实现水平拆分</h3><p>1、选择要拆分的表<br> MySQL单表存储数据条数是有瓶颈的，单表达到1000万条数据就达到了瓶颈，会影响查询效率，需要进行水平拆分（分表）进行优化。<br> 例如：例子中的orders、orders_detail都达到600万行数据，需要进行分表优化。</p><p>2、分表字段<br> 以orders表为例，可以根据不同字段进行分表</p><table><thead><tr><th>编号</th><th>分表字段</th><th>效果</th></tr></thead><tbody><tr><td>1</td><td>id(主键、或者创建时间)</td><td>查询订单注重时效、历史订单被查询的次数少，如此分片会造成一个节点访问多，一个节点访问少、不平均</td></tr><tr><td>2</td><td>customer_id（客户id）</td><td>根据客户id去分，两个节点访问平均，一个客户的所有订单都在同一个节点</td></tr></tbody></table><p>3、修改配置文件schema.xml</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#为orders表设置数据节点为dn1、dn2，并指定分片规则为mod_rule（自定义的名字）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img src="`+m+`" title="图片标题" width=""><p>4、修改配置文件rule.xml</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#在rule配置文件里新增分片规则mod_rule，并指定规则适用字段为customer_id
#还有选择分片算法mod-long（对字段求模运算），customer_id对两个节点求模，根据结果分片
#配置分片算法mod-long参数count为2，两个节点
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+u+'" title="图片标题" width=""><img src="'+v+`" title="图片标题" width=""><p>5、在数据节点dn2上建立orders表<br> 6、重启MyCat，让配置生效<br> 7、访问MyCat实现分片</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#在mycat里向orders表插入数据，INSERT字段不能省略
INSERT INTO orders(id, order_type, customer_id, amount) VALUES (1,101,100,100100);
INSERT INTO orders(id, order_type, customer_id, amount) VALUES (2,101,100,100300);
INSERT INTO orders(id, order_type, customer_id, amount) VALUES (3,101,100,120000);
INSERT INTO orders(id, order_type, customer_id, amount) VALUES (4,101,100,103000);
INSERT INTO orders(id, order_type, customer_id, amount) VALUES (5,102,100,100400);
INSERT INTO orders(id, order_type, customer_id, amount) VALUES (6,102,100,100020);

#在mycat、dn1、dn2中查看orders表数据，分表成功
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+_+`" title="图片标题" width=""><h3 id="全局序列号" tabindex="-1"><a class="header-anchor" href="#全局序列号" aria-hidden="true">#</a> 全局序列号</h3><p>在实现分库分表的情况下，数据库自增主键已经无法保证自增主键的全局唯一。为此，Mycat提供了全局sequence，并且提供了包含本地配置和数据库配置等多种实现方式。</p><p>1、本地文件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>此方式Mycat将sequence配置到文件中，当使用到sequence中配置后，MyCat会更下classpath中的sequence_conf.properties文件中sequence当前的值。
优点：本地加载，读取速度快
缺点：抗风险能力差，Mycat所在主机宕机后，无法读取本地文件。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、数据库方式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>利用数据库一个表来进行技术累加。但是并不是每次生成序列都读写数据库，这样效率太低。MyCat会加载一部分号段到MyCat的内存，这样大部分读写序列都是在内存中完成的。如果内存中的号段用完了MyCat会再向数据库要一次。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3、时间戳方式<br> 4、自主生成全局序列</p>`,22);function g(x,y){const d=r("RouterLink");return i(),a("div",null,[h,e("ul",null,[e("li",null,[n(d,{to:"/demo/MyCat.html"},{default:o(()=>[t("MyCat安装指南")]),_:1})])]),b])}const C=s(p,[["render",g],["__file","MyCat水平拆分.html.vue"]]);export{C as default};
