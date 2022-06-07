import * as PIXI from 'pixi.js'
import greenImage from "./green.png"
import { Application, TilingSprite } from 'pixi.js'

const pixi = new PIXI.Application({ backgroundColor: 0x1099bb, width: 1980 , height: 1020 });
document.body.appendChild(pixi.view);

// create a new Sprite from an image path
const green = PIXI.Sprite.from(greenImage);
const green2 = PIXI.Sprite.from(greenImage)

green.scale.set(0.2)
green2.scale.set(Math.random() * 0.2)
// center the sprite's anchor point
green.anchor.set(0.5);
green2.anchor.set(0.5);

green.x = Math.random() * pixi.screen.height;
green.y = Math.random() * pixi.screen.height;

green2.x = Math.random() * pixi.screen.width;
green2.y = Math.random() * pixi.screen.height;

green2.tint = Math.random() * 0xFFFFFF;

pixi.stage.addChild(green);
pixi.stage.addChild(green2);

// Listen for animate update
pixi.ticker.add((delta) => {
    // just for fun, let's rotate mr rabbit a little
    // delta is 1 if running at 100% performance
    // creates frame-independent transformation
    green.rotation += Math.random() * 0.01 * delta;
    green2.rotation += Math.random() * 0.01 * delta;
});