"use client";
import React from "react";

export default function Modal({closeModal}) {
    return(
        <div className="flex fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm m-auto items-center">
        <div className="flex flex-col h-60 w-1/3 justify-center items-center mx-auto left-0 right-0 bg-white shadow-sm shadow-gray p-2 rounded-lg">
             <div className="flex w-3/4 2xl:w-1/3 itmes-left text-gray text-left text-xl md:text-xl font-bold justify-center items-center"> 
                <h1 className="text-gray text-xl font-bold">Place URL Link </h1>
            </div>
            <input className="flex w-5/6 p-3 rounded-lg shadow-sm shadow-gray focus:bg-beigeWhite focus:outline-white text-left text-gray mt-2"/>
            <button onClick={()=> closeModal(false)} className = "h-12 w-28 bg-purple text-lg font-bold text-white rounded-xl mt-5 mx-auto shadow-sm shadow-gray">Upload</button>
        </div>
        </div>

    )
};