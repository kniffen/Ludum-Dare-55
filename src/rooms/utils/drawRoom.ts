import { drawTile } from "../../tiles/drawTile";
import { Tile } from "../types";

export const drawRoom = (tiles: Tile[]) => {
  tiles.forEach(drawTile);
};