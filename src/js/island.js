import { Actor, CompositeCollider, Vector, CollisionType, Shape, EdgeCollider } from "excalibur"
import { Resources } from './resources.js'
import { Level1 } from "./level1.js"
import { Coin } from "./coin.js"

export class Island extends Actor {

    constructor(x, y) {
        super({ width: Resources.Island.width, height: Resources.Island.height }) 
        this.x = x
        this.y = y 
        this.pos = new Vector(this.x, this.y)
        console.log(this.pos)
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Island.toSprite())
        let ground = new CompositeCollider([
            Shape.Edge(new Vector(-100,-125), new Vector(100, -125))
        ])   
        this.body.collisionType = CollisionType.Fixed
        this.collider.set(ground);

        let coin = new Coin(this.x, this.y)
        this.addChild(coin)
}
}

