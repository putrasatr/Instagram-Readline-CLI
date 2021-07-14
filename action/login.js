
const users = [
    {
        username: 'mimin',
        email: 'admin@gmail.com',
        password: "12345",
        role: 'admin'
    },
    {
        username: "Ronaldo",
        email: 'member@gmail.com',
        password: "12345",
        role: 'member'
    }
]

function post({ email, password }) {
    return new Promise((resolve, reject) => {
        console.log('Loading...')
        let isUser = users.find(item => {
            return item.email === email && item.password == password
        })
        setTimeout(() => {
            if (isUser) return resolve(isUser.username)
            reject()
        }, 2000)
    })
}

module.exports = { post }