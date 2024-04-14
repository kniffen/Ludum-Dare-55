import { room } from "../map";
import { player } from "../player";
import { tileMap } from "./types";

export const updateTiles = () => {
  room.current.tiles.forEach(tile => {
    const isPlayerTile = (tile.x === player.tile.x && tile.y === player.tile.y);
    tile.debug = isPlayerTile && player.debug;
  });

  tileMap.forEach(tile => {
    if (!tile.isAnimated) return;

    tile.acc++;

    if (tile.acc >= tile.frameDuration) {
      tile.acc = 0;
      tile.currentFrame++;
    }

    if (tile.currentFrame >= tile.graphicIndexes.length) {
      tile.currentFrame = 0;
    }
  });
};