import React from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-center gap-2">
        <img src="public\Assets\Logo.svg" alt="Logo" className="h-8" />
        <button className=" bg-linear-to-r from-orange-400 to-red-400 text-xs text-white px-2.5 py-1.5 rounded-full">
          Hoster is hiring!
        </button>
      </div>
      <div className="flex items-center gap-4">
        <ul className="flex  font-lato items-center justify-center gap-4">
        <li>
          <a href="#">Plans</a>
        </li>
        <li>
          <a href="#">Find Domain</a>
        </li>
        <li>
          <a href="#">Why Hosterr</a>
        </li>
      </ul>
      </div>
      <div className="flex items-center gap-4">
        <ul className="flex items-center
            font-lato justify-center gap-4">
        <li>
          <a href="#">Sign in</a>
        </li>
        <li>
          <button
              className="bg-blue-500
            p-3
            rounded-sm
            font-bold
            text-white
            items-center
            justify-center
            flex"
            >
              Join Waitlist
            </button>
        </li>
      </ul>
      </div>
    </div>
  );
};
export default Header;
