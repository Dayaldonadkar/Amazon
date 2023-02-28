import React from "react";

const Card1 = (props) => {
  return (
    <div className="bg-white px-5 py-3 space-y-5 rounded-md">
      <div>
        <p h1 className="text-xl font-medium">
          {props.caption}
        </p>
        <p h1 className="text-xl font-medium">
          {props.caption2}
        </p>
      </div>
      <div className="space-y-8">
        <div className="flex space-x-5 ">
          <img className="h-24 w-36" src={props.img} alt={props.alt} />
          <img className="h-24 w-36" src={props.img2} alt={props.alt2} />
        </div>

        <div className="flex space-x-5 ">
          <img className="h-24 w-36" src={props.img3} alt={props.alt} />
          <img className="h-24 w-36" src={props.img4} alt={props.alt2} />
        </div>

        <p className="pt-1 text-[#007185]">See More</p>
      </div>
    </div>
  );
};

export default Card1;
