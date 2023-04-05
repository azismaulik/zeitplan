import React from "react";
import star1 from "../assets/star1.png";
import star3 from "../assets/star3.png";
import star5 from "../assets/star5.png";

const CardTesti = (props) => {
  return (
    <div className="w-full md:w-[30%] h-auto p-4 md:p-6 rounded-lg shadow bg-white">
      {props.rate === 1 ? (
        <img src={star1} alt="" />
      ) : props.rate === 3 ? (
        <img src={star3} alt="" />
      ) : (
        <img src={star5} alt="" />
      )}
      <p className="my-6">{props.comment}</p>
      <div className="flex gap-6 items-center">
        <img src={props.img} className="w-14 h-14 rounded-full" />
        <div>
          <h1 className="text-black font-semibold mb-1 text-lg">
            {props.name}
          </h1>
          <h1 className="text-abu text-sm">{props.job}</h1>
        </div>
      </div>
    </div>
  );
};

export default CardTesti;
