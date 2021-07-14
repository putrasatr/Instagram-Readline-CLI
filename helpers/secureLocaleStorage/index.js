const { PATH_LOCAL_STORAGE_DB } = require("../../constants")
const { writeData } = require("../writeData")
const { readData } = require("../readData")

class SecureLocaleStorage {
    constructor(key) {
        this.key = key;
    }

    getItem() {
        const v = readData(this.key, PATH_LOCAL_STORAGE_DB)
        return v
    }

    async setItem(value) {
        const data = {}
        data[this.key] = value
        await writeData(data, this.path)
        return true
    }
    async removeItem() {
        const data = {}
        data[this.key] = null
        await writeData(data, PATH_LOCAL_STORAGE_DB)
        return new Promise(resolve => {
            console.log("Loading...")
            setTimeout(() => {
                resolve(true)
            }, 1000)
        })
    }
}



exports.SecureLocaleStorage = SecureLocaleStorage