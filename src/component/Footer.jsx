import React from 'react';

const Footer = () => {
  return (
    <div className='bg-white z-50 relative mt-10'>
      {/* Top Black Bar */}
      <div className="bg-black text-white flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 py-8 text-center">
        <h2 className="underline cursor-pointer">CALL 131 546</h2>
        <h2 className="underline cursor-pointer">THE GARDEN SHADE</h2>
      </div>

      {/* Bottom Copyright + Link */}
      <div>
        <h2 className="flex justify-center text-center mt-16 px-4 text-sm sm:text-base">
          Copyright © 2025 JimsMowing.com.au. All Rights Reserved.
        </h2>
        <h2 className="text-blue-500 flex justify-center text-center py-10 px-8 hover:underline hover:text-blue-900 cursor-pointer text-sm sm:text-base">
          Service Location Quick Links
        </h2>
      </div>
    </div>
  );
};

export default Footer;
