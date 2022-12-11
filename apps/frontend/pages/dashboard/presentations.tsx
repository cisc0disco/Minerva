import { getSession } from "next-auth/react";
import { StyledPresentations } from "styled/Presentations.styled";
import Block from "components/Block";
import { useState } from "react";
import SideBar from "components/SideBar";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const Presentations = ({ presentations }) => {
  const [activeCategory, setActiveCategory] = useState("home");

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

  return (
    <>
      <SideBar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <StyledPresentations>
        <div className="view">{blocks}</div>
      </StyledPresentations>
    </>
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
