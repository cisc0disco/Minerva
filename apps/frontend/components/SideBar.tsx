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
        <Box p={3} zIndex="100">
          {sidebarOpen ? (
            <Box pl={"2em"}>
              <ArrowLeft
                size={iconSize + 10}
                onClick={() => setSidebarOpen(false)}
              />
            </Box>
          ) : (
            <nav style={{ width: "100vw" }}>
              <ListDashes
                size={iconSize + 10}
                onClick={() => setSidebarOpen(true)}
              />
            </nav>
          )}
        </Box>
      ) : (
        ""
      )}

      {sidebarOpen && (
        <StyledSideBar background={bg} borderColor={borderColor}>
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
                activeCategory == "presentations" ? "active" : ""
              }`}
              onClick={() => setPage("presentations")}
            >
              <div className="iconImage">
                <PresentationChart size={iconSize} />
              </div>
              <p>Prezentace</p>
            </div>
            <div
              className={`icon ${activeCategory == "code" ? "active" : ""}`}
              onClick={() => setPage("code")}
            >
              <div className="iconImage">
                <FileCode size={iconSize} />
              </div>
              <p>Code</p>
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
