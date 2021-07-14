const fs = require("fs")
const { SequelizeAPIRequest } = require("../axios")
const { handleErrorResponseSquelize } = require('../../helpers/hanleError')
const { writeData } = require('../../helpers/writeData')
const { AsyncStorage } = require("../../helpers/AsyncStorage")
const { PATH_PAGINATION_JSON } = require("../../constants")

const load = async (path, pathJSON) => {
    try {
        const { data: { data, pagination } } = await SequelizeAPIRequest.get(path);
        await writeData(data, pathJSON)
        if (pagination) await writeData(pagination, PATH_PAGINATION_JSON)
        const { data: dataRead } = getData(pathJSON)
        return dataRead
    } catch (error) {
        return handleErrorResponseSquelize(error)
    }
}

const postLogin = async (path, pathJSON, body) => {
    try {
        const { data: { data, message } } = await SequelizeAPIRequest.post(path, body);
        await writeData(data, pathJSON)
        const { data: dataRead } = getData(pathJSON)
        return new Promise((resolve, rejects) => {
            if (dataRead.length > 0) {
                AsyncStorage.setItem("fajkkjds")
                resolve(dataRead)
            }
            rejects(message)

        })
    } catch (error) {
        return handleErrorResponseSquelize(error)
    }
}

const getData = (db) => {
    const data = JSON.parse(fs.readFileSync(__dirname + db))
    if (data) {
        if (data.length > 0) return ({
            data,
            total: data.length,
            message: "success"
        })
        return ({
            data,
            message: "data empty"
        })
    }
}

exports.load = load
exports.postLogin = postLogin