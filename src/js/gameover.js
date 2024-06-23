import { Actor, Engine, Vector, DisplayMode, Label, FontUnit, Font, Scene, Keys } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class GameOver extends Scene {

    onInitialize(engine) {
        console.log("start de scene!")

        const gameover = new Actor();
        gameover.graphics.use(Resources.GameOver.toSprite());
        gameover.pos = new Vector(640, 400);
        gameover.scale = new Vector(1.3, 1.3);
        this.add(gameover);   
    }

}