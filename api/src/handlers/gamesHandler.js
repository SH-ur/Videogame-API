const games = require("../controllers/games");
const gameName = require("../controllers/gameName");
const postGames = require("../controllers/postGames");
const idGames = require("../controllers/idGames");
const { Router } = require("express");

const gamesRouter = Router();

gamesRouter
  .get("/", async (req, res) => {
    const { name } = req.query;
    try {
     const results = name?await gameName(name): await games();
      res.status(200).json(results);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }) 
  .get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const idHandler = await idGames(id);
      res.status(200).json(idHandler);
    } catch (err) {
      res
        .status(400)
        .send(
          `Ok, algo no salió bien. El error dice: ${err.message} y el id sale como ${id}`
        );
    }
  })

  .post("/", async (req, res) => {
    const {
      name,
      description,
      platforms,
      image,
      released,
      rating,
      genreID,
    } = req.body;
    try {
      const gameCreated = await postGames({
        name,
        description,
        platforms,
        image,
        released,
        rating,
        genreID,
      });
      res.status(200).json(gameCreated);
    } catch (err) {
      res
        .status(400)
        .send("Wow, algo salió mal, veamos que nos sale: " + err.message);
    }
  });

module.exports = gamesRouter;
