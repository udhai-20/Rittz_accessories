import React from "react";
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Image,
  Divider,
} from "@chakra-ui/react";
import { AiFillLinkedin } from "react-icons/ai";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};
function Footer(props) {
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")}>
        <Container as={Stack} maxW={"8xl"} py={3}>
          <SimpleGrid
            templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
            spacing={8}
          >
            <Stack spacing={6}>
              <Box>
                <Image
                  height={"55px"}
                  src="https://www.rittzaccessories.com/assets/images/rittz_accessories_logo.png"
                />
              </Box>
              <Text fontSize={"sm"}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62577.31484172912!2d79.66269478702021!3d11.401577476101853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a54c23aa1bce10b%3A0xe1a29e91a8ec81aa!2sChidambaram%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1677140088450!5m2!1sen!2sin"
                  width="300"
                  height="200"
                  allowFullScreen=""
                  className="border-0 w-100"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Text>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Product</ListHeader>
              <Link href={"#"}>Overview</Link>
              <Link href={"#"}>Features</Link>
              <Link href={"#"}>Tutorials</Link>
              <Link href={"#"}>Pricing</Link>
              <Link href={"#"}>Releases</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Company</ListHeader>
              <Link href={"#"}>About</Link>
              <Link href={"#"}>Press</Link>
              <Link href={"#"}>Careers</Link>
              <Link href={"#"}>Contact</Link>
              <Link href={"#"}>Partners</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Support</ListHeader>
              <Link href={"#"}>Help Center</Link>
              <Link href={"#"}>Terms of Service</Link>
              <Link href={"#"}>Legal</Link>
              <Link href={"#"}>Privacy Policy</Link>
              <Link href={"#"}>Status</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Follow Us</ListHeader>
              <Link href={"#"}>Facebook</Link>
              <Link href={"#"}>Twitter</Link>
              <Link href={"#"}>Dribbble</Link>
              <Link href={"#"}>Instagram</Link>
              <Link href={"#"}>LinkedIn</Link>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
      <Box
        borderColor={useColorModeValue("black")}
        borderTopWidth={1}
        aliginItems="center"
      >
        <SimpleGrid columns={2} spacingX="40px" spacingY="20px">
          <Box>
            <Text>
              @{new Date().getFullYear()}2022 Rittz Accessories. All rights
              reserved. Designed & Developed by Rittz Digital
            </Text>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Box bg="tomato" height="80px" fontSize={"30px"}>
              <AiFillLinkedin />
            </Box>
            <Box bg="tomato" height="80px" fontSize={"30px"}>
              <AiFillLinkedin />
            </Box>
            <Box bg="tomato" height="80px" fontSize={"30px"}>
              <AiFillLinkedin />
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}

export default Footer;
