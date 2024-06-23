import { ImageSource, Sound, Resource, Loader } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Fish: new ImageSource('images/fish.png'),
    Dog: new ImageSource('images/Dog.png'),
    Character: new ImageSource('images/character-game.png'),
    Background: new ImageSource('images/background.png'),
    Island: new ImageSource('images/island.png'),
    Coin: new ImageSource('images/coin.png'),
    GameOver: new ImageSource('images/Gameover.jpg'),
    YouWon: new ImageSource('images/youwin.webp'),
    Vlag: new ImageSource('images/vlag.png'),
}




const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }