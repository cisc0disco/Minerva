import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { MainStyled, ModalStyled, SideBar } from "../styled/Main.styled";
import { useState } from "react";
import { SignOut, Presentation, FileCode, CaretRight } from "phosphor-react";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";

const Main = () => {
  const { data: session } = useSession();
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <MainStyled>
      <SideBar>
        {
          <div id="imageContainer">
            <Image
              alt="avatar"
              id="avatar"
              src={session.user.image}
              onClick={openModal}
              fill
            />
          </div>
        }
        <div id="buttons">
          <div id="button" className="active">
            <Presentation size={30} color={"white"} id="buttonIcon" />{" "}
            <p>Prezentace</p>
            <CaretRight size={15} id="caret" />
          </div>
          <div id="button">
            <FileCode size={30} color={"white"} id="buttonIcon" />{" "}
            <p>Zdrojové kódy</p>
            <CaretRight size={15} id="caret" />
          </div>
        </div>

        <ModalStyled isOpen={modalIsOpen} onBackgroundClick={closeModal}>
          <div id="content">
            <Image
              alt="avatar"
              id="avatar"
              src={session.user.image}
              width={50}
              height={50}
              onClick={openModal}
            />
            <div id="info">
              <p id="username">{session.user.name}</p>
              <p id="email">{session.user.email}</p>
            </div>
          </div>
          <div id="buttons">
            <p onClick={() => signOut()} id="logoutButton">
              <SignOut id="icon" /> Odhlásit
            </p>
          </div>
        </ModalStyled>
      </SideBar>
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
