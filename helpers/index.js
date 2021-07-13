const fs = require("fs")
const { home } = require("../pages/home")
const { writeData } = require("./writeData")

const handleFailure = (askEmail) => {
    console.log('Email Or Password is not correct!')
    askEmail()
}
const handleSuccess = (resolve, command) => {
    console.log(`Welcome! ${resolve}`)
    home()
    command()
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
module.exports = { handleSuccess, handleInput, handleFailure, handleString, writeData, handleErrorResponseSquelize }