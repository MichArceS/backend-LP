const prisma = require("../app.js").prisma

async function createCommentary(comm) {
    await prisma.commentary.create({
        data: {
            description: comm.description,
            score: parseInt(comm.score),
            userName: comm.userName,
            IDSpot: parseInt(comm.spot)
        }
    }) 
}

async function showCommentary(req,res) {
    prisma.commentary.findMany().then(data =>{
        res.send(data)
    })
}

module.exports.createCommentary = createCommentary
module.exports.showCommentary = showCommentary
