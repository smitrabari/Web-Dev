import React from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-center gap-2">
        <img src="public\Assets\Logo.svg" alt="Logo" className="h-8" />
        <button className=" bg-linear-to-r from-orange-400 to-red-400 text-xs text-white px-2.5 py-1.5 rounded-full">Hoster is hiring!</button>
      </div>
      <div>
        <FaBars className="h-20 w-6" />
      </div>
    </div>
  );
};
export default Header;
