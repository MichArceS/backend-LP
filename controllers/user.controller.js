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

async function updateUser(usr) {
    const user = await prisma.user.update({
        where: { id: parseInt(usr.id,10) },
        data: {
            name: usr.name,
            email: usr.email,
            phone: usr.phone,
            role: usr.role
        },
    })
}

module.exports.createUser = createUser;
module.exports.showUsers = showUsers;
module.exports.updateUser = updateUser;
