import { getSession, useSession } from "next-auth/react";
import { StyledPresentations } from "styled/Presentations.styled";
import MaterialContent from "components/MaterialContent";
import SideBar from "components/SideBar";
import SidePanel from "components/SidePanel";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  gql,
} from "@apollo/client";
import { Box, Flex, useColorModeValue, Button } from "@chakra-ui/react";
import { useState } from "react";

const Materials = ({ hours, trida }) => {
  const bg = useColorModeValue("white", "#131224");
  const [open, setOpen] = useState(false);

  return (
    <Flex>
      <SideBar currentPage={"presentations"} />
      <Flex bg={bg} w="100vw" h="100vh">
        <Flex w={"100%"}>
          <Box w={"100%"}>
            <MaterialContent range={"1-13"} trida={trida} />
          </Box>
          {!open && (
            <Button
              backgroundColor={"#4c96f6"}
              color="black"
              onClick={() => setOpen(true)}
              right={8}
              top={4}
              float={"right"}
            >
              Otevřít Témata
            </Button>
          )}
        </Flex>
        <SidePanel hours={hours} open={open} setOpen={setOpen} />
      </Flex>
    </Flex>
  );
};

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  let hours = {};
  if (session == null) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }

  const client = new ApolloClient({
    uri: `http://${process.env.STRAPI_URL}/graphql`,
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query getPlan {
        educationPlans {
          data {
            attributes {
              Plans(filters: { Class: { containsi: "${session.user.class}" } }) {
                Hours {
                  id
                  Name
                  Description
                  Range
                }
              }
            }
          }
        }
      }
    `,
  });

  hours = data.educationPlans.data[0].attributes.Plans[0].Hours;

  const trida = session.user.class;

  return {
    props: { hours, trida },
  };
};

export default Materials;
