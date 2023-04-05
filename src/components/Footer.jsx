import logo from "../assets/logo_zeitplan.png";

const Footer = () => {
  return (
    <div className="container mx-auto py-20 flex flex-wrap justify-between gap-4 p-4 text-abu">
      <div className="w-full lg:w-[30%]">
        <img src={logo} alt="" />
        <p className="mt-4 text-sm">
          Sebuah aplikasi yang membantu kamu untuk membuat jadwal kuliah, jadwal
          mabar, jadwal makan, jadwal liga inggris, dan jadwal-jadwal lainnya.
          Walaupun banyak error, setidaknya kami sudah berusaha semaksimal
          mungkin.
        </p>
      </div>
      <div className=" font-semibold">
        <h1 className="text-black text-lg">Sitemap</h1>
        <div>
          <a className="my-3 block" href="#hero">
            Beranda
          </a>
          <a className="my-3 block" href="#fitur">
            Fitur-fitur
          </a>
          <a className="my-3 block" href="#harga">
            Harga
          </a>
          <a className="my-3 block" href="#testi">
            Testimoni
          </a>
          <a className="my-3 block" href="#download">
            Download
          </a>
        </div>
      </div>
      <div className=" font-semibold">
        <h1 className="text-black text-lg">Partner</h1>
        <div>
          <a className="my-3 block" href="">
            Sefan.ru
          </a>
          <a className="my-3 block" href="">
            Ganool
          </a>
          <a className="my-3 block" href="">
            Waptrick
          </a>
          <a className="my-3 block" href="">
            Stafaband
          </a>
          <a className="my-2 block" href="">
            MyWapBlog
          </a>
          <a className="my-2 block" href="">
            Friv
          </a>
        </div>
      </div>
      <div className=" font-semibold">
        <h1 className="text-black text-lg">Tetap Terhubung</h1>
        <p className="text-abu/75">
          Lihat kami pansos di sosial media berikut:
        </p>
      </div>
    </div>
  );
};

export default Footer;
