import React, { useState } from 'react'
// import logo from '../assets/images/logo.png'
import logo from '../assets/images/logo/3.png'
import profilePic from '../assets/images/profile.png'
import HeaderMenus from './HeaderMenus'

import {
    HiHome,
    HiSearch,
    HiPlus,
    HiStar,
    HiDotsVertical
} from "react-icons/hi";
import { PiFilmReelFill } from "react-icons/pi";
import { TbDeviceTvOldFilled } from "react-icons/tb";


const Header = () => {

    let [menu, setMenu] = useState(false);

    let menus = [
        { icon: HiHome, name: "Home" },
        { icon: HiSearch, name: "Search" },
        { icon: HiPlus, name: "Watchlist" },
        { icon: HiStar, name: "Originals" },
        { icon: PiFilmReelFill, name: "Movies" },
        { icon: TbDeviceTvOldFilled, name: "Series" }
    ]

    return (
        <div className='md:px-16 flex items-center justify-between p-4'>
            <div className='flex items-center gap-7'>
                <img src={logo} alt="" className='w-17 md:w-20' />

                <div className='hidden md:flex gap-5 items-center text-white'>
                    {menus.map((item,index) => (
                        <HeaderMenus Icon={item.icon} name={item.name} key={index}/>
                    ))}
                </div>
                <div className='relative flex md:hidden gap-5 items-center text-white text-xl'>
                    {menus.map((item, index) => index < 3 && (
                        <HeaderMenus Icon={item.icon} name="" key={index}/>
                    ))}
                    <HiDotsVertical className='cursor-pointer' onClick={() => setMenu(!menu)} />
                    {menu && <div className='bg-gray-600 flex flex-col gap-3 absolute right-0 md:-right-26 z-20 top-6 p-3 rounded text-[16px] border-2 border-gray-800/15'>
                        {menus.map((item, index) => index > 2 && (
                            <HeaderMenus Icon={item.icon} name={item.name} key={index}/>
                        ))}
                    </div>}
                </div>
            </div>

            <div>
                <img src={profilePic} alt="" className='w-8 md:w-12 rounded-full cursor-pointer' />
            </div>

        </div>
    )
}

export default Header