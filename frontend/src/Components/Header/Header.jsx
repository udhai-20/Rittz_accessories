import React from "react";
import { Box, Container, Link, Text } from "@chakra-ui/react";
import "./Header.css";
import {
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
function Header(props) {
  return (
    <>
      <Box className="header-wrapper">
        <Container maxW={"5xl"}>
          <Box className="inside-header">
            <Box>
              <Link href="mailto:aspireglobaleducation@gmail.com">
                Email: sales@rittzaccessories.com
              </Link>
            </Box>
            <Box>
              <Link href="tel:+91  442247 1672">
                PhoneNo:+91 442247 1672 / 5740{" "}
              </Link>
            </Box>
            <Box className="social_media">
              <Link
                href="https://www.linkedin.com/company/rittz-digital/"
                target="_blank"
              >
                <AiFillLinkedin color="white" fontSize={"30px"} />
              </Link>
              <Link
                href="https://www.facebook.com/rittzaccessories/?ref=rittzaccessoriesweb"
                target="_blank"
              >
                <AiFillFacebook color="white" fontSize={"30px"} />
              </Link>
              <Link
                href="https://www.instagram.com/rittz.accessories/?ref=rittzaccessoriesweb"
                target="_blank"
              >
                <AiFillInstagram
                  color="white"
                  className="header_insta"
                  fontSize={"30px"}
                />
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Header;
