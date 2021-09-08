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

async function updateCommentary(comm) {
    const commentary = await prisma.commentary.update({
        where: { id: parseInt(comm.id,10) },
        data: {
            description: comm.description,
            score: parseInt(comm.score),
            userName: comm.userName,
            IDSpot: parseInt(comm.spot)
        },
    })
}

async function deleteCommentary(comm) {
    const commentary = await prisma.commentary.update({
        where: { id: parseInt(comm.id,10) },
        data: {
            enable: false
        },
    })
}

async function showCommentarybyspot(idSpot, res) {
    //const allEstaciones = await prisma.estacion.findMany()
    prisma.commentary.findMany({
            where: { IDSpot: parseInt(idSpot, 10) }
        }).then(data =>{
            res.send(data);
        })
    //console.dir(allEstaciones, { depth: null });
}

module.exports.createCommentary = createCommentary
module.exports.showCommentary = showCommentary
module.exports.updateCommentary = updateCommentary
module.exports.deleteCommentary = deleteCommentary
module.exports.showCommentarybyspot = showCommentarybyspot