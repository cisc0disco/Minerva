import {
  Box,
  useColorModeValue,
  Heading,
  Center,
  Flex,
} from "@chakra-ui/react";
import SideBar from "components/SideBar";
import { HomeworkStyled } from "styled/Homework.styled";

const Homework = () => {
  const bg = useColorModeValue("white", "#131224");

  return (
    <HomeworkStyled>
      <SideBar currentPage={"homework"} />
    </HomeworkStyled>
  );
};

export default Homework;
