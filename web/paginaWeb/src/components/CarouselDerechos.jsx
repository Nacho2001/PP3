import React, { useContext } from "react";
import Carousel from "react-bootstrap/Carousel";
import { AccessibilityContext } from "../context/AccessibilityContext";

const images = import.meta.glob('../assets/derechos/*.png', { eager: true });

function CarouselDerechos() {
  const { contrast } = useContext(AccessibilityContext);
  const imageList = Object.values(images);
  const imageKeys = Object.keys(images);

  return (
    <>
    <Carousel>
      {imageList.map((image, index) => {
        const imageName = imageKeys[index].replace("../assets/derechos", '').replace('.png', '');
        return (
          <Carousel.Item key={index} interval={10000}>
            <img
              className={` img-fluid ${contrast === "high" ? "high-contrast-img" : ""}`}
              src={image.default}
              alt={`Slide ${index + 1} - ${imageName}`}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
          <style>
          {`
            .high-contrast-img {
            filter: grayscale(100%) contrast(200%);
            }`
          }
        </style>
        </>
  );
}

export default CarouselDerechos;