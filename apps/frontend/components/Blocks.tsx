import {
  Card,
  CardBody,
  Collapse,
  Heading,
  ListItem,
  Stack,
  UnorderedList,
  Text,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

type BlockType = {
  Id: number;
  Name: string;
  Description: string;
  Range: string;
};

const Blocks = ({ hours }) => {
  if (hours) {
    return hours.map((block: BlockType) => {
      const [show, setShow] = useState(false);

      const handleToggle = () => setShow(!show);

      return (
        <Card maxW="sm" w={"sm"} cursor={"pointer"}>
          <CardBody>
            <Stack spacing="3">
              <Heading size="md">{block.Name}</Heading>
              <Collapse in={show}>
                <UnorderedList>
                  {block.Description.split("\n").map(
                    (line: string, index: number) => {
                      return <ListItem key={index}>{line}</ListItem>;
                    }
                  )}
                </UnorderedList>
              </Collapse>
              <Text>
                Hodiny: <br />
                <Text as={"span"} color="blue.600" fontSize="2xl">
                  {block.Range}
                </Text>
              </Text>
              <Button size="sm" onClick={handleToggle} mt="1rem">
                Zobrazit {show ? "Méně" : "Více"}
              </Button>
            </Stack>
          </CardBody>
        </Card>
      );
    });
  } else {
    return <p>Nothing found</p>;
  }
};

export default Blocks;
