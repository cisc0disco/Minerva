import { Box, Button, Slide, Stack } from "@chakra-ui/react";
import Blocks from "./Blocks";

const SidePanel = ({ hours, open, setOpen }) => {
  return (
    <Slide
      direction="right"
      in={open}
      style={{ width: "28em", overflow: "auto" }}
    >
      <Box
        w="28em"
        justifyContent={"center"}
        overflow="auto"
        borderLeft={"1px solid #252531"}
      >
        <Stack
          mt={10}
          spacing={"30px"}
          align={"center"}
          transition="width 0.3s 0s ease-in-out"
        >
          <Button
            float={"right"}
            right="6"
            top="2"
            pos={"absolute"}
            backgroundColor="transparent"
            fontSize={"20"}
            onClick={() => setOpen(false)}
          >
            ✕
          </Button>
          <Blocks hours={hours} />
        </Stack>
      </Box>
    </Slide>
  );
};

export default SidePanel;
