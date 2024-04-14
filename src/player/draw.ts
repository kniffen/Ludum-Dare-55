import { getGraphics } from '../graphics';
import { Player, Projectile } from ".";

const { ctx } = getGraphics();
export const image = new Image();
export const tileSize = 8;
const columns = 64 / tileSize;

const imageUrl = new URL('../assets/player.png', import.meta.url);
image.src = imageUrl.toString();

const frameLength = 30;
let acc = 0;
let frameIndex = 0;

export const drawPlayer = (player: Player, dt: number) => {
  acc++;

  if (acc >= frameLength) {
    frameIndex++;
    acc = 0;
  }

  if (frameIndex > 2) {
    frameIndex = 0;
  }

  const column = Math.floor(frameIndex % columns);
  const row = Math.floor(frameIndex / columns);

  const xOffset = Math.floor(column * tileSize);
  const yOffset = Math.round(row * tileSize);

  const x = player.x - player.w * 0.5;
  const y = player.y - player.h * 0.5;

  ctx.drawImage(
    image,
    xOffset,
    yOffset,
    tileSize,
    tileSize,
    x,
    y,
    tileSize,
    tileSize
  );

  if (player.debug) {
    ctx.strokeStyle = '#E00000';
    ctx.lineWidth = 0.25;
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.rect(x, y, player.w, player.h);
    ctx.stroke();
  }
};

export const drawProjectile = (projectile: Projectile, dt: number) => {
  if (!projectile.isActive) return;

  ctx.fillStyle = '#99c9b3'
  ctx.beginPath();
  ctx.arc(projectile.x, projectile.y, projectile.r, 0, 2 * Math.PI);
  ctx.fill()
}