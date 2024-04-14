import { COLUMNS, ROWS } from "../graphics";
import { ROOM_TYPE } from "../rooms";
import { layouts } from "../rooms/layouts";
import { Room } from "../rooms/types";
import { drawRoom } from "../rooms/utils/drawRoom";
import { GATEWAY_DIRECTION, Gateway, parseRoomLayout } from "../rooms/utils/parseRoomLayout";

interface MapItem {
  x: number,
  y: number,
  id: string,
  type: ROOM_TYPE,
}

interface MapRoom {
  id: string;
  type: ROOM_TYPE,
  room: Room,
  north?: string;
  east?: string;
  south?: string;
  west?: string;
}

// TODO: randomly generate map layout at some point...

// # = Empty room (with horrors you can't imagine... maybe)
// A = Altar
// 1 = Candle 1
// 2 = Candle 2
// 3 = Candle 3
// 4 = Candle 4
// 5 = Candle 5

const roomTypeMap = new Map<string, ROOM_TYPE>([
  ['#', ROOM_TYPE.EMPTY],
  ['A', ROOM_TYPE.MAIN],
  ['1', ROOM_TYPE.EMPTY],
  ['2', ROOM_TYPE.EMPTY],
  ['3', ROOM_TYPE.EMPTY],
  ['4', ROOM_TYPE.EMPTY],
  ['5', ROOM_TYPE.EMPTY],
]);

export const layout = [
  ['1', ' ', ' ', ' ', ' ', ' ', '4', ' ',],
  ['#', '#', '#', '#', '#', '#', '#', '#',],
  [' ', '#', ' ', '#', ' ', ' ', ' ', ' ',],
  [' ', '#', '#', 'A', '#', '#', '#', ' ',],
  [' ', '#', ' ', '#', ' ', ' ', '#', '3',],
  [' ', '#', '#', '#', ' ', '#', '#', ' ',],
  ['2', '#', ' ', '#', '5', ' ', ' ', ' ',],
];
const rows = layout.length;
const columns = layout[0].length;

const mapItems = new Map<string, MapItem>();

for (let y = 0; y < layout.length; y++) {
  const row = layout[y];

  for (let x = 0; x < row.length; x++) {
    const char = row[x];

    if (!char || char === ' ') continue;

    const id = `room-${x}-${y}`;
    const type = roomTypeMap.get(char) || ROOM_TYPE.EMPTY;

    mapItems.set(id, {
      x,
      y,
      id,
      type
    });
  }
}

export const map = new Map<string, MapRoom>();

mapItems.forEach(item => {
  const adjacentRooms = [
    {x: item.x,     y: item.y - 1, dir: GATEWAY_DIRECTION.NORTH},
    {x: item.x + 1, y: item.y,     dir: GATEWAY_DIRECTION.EAST},
    {x: item.x,     y: item.y + 1, dir: GATEWAY_DIRECTION.SOUTH},
    {x: item.x - 1, y: item.y,     dir: GATEWAY_DIRECTION.WEST},
  ]

  const gateways = adjacentRooms.reduce<Gateway[]>((gateways, roomCoords) => {
    const id = mapItems.get(`room-${roomCoords.x}-${roomCoords.y}`)?.id
    let x = 0
    let y = 0

    switch (roomCoords.dir) {
      case GATEWAY_DIRECTION.NORTH:
        x = Math.floor(COLUMNS / 2)
        break
      case GATEWAY_DIRECTION.EAST:
        x = COLUMNS-1
        y = Math.floor(ROWS / 2)
        break
      case GATEWAY_DIRECTION.SOUTH:
        x = Math.floor(COLUMNS / 2)
        y = ROWS - 1
        break
      case GATEWAY_DIRECTION.WEST:
        y = Math.floor(ROWS / 2)
        break
    }

    return id ? [...gateways, {x, y, id, dir: roomCoords.dir}] : gateways
  }, [])

  const layout = layouts.get(item.type);

  if (!layout) return;

  const room: Room = {
    id: item.id,
    tiles: parseRoomLayout(layout, gateways),
    draw: () => drawRoom(room.tiles)
  };

  map.set(item.id, {
    ...item,
    room
  });
});

const initialRoom = map.get('room-3-3')?.room as Room

export const room = {
  current:  initialRoom
};
