const fs = require("fs")

function commands(rl) {
const { pages, page } = JSON.parse(fs.readFileSync(__dirname + "/../db/localStorage/pagination.json", "utf-8"))
    console.log(`Page ${page} of ${pages}`)
    rl.question("Type Here > ", (input) => {
        require(".")(rl, "login", input)
    })
}

exports.commands = commands