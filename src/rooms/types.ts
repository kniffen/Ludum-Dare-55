import { TileType } from "../tiles/types";

export interface Tile {
  x: number;
  y: number;
  debug: boolean,
  type: TileType;
  gateway?: string;
  target?: {x: number, y: number}
}

export interface Room {
  id: string;
  tiles: Tile[];
  draw: () => void;
}