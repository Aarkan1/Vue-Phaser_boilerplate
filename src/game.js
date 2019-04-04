/** @type {import("../typings/phaser")} */

const config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    width: 1280,
    height: 720
  },
  parent: "game",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  scene: [BootScene, PlayScene]
};

let game = new Phaser.Game(config);
