import { getSession } from "next-auth/react";
import { StyledPresentations } from "styled/Presentations.styled";
import Block from "components/Block";
import SideBar from "components/SideBar";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { Box, Flex, Input, useColorModeValue } from "@chakra-ui/react";

const Presentations = ({ presentations }) => {
  const blocks = presentations.map((block) => {
    return (
      <Block
        key={block.attributes.nazev}
        title={block.attributes.nazev}
        previewImage={
          `http://localhost:1337` +
          block.attributes.preview.data.attributes.formats.medium.url
        }
        file={
          `http://localhost:1337` + block.attributes.soubor.data.attributes.url
        }
        date={block.attributes.datum}
      />
    );
  });

  const bg = useColorModeValue("white", "#131224");

  return (
    <Flex>
      <SideBar currentPage={"presentations"} />
      <Box bg={bg} w="100vw" h="100vh">
        <Input
          placeholder="Hledat"
          type="search"
          size="lg"
          maxW={300}
          w={"80%"}
          h={12}
          mt="5"
          ml="5"
        />
        <Box w={"100%"} h={"calc(100% - 12)"} pt="10" pl="10">
          {blocks}
        </Box>
      </Box>
    </Flex>
  );
};

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  let presentations = {};
  if (session == null) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }

  const client = new ApolloClient({
    uri: "http://0.0.0.0:1337/graphql",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query getPresentations {
        presentations(filters: { trida: { containsi: "${session.user.class}" } }) {
          data {
            attributes {
              nazev
              datum
              soubor {
                data {
                  attributes {
                    url
                  }
                }
              }
              preview {
                data {
                  attributes {
                    formats
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  presentations = data.presentations.data;

  return {
    props: { presentations },
  };
};

export default Presentations;
