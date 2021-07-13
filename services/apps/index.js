const fs = require("fs")
const { SequelizeAPIRequest } = require("../axios")
const { writeData, handleErrorResponseSquelize } = require('../../helpers')
const {
    PATH_MOVIES_DB,
    PATH_FOODS_DB,
    PATH_USERS_DB,
    PATH_POSTS_DB
} = require("../../constants")


const load = async (path, pathJSON) => {
    try {
        const { data: { data } } = await SequelizeAPIRequest.get(path);
        writeData(data, pathJSON)
        return new Promise(resolve => {
            resolve(true)
        })
    } catch (error) {
        return handleErrorResponseSquelize(error)
    }
}

const getData = (path, db) => {
    load(path, db)
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


exports.getData = getData
const { data } = getData('posts?page=1', PATH_POSTS_DB)
data.forEach(({ image, likes, user: { username } }, i) => {
    console.log(
        `${i + 1}. ${username}

Likes : ${likes}       
Image : ${image}
_____________________________________________
            `
    )
})