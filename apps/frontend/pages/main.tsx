import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { MainStyled, ModalStyled } from "../styled/Main.styled";
import { useState } from "react";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import SideBar from "../components/SideBar";

const Main = () => {
  const { data: session } = useSession();

  const [activeCategory, setActiveCategory] = useState("home");

  return (
    <MainStyled>
      <SideBar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
    </MainStyled>
  );
};
export async function getServerSideProps({ req, res }) {
  return {
    props: {
      session: await unstable_getServerSession(req, res, authOptions),
    },
  };
}

export default Main;
