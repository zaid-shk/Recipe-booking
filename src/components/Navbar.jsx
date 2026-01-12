import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Navbar = () => {

  return (
    <div className="border rounded-b-2xl rounded-t-md h-8 px-5 font-medium py-5 flex gap-20 items-center justify-around">
      <div className="px-13 "><Link to={"/"} className=" text-[.9rem]">Navbar</Link></div>
      <div className="flex gap-8">
        <Link to={"/"} className="text-[.9rem]">Home</Link>
        <Link to={"/about"} className="text-[.9rem]">About</Link>
        <Link to={"/docs"} className="text-[.9rem]">Docs</Link>
      </div>

      <div className="flex gap-8 items-center tracking-wider">
        <Link to={"/login"} className="text-[.9rem]">Login</Link>
        <div
          className="flex items-center gap-1 border px-2 py-1 text-[.9rem]"
        >
          <Link to={"/register"}>Get started</Link>
          <div className="">
            <ArrowRight size={15} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
