class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: "BootScene" });
  }

  preload() {
    console.log("Loading assets");

    const images = [
      "tile-left",
      "tile-middle",
      "tile-right",
      "tile-single",
      "controls",
      "background",
      "goal"
    ];

    images.forEach(img => {
      this.load.image(img, `../assets/${img}.png`);
    });
    this.load.spritesheet("player", "../assets/player.png", {
      frameWidth: 120,
      frameHeight: 165
    });
  }

  create() {
    this.scene.start("PlayScene");
  }
}
