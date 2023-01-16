import { getSession, useSession } from "next-auth/react";
import MaterialContent from "components/MaterialContent";
import SideBar from "components/SideBar";
import SidePanel from "components/SidePanel";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useEffect, useState } from "react";
import { MaterialsStyled } from "styled/Materials.styled";
import { isMobile } from "react-device-detect";

const Materials = ({ hours, trida }) => {
  const [open, setOpen] = useState(false);
  const [range, setRange] = useState("1-13");

  useEffect(() => {
    setOpen(!isMobile);
  }, [isMobile]);

  return (
    <MaterialsStyled>
      <SideBar currentPage={"materials"} />
      <div className="content">
        <MaterialContent range={range} trida={trida} />
      </div>
      <div className="sidepanel">
        <SidePanel hours={hours} open={open} setOpen={setOpen} />
      </div>
    </MaterialsStyled>
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
