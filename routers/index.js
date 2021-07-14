const { removeItem } = require('../helpers/secureLocaleStorage');
const { message } = require('../pages/directMessage');
const { home } = require('../pages/home');
const { mainLogin } = require('../pages/login');
const { commands } = require('./commands');


module.exports = (rl, isLoggedIn, input) => {
    if (!isLoggedIn) return mainLogin(rl)
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
            removeItem("token")
                .then(() => {
                    console.log("Good Bye!!")
                    rl.close()
                })
            return;
        default:
            home(rl)
            commands(rl)
            break;
    }
}