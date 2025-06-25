import React from 'react'

import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='p-4 md:px-16 border-t border-gray-500 mt-5 flex gap-3 flex-col md:flex-row items-center justify-between'>
        <div className='flex text-2xl gap-3.5 text-gray-500'>
          <FaFacebook/>
          <FaInstagram/>
          <FaGithub/>
        </div>
        <p className='text-[14px] text-gray-500'>Copyrights © Designed By Karvendhan ST ❤️</p>
    </div>
  )
}

export default Footer