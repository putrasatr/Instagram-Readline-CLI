const handleFailure = (msg, askEmail, rl) => {
    console.log(msg)
    askEmail(rl)
}
const handleSuccess = (resolve, rl, callback) => {
    console.log(`Welcome! ${resolve}`)
    setTimeout(() => {
        callback(rl)
    }, 500)
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

exports.handleSuccess = handleSuccess
exports.handleInput = handleInput
exports.handleFailure = handleFailure
exports.handleString = handleString
exports.getDate = getDate