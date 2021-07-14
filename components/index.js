const fs = require('fs')

const generateRandomLike = () => {
    return Math.random() * 1000000 | 0
}
const garis = '=============================================';
const logo = `
                  ___________
                 [  _______o ]
                 | |   _   | |
                 | |  {_}  | |
                 | |_______| |
                 [___________]     
`
const header = () => console.log(`

INSTAGRAM CLI                           🖤  📩
  ____     ____     ____     ____     ____ 
 /  + \\   /    \\   /    \\   /    \\   /    \\
 \\____/   \\____/   \\____/   \\____/   \\____/`
)

const beranda = ({ user: { username }, likes, captions }) => console.log(`

  👩 ${username} ✔____________________________
 |                                              |
 |              /^^^^^^\\                        |
 |             /  O  O  \\                       |
 |            /    ^     \\                      |
 |              \\'--' /                         |
 |            ___\\___/___                       |
 |           /            \\                     |
 |           |             |                    |    
 |           |             |                    |
 |___________|_____________|____________________|
  🖤 💬 🛫                                    📝
 liked by 👦 and ${likes} others
  ${username} ✔ ${captions} 🤠
   
 View all 43,242 comments
   daffamf anya aku cinta padamu
   rezifr  sabun mana sabun  
`
)

const messageBubble = () => {
    let data = fs.readFileSync(__dirname + "/../db/message.json", "utf-8")
    if (data) {
        let dataMessage = JSON.parse(data)
        dataMessage.forEach(({ message, sender }) => {
            if (sender === "you") {
                console.log(`                            ${message}`)
                return
            }
            console.log(`${message}                            `)
        })
    };

}

exports.garis = garis
exports.beranda = beranda
exports.logo = logo
exports.messageBubble = messageBubble
exports.header = header