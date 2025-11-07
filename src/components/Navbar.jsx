import React from "react";

import { appleImg, bagImg, githubImg, searchImg } from "../assets";
import { navLists, sourceCode } from "../constants";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between w-full p-5 sm:px-10">
      <nav className="flex w-full screen-max-width">
        <a href="#">
          <img src={appleImg} alt="Apple" width={14} height={18} />
        </a>

        <div className="flex justify-center flex-1 max-sm:hidden">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="px-5 text-sm transition-all cursor-pointer text-gray hover:text-white"
            >
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:flex-1 max-sm:justify-end">
          <a href="#">
            <img src={searchImg} alt="Search" width={18} height={18} />
          </a>
          <a href="#">
            <img src={bagImg} alt="Bag" width={18} height={18} />
          
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
