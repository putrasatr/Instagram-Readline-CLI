const fs = require('fs');

const { removeItem } = require('../helpers/secureLocaleStorage');
const { message } = require('../pages/directMessage');
const { home } = require('../pages/home');
const { mainLogin } = require('../pages/login');
const { commands } = require('./commands');
const { AsyncStorage } = require("../helpers/AsyncStorage")

module.exports = (rl, isLoggedIn, input) => {
    if (!isLoggedIn) return mainLogin(rl)
    const { pages, page } = JSON.parse(fs.readFileSync(__dirname + "/../db/localStorage/pagination.json", "utf-8"))
    switch (input) {
        case "dm":
            message(rl)
            break;
        case "story":
            console.log("YOU enter Story")
            home(rl)
            commands(rl)
            break;
        case "logout":
            AsyncStorage.removeItem("token")
                .then(() => {
                    console.log("Good Bye!!")
                    rl.close()
                })
            break;
        case "next":
            if (pages == 1) {
                home(rl, 1)
                commands(rl)
                return
            }
            if (parseInt(page) < pages) {
                home(rl, parseInt(page) + 1)
                commands(rl)
                return
            }
            home(rl, 1)
            commands(rl)
            console.log("error")
            break;
        case "prev":
            if (pages <= 1) {
                home(rl, 1)
                commands(rl)
                return
            }
            if (parseInt(page) < pages) {
                home(rl, parseInt(page) - 1)
                commands(rl)
                return
            }
            if (page == pages) {
                home(rl, parseInt(page) - 1)
                commands(rl)
                return
            }

            break;
        case "quit":
            rl.close()
            break;
        default:
            home(rl, parseInt(page))
            commands(rl)
            break;
    }
}