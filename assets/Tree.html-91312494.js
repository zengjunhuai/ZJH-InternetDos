import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as i,c as p,b as e,w as t,d as n,e as s,f as u,a as o}from"./app-b5233593.js";const r={},d=n("h2",{id:"二叉树",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#二叉树","aria-hidden":"true"},"#"),s(" 二叉树")],-1),k=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,`// 二叉树概述
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),m=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,`// 深度优先遍历
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(" Object "),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),s("int key"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    BSTNode node `),n("span",{class:"token operator"},"="),s(" root"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("node "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("key "),n("span",{class:"token operator"},"<"),s(" node"),n("span",{class:"token punctuation"},"."),s("key"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            node `),n("span",{class:"token operator"},"="),s(" node"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("key "),n("span",{class:"token operator"},"<"),s(" key"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            node `),n("span",{class:"token operator"},"="),s(" node"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" node"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,`// 广度优先遍历
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(" Object "),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),s("int key"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    BSTNode node `),n("span",{class:"token operator"},"="),s(" root"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("node "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("key "),n("span",{class:"token operator"},"<"),s(" node"),n("span",{class:"token punctuation"},"."),s("key"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            node `),n("span",{class:"token operator"},"="),s(" node"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("key "),n("span",{class:"token operator"},"<"),s(" key"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            node `),n("span",{class:"token operator"},"="),s(" node"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" node"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,`// 广度优先遍历
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),w=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(" Object "),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),s("int key"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    BSTNode node `),n("span",{class:"token operator"},"="),s(" root"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("node "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("key "),n("span",{class:"token operator"},"<"),s(" node"),n("span",{class:"token punctuation"},"."),s("key"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            node `),n("span",{class:"token operator"},"="),s(" node"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("key "),n("span",{class:"token operator"},"<"),s(" key"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            node `),n("span",{class:"token operator"},"="),s(" node"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" node"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,`// 广度优先遍历
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),E=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(" Object "),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),s("int key"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    BSTNode node `),n("span",{class:"token operator"},"="),s(" root"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("node "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("key "),n("span",{class:"token operator"},"<"),s(" node"),n("span",{class:"token punctuation"},"."),s("key"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            node `),n("span",{class:"token operator"},"="),s(" node"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("key "),n("span",{class:"token operator"},"<"),s(" key"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            node `),n("span",{class:"token operator"},"="),s(" node"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" node"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),B=u('<ul><li>最大深度</li><li>最小深度</li><li>翻转二叉树</li><li>根据后缀表达式构建树</li><li>根据前中遍历结果构建树</li><li>根据中后遍历结果遍历树</li></ul><h2 id="二叉搜索树" tabindex="-1"><a class="header-anchor" href="#二叉搜索树" aria-hidden="true">#</a> 二叉搜索树</h2><ul><li>二叉搜索树概述</li></ul><h2 id="avl树" tabindex="-1"><a class="header-anchor" href="#avl树" aria-hidden="true">#</a> AVL树</h2><ul><li>AVL树概述</li><li>高度和平衡因子</li><li>四种失衡情况</li><li>旋转</li><li>新增或更新</li><li>删除</li></ul><h2 id="红黑树" tabindex="-1"><a class="header-anchor" href="#红黑树" aria-hidden="true">#</a> 红黑树</h2><ul><li>红黑树概述</li><li>新增或更新</li><li>删除</li></ul>',7);function f(_,C){const a=c("CodeDemo");return i(),p("div",null,[d,e(a,{id:"code-demo-3",type:"normal",title:"%E4%BA%8C%E5%8F%89%E6%A0%91%E6%A6%82%E8%BF%B0",code:"eJyrVspNLMpOyS/PU7JS0tdXeLKr52l/57MFE58ta3qxf0NMnlItABL1EQk="},{default:t(()=>[k,o(` <iframe
  :src="$withBase('')"
  width="100%"
  height="400"
  frameborder="0"
  scrolling="No"
  leftmargin="0"
  topmargin="0"
/> `)]),_:1}),e(a,{id:"code-demo-7",type:"normal",title:"%E6%B7%B1%E5%BA%A6%E4%BC%98%E5%85%88%E9%81%8D%E5%8E%86",code:"eJyrVspNLMpOyS/PU7JS0tdXeLZ949Ndy57smfG0teNlY+/TvraYPCUdpZJioHRBaVJOZrKCf1JWanKJQnpqiUZmXolCdmqlpkJ1TJ4CEDgFh/jlp6Qq5IEIW4Wi/PwSa4hMeUZmTqqCBlhC0VYhrzQnB64LBDLTFDSAJinYgPXqIRsKA1BDwfI5qWkwk0GgViE1pzgVbAhMO9AkQoYUZaZnYDEFTUdRaklpUR5ER1liTmkqsg4IE0rBVAL9BlQDFFSqBQCHym18"},{default:t(()=>[m,b,o(" ```haml\n// 烦烦烦\n``` ")]),_:1}),e(a,{id:"code-demo-12",type:"normal",title:"%E5%B9%BF%E5%BA%A6%E4%BC%98%E5%85%88%E9%81%8D%E5%8E%86",code:"eJyrVspNLMpOyS/PU7JS0tdXeLpz/9Ndy57smfG0teNlY+/TvraYPCUdpZJioHRBaVJOZrKCf1JWanKJQnpqiUZmXolCdmqlpkJ1TJ4CEDgFh/jlp6Qq5IEIW4Wi/PwSa4hMeUZmTqqCBlhC0VYhrzQnB64LBDLTFDSAJinYgPXqIRsKA1BDwfI5qWkwk0GgViE1pzgVbAhMO9AkQoYUZaZnYDEFTUdRaklpUR5ER1liTmkqsg4IE0rBVAL9BlQDFFSqBQCbTW2L"},{default:t(()=>[v,y,o(" ```haml\n// 烦烦烦\n``` ")]),_:1}),e(a,{id:"code-demo-17",type:"normal",title:"%E5%89%8D%E4%B8%AD%E5%90%8E%E9%81%8D%E5%8E%86%EF%BC%88%E9%80%92%E5%BD%92%E3%80%81%E9%9D%9E%E9%80%92%E5%BD%92%EF%BC%89",code:"eJyrVspNLMpOyS/PU7JS0tdXeLpz/9Ndy57smfG0teNlY+/TvraYPCUdpZJioHRBaVJOZrKCf1JWanKJQnpqiUZmXolCdmqlpkJ1TJ4CEDgFh/jlp6Qq5IEIW4Wi/PwSa4hMeUZmTqqCBlhC0VYhrzQnB64LBDLTFDSAJinYgPXqIRsKA1BDwfI5qWkwk0GgViE1pzgVbAhMO9AkQoYUZaZnYDEFTUdRaklpUR5ER1liTmkqsg4IE0rBVAL9BlQDFFSqBQCbTW2L"},{default:t(()=>[h,w,o(" ```haml\n// 烦烦烦\n``` ")]),_:1}),e(a,{id:"code-demo-22",type:"normal",title:"%E5%AF%B9%E7%A7%B0%E4%BA%8C%E5%8F%89%E6%A0%91",code:"eJyrVspNLMpOyS/PU7JS0tdXeLpz/9Ndy57smfG0teNlY+/TvraYPCUdpZJioHRBaVJOZrKCf1JWanKJQnpqiUZmXolCdmqlpkJ1TJ4CEDgFh/jlp6Qq5IEIW4Wi/PwSa4hMeUZmTqqCBlhC0VYhrzQnB64LBDLTFDSAJinYgPXqIRsKA1BDwfI5qWkwk0GgViE1pzgVbAhMO9AkQoYUZaZnYDEFTUdRaklpUR5ER1liTmkqsg4IE0rBVAL9BlQDFFSqBQCbTW2L"},{default:t(()=>[g,E,o(" ```haml\n// 烦烦烦\n``` ")]),_:1}),B])}const A=l(r,[["render",f],["__file","Tree.html.vue"]]);export{A as default};
