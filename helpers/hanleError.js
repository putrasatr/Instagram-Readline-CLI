const handleErrorResponseSquelize = (err) => {
    const logs = `
    SORRY!, There is something wrong with server.
    Please try again later.  😃

    Error Detail : ${err.message}
    `
    console.log(logs)

}
exports.handleErrorResponseSquelize = handleErrorResponseSquelize
