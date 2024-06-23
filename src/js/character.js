import { Actor, Vector, Keys, CollisionType, Shape, CompositeCollider, DegreeOfFreedom,  } from "excalibur"
import { Resources } from './resources.js'
import { Vlag } from './vlag.js'
import { Dog } from './dog.js'
import { GameOver } from "./gameover.js"
import { Island } from "./island.js"
import { Coin } from "./coin.js"

export class Character extends Actor {

    constructor() {
        super({ width: Resources.Character.width, height: Resources.Character.height }) 
        this.body.collisionType = CollisionType.Active
        this.isOnGround = false
    }

    hitSomething(event){
        if (event.other instanceof Vlag) {
            console.log('hit vlag')
            this.engine.goToScene('youwon');
        }

        if (event.other instanceof Island) {
            this.isOnGround = true;
        }

        if (event.other instanceof Coin) {
            this.scene.score++;
            event.other.kill();
        }
    }

    leaveSomething(event){
        if (event.other instanceof Island) {
            this.isOnGround = false
        }
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Character.toSprite())
        this.pos = new Vector(30, 220)
        this.vel = new Vector(-10, 0)
        this.body.limitDegreeOfFreedom.push(DegreeOfFreedom.Rotation);
        this.body.mass = 7
        this.engine = engine

        this.on('collisionstart', (event) => this.hitSomething(event))
        this.on('collisionstart', (event) => this.leaveSomething(event))
    }

    
    onPreUpdate(engine, delta) {
        let yspeed = this.vel.y;
        let xspeed = 0;

        if (engine.input.keyboard.isHeld(Keys.D)) {
            xspeed = 200;
            this.graphics.flipHorizontal = true;
        }
    
        if (engine.input.keyboard.isHeld(Keys.A)) {
            xspeed = -200;
            this.graphics.flipHorizontal = false;
        }
    
        if (engine.input.keyboard.wasPressed(Keys.Space) && this.isOnGround) {
            yspeed = -400;
            this.isOnGround = false;
        }
        if (engine.input.keyboard.wasPressed(Keys.Space) && this.isOnGround === false) {
            this.isOnGround = true;
        }

        this.vel = new Vector(xspeed, yspeed);
    }
    onPostUpdate(engine){
        if (this.pos.y > 720)  {
            engine.goToScene('gameover');
        }  
    }
}