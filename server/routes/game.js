const router = require('express').Router();
const controller = require('../controllers');

router.get('/', controller.game.getBoard)

module.exports = router;

