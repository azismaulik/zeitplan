import React, { useEffect } from "react";
import jadwal from "../assets/jadwal.png";
import fitur1 from "../assets/fitur1.png";
import fitur2 from "../assets/fitur2.png";
import fitur3 from "../assets/fitur3.png";
import fitur4 from "../assets/fitur4.png";
import CardFitur from "../components/CardFitur";
import AOS from "aos";
import "aos/dist/aos.css";

const data = [
  {
    img: fitur1,
    title: "Tidak Tersimpan Otomatis",
    desc: "Kalo lo pelupa ya udah dah, jadwal lo bakal gak kesimpen tuh.",
  },
  {
    img: fitur2,
    title: "Si Rizal Gak Pernah Ngonten",
    desc: "Emang sih dia gak pernah ngonten, do’ain ya biar mau ngonten.",
  },
  {
    img: fitur3,
    title: "Terhapus Otomatis",
    desc: "Data lo bakal kehapus otomatis tiap hari, biar hemat server kita.",
  },
  {
    img: fitur4,
    title: "Nggak Tau Lagi Gw",
    desc: "Mikir teks buat konten susah bro, ini aja ngasal masih susah!",
  },
];

const Fitur = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      id="fitur"
      className="container justify-between items-center gap-8 mx-auto pb-6 md:py-14 mt-4 md:mt-10 px-4 flex flex-wrap md:flex-nowrap"
    >
      <img
        data-aos="fade-up"
        data-aos-duration="1000"
        src={jadwal}
        alt=""
        className="w-[80%] mx-auto md:mx-0 md:w-1/2 xl:w-auto"
      />
      <div className="md:w-1/2">
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-2xl leading-[1.2em] md:text-[40px] font-patua"
        >
          Memangnya ada fitur apa aja sih di aplikasi yang katanya keren ini?
          Jadi penasaran nich~
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          className="text-[18px] text-abu mt-4"
        >
          Aplikasi sekeren ini akan membuat kamu tidak dapat memberi alasan
          apapun untuk bolos matkul dosen (HAHA MAMPUS!). Lagian lo kuliah tapi
          jarang masuk, titip absen doang!
        </p>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          className="flex flex-wrap justify-evenly md:justify-start gap-8 mt-6"
        >
          {data.map((item, index) => (
            <CardFitur
              key={index}
              src={item.img}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fitur;
