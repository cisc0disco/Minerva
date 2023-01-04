import { Box, useMediaQuery } from "@chakra-ui/react";
import { ArrowLeft, ListDashes } from "phosphor-react";
import { useState } from "react";

const MobileButton = (sidebarOpen, setSidebarOpen) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

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
