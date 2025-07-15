
const Hero = () => {
  return (
    <main className="flex items-center py-20   justify-center">
      <div className="relative w-full justify-between ">
        {/* Main Headline */}
        <h4 className=" text-white text-7xl text-center">AUSTRALIA'S #1</h4>

        {/* Subheadline */}
        <h4 className="  text-white text-6xl  text-center">
          MOWING & GARDEN CARE COMPANY
        </h4>

        <div className="  flex gap-6 mx-auto justify-center items-center mt-10">
          <button className="bg-yellow-300 text-black text-xl px-6 py-3 ">
            GET YOUR FREE QUOTE
          </button>
          <button className="bg-green-500 text-white text-xl px-6 py-3 ">
            BECOME A FRINCHIIES
          </button>
        </div>
        <div className="  bg-white p-2 py-2 flex flex-col justify-center items-center mx-auto mt-10 w-64  ">
          <img src="Product.webp" alt="" className="w-56 " />
          <p className="w-65 text-sm">2023 Product Review best Mowing and gardening company winner.</p>
        </div>
      </div>
    </main>
  );
};

export default Hero;
