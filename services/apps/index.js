const fs = require("fs")
const { SequelizeAPIRequest } = require("../axios")
const { writeData, handleErrorResponseSquelize } = require('../../helpers')
const {
    PATH_MOVIES_DB,
    PATH_FOODS_DB,
    PATH_USERS_DB
} = require("../../constants")


const load = async (path, pathJSON) => {
    try {
        const { data: { data } } = await SequelizeAPIRequest.get(path);
        writeData(data, pathJSON)
    } catch (error) {
        return handleErrorResponseSquelize(error)
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

const movies = getMovies()
console.log(movies)