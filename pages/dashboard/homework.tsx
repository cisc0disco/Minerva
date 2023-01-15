import {
  Box,
  useColorModeValue,
  Heading,
  Center,
  Flex,
} from "@chakra-ui/react";
import SideBar from "components/SideBar";

const Homework = () => {
  const bg = useColorModeValue("white", "#131224");

  return (
    <Flex>
      <SideBar currentPage={"homework"} />
      <Box bg={bg} w="100vw" h="100vh">
        <Center pt={"50vh"}>
          <Heading textAlign={"center"}> Zde zatím nic není &nbsp; 🚧</Heading>
        </Center>
      </Box>
    </Flex>
  );
};

export default Homework;
