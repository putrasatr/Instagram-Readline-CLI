const { post } = require("../action/login")
const { handleFailure, handleInput, handleSuccess, handleString } = require("../helpers")
const readline = require('readline');
const fs = require('fs')
const { garis, messageBubble, logo } = require("../components");
const { home } = require("./home");
const { getFoods } = require("../services/apps");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: ''
});

function mainLogin() {
    console.log(`LOGIN\n${garis}\nInstagram\n${garis}\n${logo}`);
    askEmail();
}

function askEmail() {
    rl.question('Email: ', (email) => {
        if (!(email.length)) {
            handleInput()
            askEmail()
            return
        }
        askPassword(handleString(email))
    });
}

function askPassword(email) {
    rl.question(`Password: `, (password) => {
        if (!(password.length)) {
            handleInput()
            askPassword()
            return
        }
        post({ email, password: handleString(password) })
            .then((res) => handleSuccess(res, command))
            .catch(() => handleFailure(askEmail))
    })
}
function command() {
    rl.question("Type here > ", (input) => {
        switch (handleString(input)) {
            case "logout":
                rl.close()
                break;
            case "dm":
                message()
                break;
            default:
                home()
                command()
                break;
        }
    })
}

function message() {
    rl.question("\nDirect Message\n\nType Message > ", (input) => {
        let messageArray = []
        switch (handleString(input)) {
            case "back":
                home()
                command()
                break;
            default:
                // fs.writeFileSync("../db/message.json")
                fs.readFile(__dirname + "/../db/message.json", "utf-8", (err, data) => {
                    if (err) return console.log(err)
                    let randomNum = Math.random()
                    let obj = JSON.parse(data)
                    obj.push({
                        message: handleString(input),
                        sender: randomNum >= .5 ? "you" : "other",
                        cretedDate: Date.now()
                    })
                    fs.writeFile(__dirname + "/../db/message.json", JSON.stringify(obj, null, 3), (err, res) => {
                        if (err) return console.log(err)
                        messageBubble()
                        message()
                    })
                })

                break;
        }
    })
}

module.exports = { mainLogin, message }