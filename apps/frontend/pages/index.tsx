import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { authOptions } from "./api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth";
import { MainStyled } from "../styled/Main.styled";
import SideBar from "../components/SideBar";
import Presentations from "../components/Presentations";

const Component = ({ data }) => {
  const { data: session } = useSession();
  const [newUserStatus, setNewUserStatus] = useState(null);
  const [activeCategory, setActiveCategory] = useState("home");
  const router = useRouter();

  useEffect(() => {
    const fetchStatus = async () => {
      const res = await fetch("http://localhost:3000/api/userExists");
      const json = await res.json();
      setNewUserStatus(json["newUser"]);
    };

    fetchStatus().catch(console.error);
  }, []);

  if (session && newUserStatus) {
    router.push("/register");
  } else if (session && !newUserStatus) {
    return (
      <MainStyled>
        <SideBar
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        {activeCategory == "presentation" && <Presentations props={data} />}
      </MainStyled>
    );
  }

  if (!session) {
    signIn();
  }
};

export async function getServerSideProps({ req, res }) {
  const response = await fetch(
    process.env.STRAPI_URL + `/api/prezentaces?populate=*`,
    {
      headers: {
        Authorization: "Bearer " + process.env.STRAPI_API_SECRET,
      },
    }
  );

  const { data } = await response.json();

  return {
    props: {
      data: data,
      session: await unstable_getServerSession(req, res, authOptions),
    },
  };
}

export default Component;
