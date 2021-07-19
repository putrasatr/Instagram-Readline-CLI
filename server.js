const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: ''
});
const { AsyncStorage } = require("./helpers/AsyncStorage");
const { mainLogin } = require('./pages/login');
const router = require('./routers')
AsyncStorage.getItem()
    .then(token => {
        if (token)
            return router(rl, token)
        console.log("Welcome to Intagram Cli")
        mainLogin()
    })

