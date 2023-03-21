import { Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";

function ProductDetails({ icon, title, text }) {
  return (
    <>
      <Stack w={"25%"} className="product-wrapper" align={"center"} p={3}>
        <Flex
          className="image_container"
          w={"50%"}
          h={"50%"}
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

export default ProductDetails;
