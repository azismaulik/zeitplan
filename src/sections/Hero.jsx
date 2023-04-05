import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import heroImg from "../assets/hero.png";
import testi from "../assets/testi.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="hero" className="pt-4 md:pt-8 px-4 bg-primary/10">
      <Navbar />
      <div className="container mx-auto mt-28 flex justify-between items-center flex-wrap">
        <div className="order-2 md:order-1 md:w-1/2">
          <h1
            data-aos="fade-right"
            data-aos-duration="2000"
            className="font-patua leading-[1.2em] text-3xl md:text-[48px] tracking-wider"
          >
            Sebuah cara mudah mengatur jadwal kuliah kamu
          </h1>
          <p
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="100"
            className="text-[18px] text-abu mt-4"
          >
            Datang kuliah terlambat karena ketiduran itu tidak masalah; datang
            kuliah karena lupa jadwal itu sangatlah tidak keren. Aplikasi ini
            adalah sahabat kamu sekarang, brodie~
          </p>
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="300"
            className="flex gap-4 my-8"
          >
            <button className="py-2 px-6 bg-primary text-sm text-white rounded font-semibold">
              Learn More
            </button>
            <button className="py-2 px-6 bg-primary/10 text-sm text-primary border border-primary rounded font-semibold">
              Play Demo
            </button>
          </div>
          <img
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="500"
            src={testi}
            alt=""
            className="-ml-10 md:-ml-14"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          className="order-1 lg:order-2"
        >
          <img
            src={heroImg}
            alt=""
            className="w-[80%] mx-auto md:w-1/2 xl:w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
