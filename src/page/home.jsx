import React from "react";

import Navbar from "../containers/navbar/index.jsx";
import Banner from "../containers/banner/index.jsx";
import Cards from "../containers/cards/index.jsx";
import Covid from "../containers/covid/index.jsx";
import Keep from "../containers/keeping/index.jsx";
// import Products from "../containers/products/index.jsx";
import Local from "../containers/local/index.jsx";
import Footer from "../components/footer/index.jsx";

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Covid />
      <Cards />
      <Products/>
      <Keep />
      {/* <Products /> */}
      <Local />
      <Footer />
    </div>
  );
}

export default Home;
