// const fs = require('fs')
// fs.readFile(__dirname + "/../db/message.json", "utf-8", (err, data) => {
//     if (err) return console.log(err)
//     console.log(data)
// })
const fs = require('fs')
const { messageBubble } = require("../components");
const { handleString } = require("../helpers")
const { home } = require("./home");
const { commands } = require("../routers/commands")

function message(rl) {
    rl.question("\nDirect Message\n\nType Message > ", (input) => {
        switch (handleString(input)) {
            case "back":
                home(rl)
                commands(rl)
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
                        message(rl)
                    })
                })

                break;
        }
    })
}

exports.message = message
