import { getSession, useSession } from "next-auth/react";
import MaterialContent from "components/MaterialContent";
import SideBar from "components/SideBar";
import SidePanel from "components/SidePanel";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import {
  Box,
  Flex,
  useColorModeValue,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Materials = ({ hours, trida }) => {
  const bg = useColorModeValue("white", "#131224");
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [open, setOpen] = useState(false);
  const [range, setRange] = useState("1-13");

  useEffect(() => {
    setOpen(!isMobile);
  }, [isMobile]);

  return (
    <Flex>
      <SideBar currentPage={"materials"} />
      <Flex bg={bg} w="100vw" h="100vh">
        <Flex w={"100%"}>
          <Box w={"100%"}>
            <MaterialContent range={range} trida={trida} />
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

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  let hours = {};

  try {
    if (session == null) {
      return {
        redirect: {
          destination: "/",
          permanent: true,
        },
      };
    }
  } catch (err) {
    console.log(`Session error: ${err}`);
  }

  try {
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
  } catch (err) {
    console.log(`GQL Error: ${err}`);
  }

  let trida = null;
  try {
    trida = session.user.class;
  } catch (error) {
    console.log("Cannot get class from the user's session");
  }

  return {
    props: { hours, trida },
  };
};

export default Materials;
