
import { Actor, Engine, Vector, DisplayMode, Label, FontUnit, Font, Scene, Keys } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Dog } from './dog.js'

export class StartingScreen extends Scene {

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

        this.label = new Label({
            text: 'Sky jump ',
            pos: new Vector(340, 150),
            font: new Font({
                family: 'Impact',
                size: 170,
                unit: FontUnit.Px
            })
        })
        this.add(this.label)

        this.label = new Label({
            text: 'Gebruik de toetsen [A] en [D] om naar naar links en rechts te bewegen en [SPACE] om te springen ',
            pos: new Vector(160, 450),
            font: new Font({
                family: 'Impact',
                size: 24,
                unit: FontUnit.Px
            })
        })
        this.add(this.label)

        this.label = new Label({
            text: 'Probeer het einde te bereiken',
            pos: new Vector(500, 480),
            font: new Font({
                family: 'Impact',
                size: 24,
                unit: FontUnit.Px
            })
        })
        this.add(this.label)

        
        this.label = new Label({
            text: 'Klik [Spatie] om te beginnen',
            pos: new Vector(500, 550),
            font: new Font({
                family: 'Impact',
                size: 24,
                unit: FontUnit.Px
            })
        })
        this.add(this.label)    
    }
    onPreUpdate(engine) {
        
        // als er maar 1x iets gebeurt check je of die key was ingedrukt in dit frame
        if (engine.input.keyboard.wasPressed(Keys.Space)) {
            engine.goToScene('level1')
        }
    }

}