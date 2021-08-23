const prisma = require("../app.js").prisma

async function createSpot(spot) {
    await prisma.spot.create({
        data: {
            spotName: spot.spotName,
            locationX: parseFloat(spot.locationX),
            locationY: parseFloat(spot.locationY),
            city: spot.city,
            description: spot.description,
            image: spot.image
        }
    }) 
}

async function showSpot(req,res) {
    prisma.spot.findMany().then(data =>{
        res.send(data)
    })
}

async function updateSpot(spot) {
    const user = await prisma.spot.update({
        where: { id: parseInt(spot.id,10) },
        data: {
            spotName: spot.spotName,
            locationX: parseFloat(spot.locationX),
            locationY: parseFloat(spot.locationY),
            city: spot.city,
            description: spot.description,
            image: spot.image
        },
    })
}

async function deleteSpot(spot) {
    const user = await prisma.spot.update({
        where: { id: parseInt(spot.id,10) },
        data: {
            enable: false
        },
    })
}


module.exports.createSpot = createSpot
module.exports.showSpot = showSpot
module.exports.updateSpot = updateSpot
module.exports.deleteSpot = deleteSpot