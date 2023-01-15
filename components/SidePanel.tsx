import { Box, Button, Slide, Stack, useMediaQuery } from "@chakra-ui/react";
import Blocks from "./Blocks";
import { SidePanelStyled } from "styled/SidePanel.styled";

const SidePanel = ({ hours, open, setOpen }) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  return (
    <SidePanelStyled>
      {isMobile && (
        <div className="close-container">
          <div className="close-button"></div>
        </div>
      )}
      <div className="content">
        <Blocks hours={hours} />
      </div>
    </SidePanelStyled>
  );
};

export default SidePanel;
