const router = require('express').Router();
const controller = require('../controllers');

router.post('/', controller.game.getBoard)

module.exports = router;

