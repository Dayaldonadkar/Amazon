import React from "react";
import Banner from "./Components/Banner";
import Banner2 from "./Components/Banner2";
import Navbar from "./Components/Navbar";
import Swiper from "./Components/Swiper";

const App = () => {
  return (
    <div className="bg-[#E2E6E6] relative">
      <div className="sticky top-0 left-0">
        <Navbar />
      </div>
      <Banner />
      <Banner2 />
      <Swiper />
    </div>
  );
};

export default App;
