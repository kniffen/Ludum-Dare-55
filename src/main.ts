import { clearCanvas } from "./graphics";
import { player } from './player';
import './controls';
import { room } from "./map";
import { updateTiles } from "./tiles/updateTiles";
import { candles } from "./candles";
import { demon } from "./demon/demon";
import { getGraphics } from "./graphics";

const {ctx} = getGraphics()

const update = (dt: number) => {
  updateTiles();
  player.update(dt);
  demon.update(dt);
  candles.forEach(candle => candle.update());
  spawnDemon()
};

const render = (dt: number) => {
  clearCanvas();
  room.current.draw();
  player.draw(dt);
  candles.forEach(candle => room.current.id === candle.room && candle.draw());
  demon.draw();

  // Debug altar bounds
  // ctx.beginPath();
  // ctx.rect(altarCoords.x, altarCoords.y, 8*3,8*3)
  // ctx.stroke()
};

let lastTimestamp = performance.now();
const gameloop = () => {
  const timestamp = performance.now();
  const dt = (timestamp - lastTimestamp) / 1000;
  lastTimestamp = timestamp;

  update(dt);
  render(dt);

  window.requestAnimationFrame(gameloop);
};

window.requestAnimationFrame(gameloop)

const altarCoords = {
  x: 8*6,
  y: 8*4,
}

const spawnSoundURL = new URL('./assets/hit.mp3', import.meta.url)
const spawnSound = new Audio(spawnSoundURL.toString());
spawnSound.load()

const spawnDemon = () => {
  if (demon.isActive) return;
  if (player.candle) return
  if (candles.some(candle => candle.room !== 'room-3-3')) return;

  // Quick and dirty solution so check if all candles are incide the altar
  // TODO: Improve by getting altar coords from room data
  for (const candle of candles) {
    if (candle.x < altarCoords.x) return;
    if (candle.x > altarCoords.x + 8*3) return;
    if (candle.y < altarCoords.y) return;
    if (candle.y > altarCoords.y + 8*3) return;
  }

  demon.isActive = true
  spawnSound.play();
}