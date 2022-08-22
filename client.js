var http = require('http')

var data = '300';

var options = {

    hostname: 'localhost',

    port: 5000,

    headers: {

        'Content-Type': 'text/html',
        'Content-Length':data.length

        

    }

}



var req = http.request(options, function(res) {

    console.log(res.statusCode)

    res.on('data', d => {

        process.stdout.write(d)

    })

})
req.write(data);


