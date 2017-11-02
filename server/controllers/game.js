const startBoard = require('../lib/startBoard.js');

module.exports.getBoard = (req, res) => {
  let board = `<div>BOARD</div>`
  res.send(200, startBoard);
  
}