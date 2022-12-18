import Cookies from "js-cookie";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Grid = styled.div`
  max-width: calc(100% - 50px);
  margin: 0 auto
`

const Home = () => {
  console.log(Cookies.get("token"));
  return (
    <div style={{backgroundColor: '#ededed'}}>
      <Grid>
      <Navbar />
      <Slider />
      <Products />
      <Footer />
    </Grid>
    </div>
  );
};

export default Home;
