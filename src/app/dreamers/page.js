"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/new-slick.css";
import {data} from '../../data/dreamdata'

export default function Dreamers() {
   const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive:[
            {
                breakpoint: 480,
                settings: {
                    slidesToShow:3
                }
            }
        ]
   };

    return(
        <div className="bg-beigeWhite h-screen">
            {/*---------HEADER----------*/}
            <div className = "flex flex-col h-screen w-screen lg:w-3/4 mx-auto left-0 right-0 items-center">
                <div className = "flex justify-between w-screen 2xl:w-1/2 mt-16">
                    <div className = "text-left">
                        <h1 className="text-black text-2xl md:text-4xl font-bold ml-4 mt-1">Your Dreamers</h1>
                        <h1 className="text-gray text-xl md:text-3xl font-bold ml-4 mt-2">30 Dreamates</h1>
                    </div>
                    <img src="/assets/profile_pic.jpg" alt="Profile Pic" className = "rounded-full h-20 w-20 lg:h-28 lg:w-28 mr-4"></img>
                </div>

            {/*---------IMAGE CAROUSEL----------*/}
            <div className = "w-3/4 2xl:w-1/2 mt-16 mx-auto left-0 right-0">
            <Slider {...settings}>
                {data.map((d) => (
                    <div className = "flex justify-center items-center">
                        <img src={d.img} alt="" className="rounded-full h-14 w-14 md:h-20 md:w-20 mx-auto left-0 right-0 "></img>
                    </div>
                ))}
            </Slider>
            </div>

            {/*---------FIND FRIENDS----------*/}
            <div className="flex flex-col w-5/6 2xl:w-1/2 itmes-left text-gray text-left text-xl md:text-xl font-bold mt-16"> 
                <h1 className="text-gray text-xl font-bold mt-2">Add a Dreamer</h1>
            </div>
            <div className="flex w-5/6 2xl:w-1/2 p-3 justify-between text-gray bg-white shadow-sm shadow-gray rounded-xl px-4 mt-8"> 
                <input name="myInput" placeholder="Username" className="focus:outline-white text-left w-3/4 text-gray"/>
                <img src="/assets/search.png" alt="Search Icon" className = "h-10 w-10"></img>
            </div>

            {/*---------FRIENDS LIST----------*/}
            <div className="flex flex-col w-5/6 2xl:w-1/2 itmes-left text-gray text-left text-xl md:text-xl font-bold mt-16"> 
                <h1 className="text-gray text-xl font-bold mt-2">Fellow Dreamers</h1>
                {data.map((d) => (
                    <div className = "flex justify-between items-center w-full mx-auto left-0 right-0 mt-5 md:p-8">
                        <img src={d.img} alt="Profile Pic" className="rounded-full h-14 w-14 md:h-20 md:w-20 "></img>
                        <div className = "w-20 md:w-40 md:mr-10 text-left">
                            <h1 className="text-black text-base text-center md:text-xl font-bold mt-1">{d.name}</h1>
                            <h1 className="text-gray text-base md:text-lg text-center font-semibold mt-2">{d.id}</h1>
                        </div>
                        <button className = "h-30 w-20 bg-purple text-white rounded-xl">
                            Jars
                        </button>
                    </div>
                ))}
            </div>
            {/*---------FOOTNOTE ----------*/}
            <div className="flex flex-col items-center mx-auto left-0 right-0 mt-5 p-5">
                <h3 className = "text-gray text-center text-lg font-bold">All Rights Reserved @CapitalOneBHTS</h3>
            </div>
        </div>
    </div>
    )
};