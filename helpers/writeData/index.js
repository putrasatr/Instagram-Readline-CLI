const fs = require("fs")

const writeData = (data, path) => {
    fs.writeFileSync(__dirname + path, JSON.stringify(data, null, 3))
    return new Promise(resolve => {
        resolve(true)
    })
}

exports.writeData = writeData