function commands(rl) {
    rl.question("Type Here > ", (input) => {
        require("./")(rl, "login", input)
    })
}

exports.commands = commands