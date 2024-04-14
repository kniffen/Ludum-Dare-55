import { drawDemon } from "./drawDemon";
import { updateDemon } from "./updateDemon";

const hitURL = new URL('../assets/hit.mp3', import.meta.url)
const hit = new Audio(hitURL.toString());
hit.load()

export interface Demon {
  x: number;
  y: number;
  vel: {
    x: number;
    y: number;
  };
  w: number;
  h: number;
  health: number;
  debug: boolean;
  isActive: boolean;
  update: (dt: number) => void;
  draw: () => void;
  hit: () => void;
}

export const demon: Demon = {
  x: 70,
  y: 40,
  vel: {x: 0, y: 0},
  w: 8 * 3,
  h: 8 * 3,
  health: 1,
  debug: false,
  isActive: false,
  update: (dt) => updateDemon(demon, dt),
  draw: () => drawDemon(demon),
  hit: () => {
    demon.health -= 0.01;
    hit.play();

    if (demon.health <= 0) {
      alert('Game over!');
      demon.health = 1;
      demon.isActive = false;
    }


  }
}