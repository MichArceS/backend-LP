const prisma = require("../app.js").prisma

async function createSpot(spot) {
    await prisma.spot.create({
        data: {
            spotName: spot.spotName,
            locationX: parseFloat(spot.x),
            locationY: parseFloat(spot.y),
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

module.exports.createSpot = createSpot
module.exports.showSpot = showSpot
