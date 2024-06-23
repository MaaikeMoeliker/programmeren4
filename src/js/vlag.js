import { Actor, Vector, Keys, CollisionType, Shape, CompositeCollider, DegreeOfFreedom } from "excalibur"
import { Resources } from './resources.js'

export class Vlag extends Actor {

    constructor() {
        super({ width: Resources.Vlag.width/ 3, height: Resources.Vlag.height }) 
        this.body.collisionType = CollisionType.Fixed
        
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Vlag.toSprite())
        this.pos = new Vector(1250, 220)
        this.scale = new Vector(0.3, 0.3)
    }
}