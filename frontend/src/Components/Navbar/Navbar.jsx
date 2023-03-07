import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Select,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { useNavigate, Link } from "react-router-dom";

// const NavLink = ({ children }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={"md"}
//     _hover={{
//       textDecoration: "none",
//       bg: useColorModeValue("gray.200", "gray.700"),
//     }}
//     href={"#"}
//   >
//     {children}
//   </Link>
// );
function Navbar(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4} py={3}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Image
                onClick={() => navigate("/")}
                src="https://www.rittzaccessories.com/assets/images/rittz_accessories_logo.png"
              />
            </Box>
          </HStack>
          <Flex alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Link
                to="/"
                rounded={"md"}
                _hover={{
                  px: "2px",
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                  color: "orange  ",
                }}
              >
                Home
              </Link>
              <Link
                to="/about"
                rounded={"md"}
                _hover={{
                  px: "2px",
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                  color: "orange  ",
                }}
              >
                About
              </Link>
              <Stack rounded={"md"}>
                <Menu>
                  <MenuButton rightIcon={<ChevronDownIcon />}>
                    Products
                  </MenuButton>
                  <MenuList>
                    <MenuItem minH="48px">
                      <Image
                        boxSize="2rem"
                        borderRadius="full"
                        src="https://placekitten.com/100/100"
                        alt="Fluffybuns the destroyer"
                        mr="12px"
                      />
                      <span onClick={() => navigate("/products")}>Wallet</span>
                    </MenuItem>
                    <MenuItem minH="40px">
                      <Image
                        boxSize="2rem"
                        borderRadius="full"
                        src="https://placekitten.com/120/120"
                        alt="Simon the pensive"
                        mr="12px"
                      />
                      <span onClick={() => navigate("/products")}>Bag</span>
                    </MenuItem>
                    <MenuItem minH="48px">
                      <Image
                        boxSize="2rem"
                        borderRadius="full"
                        src="https://placekitten.com/100/100"
                        alt="Fluffybuns the destroyer"
                        mr="12px"
                      />
                      <span onClick={() => navigate("/products")}>Belt</span>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Stack>

              <Link
                to="enquiry"
                rounded={"md"}
                _hover={{
                  px: "2px",
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                  color: "orange  ",
                }}
              >
                Enquiry
              </Link>
              <Link
                to="/contact"
                rounded={"md"}
                _hover={{
                  px: "2px",
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                  color: "orange  ",
                }}
              >
                Contacts
              </Link>
            </HStack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>Main Content Here</Box>
    </>
  );
}

export default Navbar;
