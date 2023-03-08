import React from "react";
import Banner from "../../Components/Banner/Banner";
import {
  Box,
  Container,
  HStack,
  Icon,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Features from "../../Components/Features/Features";
import { InfoOutlineIcon } from "@chakra-ui/icons";

function Home(props) {
  return (
    <>
      {/* //bannersection */}
      <Box>
        <Banner />
      </Box>
      {/* Our Works Section */}
      <Box className="ourwork-Wrapper" my={"15px"}>
        <Container maxW={"8xl"}>
          <Text className="Headings" p={"0"} textAlign={"left"}>
            What we do
          </Text>
          <Box marginTop={"30px"} p={4}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              <Features
                icon={
                  <Image
                    src="https://www.rittzaccessories.com/assets/images/idea.png"
                    w={"100%"}
                    h={"100%"}
                  />
                }
                title={"The Idea is your's"}
                text={
                  "Our process starts with experts analyzing the right quality leather and customizing the right material giving life to your ideas"
                }
              />
              <Features
                icon={
                  <Image
                    src="https://www.rittzaccessories.com/assets/images/design.png"
                    w={"100%"}
                    h={"100%"}
                  />
                }
                title={"Unique/ Customized Design."}
                text={
                  "We design according to your needs uplifting the look of your product proving its elegance. We do not compromise until we get you the elite look you have been wanting."
                }
              />
              <Features
                icon={
                  <Image
                    src="https://www.rittzaccessories.com/assets/images/source.png"
                    w={"100%"}
                    h={"100%"}
                  />
                }
                title={"Oh yeah, it’s that good. Raw materials/ Source we use"}
                text={
                  "Premium quality leather is created from the best proccessed hides. We use Cow, Buff, Sheep and Goat Leather, in various finishes. Our Tannery, which is based near Chennai, enables us to develop any kind of leather with perfection."
                }
              />

              <Features
                icon={
                  <Image
                    src="https://www.rittzaccessories.com/assets/images/manufacture.png"
                    w={"100%"}
                    h={"100%"}
                  />
                }
                title={"And lastly, this one Checkmate - Manufacture"}
                text={
                  "Our Wordclass factory offers you a scalable quality production facility. We manufacture various high quality high precision products from the inception of our company. Everyday we improve our systems continuously to achieve the best in class quality for our customers."
                }
              />
              <Features
                icon={
                  <Image
                    src="https://www.rittzaccessories.com/assets/images/inspect.png"
                    w={"100%"}
                    h={"100%"}
                  />
                }
                title={"Nothing will escape Hawk Eye Inspection Team"}
                text={
                  "As a major leather accessory manufacturer of chennai we apply stringent quality checks at every stage of manufacturing. It makes our products totally Flawless and in tune with the international standards"
                }
              />
              <Features
                icon={
                  <Image
                    src="https://www.rittzaccessories.com/assets/images/package.png"
                    w={"100%"}
                    h={"100%"}
                  />
                }
                title={"your order is precious so is the safety."}
                text={
                  "We focus on safe and secure delivery of your products, our team offers full-service packing solutions. Providing the deliverance of quality leather products without damage"
                }
              />
              <Features
                icon={
                  <Image
                    src="https://www.rittzaccessories.com/assets/images/shipping.png"
                    w={"100%"}
                    h={"100%"}
                  />
                }
                title={"we have wings to reach you anywhere."}
                text={
                  "We ship all over the globe. From creating your design and helping it reach you we cover it all. We ensure your leather products reach safely with timely delivery"
                }
              />
            </SimpleGrid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Home;
