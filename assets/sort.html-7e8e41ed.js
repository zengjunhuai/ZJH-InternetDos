import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as l,c as i,b as t,w as e,d as n,e as s}from"./app-b5233593.js";const o="/ZJH-InternetDos/assets/image/bubble_sort.gif",u={},r=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * 冒泡排序
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"arr"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(` arr
 */`)]),s(`
`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"static"),s(" int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token function"},"bubbleSort"),n("span",{class:"token punctuation"},"("),s("int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" arr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),s("int i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" arr"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// Set a flag, if true, that means the loop has not been swapped,"),s(`
        `),n("span",{class:"token comment"},"// that is, the sequence has been ordered, the sorting has been completed."),s(`
        `),n("span",{class:"token builtin"},"boolean"),s(" flag "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),s("int j "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" j "),n("span",{class:"token operator"},"<"),s(" arr"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"-"),s(" i"),n("span",{class:"token punctuation"},";"),s(" j"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("arr"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},">"),s(" arr"),n("span",{class:"token punctuation"},"["),s("j "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                int tmp `),n("span",{class:"token operator"},"="),s(" arr"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
                arr`),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" arr"),n("span",{class:"token punctuation"},"["),s("j "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
                arr`),n("span",{class:"token punctuation"},"["),s("j "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" tmp"),n("span",{class:"token punctuation"},";"),s(`
       `),n("span",{class:"token comment"},"// Change flag"),s(`
                flag `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("flag"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" arr"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),k=n("img",{src:o,title:"冒泡排序",width:""},null,-1),d=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * 选择排序
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"arr"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(` arr
 */`)]),s(`
`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"static"),s(" int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token function"},"selectionSort"),n("span",{class:"token punctuation"},"("),s("int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" arr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),s("int i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" arr"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        int minIndex `),n("span",{class:"token operator"},"="),s(" i"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),s("int j "),n("span",{class:"token operator"},"="),s(" i "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" j "),n("span",{class:"token operator"},"<"),s(" arr"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" j"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("arr"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"<"),s(" arr"),n("span",{class:"token punctuation"},"["),s("minIndex"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                minIndex `),n("span",{class:"token operator"},"="),s(" j"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("minIndex "),n("span",{class:"token operator"},"!="),s(" i"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            int tmp `),n("span",{class:"token operator"},"="),s(" arr"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
            arr`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" arr"),n("span",{class:"token punctuation"},"["),s("minIndex"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
            arr`),n("span",{class:"token punctuation"},"["),s("minIndex"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" tmp"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" arr"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`


`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),m=n("img",{src:o,title:"冒泡排序",width:""},null,-1),b=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * 插入排序
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"arr"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(` arr
 */`)]),s(`
`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"static"),s(" int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token function"},"insertionSort"),n("span",{class:"token punctuation"},"("),s("int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" arr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),s("int i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" arr"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        int preIndex `),n("span",{class:"token operator"},"="),s(" i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
        int current `),n("span",{class:"token operator"},"="),s(" arr"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("preIndex "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"&&"),s(" current "),n("span",{class:"token operator"},"<"),s(" arr"),n("span",{class:"token punctuation"},"["),s("preIndex"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            arr`),n("span",{class:"token punctuation"},"["),s("preIndex "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" arr"),n("span",{class:"token punctuation"},"["),s("preIndex"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
            preIndex `),n("span",{class:"token operator"},"-="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        arr`),n("span",{class:"token punctuation"},"["),s("preIndex "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" arr"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("img",{src:o,title:"冒泡排序",width:""},null,-1);function w(y,g){const a=p("CodeDemo");return l(),i("div",null,[t(a,{id:"code-demo-0",type:"normal",title:"%E5%86%92%E6%B3%A1%E6%8E%92%E5%BA%8F",code:"eJx1Us1SwjAQfpWdnhCQylXUccZH4AgcEti2wTSJSToeGK4edYY38Bm8+T7wHG7SQqsd97LZ/X6Sr9Nd4l1ym6TD4VLBEI5vh9PX5+n9cPz+iItHwywrgVlbjxZ9ZdV5TpfKVFyKNTjPPDWh/GIFvOJc4lxbP6gXRL+CHSmoMm0hrEHAPUxn1O4CPpGocl/QPBpduKHSFObogUEmWT4GkYG3FY7BF8xDiUw5OiJIrQ0UzIHSHjiiAvfKjMHN+JdVVAkX5AgOXypUa4y6qNF2g5Y0NUwBhMpbdK1LI9HjZtJ6cq0lPSK+jgKFt81a9BJ2S9jNjFo3LFyDoN2fwKEo5YB4i+0KHoJgsYURTFc9XuSSvS8NXVArOtefq7FqGNHqP1YEQ5DStBT6cE8FUznGmH1lEz5j0nXTh9q3Y+cY8gVRLxC3yJ47Fo2mae3fRxTaLVWy/wF06svq"},{default:e(()=>[r,k]),_:1}),t(a,{id:"code-demo-4",type:"normal",title:"%E9%80%89%E6%8B%A9%E6%8E%92%E5%BA%8F",code:"eJxtUUsKwkAMvUrsSlv8bf2AW9cuaxdVR53STss0giCCWxEUvIVX8D4K3sLE1mn9pIs0L++9PJiNhanVsZq2PVZgw2O3vx8u9+P5dj29gEHiaz8CX+ts1AJXWr3n5lglq0kop5Cij9SkQteDVIRiijJWo1hjNcNIUYMNiajmsQaGQUIfWl1qPd43QqEWuIQ6tAlzHMPnYnok1VDNxJpUslusjF3AC3BYHnxY0vxl97KcQ5U4buBlZPft7/1QuUrXg9J1rm0xln7Z34gqFO03AYXGKCFHPi+9L9sMzLcm3B+S2RGX/EqMPE7eitcjCmH8WdsnkaaWhA=="},{default:e(()=>[d,m]),_:1}),t(a,{id:"code-demo-8",type:"normal",title:"%E6%8F%92%E5%85%A5%E6%8E%92%E5%BA%8F",code:"eJxtUDsOgkAQvcqEwijEX6tibK0tgQJ11U1wIcMSTYylrSTcwUt4HziHs3wWSJyCYd5n3u4+DBkbC2Nqmq4AE4o0y1+f4p3l37QENpGP/hV8xGpEJhMUzTx1RZTsA36AWPqSGhfS8egbM5Q8FLsQ5bDCyDGCB5moTiGCgoGDDfMltZXiJwETZ3mh2bK0VpWSRsi24sju5OAwJlefPiSIjLqtFjnc69C3Cw8YDPWCtQ0zGAy0pcx2GtrrJavqsmDB3KtDtKOTpUprx+pyLfdsf/+trI9TG2px+9yEE+YK4/kDZLmHMA=="},{default:e(()=>[b,v]),_:1})])}const x=c(u,[["render",w],["__file","sort.html.vue"]]);export{x as default};