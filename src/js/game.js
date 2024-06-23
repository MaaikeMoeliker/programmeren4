import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, Label, FontUnit, Font, SolverStrategy } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Dog } from './dog.js'
import { Character } from './character.js'
import { StartingScreen } from './startingscreen'
import { Level1} from './level1'
import { GameOver } from './gameover.js'
import { YouWon } from './youwon.js'

export class Game extends Engine {

    constructor() {
        super({
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen,
            physics: {
                solver: SolverStrategy.Realistic,
                gravity: new Vector(0, 800),
            }
        })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        this.add('level1', new Level1())
        this.add('gameover', new GameOver())
        this.add('startingscreen', new StartingScreen())
        this.add('youwon', new YouWon())
        console.log("created the three scenes")
        this.goToScene('startingscreen')
    }
}




new Game()
