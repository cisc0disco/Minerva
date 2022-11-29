import { StyledSideBar } from "../styled/Main.styled";
import {
  SignOut,
  PresentationChart,
  FileCode,
  CaretRight,
  NotePencil,
  ListDashes,
} from "phosphor-react";
import { useState } from "react";
import { signOut } from "next-auth/react";

const RegisterForm = ({ activeCategory, setActiveCategory }) => {
  const iconSize = 30;

  return (
    <StyledSideBar>
      <div id="centerIcons">
        <div
          className={`icon ${activeCategory == "home" ? "active" : ""}`}
          onClick={() => setActiveCategory("home")}
        >
          <div className="iconImage">
            <ListDashes size={iconSize} />
          </div>
          <p>Menu</p>
        </div>
        <div
          className={`icon ${activeCategory == "presentation" ? "active" : ""}`}
          onClick={() => setActiveCategory("presentation")}
        >
          <div className="iconImage">
            <PresentationChart size={iconSize} />
          </div>
          <p>Prezentace</p>
        </div>
        <div
          className={`icon ${activeCategory == "code" ? "active" : ""}`}
          onClick={() => setActiveCategory("code")}
        >
          <div className="iconImage">
            <FileCode size={iconSize} />
          </div>
          <p>Code</p>
        </div>
        <div
          className={`icon ${activeCategory == "homework" ? "active" : ""}`}
          onClick={() => setActiveCategory("homework")}
        >
          <div className="iconImage">
            <NotePencil size={iconSize} />
          </div>
          <p>Úkoly</p>
        </div>
      </div>
      <div className="border"></div>
      <div id="bottomIcons">
        <div className="icon" onClick={() => signOut()}>
          <div className="iconImage">
            <SignOut size={iconSize} />
          </div>
          <p>Odhlásit</p>
        </div>
      </div>
    </StyledSideBar>
  );
};

export default RegisterForm;
