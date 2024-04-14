import { COLUMNS, ROWS } from "../../graphics";
import { tileMap, tileTypes } from "../../tiles/types";
import { Tile } from "../types";
import { drawRoom } from "./drawRoom";

export enum GATEWAY_DIRECTION {
  NORTH,
  EAST,
  SOUTH,
  WEST
}

export interface Gateway {
  x: number,
  y: number,
  id: string;
  dir: GATEWAY_DIRECTION
}

export const parseRoomLayout = (
  input: string,
  gateways: Gateway[]
): Tile[] => {
  const arr = input.split('\n').map(line => line.split(''));
  const tiles: Tile[] = [];

  for (let y = 0; y < arr.length; y++) {
    const row = arr[y];

    for (let x = 0; x < row.length; x++) {
      const char = row[x];
      const tile: Tile = {
        x,
        y,
        debug: false,
        type: tileMap.get(char) || tileTypes.air
      };

      tiles.push(tile);
    }
  }

  gateways.forEach((gateway) => {
    const tile = tiles.find(tile => tile.x === gateway.x && tile.y === gateway.y);

    if (!tile) return;

    tile.debug = true;
    tile.gateway = gateway.id;

    switch (gateway.dir) {
      case GATEWAY_DIRECTION.NORTH:
        tile.target = {x: tile.x, y: ROWS - 2}
        tile.type = tileTypes.gateway.north
        break
      case GATEWAY_DIRECTION.EAST:
        tile.target = {x: 1, y: tile.y}
        tile.type = tileTypes.gateway.east
        break
      case GATEWAY_DIRECTION.SOUTH:
        tile.target = {x: tile.x, y: 1}
        tile.type = tileTypes.gateway.south
        break
      case GATEWAY_DIRECTION.WEST:
        tile.target = {x: COLUMNS - 2, y: tile.y}
        tile.type = tileTypes.gateway.west
        break
    }
  });

  return tiles;
};