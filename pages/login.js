const { postLogin } = require("../services/apps")
const { PATH_USERS_DB } = require("../constants")
const { handleFailure, handleInput, handleSuccess, handleString } = require("../helpers")
const { garis, logo } = require("../components");
const { home } = require("./home");

function mainLogin(rl) {
    console.log(`LOGIN\n${garis}\nInstagram\n${garis}\n${logo}`);
    askEmail(rl);
}

function askEmail(rl) {
    rl.question('Email: ', (email) => {
        if (!(email.length)) {
            handleInput()
            askEmail(rl)
            return
        }
        askPassword(rl, handleString(email))
    });
}

function askPassword(rl, email) {
    rl.question(`Password: `, (password) => {
        if (!(password.length)) {
            handleInput()
            askPassword(rl)
            return
        }
        postLogin("users/login", PATH_USERS_DB, { email, password })
            .then(res => {
                console.log("Loading...")
                const { username } = res[0]
                setTimeout(() => {
                    handleSuccess(username, rl, home)
                }, 1000)
            })
            .catch((msg) => {
                handleFailure(msg, askEmail, rl)
            })

    })
}

exports.mainLogin = mainLogin