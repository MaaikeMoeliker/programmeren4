import { Actor, Engine, Vector, DisplayMode, Label, FontUnit, Font, Scene, Keys } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class YouWon extends Scene {

    onInitialize(engine) {
        console.log("this level is created only once.")
        this.score = 0
        console.log("start de scene!")

        const youwon = new Actor();
        youwon.graphics.use(Resources.YouWon.toSprite());
        youwon.pos = new Vector(640, 360);
        youwon.scale = new Vector(2.25, 1.9);
        youwon.z = -1;
        this.add(youwon);

        this.label = new Label({
            text: 'You win ',
            pos: new Vector(350, 280),
            font: new Font({
                family: 'Impact',
                size: 200,
                unit: FontUnit.Px
            })
        })
        this.add(this.label)
    }

}