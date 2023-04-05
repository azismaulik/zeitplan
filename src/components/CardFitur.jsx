import React from "react";

const CardFitur = ({ src, title, desc }) => {
  return (
    <div className="w-[40%]">
      <img src={src} alt="" />
      <h1 className="text-lg md:text-xl text-black font-patua my-3">{title}</h1>
      <p className="text-abu text-sm leading-[1.4em]">{desc}</p>
    </div>
  );
};

export default CardFitur;
