const { SequelizeAPIRequest } = require("../axios")
const fs = require("fs")
const { PATH_MOVIES_DB, PATH_FOODS_DB, PATH_USERS_DB } = require("../../constants")

const writeData = (data, path) => {
    fs.writeFile(__dirname + path, JSON.stringify(data, null, 3), (err, res) => {
        if (err) return console.log(err)
        return new Promise(resolve => {
            resolve("Success")
        })
    })
}
const handleResponse = res => {
    return res
}
const load = async (path, pathJSON) => {
    try {
        const { data: { data } } = await SequelizeAPIRequest.get(path);
        writeData(data, pathJSON)
    } catch (error) {
        console.log('Err Load:', error.message);
        return error
    }
}
const getMovies = () => {
    load("movies", PATH_MOVIES_DB)
    const data = JSON.parse(fs.readFileSync(__dirname + PATH_MOVIES_DB))
    if (data)
        if (data.length > 0) return ({ data, total: data.length, message: "success" })
        else { return ({ data, message: "data empty" }) }
}

const getFoods = () => {
    load("foods", PATH_FOODS_DB)
    const data = JSON.parse(fs.readFileSync(__dirname + PATH_FOODS_DB))
    if (data)
        if (data.length > 0) return ({ data, total: data.length, message: "success" })
        else { return ({ data, message: "data empty" }) }
}
const getUsers = () => {
    load("users", PATH_USERS_DB)
    const data = JSON.parse(fs.readFileSync(__dirname + PATH_USERS_DB))
    if (data)
        if (data.length > 0) return ({ data, total: data.length, message: "success" })
        else { return ({ data, message: "data empty" }) }
}

exports.getMovies = getMovies
exports.getFoods = getFoods
exports.getUsers = getUsers