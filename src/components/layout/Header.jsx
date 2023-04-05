import React from 'react'

export const Header = () => {
  return (
    <header className='bg-black py-3 px-2 sm:px-0'>
      <div className='flex justify-between w-full container items-center'>

     <span className='text-2xl'>Bulut MD</span>
     <div className='flex space-x-4 '>
      <button className='text-xl hidden md:block'>Giriş</button>
      <button className='bg-[#EF4B24] px-5 py-2'>Deneme Başlat</button>
     </div>
      </div>
    </header>
  )
}
