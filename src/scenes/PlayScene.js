class PlayScene extends Phaser.Scene {
    constructor(){
        super({key: 'PlayScene'})

        this.background;
        this.player;

    }

    create(){
        console.log('Creating game from assets');

        this.add.image(400, 300, 'background')
        
    }

    update(){

    }
}