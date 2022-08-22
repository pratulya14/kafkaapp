const { Kafka } = require('kafkajs')



const kafka = new Kafka({

    clientId: "mykafkapp",

    brokers: ['localhost:9092']



})




const admin = kafka.admin()



async function run() {

    await admin.connect()

    return admin.listTopics()

}



run().then((data) => {

    console.log(data)

})