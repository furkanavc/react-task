import React from "react";
import { Link } from "react-router-dom";
import {FilmCoverImage,SerieCoverImage} from '../assets/images'
export const Home = () => {
  const popularTitles = [
    {
      id: 1,
      name: "Film",
      path: "/films",
      img: FilmCoverImage
    },
    {
      id: 2,
      name: "Dizi",
      path: "/series",
      img: SerieCoverImage,
    },
  ];
  return (
    <div className="">
      <div className="bg-black/80 px-2 sm:px-0">
        <div className="container py-5">
          <span className="text-xl">Popüler Başlıklar</span>
        </div>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 my-10">
        {popularTitles.map((e) => (
          <Link
            to={e.path}
            key={e.id}
            className="flex flex-col space-y-4 items-center w-full"
          >
            <div className="rounded-lg border border-black h-56 w-56 md:w-full">
              <img
                src={e.img}
                alt={e.name}
                className="w-full h-full object-contain lg:object-cover"
              />
            </div>
            <span className="text-black">{e.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
