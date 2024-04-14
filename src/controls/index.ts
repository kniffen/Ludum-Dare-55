import { PLAYER_MAX_VEL, player } from "../player";
import { room } from "../map";
import { candles } from "../candles";
import { tileSize } from "../tiles/tileset";

window.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'w':
      player.vel.y = -PLAYER_MAX_VEL;
      break;
    case 'a':
      player.vel.x = -PLAYER_MAX_VEL;
      break;
    case 's':
      player.vel.y = PLAYER_MAX_VEL;
      break;
    case 'd':
      player.vel.x = PLAYER_MAX_VEL;
      break;
  }
});

window.addEventListener('keyup', (e) => {
  switch (e.key) {
    case 'w':
      player.vel.y = 0;
      break;
    case 'a':
      player.vel.x = 0;
      break;
    case 's':
      player.vel.y = 0;
      break;
    case 'd':
      player.vel.x = 0;
      break;
    case 'e':
      pickUpItem();
      break;
  }
});

window.addEventListener('mousedown', (e) => {
  player.fire()
})

const pickupURL = new URL('../assets/pickup.mp3', import.meta.url)
const pickup = new Audio(pickupURL.toString());
pickup.load();

const pickUpItem = () => {
  if (player.candle) {
    delete player.candle;
    pickup.play();
    return
  }

  const roomCandles = candles.filter(candle => candle.room === room.current.id);
  if (roomCandles.length < 1) return;

  for (const candle of roomCandles) {
    if (
      Math.abs(player.x - candle.x) <= tileSize &&
      Math.abs(player.y - candle.y) <= tileSize
    ) {
      player.candle = candle
      pickup.play()
      break;
    }
  }
};