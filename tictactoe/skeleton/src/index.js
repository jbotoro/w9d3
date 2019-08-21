const View = require("./ttt-view.js");
const Game = require("./../../solution/game.js");

  $(() => {
    
    // Your code here
    let game = new Game();
    let $el = $(".ttt");
    new View(game, $el);
    // view.setupBoard();
    // console.log(new View(game, $el));
  });
