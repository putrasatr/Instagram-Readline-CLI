const fs = require("fs")

const writeData = (data, path) => {
    fs.writeFile(__dirname + path, JSON.stringify(data, null, 3), (err, res) => {
        if (err) return console.log(err)
        return new Promise(resolve => {
            resolve("Success")
        })
    })
}

exports.writeData = writeData