import React from "react";
import Marquee from "react-fast-marquee";
const name = [
  {
    name: "test#1",
  },
  {
    name: "test#2",
  },
  {
    name: "test#3",
  },
  {
    name: "test#4",
  },
];
function liveProduct(props) {
  const check = name.map((el) => {
    return <div>{el.name}</div>;
  });
  return (
    <>
      <Marquee>{check}</Marquee>
    </>
  );
}

export default liveProduct;
