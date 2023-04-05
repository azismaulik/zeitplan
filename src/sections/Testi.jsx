import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CardTesti from "../components/CardTesti";

const data = [
  {
    avatar: "https://i.pravatar.cc/300",
    rate: 5,
    comment:
      "“Terima kasih untuk aplikasinya, karena aplikasi ini murid-murid saya jadi rajin kuliah walaupun nggak ada adab. Adab tidak perlu kuliah nomor satu! 👈😎👉”",
    name: "Sanusi Sulivan",
    job: "Dosen di Boating School Ny. Puff ",
  },
  {
    avatar: "https://i.pravatar.cc/500",
    rate: 1,
    comment:
      "“Gara-gara aplikasi ini aku tidak bisa bolos kuliah, padahal cita-citaku ingin bolos kuliah dan menitipkan absen saja. Huft.”",
    name: "Wahyu Hayuk",
    job: "Mahasiswa Abadi",
  },
  {
    avatar: "https://i.pravatar.cc/400",
    rate: 5,
    comment:
      "“Hanya di rezim ini ada aplikasi yang membuat anak saya menjadi rajin kuliah walaupun tidak menjadi pandai. Terima kasih Papa Zola!”",
    name: "Ibu Scarlet Darkening",
    job: "Ibunya Wahyu Hayuk",
  },
  {
    avatar: "https://i.pravatar.cc/600",
    rate: 3,
    comment:
      "“Aq kmrn koq instla di hp qu gx bs y? ap krn aq pke hp miTho? admin tLonk dnk bntU instlA d hp qu, aq mw pKe apkx”",
    name: "Indah Cyank Dya Clmax",
    job: "Works at Looking For True Love, Inc",
  },
  {
    avatar: "https://i.pravatar.cc/700",
    rate: 1,
    comment:
      "“Pengiriman cepat,,, seller ramah,, packing juga rapih, tapi barangnya belom dicoba... saya kasih bintang satu dulu,,,, nanti kalo udah dicoba saya kasih bintang dua,,, nanti kalo udah peterpen jadi bintang di surga... xixixixi... 😀😀😀😀😀”",
    name: "Jumadi RT. 03",
    job: "Ketua RT. 06",
  },
  {
    avatar: "https://i.pravatar.cc/800",
    rate: 5,
    comment:
      "“aplikasinya keren! mjb, nder.... aku numpang lapak yaaa ... Jual Netflix Spotify disney plus Youtube prem Iqiyi Grammarly Viu Canva Wetv Vidio Mola tv picsart Tezza Unfold Aligh motion Vsco Lightroom get contact apple music amazon prime resso iflix Microsoft 365 HBO GO zoom.”",
    name: "Cucunya Megalodon",
    job: "Pecinta Kucing Hungaria",
  },
];

const Testi = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  console.log(data);

  return (
    <div id="testi" className="w-full bg-[#FFEFED] px-4 py-20">
      <div className="container mx-auto">
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          className="md:w-[40%] mx-auto text-3xl leading-[1.2em] md:text-[40px] font-patua text-center"
        >
          Apa kata umat manusia tentang aplikasi keren ini?
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          className="text-[18px] text-abu mt-6 leading-8 text-center md:w-[40%] mx-auto"
        >
          Kami tidak memfilter semua review, males soalnya. Jadi semua yang
          ditampilkan di sini semuanya asli tanpa reksadana.
        </p>
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="flex justify-center flex-wrap items-start mt-12 md:mt-28 gap-6"
        >
          {data.map((item, index) => (
            <CardTesti
              img={item.avatar}
              rate={item.rate}
              key={index}
              comment={item.comment}
              name={item.name}
              job={item.job}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testi;
