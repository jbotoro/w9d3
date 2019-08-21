const HanoiGame = require("./game.js");
const View = require("./../src/hanoi-view.js");

$(() => {
  const rootEl = $('.hanoi');
  const game = new HanoiGame();
  new View(game, rootEl);

  
});
