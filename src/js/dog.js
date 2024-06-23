import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Dog extends Actor{

        constructor() {
        super({ width: Resources.Dog.width, height: Resources.Dog.height }) 
    }

    onInitialize(){
        const sprite = Resources.Dog.toSprite()
        let xspeed = Math.random()*200 - 100
        let yspeed = Math.random()*200 - 100
        let posX = Math.random()*1280
        let posY = Math.random()*720
        this.pos = new Vector(posX, posY)
        this.vel = new Vector(xspeed,yspeed)
        this.graphics.use(sprite)
        this.on("pointerup", () => this.kill())
        this.scale = new Vector(0.15, 0.15)
    }

    onPostUpdate(engine){
        if (this.pos.x < -100){
            this.pos.x = 1280
        } 
        if (this.pos.x > 1280){
            this.pos.x = -100
        } 
        if (this.pos.y < -100){
            this.pos.y = 720
        } 
        if (this.pos.y > 720){
            this.pos.y = -100
        } 
    } 

    onPostKill(){
        this.scene.engine.addScore()
    }
}

