import React from 'react'
import Sample from '../assets/data/sample.json'
export const Series = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 my-10">
    {Sample.entries.filter(i=>i.programType === 'series').map((e) => (
      <div
        to={e.path}
        key={e.title}
        className="flex flex-col space-y-4 items-center w-full"
      >
        <div className="rounded-lg border border-black h-56 w-56 md:w-full">
          <img
            src={e.images['Poster Art'].url}
            alt={e.title}
            className="w-full h-full object-contain lg:object-cover"
          />
        </div>
        <span className="text-black">{e.title}</span>
      </div>
    ))}
  </div>
  )
}
