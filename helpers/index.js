const fs = require("fs")
const { home } = require("../pages/home")
const { setItem } = require("./secureLocaleStorage")
const { writeData } = require("./writeData")

const handleFailure = (msg, askEmail, rl) => {
    console.log(msg)
    askEmail(rl)
}
const handleSuccess = (resolve, rl) => {
    setItem("token", "kasfnjkfnankln3")
    console.log(`Welcome! ${resolve}`)
    home(rl)
}

const handleInput = () => {
    console.log('Email or password is required!')
}
const handleString = (v) => {
    return v.trim().toLowerCase()
}
const getDate = () => {
    const date = new Intl.DateTimeFormat('en-US', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        weekday: 'short',
        hour: '2-digit',
        second: '2-digit',
        minute: '2-digit'
        // hour12: true
    }).format(Date.now())
    return date
}


const handleErrorResponseSquelize = (err) => {
    const logs = `
    SORRY!, There is something wrong with server.
    Please try again later.  😃

    Error Detail : ${err.message}
    `
    console.log(logs)

}
exports.handleSuccess = handleSuccess
exports.handleInput = handleInput
exports.handleFailure = handleFailure
exports.handleString = handleString
exports.writeData = writeData
// module.exports = { handleSuccess, handleInput, handleFailure, handleString, writeData, handleErrorResponseSquelize }