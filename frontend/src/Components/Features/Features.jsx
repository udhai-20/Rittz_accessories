import { Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";

function Features({ title, text, icon, color }) {
  return (
    <>
      <Stack borderRadius={"20px"} boxShadow={"md"} align={"center"} p={3}>
        <Flex w={"60%"} h={"60%"} align={"center"} justify={"center"}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{title}</Text>
        <Text textAlign={"center"} color={"gray.600"}>
          {text}
        </Text>
      </Stack>
    </>
  );
}

export default Features;
