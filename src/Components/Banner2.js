import React from "react";
import Card1 from "./Cards/Card1";

const Banner2 = () => {
  return (
    <div className="flex justify-center pt-20">
      <div className="flex w-11/12 justify-between space-x-8">
        <Card1
          img={"Cars1.png"}
          img2={"Cars2.png"}
          img3={"Cars3.png"}
          img4={"Cars4.png"}
          alt1={"t"}
          alt2={2}
          caption={"Upgrade your home |"}
          caption2={"Amazon Brands and more"}
        />
        <Card1
          img={"Train1.png"}
          img2={"Train2.png"}
          img3={"train3.png"}
          img4={"Train4.png"}
          alt1={"t"}
          alt2={2}
          caption={"Book in advance for Holi"}
          caption2={"up to 30%"}
        />

        <Card1
          img={"TEsting1.png"}
          img2={"TEsting2.png"}
          img3={"TEsting3.png"}
          img4={"TEsting4.png"}
          alt1={"t"}
          alt2={2}
          caption={"to 60% off|Professional"}
          caption2={"tools, testing & more"}
        />
        <Card1
          img={"home1.png"}
          img2={"home2.png"}
          img3={"home3.png"}
          img4={"home4.png"}
          alt1={"t"}
          alt2={2}
          caption={"Automotive Essentials up"}
          caption2={" to 60% off"}
        />
      </div>
    </div>
  );
};

export default Banner2;
