const fs = require("fs")
const { PATH_LOCAL_STORAGE_DB } = require("../../constants")

const writeData = (data, path) => {
    fs.writeFileSync(__dirname + path, JSON.stringify(data, null, 3))
    return new Promise(resolve => {
        resolve(true)
    })
}

exports.writeData = writeData