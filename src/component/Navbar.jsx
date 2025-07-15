import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white z-10 relative">
      {/* Top Header */}
      <div className="flex flex-col relative  lg:flex-row justify-between items-center">
        <div className="py-4 px-4 lg:px-16">
          <img src="jmlogo.png" alt="JM Logo" className="w-32 h-auto" />
        </div>

        <div className="flex flex-wrap justify-center items-center mt-4 lg:mt-6">
          <div className="border-3 rounded-full p-4 hover:text-blue-600 cursor-pointer">
            <img src="telephone.png" alt="" className="w-6 h-auto" />
          </div>
          <div className="px-2 hover:text-blue-600 cursor-pointer text-center">
            <h2>CALL US</h2>
            <h2 className="text-2xl">131 546</h2>
          </div>
          <div className="border-3 rounded-full p-4 hover:text-blue-600 cursor-pointer">
            <img src="calendar.png" alt="" className="w-6 h-auto" />
          </div>
          <div className="px-2 mr-0 lg:mr-8 hover:text-blue-600 cursor-pointer text-center">
            <h2>GET A</h2>
            <h2 className="text-2xl">FREE QUOTE</h2>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="flex flex-wrap justify-center text-center">
        <h2 className="p-3 text-xl bg-gray-200 hover:bg-black hover:text-white w-full lg:w-auto">
          HOME
        </h2>
        {["ABOUT US", "OUR SERVICES", "ARTICALS", "ITEM FOR SALE", "REGION FOR SALE"].map((item, index) => (
          <h2
            key={index}
            className="p-3 px-8 text-xl hover:bg-black hover:text-white text-blue-500 flex items-center justify-center w-full lg:w-auto"
          >
            {item}
            <img src="arrow.png" alt="" className="w-4 h-4 ml-2" />
          </h2>
        ))}
        <h2 className="p-3 px-8 text-xl text-blue-500 hover:bg-black hover:text-white w-full lg:w-auto">
          CONTACT US
        </h2>
      </div>
    </div>
  );
};

export default Navbar;
