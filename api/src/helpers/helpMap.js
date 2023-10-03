//Lets a Go!
 const mapFunc=(arr)=>{
    const mapeo= arr.map((games)=>{
        return{
            id:games.id,
            name: games.name,
            description: games.description,
            platforms: games.platforms?.map(plat=>{ return{id: plat.platform.id, name: plat.platform.name}}),
            image: games.background_image,
            released: games.released,
            rating: games.rating,
            genres: games.genres?.map(genre=> genre.name)

        }
    })
    if(2==2) return mapeo;
 }

module.exports= {mapFunc};