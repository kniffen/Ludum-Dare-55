import { getGraphics } from "../graphics"
import { Demon } from "./demon";

const { ctx } = getGraphics();
export const image = new Image();
export const tileSize = 8 * 3;
const frames = 5

const imageUrl = new URL('../assets/demon.png', import.meta.url);
image.src = imageUrl.toString();

const frameLength = 20
let acc = 0
let frame = 0

export const drawDemon = (demon: Demon) => {
  if (!demon.isActive) return;

  acc++;

  if (acc >= frameLength) {
    frame++;
    acc = 0;
  }

  if (frame >= frames) {
    frame = 0;
  }

  const column = Math.floor(frame % frames);
  const row = Math.floor(frame / frames);

  const xOffset = Math.floor(column * tileSize);
  const yOffset = Math.round(row * tileSize);

  const x = demon.x - demon.w * 0.5;
  const y = demon.y - demon.h * 0.5;

  ctx.drawImage(
    image,
    xOffset,
    yOffset,
    tileSize,
    tileSize,
    x,
    y,
    demon.w,
    demon.h
  );

  drawHealthBar(demon)

  if (demon.debug) {
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 1 / 8;
    ctx.beginPath();
    ctx.rect(x, y, demon.w, demon.h);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x, y)
    ctx.lineTo(x + demon.w, y + demon.h)
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x + demon.w, y)
    ctx.lineTo(x, y + demon.h)
    ctx.stroke();
  }
}

const drawHealthBar = (demon: Demon) => {
  const x = 1
  const y = 1
  const w = 50
  const h = 5
  const margin = 0.5

  // Health bar
  ctx.beginPath();
  ctx.fillStyle = '#191b1a'
  ctx.rect(x, y, w, h)
  ctx.fill()
  ctx.beginPath();
  ctx.fillStyle = '#294257'
  ctx.rect(x + margin, y + margin, w - margin * 2, h - margin * 2)
  ctx.fill()
  ctx.beginPath();
  ctx.fillStyle = '#99c9b3'
  ctx.rect(x + margin, y + margin, (w - margin * 2) * demon.health, h - margin * 2)
  ctx.fill()
}