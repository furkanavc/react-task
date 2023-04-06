import React from "react";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';


export const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] space-y-5 h-36 flex flex-col justify-center">
      <div className="container space-y-4 flex items-center flex-col  md:items-start text-white ">
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
        <div className="flex space-x-3 ">
          <Icon icon="ri:facebook-fill" height={36} />
          <Icon icon="ri:twitter-fill" height={36} />
        </div>
      </div>
    </footer>
  );
};
