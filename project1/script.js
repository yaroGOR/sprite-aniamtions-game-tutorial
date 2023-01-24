import animationStates from "./spriteAnimations.js";

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

let playerImage = document.getElementById("img");
ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
const spriteWidth = 575;
const spriteHeight = 523;
console.log(animationStates)
let gameFrame = 0;
const straggerFrame = 5;
let playerState = "run"
const dropdown = document.getElementById("animations")
dropdown.addEventListener("change", function(e){
    playerState = e.target.value
})
const spriteAnimations = [];


animationStates.forEach((state, index) => {
  let frames = {
    loc: [],
  };
  for (let j = 0; j < state.frames; j++) {
    let positionX = j * spriteWidth;
    let positionY = index * spriteHeight;
    frames.loc.push({ x: positionX, y: positionY });
  }
  spriteAnimations[state.name] = frames;
});

console.log(animationStates);

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  let position =
    Math.floor(gameFrame / straggerFrame) % spriteAnimations[playerState].loc.length;
  let frameX = spriteWidth * position;
  let frameY = spriteAnimations[playerState].loc[position].y;
  ctx.drawImage(
    playerImage,
    frameX,
    frameY,
    spriteWidth,
    spriteHeight,
    0,
    0,
    spriteWidth,
    spriteHeight
  );

  gameFrame++;
  requestAnimationFrame(animate);
}
animate();
