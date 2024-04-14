export const image = new Image();
export const tileSize = 8;
export const columns = 128 / tileSize;
export const rows = 128 / tileSize;

const imageUrl = new URL(
  '../assets/tileset.png',
  import.meta.url
);

image.src = imageUrl.toString();

