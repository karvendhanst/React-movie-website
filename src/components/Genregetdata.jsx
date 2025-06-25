import axios from 'axios'
import { useEffect, useState } from 'react'
import Slider from "react-slick";

import logo from "../assets/images/logo/3.png"

import { BiMoviePlay } from "react-icons/bi";

const Genregetdata = (props) => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: "linear",
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 430,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]


    };

    let [genre, setGenre] = useState([])

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=573503354e2514d0c9fcb9037ab3f881&with_genres=${props.id}`)
            .then((res) => {
                // console.log(res.data.results);

                setGenre(res.data.results)
            })
    }, [])

    return (
        <div className="slider-container">

            <Slider {...settings}>

                {genre && genre.map((item, index) => (

                    <div>
                        <div className='relative overflow-hidden mx-3 rounded-2xl'>
                            <img src={"https://image.tmdb.org/t/p/original" + item.backdrop_path} alt="" className='-z-10  relative w-75 border-4 border-transparent hover:border-gray-400 rounded-2xl cursor-pointer' />
                            <div className='z-10 absolute text-white top-5 left-5'><BiMoviePlay /></div>
                            <div className='top-0 left-0 absolute w-full h-full cursor-pointer bg-black/75 backdrop-blur-sm flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition duration-300'>
                                <h1 className='text-white font-bold border-s-2 ps-2 border-red-700 '>Watch Now On</h1>
                                <img src={logo} alt="" className='w-25' />
                            </div>
                        </div>
                        <p className='ms-3 text-gray-400 font-bold text-sm mt-2'>{item.title}</p>
                    </div>

                ))}

            </Slider>

        </div>
    )

}

export default Genregetdata