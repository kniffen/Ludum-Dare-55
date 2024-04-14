import { ROOM_TYPE } from '..';
import { main } from './main';
import { empty } from './empty';

export const layouts = new Map<ROOM_TYPE, string>([
  [ROOM_TYPE.MAIN, main],
  [ROOM_TYPE.EMPTY, empty],
]);