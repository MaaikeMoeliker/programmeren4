import { Actor, Vector, Keys, CollisionType, Shape, CompositeCollider, DegreeOfFreedom } from "excalibur"
import { Resources } from './resources.js'

export class Coin extends Actor {

    constructor(x, y) {
        super({ width: Resources.Coin.width, height: Resources.Coin.height }) 
        this.body.collisionType = CollisionType.Fixed
        this.x = x
        this.y = y
        console.log(this.pos)
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Coin.toSprite())
        this.scale = new Vector(0.2, 0.2)
        this.pos = new Vector(this.x - 500, this.y - 700)
    }

}
