const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const gamesHandler = require('../handlers/gamesHandler');
const genreHandler = require('../handlers/genreHandler');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', gamesHandler);
router.use('/genres', genreHandler);
module.exports = router;
