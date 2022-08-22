var fs=require('fs')

/*fs.writeFile(".\nodejsproject\details.txt", str, err => {

    if (err != null) {

        console.log(err)

    }

})*/

fs.readFile("\details.txt", function(err, data) {

    if (err != null) {

        console.log(err)

        return

    } else {

        console.log(data.toString())

    }

})

var str="itemname= Car,itemprice=320,itemquantity=5"


fs.appendFile("\details.txt", str, (err) => {

    if (err != null) {

        console.log(err)

    }

})




