const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: ''
});
const { AsyncStorage } = require("./helpers/AsyncStorage")
const router = require('./routers/')
AsyncStorage.getItem()
    .then(token => {
        router(rl, token)
    })