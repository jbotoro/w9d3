class View {
  constructor(game, rootEl) {
    this.game = game;
    this.rootEl = rootEl;
    this.setupTowers();
    this.render();
    this.bindEvents();
    
  }

  setupTowers() {
    //add data attr to ul
    for (let i = 0; i < 3; i++) {
      let $ul = $("<ul>");
      if (i===0) {
        for (let j = 0; j < 3; j++) {
          $ul.append($("<li>"));
        }
      }
      this.rootEl.append($ul);
    }
  }

  bindEvents() {
    let ctx = null;
    if (!ctx) {
      //save position of ul
    this.rootEl.on("click", "ul", (e) => {
      let $ul = 
      ctx = this;
      debugger;
    });
    } else {
      //remove and place
      this.rootEl.on("click", "ul", (e) => {

      });
    }

  }

  render() {
    let $ul = $("ul");
  }
}

module.exports = View;