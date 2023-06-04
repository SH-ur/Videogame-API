const genres = require('../controllers/genres');
const {Router} = require('express');
const genreRouter = Router();

genreRouter.get('/', async(req, res)=>{
    
    try{
        const getAllGenre = await genres();
        res.status(200).json(getAllGenre);
    } catch(err){
res.status(400).json({error: err.message})
    }
})

module.exports= genreRouter;