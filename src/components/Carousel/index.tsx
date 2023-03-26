import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

interface Iimage {
  id: number;
  imgSrc: string;
}
const images: Iimage[] = [
  { id: 0, imgSrc: "assets/img-1.jpg" },
  { id: 1, imgSrc: "assets/img-2.jpg" },
  { id: 2, imgSrc: "assets/img-3.jpg" },
  { id: 3, imgSrc: "assets/img-4.jpg" },
];
export default function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);
  const changeImage = () => {
    console.log(currentImage);
    setInterval(() => {
      setCurrentImage((prev) => (prev > 2 ? 0 : prev + 1));
    }, 2000);
  };
  useEffect(() => {
    changeImage();
  }, []);
  console.log(currentImage);
  return (
    <div>
      <div className={styles.container}>
        {images.map((img) => (
          <div key={img.id}>
            {currentImage === img.id && (
              <img
                key={img.id}
                className={styles.img}
                src={img.imgSrc}
                alt={`casourel-img-${img.id}`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
