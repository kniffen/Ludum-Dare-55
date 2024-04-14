import { getGraphics } from "../graphics";
import { Tile } from "../rooms/types";
import { columns, image, tileSize } from "./tileset";

const { ctx } = getGraphics();

export const drawTile = (tile: Tile) => {
  const index = tile.type.graphicIndexes[tile.type.currentFrame];
  const column = Math.floor(index % columns);
  const row = Math.floor(index / columns);

  const xOffset = column * tileSize;
  const yOffset = row * tileSize;

  const x = tile.x * tileSize;
  const y = tile.y * tileSize;

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

  if (tile.debug) {
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 1 / 8;
    ctx.beginPath();
    ctx.rect(x, y, tileSize, tileSize);
    ctx.stroke();
  }
};