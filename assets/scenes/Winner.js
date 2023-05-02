export default class Winner extends Phaser.Scene {
  constructor() {
    super("Winner");
  }

  init() {}

  preload() {}

  create() {
    this.winText = this.add.text(300, 300, "Ganaste", {
      fontSize: "20px",
      fill: "#FFFFFF",
    });
  }
  update() {}
}
