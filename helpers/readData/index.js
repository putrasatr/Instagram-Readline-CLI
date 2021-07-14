const fs = require("fs")

const readData = (key, path) => {
    const result = JSON.parse(fs.readFileSync(__dirname + path, "utf-8"))[key]
    return result
}

exports.readData = readData