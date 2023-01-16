import SideBar from "components/SideBar";
import { HomeStyled } from "styled/Home.styled";

const Home = () => {
  return (
    <HomeStyled>
      <SideBar currentPage={"home"} />
    </HomeStyled>
  );
};

export default Home;
