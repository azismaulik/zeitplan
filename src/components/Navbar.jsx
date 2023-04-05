import React, { useEffect, useState } from "react";
import logo from "../assets/logo_zeitplan.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="zoom-in-down"
      data-aos-duration="500"
      className="w-[95%] container fixed left-0 right-0 z-50 bg-white rounded shadow-md mx-auto flex flex-wrap justify-between items-center py-6 px-8"
    >
      <img src={logo} />
      <div className="md:hidden ">
        {isOpen ? (
          <svg
            onClick={() => setIsOpen(!isOpen)}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            className="w-10"
          >
            <path
              d="M289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34z"
              fill="currentColor"
            ></path>
          </svg>
        ) : (
          <svg
            onClick={() => setIsOpen(!isOpen)}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            enableBackground="new 0 0 512 512"
            xmlSpace="preserve"
            className="w-10 text-black"
          >
            <g>
              <path d="M432,176H80c-8.8,0-16-7.2-16-16l0,0c0-8.8,7.2-16,16-16h352c8.8,0,16,7.2,16,16l0,0C448,168.8,440.8,176,432,176z"></path>
              <path d="M432,272H80c-8.8,0-16-7.2-16-16l0,0c0-8.8,7.2-16,16-16h352c8.8,0,16,7.2,16,16l0,0C448,264.8,440.8,272,432,272z"></path>
              <path d="M432,368H80c-8.8,0-16-7.2-16-16l0,0c0-8.8,7.2-16,16-16h352c8.8,0,16,7.2,16,16l0,0C448,360.8,440.8,368,432,368z"></path>
            </g>
          </svg>
        )}
      </div>
      <div
        className={`${
          isOpen ? "w-full flex mt-6" : "hidden"
        } md:flex flex-col md:flex-row gap-4 md:gap-8 text-sm font-semibold text-black/50 md:items-center`}
      >
        <a
          href="#hero"
          className={`${
            isOpen ? "block" : ""
          }hover:text-primary transition cursor-pointer`}
        >
          Home
        </a>
        <a
          href="#fitur"
          className={`${
            isOpen ? "block" : ""
          }hover:text-primary transition cursor-pointer`}
        >
          Fitur-fitur
        </a>
        <a
          href="#harga"
          className={`${
            isOpen ? "block" : ""
          }hover:text-primary transition cursor-pointer`}
        >
          Harga
        </a>
        <a
          href="#testi"
          className={`${
            isOpen ? "block" : ""
          }hover:text-primary transition cursor-pointer`}
        >
          Testimoni
        </a>
        <button className="py-2 px-6 rounded bg-primary text-white">
          Download
        </button>
      </div>

      {/* {isOpen && (
        <div className="mx-auto fixed shadow rounded bg-white w-[95%] text-sm font-semibold text-black/50 items-center">
          <a
            href="#hero"
            className={`${isOpen ? 'block' : ''}hover:text-primary block transition cursor-pointer`}
          >
            Home
          </a>
          <a
            href="#fitur"
            className={`${isOpen ? 'block' : ''}hover:text-primary block transition cursor-pointer`}
          >
            Fitur-fitur
          </a>
          <a
            href="#harga"
            className={`${isOpen ? 'block' : ''}hover:text-primary block transition cursor-pointer`}
          >
            Harga
          </a>
          <a
            href="#testi"
            className={`${isOpen ? 'block' : ''}hover:text-primary block transition cursor-pointer`}
          >
            Testimoni
          </a>
          <button className="py-2 px-6 rounded bg-primary text-white">
            Download
          </button>
        </div>
      )} */}
    </div>
  );
};

export default Navbar;
