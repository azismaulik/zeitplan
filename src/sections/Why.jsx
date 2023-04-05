import React, { useEffect } from "react";
import CardWhy from "../components/CardWhy";
import satu from "../assets/why1.png";
import dua from "../assets/why2.png";
import tiga from "../assets/why3.png";
import empat from "../assets/why4.png";
import AOS from "aos";
import "aos/dist/aos.css";

const data = [
  {
    img: satu,
    title: "Aplikasi Gratis",
    desc: "Semua fitur di aplikasi ini adalah gratis, tapi data privasi kamu akan kami jual ke agen khusus US.",
  },
  {
    img: dua,
    title: "Kode OTP Error",
    desc: "Pas login kode OTP lo gak kekirim kadang, terus lo harus nyoba berulang kali sampe bisa.",
  },
  {
    img: tiga,
    title: "Data Tidak Aman",
    desc: "Data tidak disimpan dengan baik dan rentan bocor, jangan heran data lo tiba-tiba ada di deepweb.",
  },
  {
    img: empat,
    title: "biasanya Error",
    desc: "Ketika submit data biasanya error di bagian ajax-nya, eh nggak deng itu aplikasi pemerintah~",
  },
];

const Why = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      id="why"
      className="container gap-8 mx-auto py-14 mt-4 md:mt-10 px-4 flex flex-wrap md:flex-nowrap"
    >
      <div data-aos="fade-up" data-aos-duration="1000" className="md:w-1/2">
        <h1 className="text-3xl leading-[1.2em] md:text-[40px] font-patua">
          Kenapa Kamu Sangat Harus Pakai Aplikasi Yang Keren Ini?
        </h1>
        <p className="text-[18px] text-abu mt-4">
          Sejujurnya aplikasi kita ini seringkali bermasalah. Kadang-kadang gak
          bisa submit data, kadang dibukanya lambat, kadang tiba-tiba logout
          sendiri, untung gak berdua.
        </p>
        <div className="mt-6 md:mt-14 flex gap-8 uppercase">
          <div>
            <p className="text-sm text-gray-400">total download</p>
            <p className="text-2xl font-semibold">1.445.662</p>
          </div>
          <div className="w-px bg-gray-100"></div>
          <div>
            <p className="text-sm text-gray-400">total users</p>
            <p className="text-2xl font-semibold">1.895.342</p>
          </div>
        </div>
      </div>
      <div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex flex-wrap gap-6 xl:ml-40 justify-center"
        >
          {data.map((item, index) => (
            <CardWhy
              src={item.img}
              title={item.title}
              desc={item.desc}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Why;
