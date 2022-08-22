
const { Kafka } = require('kafkajs')

const kafka = new Kafka({

    clientId: "mykafkapp",

    brokers: ['localhost:9092']



})



const consumer = kafka.consumer({ groupId: 'myitemgrp' })

consumer.connect()

consumer.subscribe({ topic: 'item-topic', fromBeginning: true })



consumer.run({

    eachMessage: async({ topic, partition, message }) => {

        console.log({ partition, offset: message.offset, value: message.value.toString() })

    }



})