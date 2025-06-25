import React from 'react'

import i1 from "../assets/images/disney.png"
import i2 from "../assets/images/pixar.png"
import i3 from "../assets/images/marvel.png"
import i4 from "../assets/images/starwar.png"
import i5 from "../assets/images/nationalG.png"

import v1 from "../assets/videos/disney.mp4"
import v2 from "../assets/videos/pixar.mp4"
import v3 from "../assets/videos/marvel.mp4"
import v4 from "../assets/videos/star-wars.mp4"
import v5 from "../assets/videos/national-geographic.mp4"

const Production = () => {
    let productionCard = [
        {image:i1, video:v1},
        {image:i2, video:v2},
        {image:i3, video:v3},
        {image:i4, video:v4},
        {image:i5, video:v5}
    ]
  return (
    <div className='px-5 md:px-16 py-5 grid grid-cols-2 md:flex gap-3'>

            {productionCard.map((item,index)=>(
                <div className='cursor-pointer relative border-4 border-gray-400 rounded shadow-2xl shadow-gray-600' key={index}>
                    <img src={item.image} alt=""/>
                    <video src={item.video} autoPlay muted loop className='absolute top-0 left-0 opacity-0 hover:opacity-65'></video>
                </div>
            ))}
           
    </div>
  )
}

export default Production