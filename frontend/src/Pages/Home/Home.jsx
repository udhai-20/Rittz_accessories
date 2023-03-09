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
import {} from "./Home.css";
import Heading from "../../Components/Heading/Heading";
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

const data = [
  {
    title: "Design",
    img: "https://www.rittzaccessories.com/assets/images/premium_designs_home.jpg",
    desc: "elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
  },
  {
    title: "Design-2",
    img: "https://www.rittzaccessories.com/assets/images/premium_designs_home.jpg",
    desc: "elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
  },
  {
    title: "Design-3",
    img: "https://www.rittzaccessories.com/assets/images/premium_designs_home.jpg",
    desc: "elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
  },
];
const handleDragStart = (e) => e.preventDefault();
function Home(props) {
  const contents = data.map((c) => (
    <div className="carouselItem">
      <img
        className="carouselItem__img"
        src={c.img}
        alt={c?.title}
        onDragStart={handleDragStart}
      />
      <b className="carouselItem__txt">{c?.title}</b>
      <b className="carouselItem__txt">{c?.desc}</b>
    </div>
  ));
  return (
    <>
      {/* //bannersection */}
      <Box>
        <Banner item={items} />
      </Box>
      {/* Our Works Section */}
      <Box className="ourwork-Wrapper" my={"15px"}>
        <Container maxW={"8xl"}>
          <Heading title={"What we do"} />
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
      {/* supply chain soluction */}
      <Box className="Supply-chain-solutions">
        <Container maxW={"8xl"}>
          <Box borderRadius={"5px"} height={"50px"} bg={"black"} mb={4} mt={4}>
            <Text
              className="subdivision"
              display={"flex"}
              justifyContent={"center"}
              color={"white"}
              fontSize={"xl"}
            >
              We offers supply chain solutions
            </Text>
          </Box>
          {/* <Box>
            <Text>Design</Text>
            <Image src="https://www.rittzaccessories.com/assets/images/Design_step.png" />
            <Text>
              your unique designs manufactured precise in quality leather
              unmatched
            </Text>
          </Box> */}
          <Box>
            <Container maxW={"3xl"} margin={"auto"}>
              <Banner item={contents} />
            </Container>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Home;
