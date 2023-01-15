import { Box, useMediaQuery } from "@chakra-ui/react";
import { ArrowLeft, ListDashes } from "phosphor-react";
import { isMobile } from "lib/IsMobile";

const MobileButton = (sidebarOpen, setSidebarOpen) => {
  if (isMobile) {
    return (
      <Box p={3} zIndex="100">
        {sidebarOpen ? (
          <Box pl={"2em"}>
            <ArrowLeft size={40} onClick={() => setSidebarOpen(false)} />
          </Box>
        ) : (
          <nav style={{ width: "100vw" }}>
            <ListDashes size={40} onClick={() => setSidebarOpen(true)} />
          </nav>
        )}
      </Box>
    );
  }
};

export default MobileButton;
