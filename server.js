const fs = require("fs")
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: ''
});
const { getItem } = require("./helpers/secureLocaleStorage")

const router = require('./routers/')
const token = getItem("token")
router(rl, token)