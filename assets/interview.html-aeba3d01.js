import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as l,c as p,f as a}from"./app-b5233593.js";const b={},r=a("<ul><li><p>消息队列如何保证消息可靠性？<br> 消息可靠性传输代表了两层意思，既不能多也不能少。<br> 1、为了保证消息不多，也就是消息不能重复，也就是生产者不能重复生产消息，或者消费者不能重复消费消息<br> a、首先要确保消息不多发，这个不常出现，也比较难控制，因为如果出现了多发，很大的原因是生产者自己的原因，如果要避免出现问题，就需要在消费端做控制<br> b、要避免不重复消费，最保险的机制就是消费者实现幂等性，保证就算重复消费，也不会有问题，通过幂等性，也能解决生产者重复发送消息的问题。<br> 2、消息不能少，意思就是消息不能丢失，生产者发送的消息，消费者一定要能消费到，对于这个问题，就要考虑两个方面：<br> a、生产者发送消息时，要确认broker确实收到并持久化了这条消息，比如RabbitMQ的confirm机制，KafKa的ack机制都可以保证生产者能正确的将消息发送给broker<br> b、broker要等待消费者真正确认消费到了消息时才删除消息，这里通常就是消费者ack机制，消费者接收到一条消息后，如果确认没问题了，就可以给broker发送一个ack，broker就收到ack后才会删除消息。</p></li><li><p>消息队列有哪些作用？<br> 解耦、异步、削峰</p></li><li><p>如何保证消息不被重复消费？<br> 幂等：一个数据或者一个请求，重复来多次，确保对应的数据是不会改变的，不能出错。<br> 思路：<br> a、如果是写redis，就没有问题，反正每次都是set，天然幂等性。<br> b、生产者发送消息的时候带上一个全局唯一的id，消费者拿到消息后，先根据这个id去redis里查一下，之前有没有消费过，没有消费过就处理，并且写入这个id到redis，如果消费过了，则不处理。<br> c、基于数据库的唯一键。</p></li><li><p>消息队列的优缺点，使用场景？<br> 优点：解耦、削峰、削峰<br> 缺点：<br> a、增加了系统的复杂度、幂等、重复消费、消息丢失等问题的带入。<br> b、系统可用性降低，MQ的故障会影响系统可用。<br> c、一致性，消费端可能失败。</p></li><li><p>死信队列是什么？延时队列是什么？<br> 1、死信队列也是一个消息队列，它是用来存放那些没有成功消费的消息的，通常可以用来作为消息重试。<br> 2、延时队列就是用来存放需要在指定时间被处理的元素的队列，通常可以用来处理一些具有过期性操作的业务，比如十分钟内未支付则取消订单。</p></li><li><p>简述KafKa的rebalance机制？</p></li><li><p>简述KafKa的副本同步机制？</p></li><li><p>简述KafKa架构设计？</p></li><li><p>KafKa中的ZK的作用？</p></li><li><p>KafKa中高性能的原因分析？</p></li><li><p>KafKa为什么比RocketMQ的吞吐量要高？</p></li><li><p>KafKa消息丢失的场景及解决方案？</p></li><li><p>KafKa是pull？push？优劣势分析？</p></li><li><p>KafKa高性能高吞吐的原因？</p></li><li><p>KafKa的Pull和Push分别有什么优缺点？</p></li><li><p>KafKa、ActiveMQ、RabbitMQ、RocketMQ对比？</p></li><li><p>简述RabbitMQ普通集群模式？</p></li><li><p>简述RabbitMQ架构设计？</p></li><li><p>简述RabbitMQ死信队列、延时队列？</p></li><li><p>RabbitMQ事务消息</p></li><li><p>RabbitMQ如何保证消息的可靠性传输？</p></li><li><p>RabbitMQ如何消息发送？消息接收？</p></li><li><p>RabbitMQ的死信队列、延迟队列原理？</p></li><li><p>RabbitMQ可以直连队列吗？</p></li><li><p>RabbitMQ的镜像队列原理？</p></li><li><p>MQ有什么用？</p></li><li><p>如何设计一个MQ？</p></li><li><p>MQ如何进行产品选型？</p></li><li><p>MQ如何保证消息顺序？</p></li><li><p>MQ如何保证消息不丢失？</p></li><li><p>MQ如何保证消息幂等性？</p></li><li><p>MQ如何保证分布式事务的最终一致性？</p></li></ul>",1),e=[r];function t(c,o){return l(),p("div",null,e)}const M=i(b,[["render",t],["__file","interview.html.vue"]]);export{M as default};
