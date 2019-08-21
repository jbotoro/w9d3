class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on("click", "li", (e) => {
      let $square = $(e.currentTarget); 
      this.makeMove($square);
      $square.attr("class", "clicked");
      $square.text(this.game.currentPlayer);

    });
  }

  //  this.currentPlayer = Board.marks[0];
  
  // Board.marks = ['x', 'o'];
  makeMove($square) {
    this.game.playMove($square.data());
    if (this.game.isOver()) {
      this.game.winner();
      alert(`${this.game.currentPlayer} wins`);
    }
    // if (this.game.currentPlayer === 'x'){
    //   $square.text("x");
    //   this.game.swapTurn();
    // }
    // else {
    //   $square.text("o");
    //   this.game.swapTurn();
    // }
  }
  setupBoard() {

    let $ul = $("<ul>");
    this.$el.append($ul);
    

    // for (let i = 0; i < 9; i++) {
    //   $ul.append($("<li>").addClass("unclicked"));
    // }
    
    // let k = 0;
    // let arr = Array.from($li);

    for (let i=0; i<3; i++) {
      for (let j=0; j<3; j++) {
        let $li = $("<li>");
        $li.addClass("unclicked");
        $li.data([i, j], [i, j]);
        $ul.append($li);
      }
    }

  }
}

module.exports = View;
