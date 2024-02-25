import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c,b as l,w as p,d as n,e as s}from"./app-b5233593.js";const u={},i=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(" com"),n("span",{class:"token punctuation"},"."),s("itheima"),n("span",{class:"token punctuation"},"."),s("datastructure"),n("span",{class:"token punctuation"},"."),s("linkedlist"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"import"),s(" java"),n("span",{class:"token punctuation"},"."),s("util"),n("span",{class:"token punctuation"},"."),s("Iterator"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" java"),n("span",{class:"token punctuation"},"."),s("util"),n("span",{class:"token punctuation"},"."),s("function"),n("span",{class:"token punctuation"},"."),s("Consumer"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token doc-comment comment"},`/**
 * 单向链表
 */`),s(`
`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"SinglyLinkedList"),s(),n("span",{class:"token keyword"},"implements"),s(),n("span",{class:"token class-name"},[s("Iterable"),n("span",{class:"token operator"},"<"),s("Integer"),n("span",{class:"token operator"},">")]),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"// 整体"),s(`
    `),n("span",{class:"token keyword"},"private"),s(" Node head "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 头指针"),s(`

    `),n("span",{class:"token decorator"},[n("span",{class:"token at operator"},"@"),n("span",{class:"token function"},"Override")]),s(`
    `),n("span",{class:"token keyword"},"public"),s(" Iterator"),n("span",{class:"token operator"},"<"),s("Integer"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token function"},"iterator"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// 匿名内部类 -> 带名字内部类"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"NodeIterator"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"NodeIterator"),s(),n("span",{class:"token keyword"},"implements"),s(),n("span",{class:"token class-name"},[s("Iterator"),n("span",{class:"token operator"},"<"),s("Integer"),n("span",{class:"token operator"},">")]),s(),n("span",{class:"token punctuation"},"{"),s(`
        Node p `),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token decorator"},[n("span",{class:"token at operator"},"@"),n("span",{class:"token function"},"Override")]),s(`
        `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token builtin"},"boolean"),s(),n("span",{class:"token function"},"hasNext"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"// 是否有下一个元素"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" p "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token decorator"},[n("span",{class:"token at operator"},"@"),n("span",{class:"token function"},"Override")]),s(`
        `),n("span",{class:"token keyword"},"public"),s(" Integer "),n("span",{class:"token function"},"next"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"// 返回当前值, 并指向下一个元素"),s(`
            int v `),n("span",{class:"token operator"},"="),s(" p"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},";"),s(`
            p `),n("span",{class:"token operator"},"="),s(" p"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" v"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},`/**
     * 节点类
     */`),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"static"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Node"),s(),n("span",{class:"token punctuation"},"{"),s(`
        int value`),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 值"),s(`
        Node next`),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 下一个节点指针"),s(`

        `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token function"},"Node"),n("span",{class:"token punctuation"},"("),s("int value"),n("span",{class:"token punctuation"},","),s(" Node next"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(" value"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" next"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 向链表头部添加
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"value"),s(` 待添加值
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"addFirst"),n("span",{class:"token punctuation"},"("),s("int value"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// 1. 链表为空"),s(`
`),n("span",{class:"token comment"},"//        head = new Node(value, null);"),s(`
        `),n("span",{class:"token comment"},"// 2. 链表非空"),s(`
        head `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Node"),n("span",{class:"token punctuation"},"("),s("value"),n("span",{class:"token punctuation"},","),s(" head"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 遍历链表1
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"consumer"),s(` 要执行的操作
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"loop1"),n("span",{class:"token punctuation"},"("),s("Consumer"),n("span",{class:"token operator"},"<"),s("Integer"),n("span",{class:"token operator"},">"),s(" consumer"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        Node p `),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("p "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            consumer`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"accept"),n("span",{class:"token punctuation"},"("),s("p"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            p `),n("span",{class:"token operator"},"="),s(" p"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 遍历链表2
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"consumer"),s(` 要执行的操作
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"loop2"),n("span",{class:"token punctuation"},"("),s("Consumer"),n("span",{class:"token operator"},"<"),s("Integer"),n("span",{class:"token operator"},">"),s(" consumer"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),s("Node p "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(" p "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(" p "),n("span",{class:"token operator"},"="),s(" p"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            consumer`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"accept"),n("span",{class:"token punctuation"},"("),s("p"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"loop3"),n("span",{class:"token punctuation"},"("),s("Consumer"),n("span",{class:"token operator"},"<"),s("Integer"),n("span",{class:"token operator"},">"),s(" before"),n("span",{class:"token punctuation"},","),s(`
                      Consumer`),n("span",{class:"token operator"},"<"),s("Integer"),n("span",{class:"token operator"},">"),s(" after"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"recursion"),n("span",{class:"token punctuation"},"("),s("head"),n("span",{class:"token punctuation"},","),s(" before"),n("span",{class:"token punctuation"},","),s(" after"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"recursion"),n("span",{class:"token punctuation"},"("),s("Node curr"),n("span",{class:"token punctuation"},","),s(`
                           Consumer`),n("span",{class:"token operator"},"<"),s("Integer"),n("span",{class:"token operator"},">"),s(" before"),n("span",{class:"token punctuation"},","),s(" Consumer"),n("span",{class:"token operator"},"<"),s("Integer"),n("span",{class:"token operator"},">"),s(" after"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"// 某个节点要进行的操作"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("curr "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        before`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"accept"),n("span",{class:"token punctuation"},"("),s("curr"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"recursion"),n("span",{class:"token punctuation"},"("),s("curr"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},","),s(" before"),n("span",{class:"token punctuation"},","),s(" after"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        after`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"accept"),n("span",{class:"token punctuation"},"("),s("curr"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"private"),s(" Node "),n("span",{class:"token function"},"findLast"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("head "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"// 空链表"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        Node p`),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),s("p "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(" p"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(" p "),n("span",{class:"token operator"},"="),s(" p"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" p"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 向链表尾部添加
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"value"),s(` 待添加值
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"addLast"),n("span",{class:"token punctuation"},"("),s("int value"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        Node last `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"findLast"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("last "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"// 空链表"),s(`
            `),n("span",{class:"token function"},"addFirst"),n("span",{class:"token punctuation"},"("),s("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        last`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Node"),n("span",{class:"token punctuation"},"("),s("value"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"private"),s(" Node "),n("span",{class:"token function"},"findNode"),n("span",{class:"token punctuation"},"("),s("int index"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        int i `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),s("Node p "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(" p "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(" p "),n("span",{class:"token operator"},"="),s(" p"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},","),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"=="),s(" index"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"return"),s(" p"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 没找到"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 根据索引查找
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"index"),s(` 索引
     * `),n("span",{class:"token keyword"},"@return"),s(` 找到, 返回该索引位置节点的值
     * `),n("span",{class:"token keyword"},"@throws"),s(` IllegalArgumentException 找不到, 抛出 index 非法异常
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(" int "),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),s("int index"),n("span",{class:"token punctuation"},")"),s(" throws IllegalArgumentException "),n("span",{class:"token punctuation"},"{"),s(`
        Node node `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"findNode"),n("span",{class:"token punctuation"},"("),s("index"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token function"},"illegalIndex"),n("span",{class:"token punctuation"},"("),s("index"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" node"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"private"),s(" IllegalArgumentException "),n("span",{class:"token function"},"illegalIndex"),n("span",{class:"token punctuation"},"("),s("int index"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"IllegalArgumentException"),n("span",{class:"token punctuation"},"("),s(`
                String`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"format"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"index [%d] 不合法%n"'),n("span",{class:"token punctuation"},","),s(" index"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 向索引位置插入
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"index"),s(` 索引
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"value"),s(` 待插入值
     * `),n("span",{class:"token keyword"},"@throws"),s(` IllegalArgumentException 找不到, 抛出 index 非法异常
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"insert"),n("span",{class:"token punctuation"},"("),s("int index"),n("span",{class:"token punctuation"},","),s(" int value"),n("span",{class:"token punctuation"},")"),s(" throws IllegalArgumentException "),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("index "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token function"},"addFirst"),n("span",{class:"token punctuation"},"("),s("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        Node prev `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"findNode"),n("span",{class:"token punctuation"},"("),s("index "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 找到上一个节点"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("prev "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"// 找不到"),s(`
            `),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token function"},"illegalIndex"),n("span",{class:"token punctuation"},"("),s("index"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        prev`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Node"),n("span",{class:"token punctuation"},"("),s("value"),n("span",{class:"token punctuation"},","),s(" prev"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 删除第一个
     *
     * `),n("span",{class:"token keyword"},"@throws"),s(` IllegalArgumentException - 如果不存在, 抛出 index 非法异常
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"removeFirst"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(" throws IllegalArgumentException "),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("head "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token function"},"illegalIndex"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        head `),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 从索引位置删除
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"index"),s(` 索引
     * `),n("span",{class:"token keyword"},"@throws"),s(` IllegalArgumentException 找不到, 抛出 index 非法异常
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"remove"),n("span",{class:"token punctuation"},"("),s("int index"),n("span",{class:"token punctuation"},")"),s(" throws IllegalArgumentException "),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("index "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token function"},"removeFirst"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        Node prev `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"findNode"),n("span",{class:"token punctuation"},"("),s("index "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 上一个节点"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("prev "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token function"},"illegalIndex"),n("span",{class:"token punctuation"},"("),s("index"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        Node removed `),n("span",{class:"token operator"},"="),s(" prev"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 被删除的节点"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("removed "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token function"},"illegalIndex"),n("span",{class:"token punctuation"},"("),s("index"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        prev`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" removed"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function k(r,d){const a=t("CodeDemo");return o(),c("div",null,[l(a,{id:"code-demo-0",type:"normal",title:"%E5%8D%95%E5%90%91%E9%93%BE%E8%A1%A8",code:"eJy9V2lPG0cY/itTS5EWYszRb02JqKpWQkLph3ys+2GxB3ub9ay1OzZUKBIhkADFKQ1FTYESiAKlba62qDX3n/Gs7X/ROfaYvQwmtKMowBzv8bzP+8zsdApbqY9SZTV3Ty1AkDNKGQ0XoVZSM3kVqxY2KzlcMWFG19A9mNc1C9/KoizSSmXDxOBrtapmKljTM6MYmio2TLoaWZuooBzWDJT51EBWpQTZpizq7+3NItALSG2NrHzfXj1r7eyzif4sKlfGdS0HcrpqWeCuhgr6N2Pc/xj1D6h9HZYgwhbgXsd1+PEowrAAzdtgGvT3A3vtoHG6So3RUTa1qoohuGPkIShCNQ+GAaro+i22kbw8sJcft58usIDY7pEvqtA0tTx0DotA3OR8N5ozo/SAabGVDWZx+Zys1Mij+fbD/eYfx6DvNiD1PTb1+kdv1j9hQoouAghO8gBdR0oPhYit33cDc9MQmMh7I3gEApWi4wiUafoMBV4CdyWUtZT5uGHoUEWgqFp34BRm6XKAn70lK3v25mKj/m2jPtOo/0bmHzYPtv3zUnJl8IEDub/s5dXZvZMGxcf33Tr/gWxskdNVslgjMydpQA7/pkWkHOoYjIYwqNLky5mqqlegFAv3x1eYm9CCk0M1GHsgBUFkNnpBa2m2OXvol5ixWS6fhVXsMZsXRCoQD5EHx5k0cxKqHQ+PLXmJCndBCkvwsVOKZzXtWwmwlg1c1CwBDAUiDiC+gR1l7ROEqRMeXmfTTqPct/85JktuYfxdI2XVVEvCLyBn82KbD4CHokiramh5oObzn2umhf38wq04mAHCd6N+1Pz1iCpOv7vq6oDTdoqDDyOp23mOkSHXSPvnLW7kAhNsOtK8MiLtBzXy5JGwOZiERM4RStDae2Av/tLaWW6uz9mrtcbpZgdIdMMoDyquyPoa4FoLABRWA3d+sqjpEChe00ao4lrLqLkcLGPFaSgZNx5YXEd1oooMzND1AzN0WWAmqKQqQXQkCZPyugoyYQDCUX4YE+U4pCHBdNCXP6IH1Al6DQSiM2GuYlr0ClZYPmnXpLMz6a7hUflHOSb0DzMxlIR4XG/JkfI75fmKp2i0uq3zjZjq0qFNAIVFAYYTCCokO+myEcG4JWKGolXyc+brrNgJmLHBJ5INRmDlOE5oKD9G31fBBwTLTQiLlxuDhgqP9z6K3k2drlbBY2mVs1sittD0JHZHiCtf651Uztf9d2fXrvsct3jZ5/nSy5VdUz7EUv4MYbF+GYS9SyZW4joTjXnxb8zkiyaZH971TX+HU0GisFlqeCBc2ssIVxpoN29G2oYhQ00Ox3hLqHwMN6I08d7a9p879uIZWXjXgTb29qFde9M8eEFO1uznu3R/Emd4kEDs9Nccn8JP2nkqtt7uin2N01rz9I3zRFufk3gGRnDRNCbpA1rXYUHVPzELVKgQ/myKNTUVAmayUa9xq/bSBnl85ERAnwX2X2vkZJbU6/GsZaUqQEFYB9qLnIUJjdh/gtAOJ5iZEKvFpgRN5B6BJhyOsuNRIzG1oyYDz+UIVxNTCLmK47D07ZNkRoly8C426QdhhpK9pGIlmxJl+PJG/iv6LK6RlQVajhsom6Ik5x47PsaoTMnUsL97SuZ3u6NcWMK4if+JWlwQNWRBU6IXS9yTxi6YxvufO6YkGogwqHspDN5BJmRfX0EKgz4w2CPEgXdso74kf9cEYxMWAqrtIfdeZGeGk4TaW+tMo4Xt9k8vm69eieijBLqoDH2A7M3aW5ssm9fPyOb+1ahgwpJRhaJMXdc+9O64ENKBBDidDyP2Q37+xwLXOH4i95/Asbv++4+7S0B6RfG+oKUC5erqbXGZluqmmd6rf3gwIhdWeK9leBStF7873bE+FxeId+56YpF72TEdIiH9l7r/L56ZQRk="},{default:p(()=>[i]),_:1})])}const b=e(u,[["render",k],["__file","list.html.vue"]]);export{b as default};
