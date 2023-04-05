import React from "react";
import Sample from "../assets/data/sample.json";
import { useState } from "react";
export const Series = () => {
  const [filteredList, setFilteredList] = useState("");

  const filterSeries = (e) => {
    if (e.target.value.length >= 3) {
      setFilteredList(e.target.value);
    } else if (e.target.value.length === 0) {
      setFilteredList(e.target.value);
    }
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
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {Sample.entries
          .filter((i) => {
            return filteredList.toLowerCase() === ""
              ? i
              : i.title.toLowerCase().includes(filteredList);
          })
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
