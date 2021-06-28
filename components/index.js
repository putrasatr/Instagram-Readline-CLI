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
const beranda = `

INSTAGRAM CLI                           🖤  📩
  ____     ____     ____     ____     ____ 
 /  + \\   /    \\   /    \\   /    \\   /    \\
 \\____/   \\____/   \\____/   \\____/   \\____/


  👩 anyageraldine ✔____________________________
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
 liked by 👦 and ${generateRandomLike()} others
  anyageraldine ✔ bored 🤠
   
 View all 43,242 comments
   daffamf anya aku cinta padamu
   rezifr  sabun mana sabun 

 
  👩 tante ernie ✔_______________________________
 |                                              |
 |              /^^^^^^\\                        |
 |             /  O  O  \\                       |
 |            /    ^     \\                      |
 |              \\'--' /                         |
 |            ___\\___/___                       |
 |           /            \\                     |
 |           | \\__/  \\__/  |                    |    
 |           |             |                    |
 |___________|_____________|____________________|
  🖤 💬 🛫                                    📝
 liked by 👦 and ${generateRandomLike()} others
  tante ernie ✔ give me some love
     
 View all 43,242 comments
   daffamf anya aku cinta padamu
   rezifr  sabun mana sabun `

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

module.exports = { garis, beranda, logo, messageBubble }