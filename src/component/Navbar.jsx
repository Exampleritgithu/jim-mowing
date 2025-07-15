import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="bg-white z-10 relative">
      {/* Top Header */}
      <div className="flex flex-col lg:flex-row justify-between items-center px-4 lg:px-16 py-4">
        {/* Logo */}
        <img src="jmlogo.png" alt="JM Logo" className="w-32 h-auto" />

        {/* Hamburger Button */}
        <button onClick={toggleMenu} className="lg:hidden absolute right-4 top-6">
          <img src="menu.png" alt="Menu" className="w-6 h-6" />
        </button>

        {/* Top Right Contact (Hidden on small screens) */}
        <div className="hidden lg:flex items-center gap-4 mt-4 lg:mt-0">
          <div className="border-3 rounded-full p-4 hover:text-blue-600 cursor-pointer">
            <img src="telephone.png" alt="Call" className="w-6 h-auto" />
          </div>
          <div className="px-2 hover:text-blue-600 cursor-pointer text-center">
            <h2>CALL US</h2>
            <h2 className="text-2xl">131 546</h2>
          </div>
          <div className="border-3 rounded-full p-4 hover:text-blue-600 cursor-pointer">
            <img src="calendar.png" alt="Calendar" className="w-6 h-auto" />
          </div>
          <div className="px-2 hover:text-blue-600 cursor-pointer text-center">
            <h2>GET A</h2>
            <h2 className="text-2xl">FREE QUOTE</h2>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } flex flex-col lg:flex-row lg:flex justify-center text-center border-t lg:border-none`}
      >
        <h2 className="p-3 text-xl bg-gray-200 hover:bg-black hover:text-white w-full lg:w-auto">
          HOME
        </h2>
        {["ABOUT US", "OUR SERVICES", "ARTICALS", "ITEM FOR SALE", "REGION FOR SALE"].map(
          (item, index) => (
            <h2
              key={index}
              className="p-3 px-8 text-xl hover:bg-black hover:text-white text-blue-500 flex items-center justify-center w-full lg:w-auto"
            >
              {item}
              <img src="arrow.png" alt="arrow" className="w-4 h-4 ml-2" />
            </h2>
          )
        )}
        <h2 className="p-3 px-8 text-xl text-blue-500 hover:bg-black hover:text-white w-full lg:w-auto">
          CONTACT US
        </h2>
      </div>
    </div>
  );
};

export default Navbar;
