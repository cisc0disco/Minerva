import { StyledSideBar } from "../styled/SideBar.styled";
import {
  SignOut,
  PresentationChart,
  NotePencil,
  IdentificationCard,
} from "phosphor-react";
import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import router from "next/router";
import { isMobile } from "react-device-detect";

const SideBar = ({ currentPage }) => {
  const iconSize = 30;
  const [activeCategory, setActiveCategory] = useState(currentPage);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const bg = "#131224";
  const borderColor = "#252531";

  const setPage = (page: string) => {
    setActiveCategory(page);
    router.push(`/dashboard/${page}`);
  };

  useEffect(() => {
    setSidebarOpen(!isMobile);
  }, [isMobile]);

  return (
    sidebarOpen && (
      <StyledSideBar background={bg} borderColor={borderColor}>
        <div id="centerIcons">
          <div
            className={`icon ${activeCategory == "home" ? "active" : ""}`}
            onClick={() => setPage("home")}
          >
            <div className="iconImage">
              <IdentificationCard size={iconSize} />
            </div>
            <p>Home</p>
          </div>
          <div
            className={`icon ${activeCategory == "materials" ? "active" : ""}`}
            onClick={() => setPage("materials")}
          >
            <div className="iconImage">
              <PresentationChart size={iconSize} />
            </div>
            <p>Materiály</p>
          </div>
          <div
            className={`icon ${activeCategory == "homework" ? "active" : ""}`}
            onClick={() => setPage("homework")}
          >
            <div className="iconImage">
              <NotePencil size={iconSize} />
            </div>
            <p>Úkoly</p>
          </div>
        </div>
        <div className="border"></div>
        <div id="bottomIcons">
          <div
            className="icon"
            onClick={() => {
              signOut({ callbackUrl: "/" });
            }}
          >
            <div className="iconImage">
              <SignOut size={iconSize} />
            </div>
            <p>Odhlásit</p>
          </div>
        </div>
      </StyledSideBar>
    )
  );
};

export default SideBar;
