import appstore from "../assets/appstore.png";
import playstore from "../assets/playstore.png";

const Download = () => {
  return (
    <div
      id="download"
      className="px-4 pt-24 pb-36 container mx-auto border-b border-gray-200"
    >
      <h1 className="text-[40px] font-patua text-center">
        Download Aplikasi Keren Ini Sekarang!
      </h1>
      <p className="text-abu text-center w-full md:w-[40%] mx-auto mt-6">
        Please download lah aplikasi ini, udah susah-susah buat, mana pas bikin
        sampe begadang, terus juga ditambah weekend. Jadi, please download lah
        ya.
      </p>
      <div className="flex justify-center gap-4 mt-12">
        <img src={appstore} alt="" />
        <img src={playstore} alt="" />
      </div>
    </div>
  );
};

export default Download;
