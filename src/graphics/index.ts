import { tileSize } from "../tiles/tileset";

const canvas = document.getElementById('canvas');

if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
  throw new Error('Missing canvas');
}

export const SCALE = 8;
export const COLUMNS = 15;
export const ROWS = 11;
canvas.width =  Math.floor(tileSize * COLUMNS * SCALE);
canvas.height = Math.floor(tileSize * ROWS * SCALE);

const ctx = canvas.getContext('2d');

if (!ctx) {
  throw new Error('Missing context');
}

// @ts-ignore
ctx.webkitImageSmoothingEnabled = false;
// @ts-ignore
ctx.mozImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;
ctx.scale(SCALE, SCALE);

export const getGraphics = () => ({
  canvas,
  ctx
});

export const clearCanvas = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.moveTo(0, 0);
  ctx.fillStyle = '#191B1A';
  ctx.beginPath();
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fill();
};