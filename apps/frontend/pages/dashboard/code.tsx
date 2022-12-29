import { Box, Center, Heading, useColorModeValue } from "@chakra-ui/react";
import SideBar from "components/SideBar";

const Code = () => {
  const bg = useColorModeValue("white", "#131224");

  return (
    <>
      <SideBar currentPage={"code"} />
      <Box bg={bg} w="calc(100% - 8em)" ml="8em" h="100vh">
        <Center pt={"50vh"}>
          <Heading> Zde zatím nic není &nbsp; 🚧</Heading>
        </Center>
      </Box>
    </>
  );
};

export default Code;
