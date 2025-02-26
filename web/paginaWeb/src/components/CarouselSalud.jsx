import React, { useContext } from "react";
import Carousel from "react-bootstrap/Carousel";
import { AccessibilityContext } from "../context/AccessibilityContext";

const images = import.meta.glob('../assets/salud/*.png', { eager: true });

function CarouselSalud() {
  const { contrast } = useContext(AccessibilityContext);
  const imageList = Object.values(images);
  const imageKeys = Object.keys(images);

  return (
    <>
    <Carousel>
      {imageList.map((image, index) => {
        const imageName = imageKeys[index].replace("../assets/salud", '').replace('.png', '');
        return (
          <Carousel.Item key={index} interval={10000}>
            <img
              className={`img-fluid ${contrast === "high" ? "high-contrast-img" : ""}`}
              src={image.default}
              alt={`Slide ${index + 1} - ${imageName}`}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>

    </>
  );
}

export default CarouselSalud;