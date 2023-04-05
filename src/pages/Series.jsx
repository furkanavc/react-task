import React from "react";
import Sample from "../assets/data/sample.json";
import { useState } from "react";
import { Icon } from '@iconify/react';

export const Series = () => {
  const selectBox = [
    {
      value: "1",
      desc: "Yeniye Göre Sırala",
    },
    {
      value: "2",
      desc: "Eskiye Göre Sırala",
    },
    {
      value: "3",
      desc: "Puana Göre Sırala",
    },
    {
      value: "4",
      desc: "Rastgele Sırala",
    },
  ];

  const [filteredList, setFilteredList] = useState("");
  const [checkBoxVal, setCheckBoxVal] = useState("");
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const handleToggle = () => {
    setToggleDropdown((current) => !current);
  };
  const filterSeries = (e) => {
    if (e.target.value.length >= 3) {
      setFilteredList(e.target.value);
    } else if (e.target.value.length === 0) {
      setFilteredList(e.target.value);
    }
  };
  const compare = (a, b) => {
    return a.releaseYear - b.releaseYear;
  };
  return (
    <div className="container  my-10 px-2">
      <div className="flex w-full justify-between flex-col space-y-5 lg:flex-row lg:space-y-0 py-5">
        <input
          onChange={filterSeries}
          type="text"
          name="filterseries"
          className="border border-slate-500 rounded-2xl w-full md:w-1/3 py-5 px-4 text-black"
          placeholder="Film ara"
        />

        <div className="flex items-center w-full lg:w-1/5 relative">
          <div
            onClick={handleToggle}
            className=" border border-slate-500 p-5 rounded-2xl w-full z-20 bg-white flex justify-between"
          >
            <span className="text-black">
            Sıralama
            </span>
            <Icon icon="carbon:chevron-down" height={24} />

          </div>
          {toggleDropdown === false && (
            <div className="flex flex-col divide-y pt-7 absolute top-10 left-0  border border-slate-500 rounded-2xl w-full bg-white z-10">
              {selectBox.map((e,i) => (
                <span key={i} className="text-black px-5 py-2">{e.desc}</span>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {Sample.entries
          .filter((i) => i.programType === "series")
          .filter((i) => {
            return filteredList.toLowerCase() === ""
              ? i
              : i.title.toLowerCase().includes(filteredList);
          })
          .sort(compare)
          .map((e) => (
            <div
              to={e.path}
              key={e.title}
              className="flex flex-col space-y-4 items-center w-full"
            >
              <div className="rounded-lg border border-black h-56 w-56 md:w-full">
                <img
                  src={e.images["Poster Art"].url}
                  alt={e.title}
                  className="w-full h-full object-contain lg:object-cover"
                />
              </div>
              <span className="text-black">{e.title}</span>
            </div>
          ))}
      </div>
    </div>
  );
};
