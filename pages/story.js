const fs = require('fs')
fs.readFile(__dirname + "/../db/message.json", "utf-8", (err, data) => {
    if (err) return console.log(err)
    console.log(data)
})





