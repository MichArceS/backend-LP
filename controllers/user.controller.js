const prisma = require("../app.js").prisma;

async function createUser(user) {
    await prisma.user.create({
        data: {
            name: user.name,
            email: user.email,
            phone: user.phone,
            role: user.role
        }
    }) 
}

async function showUsers(req,res) {
    prisma.user.findMany().then(data =>{
        res.send(data)
    })
}

module.exports.createUser = createUser;
module.exports.showUsers = showUsers;
