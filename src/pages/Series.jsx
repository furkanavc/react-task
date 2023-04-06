import React from "react";
import Sample from "../assets/data/sample.json";
import { useState, useEffect } from "react";

export const Series = () => {

  const [data, setData] = useState(Sample.entries);
  const [sortProperty, setSortProperty] = useState("releaseYear");
  const [sortType, setSortType] = useState("random");
  const [filteredText, setFilteredText] = useState("");
  const filteredData = data
  .filter((e) => {
    if(e.programType === "series" && filteredText){
        return e.title.toLowerCase().includes(filteredText);
    }
  })
  useEffect(() => {
    let tempData =  [...Sample.entries] 
    if (sortType === "ascending") {
      // sort ascending
      tempData = tempData.sort((a, b) => b[sortProperty] - a[sortProperty]);
    } else if (sortType === "descending") {
      // sort descending
      tempData = tempData.sort((a, b) => a[sortProperty] - b[sortProperty]);
    } else {
      // if its random bring not sorted data
      tempData;
    }
    setData(tempData);
  }, [sortType]);

  const filterSeries = (e) => {
    if (e.target.value.length >= 3) {
      setFilteredText(e.target.value);
    } else 
      setFilteredText('');
  };

  return (
    <div className="container  my-10 px-2">
      <div className="flex w-full justify-between flex-col space-y-5 lg:flex-row lg:space-y-0 py-5">
        <input
          onChange={filterSeries}
          type="text"
          name="filterseries"
          className="border border-slate-500 rounded-2xl w-full md:w-1/3 py-5 px-4 "
          placeholder="Dizi ara"
        />

        <div className="flex items-center w-full lg:w-1/5 relative">
          <select
            defaultValue={"default"}
            onChange={(e) => setSortType(e.target.value)}
            className="border border-slate-500 p-5 rounded-2xl w-full "
          >
            <option value="default" disabled>
              Sırala
            </option>
            <option value="ascending">Yeniye Göre Sırala</option>
            <option value="descending">Eskiye Göre Sırala</option>
            <option value="random">Rastgele Sırala</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {(filteredText ? filteredData : data.filter(e => e.programType === 'series').slice(0,18))
          .map((e) => (
            <div
              to={e.path}
              key={e.title}
              className="flex flex-col space-y-4 items-center w-full"
            >
              <div className="rounded-lg border border-black h-56 w-56 md:w-full overflow-hidden">
                <img
                  src={e.images["Poster Art"].url}
                  alt={e.title}
                  className="w-full h-full object-contain lg:object-cover"
                />
              </div>
              <span className="">{e.title}</span>
            </div>
          ))}
      </div>
    </div>
  );
};
