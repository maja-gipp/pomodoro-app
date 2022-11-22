import { useState } from "react";

const photos = [
  "https://picsum.photos/id/237/200/300",
  "https://picsum.photos/id/1/200/300",
  "https://picsum.photos/id/10/200/300",
];

export const Gallery = () => {
  const [value, setValue] = useState(0);

  const getNextPicture = () => {
    setValue((x) => (x + 1) % photos.length);
  };
  const getPreviousPicture = () => {
    setValue((x) => (x - 1 + photos.length) % photos.length);
  };
  const currentPictureSrc = photos[value];

  return (
    <p>
      <img src={currentPictureSrc} alt="" />
      <button onClick={getNextPicture}>+</button>
      <button onClick={getPreviousPicture}>-</button>
    </p>
  );
};