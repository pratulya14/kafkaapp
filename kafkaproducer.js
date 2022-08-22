
const { Kafka } = require('kafkajs')
const kafka = new Kafka({
clientId: "mykafkapp",
 brokers: ['localhost:9092']

})

const producer = kafka.producer()

const run = async() => {
await producer.connect()
 await producer.send({ topic: 'item-topic', messages: [{ value: "Hello from producer!" }] })
}

run().then(() => console.log("data sent to topic")).catch((err) => {
console.log(err)
})

