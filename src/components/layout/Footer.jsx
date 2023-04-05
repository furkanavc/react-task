import React from "react";
import { Link } from "react-router-dom";


export const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] space-y-5 py-5 ">
      <div className="container space-y-4 flex items-center flex-col  md:items-start ">
        <div className=" flex items-center divide-x">
          <Link className="pr-3 text-sm sm:text-base" to="/">
            Anasayfa
          </Link>
          <Link className="px-3 text-sm sm:text-base" to="/">
            Kullanıcı Sözleşmesi
          </Link>
          <Link className="pl-3 text-sm sm:text-base" to="/">
            Gizlilik Sözleşmesi
          </Link>
        </div>
        <div className="flex space-x-3">
          <div className="h-5 w-5 bg-red-500 rounded-full"></div>
          <div className="h-5 w-5 bg-red-500 rounded-full"></div>
        </div>
      </div>
    </footer>
  );
};
