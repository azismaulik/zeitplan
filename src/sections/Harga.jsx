import React, { useEffect } from "react";
import CardHarga from "../components/CardHarga";
import ceklis from "../assets/ceklis.png";
import AOS from "aos";
import "aos/dist/aos.css";

const data = [
  {
    category: "rinduratu",
    harga: "free",
    desc: "Akses ke semua fitur gratis tapi data lo dijual ke agen khusus US.",
    fitur: [
      "jadwal tak terbatas",
      "fitur notifikasi (kadang telat)",
      "mode gelap",
      "bisa topup pulsa",
      "bisa beli token listrik",
      "data lo dijual",
    ],
  },
  {
    category: "sultan",
    harga: "Rp 100K",
    desc: "Sama aja data lo juga tetep dijual, tapi lo dapet fitur yang lain.",
    fitur: [
      "semua fitur sebelumnya",
      "diingetin makan",
      "sleepcall sampe bobo",
      "ditemenin jalan tiap minggu",
      "ditemenin nonton eksekswan",
      "terhindar razia rambut",
      "dapet izin bikin ormas",
    ],
  },
  {
    category: "rafatar",
    harga: "Rp 10000K",
    desc: "Ini juga sama aja, data lo jual juga. Tapi fitur-fiturnya lebih ok.",
    fitur: [
      "semua fitur sebelumnya",
      "dibayarin kuliah 4 semester",
      "dibayarin cicilan motor",
      "dicicilin KPR 12 tahun",
      "magang di NASA Cab. Depok",
      "dapet skin Alok",
      "nonton film gratis di ganool",
      "naik haji bila mampu",
    ],
  },
];

const Harga = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="harga" className="w-full bg-[#FFF7F5] px-4 py-20">
      <div className="container mx-auto">
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          className="md:w-[40%] mx-auto text-3xl leading-[1.2em] md:text-[40px] font-patua text-center"
        >
          Main catur sambil bersepeda, beda harga beda fitur
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          className="text-[18px] text-abu mt-6 leading-8 text-center md:w-[40%] mx-auto"
        >
          Aplikasi ini gratis sebenernya, brodie. Tapi kalo mau bayar gapapa
          juga sih, untuk gantinya kami kasih fitur yang spesial buat kamu!
        </p>
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="flex justify-center flex-wrap items-start mt-12 md:mt-28 gap-6"
        >
          {data.map((item, index) => (
            <CardHarga
              key={index}
              category={item.category}
              harga={item.harga}
              desc={item.desc}
              fitur={item.fitur.map((item, index) => (
                <div className="flex gap-4 items-center" key={index}>
                  <img src={ceklis} alt="" />
                  <p className="my-2">{item}</p>
                </div>
              ))}
            />
          ))}
        </div>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-sm text-abu mt-24 leading-8 text-center w-[80%] md:w-[40%] mx-auto"
        >
          <span className="text-black font-semibold"> Harap Diingat:</span>{" "}
          Harga di atas belum termasuk KKM, dan harga sewaktu-waktu bisa berubah
          secara mendadak seperti pengumuman PPKM darurat.
        </p>
      </div>
    </div>
  );
};

export default Harga;
