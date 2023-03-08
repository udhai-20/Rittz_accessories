import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Banner.css";
const items = [
  <img
    className="item"
    width={"100%"}
    data-value="1"
    src="https://www.rittzaccessories.com/assets/images/premium_designs_home.jpg"
  />,

  <img
    className="item"
    width={"100%"}
    data-value="2"
    src="https://www.rittzaccessories.com/assets/images/accessories_1.jpg"
  />,
  <img
    className="item"
    width={"100%"}
    data-value="3"
    src="https://www.rittzaccessories.com/assets/images/manufactured_%20perfection_home.jpg"
  />,
  <img
    className="item"
    width={"100%"}
    data-value="4"
    src="https://www.rittzaccessories.com/assets/images/textures.jpg"
  />,
];

function Banner(props) {
  return (
    <>
      <AliceCarousel
        autoPlay
        autoPlayControls
        autoPlayStrategy="none"
        autoPlayInterval={1000}
        animationDuration={1000}
        animationType="fadeout"
        infinite
        touchTracking={false}
        disableDotsControls
        disableButtonsControls
        items={items}
      />
    </>
  );
}

export default Banner;
