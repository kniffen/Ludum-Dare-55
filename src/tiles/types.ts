import { columns } from "./tileset";

export interface TileType {
  isSolid: boolean;
  isAnimated: boolean;
  isInteractive: boolean;
  acc: number,
  currentFrame: number;
  frameDuration: number;
  graphicIndexes: number[];
}

const baseTile: TileType = {
  isSolid: false,
  isAnimated: false,
  isInteractive: false,
  acc: 0,
  currentFrame: 0,
  frameDuration: 0,
  graphicIndexes: [0]
};

export const tileMap = new Map<string, TileType>();

export const tileTypes = {
  air: { ...baseTile },
  ground: { ...baseTile, graphicIndexes: [columns * 2 + 2] },
  wall: {
    topLeft:     { ...baseTile, isSolid: true, graphicIndexes: [1] },
    top:         { ...baseTile, isSolid: true, graphicIndexes: [2] },
    topRight:    { ...baseTile, isSolid: true, graphicIndexes: [5] },
    left:        { ...baseTile, isSolid: true, graphicIndexes: [columns * 1 + 1] },
    right:       { ...baseTile, isSolid: true, graphicIndexes: [columns * 1 + 5] },
    bottomLeft:  { ...baseTile, isSolid: true, graphicIndexes: [columns * 4 + 1] },
    bottom:      { ...baseTile,  isSolid: true,  graphicIndexes: [columns * 4 + 2]},
    bottomRight: { ...baseTile,  isSolid: true,  graphicIndexes: [columns * 4 + 5]}
  },
  gateway: {
    north: {  ...baseTile,  isInteractive: true,  graphicIndexes: [3]},
    east: {  ...baseTile,  isInteractive: true,  graphicIndexes: [columns * 2 + 5]},
    south: {  ...baseTile,  isInteractive: true,  graphicIndexes: [columns * 4 + 3]},
    west: {  ...baseTile,  isInteractive: true,  graphicIndexes: [columns * 2 + 1]},
  },
  candle: {
    ...baseTile,
    isAnimated: true,
    isInteractive: true,
    acc: 0,
    currentFrame: 0,
    frameDuration: 30,
    graphicIndexes: [9, 10, 11, 12]
  }
};

// General
tileMap.set(' ', tileTypes.air);
tileMap.set('0', tileTypes.ground);

// Walls
tileMap.set('Q', tileTypes.wall.topLeft);
tileMap.set('#', tileTypes.wall.top);
tileMap.set('E', tileTypes.wall.topRight);
tileMap.set('R', tileTypes.wall.right);
tileMap.set('L', tileTypes.wall.left);
tileMap.set('T', tileTypes.wall.bottomLeft);
tileMap.set('B', tileTypes.wall.bottom);
tileMap.set('Y', tileTypes.wall.bottomRight);

// Gateways
tileMap.set('H', tileTypes.gateway.north);
tileMap.set('J', tileTypes.gateway.east);
tileMap.set('N', tileTypes.gateway.south);
tileMap.set('M', tileTypes.gateway.west);

// Candle
tileMap.set('C', tileTypes.candle);

// Alter tiles
tileMap.set('1', { ...baseTile, graphicIndexes: [columns * 5] });
tileMap.set('2', { ...baseTile, graphicIndexes: [columns * 5 + 1] });
tileMap.set('3', { ...baseTile, graphicIndexes: [columns * 5 + 2] });
tileMap.set('4', { ...baseTile, graphicIndexes: [columns * 6] });
tileMap.set('5', { ...baseTile, graphicIndexes: [columns * 6 + 1] });
tileMap.set('6', { ...baseTile, graphicIndexes: [columns * 6 + 2] });
tileMap.set('7', { ...baseTile, graphicIndexes: [columns * 7] });
tileMap.set('8', { ...baseTile, graphicIndexes: [columns * 7 + 1] });
tileMap.set('9', { ...baseTile, graphicIndexes: [columns * 7 + 2] });