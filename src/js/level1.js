import { Actor, Engine, Vector, DisplayMode, Label, FontUnit, Font, Scene } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Dog } from './dog.js'
import { Character } from './character.js'
import { Island } from './island.js'
import { Vlag } from './vlag.js'

export class Level1 extends Scene {

    score

    onInitialize(engine) {
        console.log("this level is created only once.")
        this.score = 0
        console.log("start de scene!")

         const background1 = new Actor();
         background1.graphics.use(Resources.Background.toSprite());
         background1.pos = new Vector(640, 360);
         background1.scale = new Vector(2, 2);
         this.add(background1);

        const island1 = new Island(20, 360);
        island1.scale = new Vector(1, 1);
        this.add(island1);

        const island2 = new Island(230, 550);
        island2.scale = new Vector(0.5, 0.5);
        this.add(island2);

        const island3 = new Island(300, 250);
        island3.scale = new Vector(0.6, 0.6);
        this.add(island3);

        const island4 = new Island(380, 500);
        island4.scale = new Vector(0.5, 0.5);
        this.add(island4);

        const island5 = new Island(680, 450);
        island5.scale = new Vector(1, 1);
        this.add(island5);

        const island6 = new Island(480, 280);
        island6.scale = new Vector(0.3, 0.3);
        this.add(island6);

        const island7 = new Island(500, 430);
        island7.scale = new Vector(0.3, 0.3);
        this.add(island7);

        const island8 = new Island(980, 300);
        island8.scale = new Vector(0.2, 0.2);
        this.add(island8);

        const island9 = new Island(880, 300);
        island9.scale = new Vector(0.2, 0.2);
        this.add(island9);

        const island10 = new Island(1200, 450);
        island10.scale = new Vector(1.2, 1.2);
        this.add(island10);
        
        this.label = new Label({
            text: `Score: ${this.score}`,
            pos: new Vector(10, 10),
            font: new Font({
                family: 'Impact',
                size: 24,
                unit: FontUnit.Px
            })
        })
        this.add(this.label)

       const character = new Character()
       this.add(character)

       const vlag = new Vlag()
       this.add(vlag)

    }

    onPostUpdate(){
        this.label.text = `Score: ${this.score}`
    }

    addScore(){
        console.log("adding a score")
    }

    onActivate(ctx) {
        console.log("the game has switched to this level. player already exists. reset score to 0")
        this.score = 0
    }
}