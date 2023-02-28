import React from "react";

import Banner1 from "./Absolute/Banner1";
import BImage from "./Absolute/BImage";
import Card1 from "./Cards/Card1";
import Card2 from "./Cards/Card2";

const Banner = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[95%] relative">
        <BImage />
        <div className="absolute -bottom-11 left-4 flex space-x-6">
          <Card1
            img={"Toys11.png"}
            img2={"Toys13.png"}
            img3={"Toys12.png"}
            img4={"Toys14.png"}
            alt1={"t"}
            alt2={2}
            caption={"Up to 50% off | Baby Products"}
            caption2={"toys|Amazon Brands"}
          />

          <Card2 />
          <Card1
            img={"Cars1.png"}
            img2={"Cars2.png"}
            img3={"Cars3.png"}
            img4={"Cars4.png"}
            alt1={"t"}
            alt2={2}
            caption={"Automotive Essentials up"}
            caption2={" to 60% off"}
          />

          <div className="bg-white h-1/2 w- px-5 py-5">
            <p className="text-xl font-medium">Sign in for your</p>
            <p>Best Experience</p>
            <button className="bg-[#FCD200] px-28 rounded-md py-2">
              Sign In Securely
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
