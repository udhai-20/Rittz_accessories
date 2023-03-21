import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Testimonials.css";

let testimonialCarousel = [
  {
    name: "Manushi Gupta",

    img: "../Images/calimod.jpeg",
    comment:
      "I can say not a lot of leather is better than testimonial's. We found ourselves doubting what company to go with at one point, but I'm glad we chose them. They have unmatched quality in their leather construction and use fantastic materials. My opinion - worth every penny.",
  },
  {
    name: "Vaishnav Mathur",

    img: "../Images/londonFog.jpeg",
    comment:
      "Aspire is one of the best places to study in Bangalore to live your dreams of Abroad. I Am eternally grateful to my IELTS teachers who not only taught me the subject but inspired me to pursue my dreams. Every single minute spent here was worth every penny Thank you team Aspire Bangalore.",
  },
  {
    name: "Vaishnav Mathur",

    img: "../Images/leecooper.jpeg",
    comment:
      "Aspire is one of the best places to study in Bangalore to live your dreams of Abroad. I Am eternally grateful to my IELTS teachers who not only taught me the subject but inspired me to pursue my dreams. Every single minute spent here was worth every penny Thank you team Aspire Bangalore.",
  },
  {
    name: "Vaishnav Mathur",

    img: "../Images/leecooper.jpeg",
    comment:
      "Aspire is one of the best places to study in Bangalore to live your dreams of Abroad. I Am eternally grateful to my IELTS teachers who not only taught me the subject but inspired me to pursue my dreams. Every single minute spent here was worth every penny Thank you team Aspire Bangalore.",
  },
];
const handleDragStart = (e) => e.preventDefault();
function Testimonials() {
  const items = testimonialCarousel.map((c) => (
    <div className="carouselItem">
      <div className="image_container">
        <img
          className="carouselItem__img"
          src={c.img}
          alt={c?.name}
          onDragStart={handleDragStart}
        />
      </div>

      <b className="carouselItem__name">{c?.name}</b>

      <b className="carouselItem__txt">{c?.comment}</b>
    </div>
  ));
  const responsive = {
    0: {
      items: 1,
    },
    512: {
      items: 1,
    },
    1024: {
      items: 3,
    },
  };

  return (
    <AliceCarousel
      autoPlay
      responsive={responsive}
      infinite
      disableButtonsControls
      autoPlayInterval={3000}
      keyboardNavigation={true}
      // disableDotsControls
      mouseTracking
      items={items}
    />
  );
}

export default Testimonials;
