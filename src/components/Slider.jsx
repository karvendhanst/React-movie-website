import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Slick from "react-slick";


const Slider = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear",
        autoplay: true,
        autoplaySpeed: 5000,
            responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }]
    };

    let [trending, setTrending] = useState([])

    useEffect(() => {

        axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=573503354e2514d0c9fcb9037ab3f881")
            .then((res) => {
                // console.log(res.data.results);
                setTrending(res.data.results)
            })

    }, [])


    let bannerImgBaseUrl = "https://image.tmdb.org/t/p/original"

    return (
        <div className='slider-container p-5 md:px-16 py-5 overflow-hidden'>

            <Slick {...settings}>

                {trending && trending.map((item, index) => (
                    <img src={bannerImgBaseUrl + item.backdrop_path} alt="" className='md:h-[400px] min-w-full object-cover object-left-top rounded-lg border-4 border-transparent hover:border-gray-300' key={index} />
                ))}

            </Slick>
        </div>
    )

}

export default Slider