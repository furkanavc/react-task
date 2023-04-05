import React from 'react'
import {  Link } from "react-router-dom";

export const Home = () => {
  return (
    <nav>
        <ul className='flex space'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/series">Series</Link>
          </li>
          <li>
            <Link to="/films">Films</Link>
          </li>
        </ul>
      </nav>
  )
}
