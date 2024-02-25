import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as c,c as o,b as l,w as i,d as n,e as s}from"./app-b5233593.js";const p={},u=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[n("span",{class:"token comment"},"<!-- 定义数组 -->"),s(`
int[] array = {1,1,2,3,4}

`),n("span",{class:"token comment"},"<!-- 定义二维数组 -->"),s(`
int[][] array = {
    {1,2,3},
    {4,5,6},
    {7,8,9},
};
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),r=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"//动态数组"),s(`
`),n("span",{class:"token keyword"},"package"),s(" com"),n("span",{class:"token punctuation"},"."),s("itheima"),n("span",{class:"token punctuation"},"."),s("datastructure"),n("span",{class:"token punctuation"},"."),s("array"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"import"),s(" java"),n("span",{class:"token punctuation"},"."),s("util"),n("span",{class:"token punctuation"},"."),s("Arrays"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" java"),n("span",{class:"token punctuation"},"."),s("util"),n("span",{class:"token punctuation"},"."),s("Iterator"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" java"),n("span",{class:"token punctuation"},"."),s("util"),n("span",{class:"token punctuation"},"."),s("function"),n("span",{class:"token punctuation"},"."),s("Consumer"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" java"),n("span",{class:"token punctuation"},"."),s("util"),n("span",{class:"token punctuation"},"."),s("stream"),n("span",{class:"token punctuation"},"."),s("IntStream"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token doc-comment comment"},`/**
 * 动态数组
 */`),s(`
`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"DynamicArray"),s(),n("span",{class:"token keyword"},"implements"),s(),n("span",{class:"token class-name"},[s("Iterable"),n("span",{class:"token operator"},"<"),s("Integer"),n("span",{class:"token operator"},">")]),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"private"),s(" int size "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 逻辑大小"),s(`
    `),n("span",{class:"token keyword"},"private"),s(" int capacity "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 容量"),s(`
    `),n("span",{class:"token keyword"},"private"),s(" int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" array "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"public"),s(" int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token function"},"array"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" Arrays"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"copyOf"),n("span",{class:"token punctuation"},"("),s("array"),n("span",{class:"token punctuation"},","),s(" size"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 向最后位置 [size] 添加元素
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"element"),s(` 待添加元素
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"addLast"),n("span",{class:"token punctuation"},"("),s("int element"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
`),n("span",{class:"token comment"},"//        array[size] = element;"),s(`
`),n("span",{class:"token comment"},"//        size++;"),s(`
        `),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("size"),n("span",{class:"token punctuation"},","),s(" element"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 向 [0 .. size] 位置添加元素
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"index"),s(`   索引位置
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"element"),s(` 待添加元素
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("int index"),n("span",{class:"token punctuation"},","),s(" int element"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"checkAndGrow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token comment"},"// 添加逻辑"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("index "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"&&"),s(" index "),n("span",{class:"token operator"},"<"),s(" size"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// 向后挪动, 空出待插入位置"),s(`
            System`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"arraycopy"),n("span",{class:"token punctuation"},"("),s("array"),n("span",{class:"token punctuation"},","),s(" index"),n("span",{class:"token punctuation"},","),s(`
                    array`),n("span",{class:"token punctuation"},","),s(" index "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" size "),n("span",{class:"token operator"},"-"),s(" index"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        array`),n("span",{class:"token punctuation"},"["),s("index"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" element"),n("span",{class:"token punctuation"},";"),s(`
        size`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"checkAndGrow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// 容量检查"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("size "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            array `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"int"),n("span",{class:"token punctuation"},"["),s("capacity"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("size "),n("span",{class:"token operator"},"=="),s(" capacity"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// 进行扩容, 1.5 1.618 2"),s(`
            capacity `),n("span",{class:"token operator"},"+="),s(" capacity "),n("span",{class:"token operator"},">>"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
            int`),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" newArray "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"int"),n("span",{class:"token punctuation"},"["),s("capacity"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
            System`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"arraycopy"),n("span",{class:"token punctuation"},"("),s("array"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
                    newArray`),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(" size"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            array `),n("span",{class:"token operator"},"="),s(" newArray"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 从 [0 .. size) 范围删除元素
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"index"),s(` 索引位置
     * `),n("span",{class:"token keyword"},"@return"),s(` 被删除元素
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(" int "),n("span",{class:"token function"},"remove"),n("span",{class:"token punctuation"},"("),s("int index"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"// [0..size)"),s(`
        int removed `),n("span",{class:"token operator"},"="),s(" array"),n("span",{class:"token punctuation"},"["),s("index"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("index "),n("span",{class:"token operator"},"<"),s(" size "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// 向前挪动"),s(`
            System`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"arraycopy"),n("span",{class:"token punctuation"},"("),s("array"),n("span",{class:"token punctuation"},","),s(" index "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
                    array`),n("span",{class:"token punctuation"},","),s(" index"),n("span",{class:"token punctuation"},","),s(" size "),n("span",{class:"token operator"},"-"),s(" index "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        size`),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" removed"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`


    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 查询元素
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"index"),s(` 索引位置, 在 [0..size) 区间内
     * `),n("span",{class:"token keyword"},"@return"),s(` 该索引位置的元素
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(" int "),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),s("int index"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" array"),n("span",{class:"token punctuation"},"["),s("index"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 遍历方法1
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"consumer"),s(` 遍历要执行的操作, 入参: 每个元素
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"foreach"),n("span",{class:"token punctuation"},"("),s("Consumer"),n("span",{class:"token operator"},"<"),s("Integer"),n("span",{class:"token operator"},">"),s(" consumer"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),s("int i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" size"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// 提供 array[i]"),s(`
            `),n("span",{class:"token comment"},"// 返回 void"),s(`
            consumer`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"accept"),n("span",{class:"token punctuation"},"("),s("array"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},`/**
     * 遍历方法2 - 迭代器遍历
     */`),s(`
    `),n("span",{class:"token decorator"},[n("span",{class:"token at operator"},"@"),n("span",{class:"token function"},"Override")]),s(`
    `),n("span",{class:"token keyword"},"public"),s(" Iterator"),n("span",{class:"token operator"},"<"),s("Integer"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token function"},"iterator"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},[s("Iterator"),n("span",{class:"token operator"},"<"),s("Integer"),n("span",{class:"token operator"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            int i `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`

            `),n("span",{class:"token decorator"},[n("span",{class:"token at operator"},"@"),n("span",{class:"token function"},"Override")]),s(`
            `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token builtin"},"boolean"),s(),n("span",{class:"token function"},"hasNext"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"// 有没有下一个元素"),s(`
                `),n("span",{class:"token keyword"},"return"),s(" i "),n("span",{class:"token operator"},"<"),s(" size"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`

            `),n("span",{class:"token decorator"},[n("span",{class:"token at operator"},"@"),n("span",{class:"token function"},"Override")]),s(`
            `),n("span",{class:"token keyword"},"public"),s(" Integer "),n("span",{class:"token function"},"next"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"// 返回当前元素,并移动到下一个元素"),s(`
                `),n("span",{class:"token keyword"},"return"),s(" array"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 遍历方法3 - stream 遍历
     *
     * `),n("span",{class:"token keyword"},"@return"),s(` stream 流
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(" IntStream "),n("span",{class:"token function"},"stream"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" IntStream"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"of"),n("span",{class:"token punctuation"},"("),s("Arrays"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"copyOfRange"),n("span",{class:"token punctuation"},"("),s("array"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(" size"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function k(m,d){const a=t("CodeDemo");return c(),o("div",null,[l(a,{id:"code-demo-0",type:"normal",title:"%E6%95%B0%E7%BB%84",code:"eJytV2tPG0cU/StTf4gMXq8xeZQmBCVqpSpS1UjNR8yHYT3AFu+utbuG0AgJmpCElFea0ioBtYSEQlIVUEtbwIX8Gc/a/IveeeyLXYIjdQTI3jlz59xz75kd7mUMbI+WrXEzczXT+1E+j+j2i8bBrLe826w/QPl8X8nUTbd/AGHbxhPoOrpXVIpKt3JRuTRZMktmZE3jcK5Z30usjK4tmQgGhIAAk4r8dkm5rFwJvn2s9CifsG+T10pmRsm4DjArFOiTLW9qWgQvmVWsjeJhgjTLUHV3hOgGVsvYxY5r1zS3ZhOVbwkRgIRRtWwXfY3HsFpz9Yp6k005MJeYueUSG7uWnTY3VDM1V7dM9VPLdGoGSQXB/gQb6i3TvcM/cQKFzk7IrRPFU0CdBcijNljRNaRVsOOgzyZMbOgap4cgdIUYxHQdxFkNVkgvhCXDxO7zdaza+hh2CQKZkaN/Q0DhrmuoUEAnU/XW8VP6epPuLiahGgb5dJcVpIfD6fbByaMkMFo4VgwJEJQj89kOnxAbNgH9TSREVjWrOnF7KMtxCifZAZEYjncP+yDkYQMkWnrqrU7RpYXG0XzzaBv1sxUDyPunTp+s0Zn7zb01HxusuVHFNjYQEXIhejyTBgexI+zHLL2McLn8BXRMlmkiV/NMQBE5OG3J4bqPAf4hgs3lcjIlvqRczrKHShDynHxRfxdSVR5oAIm020lXN8vkLjxo7q3Tf5fFuv9FEi4Hj67wbokq4yepjRBt9KZZ/ty2xrMswXAKpBF7iR4MJ/QhBKEZ6T5oU3ThgkyhV3RFNLyMA+JAJ3hzb8E4Cmq+OaSPDlkqi9/TmY1YxnLcmXBcYgjrs8bz205kE8fGSiwhKIeKoklRXjzxiycLGO8Ljog3RmpbBJX3vcWljmsYTT9wpPdqyvtlIy6h8DkomFDM96pJxrk7fZsPRHMArg6YOxLIh6VVoPVupfVyzpt9A3wUVFQvw++VYg/qjiODAyUXhkN9fagY2Znz52cG8BNH3Pupvq+gXWcU0w/NELHDJkUjDkyWN9WmjfpCxKYdqDV3n67s0cdrJ89ft2PTdJPKk7K1/ltapLg7mRNtYlhjJPQnVIwVqb9LVTmtSKME6DIkG+3WSMKhIYUFoeeLZ9lwdl7Y8AP8xs10vufifuMc0j3HYPl8ZE7KJ/OMei1ZQLBRa2f9Q0ulILq6FeqL6NzhyU979OFMsoY7G9GFzRcPzivmMBEvHr+SibxSqpbamyfT83ThoffjgffncvGs3DR5Z5Ho1q/T3uwmWBuIes/mG0erkOrMBl389irydhYb+2/PfVMMWXC/0Uay/m0ovJz4e8WSAjjrNshXXFJ02XTwKZdL6zpvcalxvOKrMJByNP1AV37mXE4dRnJ7FWsaqbqiJyFCSludq2c39GPr3e+N+iv6fEtMnJLkxu0xYtt6mcQU8u+RoSi6fJJ6V2LHYGJJHMlGKF/0hZvCwh+SzaBlVQg20Qh2viR3XRaYK7w66/3xEv429r9r7E+dLnpkSJpBzeKIQMX22Mj8IOmQiigmPXoGB40godCDv5ubcI/Yoo932yUoS53LnX6PRI4RdpFtq/YXofbiOi8fJ70lt5Uo76/pdL8E/w1IZGoPBCDVGsrGLs9fYXOYhG8+8QqK3CrhJzP5H0HAz8Q="},{default:i(()=>[u,r]),_:1})])}const y=e(p,[["render",k],["__file","array.html.vue"]]);export{y as default};
