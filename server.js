
var http = require('http')
const { runInNewContext } = require('vm')
var server = http.createServer((req, res) => {
    console.log("requested accepted")
    res.writeHead(200, { 'Content-Type': 'text/html' })
   
    req.on('data', d => {


        var x=parseFloat(d)*.1
        process.stdout.write("discount"+x.toString())
res.write(x.toString())
res.end()
    })


    

    
})
server.listen(5000, function() {
    console.log("server started")
})



