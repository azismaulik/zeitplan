import React from "react";

const CardWhy = ({ src, title, desc }) => {
  return (
    <div className="p-4 md:p-10 bg-primary/10 rounded w-[45%] md:w-[300px]">
      <div className="flex gap-4 items-center">
        <img src={src} alt="" className="w-8 h-8" />
        <h1 className="text-base md:text-xl font-semibold text-black">
          {title}
        </h1>
      </div>
      <p className="text-sm text-black mt-6">{desc}</p>
    </div>
  );
};

export default CardWhy;
