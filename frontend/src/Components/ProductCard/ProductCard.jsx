import React from "react";
import { Flex, Stack, Text } from "@chakra-ui/react";
import "./Product.css";

function ProductCard({ icon, title, text }) {
  return (
    <>
      <Stack className="product-wrapper" align={"center"} p={3}>
        <Flex
          className="image_container"
          w={"100%"}
          h={"100%"}
          align={"center"}
          justify={"center"}
        >
          {icon}
        </Flex>
        <Text color={"white"} fontSize={"1.1rem"} fontWeight={600}>
          {title}
        </Text>
        <Text textAlign={"center"} color={"white"}>
          {text}
        </Text>
      </Stack>
    </>
  );
}

export default ProductCard;
