import { Player, Projectile } from ".";
import { demon } from "../demon/demon";
import { map, room } from "../map";
import { Room } from "../rooms/types";
import { tileSize } from "./draw";

export const updatePlayer = (player: Player, dt: number) => {
  const doorTile = room.current.tiles.find(tile => !!tile.gateway && tile.x === player.tile.x && tile.y === player.tile.y)
  if (doorTile?.gateway) {
    room.current = map.get(doorTile.gateway)?.room as Room;
    player.x = (doorTile.target?.x || 0) * tileSize;
    player.y = (doorTile.target?.y || 0) * tileSize;
  }

  let nx = player.x + player.vel.x * dt;
  let ny = player.y + player.vel.y * dt;

  const solidTiles = room.current.tiles.filter(tile => tile.type.isSolid) || []

  for (const tile of solidTiles) {
    const x = tile.x * tileSize;
    const y = tile.y * tileSize;
    if (
      nx > x && nx < x + tileSize &&
      ny > y && ny < y + tileSize
    ) {
      nx = player.x
      ny = player.y
    }
  }

  player.x = nx;
  player.y = ny;

  // Get player tile
  player.tile.x = Math.floor(player.x / tileSize);
  player.tile.y = Math.floor(player.y / tileSize);

  if (player.candle) {
    player.candle.x = player.x;
    player.candle.y = player.y;
    player.candle.room = room.current.id;
  }
};

export const updateProjectile = (projectile: Projectile, dt: number) => {
  projectile.x += projectile.vel.x * dt;
  projectile.y += projectile.vel.y * dt;

  const dvx = demon.x - projectile.x;
  const dvy = demon.y - projectile.y;
  const magnitude = Math.sqrt(dvx * dvx + dvy * dvy);

  if (projectile.isActive && magnitude < demon.w/2) {
    demon.hit()
    projectile.isActive = false
  }
}
