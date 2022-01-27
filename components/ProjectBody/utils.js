export const getCol = (key) =>
  key === 'img1' ? 4 : key === 'img4' ? 12 : key === 'img5' ? 4 : 7;
export const getHeight = (key) =>
  key === 'img1' ? 320 : key === 'img4' ? 512 : key === 'img5' ? 320 : 480;
