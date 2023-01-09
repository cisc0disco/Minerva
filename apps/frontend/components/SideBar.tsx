import { StyledSideBar } from "../styled/SideBar.styled";
import {
  SignOut,
  PresentationChart,
  FileCode,
  NotePencil,
  ListDashes,
  IdentificationCard,
  X,
  ArrowLeft,
} from "phosphor-react";
import { useState } from "react";
import { signOut } from "next-auth/react";
import router from "next/router";
import { Box, Flex, useColorModeValue, useMediaQuery } from "@chakra-ui/react";

const SideBar = ({ currentPage }) => {
  const iconSize = 30;
  const [activeCategory, setActiveCategory] = useState(currentPage);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const setPage = (page: string) => {
    setActiveCategory(page);
    router.push(`/dashboard/${page}`);
  };

  const bg = useColorModeValue("white", "#131224");
  const borderColor = useColorModeValue("#b7b7b7", "#252531");
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex direction={"column"} bg={bg} h="100vh">
      {isMobile ? (
        <Box zIndex="100">
          {sidebarOpen ? (
            ""
          ) : (
            <Flex justifyContent={"center"} w="8em" mt={"1em"} pos="absolute">
              <ListDashes
                size={iconSize + 10}
                onClick={() => setSidebarOpen(true)}
              />
            </Flex>
          )}
        </Box>
      ) : (
        ""
      )}

      {sidebarOpen && (
        <StyledSideBar background={bg} borderColor={borderColor}>
          <Flex justifyContent={"center"} w="100%" mb={"4em"} mt={"1em"}>
            {isMobile && (
              <ArrowLeft
                size={iconSize + 10}
                onClick={() => setSidebarOpen(false)}
              />
            )}
          </Flex>
          <div id="centerIcons">
            <div
              className={`icon ${activeCategory == "home" ? "active" : ""}`}
              onClick={() => setPage("home")}
            >
              <div className="iconImage">
                <IdentificationCard size={iconSize} />
              </div>
              <p>Home</p>
            </div>
            <div
              className={`icon ${
                activeCategory == "materials" ? "active" : ""
              }`}
              onClick={() => setPage("materials")}
            >
              <div className="iconImage">
                <PresentationChart size={iconSize} />
              </div>
              <p>Materiály</p>
            </div>
            <div
              className={`icon ${activeCategory == "homework" ? "active" : ""}`}
              onClick={() => setPage("homework")}
            >
              <div className="iconImage">
                <NotePencil size={iconSize} />
              </div>
              <p>Úkoly</p>
            </div>
          </div>
          <div className="border"></div>
          <div id="bottomIcons">
            <div
              className="icon"
              onClick={() => {
                router.push("/");
                signOut();
              }}
            >
              <div className="iconImage">
                <SignOut size={iconSize} />
              </div>
              <p>Odhlásit</p>
            </div>
          </div>
        </StyledSideBar>
      )}
    </Flex>
  );
};

export default SideBar;
