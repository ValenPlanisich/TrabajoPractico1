export default class GameOver extends Phaser.Scene {
  constructor() {
    super("GameOver");
  }

  init() {}

  preload() {}

  create() {
    this.add.text(300, 300, "Perdiste", {
      fontSize: "20px",
      fill: "#FFFFFF",
    });
  }

  update() {}
}
