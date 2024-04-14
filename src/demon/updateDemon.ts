import { player } from "../player"
import { Demon } from "./demon";

const DEMON_MAX_VEL = 15

export const updateDemon = (demon: Demon, dt: number) => {
  if (!demon.isActive) return;

  demon.vel.x = demon.x < player.x ? DEMON_MAX_VEL : -DEMON_MAX_VEL;
  demon.vel.y = demon.y < player.y ? DEMON_MAX_VEL : -DEMON_MAX_VEL;

  demon.x += demon.vel.x * dt;
  demon.y += demon.vel.y * dt;
}