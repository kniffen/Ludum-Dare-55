import { Candle } from ".";
import { getGraphics } from "../graphics";
import { columns, image, tileSize } from "../tiles/tileset";
import { tileTypes } from "../tiles/types";

const { ctx} = getGraphics()

const tileType = tileTypes.candle

export const drawCandle = (candle: Candle) => {
  const index = tileType.graphicIndexes[tileType.currentFrame];
  const column = Math.floor(index % columns);
  const row = Math.floor(index / columns);

  const xOffset = column * tileSize;
  const yOffset = row * tileSize;

  const x = candle.x - tileSize * 0.5;
  const y = candle.y - tileSize * 0.5;

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

  if (candle.debug) {
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 1 / 8;
    ctx.beginPath();
    ctx.rect(x, y, tileSize, tileSize);
    ctx.stroke();
  }
};