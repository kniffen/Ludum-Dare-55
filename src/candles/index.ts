import { tileSize } from "../tiles/tileset";
import { drawCandle } from "./drawCandle";
import { updateCandle } from "./updateCandle";

export interface Candle {
  x: number;
  y: number;
  debug: boolean;
  room: string;
  update: () => void;
  draw: () => void;
}

const candle1: Candle = {
  x: 2 * tileSize,
  y: 1 * tileSize,
  debug: false,
  // room: 'room-0-0',
  room: 'room-3-3',
  update: () => updateCandle(candle1),
  draw: () => drawCandle(candle1)
};

const candle2: Candle = {
  x: 8 * tileSize,
  y: 8 * tileSize,
  debug: false,
  // room: 'room-0-6',
  room: 'room-3-3',
  update: () => updateCandle(candle2),
  draw: () => drawCandle(candle2)
};

const candle3: Candle = {
  x: 12 * tileSize,
  y: 8 * tileSize,
  debug: false,
  // room: 'room-7-4',
  room: 'room-3-3',
  update: () => updateCandle(candle3),
  draw: () => drawCandle(candle3)
};

const candle4: Candle = {
  x: 10 * tileSize,
  y: 2 * tileSize,
  debug: false,
  // room: 'room-6-0',
  room: 'room-3-3',
  update: () => updateCandle(candle4),
  draw: () => drawCandle(candle4)
};

const candle5: Candle = {
  x: 8 * tileSize,
  y: 4 * tileSize,
  debug: false,
  // room: 'room-4-6',
  room: 'room-3-3',
  update: () => updateCandle(candle5),
  draw: () => drawCandle(candle5)
};

export const candles = [
  candle1,
  candle2,
  candle3,
  candle4,
  candle5,
];
