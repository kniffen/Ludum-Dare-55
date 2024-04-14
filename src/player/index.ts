import { Candle } from '../candles';
import { demon } from '../demon/demon';
import { drawPlayer, drawProjectile } from './draw';
import { updatePlayer, updateProjectile } from './updatePlayer';

export const PLAYER_MAX_VEL = 50;

export interface Player {
  x: number;
  y: number;
  w: number;
  h: number;
  vel: {
    x: number;
    y: number;
  };
  tile: {
    x: number;
    y: number;
  };
  debug: boolean;
  candle?: Candle;
  update: (dt: number) => void;
  draw: (dt: number) => void;
  fire: () => void
}

export const player: Player = {
  x: 20,
  y: 30,
  w: 8,
  h: 8,
  vel: {
    x: 0,
    y: 0,
  },
  tile: {
    x: 0,
    y: 0,
  },
  debug: false,
  update: (dt) => {
    updatePlayer(player, dt);
    updateProjectile(projectile, dt);
  },
  draw: (dt) => {
    drawPlayer(player, dt);
    drawProjectile(projectile, dt)
  },
  fire: () => fireProjectile()
};

export interface Projectile {
  r: number,
  x: number,
  y: number,
  vel: {x: number, y: number},
  isActive: boolean;
}

export const projectile: Projectile = {
  r: 1,
  x: player.x,
  y: player.y,
  vel: {x: 0, y: 0},
  isActive: false,
}

const mp3URL = new URL('../assets/bling.mp3', import.meta.url)
const bling = new Audio(mp3URL.toString());
bling.load()


export const PROJECTILE_SPEED = 100
const fireProjectile = () => {
  if (projectile.isActive || !demon.isActive) return;
  bling.pause();
  bling.load();
  bling.play();

  projectile.x = player.x
  projectile.y = player.y

  // Directional vector
  const dvx = demon.x - player.x;
  const dvy = demon.y - player.y;

  const magnitude = Math.sqrt(dvx * dvx + dvy * dvy);
  // unit vector
  const uvx = dvx / magnitude;
  const uvy = dvy / magnitude;

  projectile.vel.x = uvx * PROJECTILE_SPEED;
  projectile.vel.y = uvy * PROJECTILE_SPEED;
  projectile.isActive = true
}