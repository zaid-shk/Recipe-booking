import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-800 h-10 px-10 text-xl py-4 w-full flex items-center justify-between">
      Navbar
      <div className="flex gap-10">
        <Link to={"/"} className="active:text-gray-200">
          Home
        </Link>
        <Link to={"/about"} className="active:text-gray-200">
          About
        </Link>
        <Link to={"/product"} className="active:text-gray-200">
          Product
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
