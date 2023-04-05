const CardHarga = (props) => {
  return (
    <div className="w-full md:w-[30%] h-auto p-4 md:p-14 rounded-lg shadow bg-white">
      <h1 className="uppercase text-primary font-bold">{props.category}</h1>
      <h1 className="text-3xl font-patua text-black mt-6">{props.harga}</h1>
      <p className="text-abu mt-4">{props.desc}</p>
      <div className="flex gap-4 mt-4">
        <p className="text-black mb-8">{props.fitur}</p>
      </div>
      <button className="py-2 w-full rounded text-white font-semibold bg-primary">
        Download
      </button>
    </div>
  );
};

export default CardHarga;
