import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-black py-3 h-20 flex items-center px-2 sm:px-0 text-white">
      <div className="flex justify-between w-full container items-center">
        <Link className="text-2xl" to="/">Bulut MD</Link>
        <div className="flex space-x-4 ">
          <button className="text-xl hidden md:block">Giriş</button>
          <button className="bg-[#EF4B24] px-5 py-2">Deneme Başlat</button>
        </div>
      </div>
    </header>
  );
};
