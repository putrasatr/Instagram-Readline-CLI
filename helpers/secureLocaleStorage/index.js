const fs = require("fs")
const { resolve } = require("path")
const { PATH_LOCAL_STORAGE_DB } = require("../../constants")
const { writeData } = require("../writeData")
const getItem = (key) => {
    const value = JSON.parse(fs.readFileSync(__dirname + "/../.." + PATH_LOCAL_STORAGE_DB, "utf-8"))[key]
    return value
}
const setItem = async (key, value) => {
    const path = `/../..${PATH_LOCAL_STORAGE_DB}`
    const data = {}
    data[key] = value

    await writeData(data, path)
    return true
}
const removeItem = async (key) => {
    const path = `/../..${PATH_LOCAL_STORAGE_DB}`
    const data = {}
    data[key] = null

    await writeData(data, path)
    return new Promise(resolve => {
        console.log("Loading...")
        setTimeout(() => {
            resolve(true)
        }, 1000)
    })
}

exports.getItem = getItem
exports.setItem = setItem
exports.removeItem = removeItem