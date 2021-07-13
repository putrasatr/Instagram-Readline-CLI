const axios = require("axios")
const { BASE_API_URL } = require("../../constants")

const SequelizeAPIRequest = axios.create({
    baseURL: BASE_API_URL,
    timeout: 1000,
});

exports.SequelizeAPIRequest = SequelizeAPIRequest