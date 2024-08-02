"use client";

import {data} from '../../data/transdata'

export default function Dreamers() {
    return(
        <div className="bg-beigeWhite h-screen">
            {/*---------HEADER----------*/}
            <div className = "flex flex-col h-screen w-screen lg:w-3/4 mx-auto left-0 right-0 items-center">
                <div className = "flex flex-col w-5/6 2xl:w-1/2 mt-16 mx-auto left-0 right-0 items-center">
                    <h1 className="text-black text-center text-3xl md:text-4xl font-bold mx-auto md:mb-4 mt-6">Dream Deposits</h1>
                    <h2 className="text-gray text-center text-xl font-bold mb-8">Counting your Zzz's</h2>
                </div>

            {/*---------FRIENDS LIST----------*/}
            <div className="flex flex-col w-5/6 2xl:w-1/2 text-gray text-left text-xl md:text-xl font-bold mt-10"> 
                <h1 className="text-gray text-center md:text-left text-xl md:text-xl font-bold mt-2">Transaction History</h1>
                {data.map((d) => (
                    <div className = "flex justify-between items-center w-full mx-auto md:p-8 border-b-2 border-light-gray mt-7">
                        <div className = "flex justify-between items-center w-80">
                            <img src={d.img} alt="Profile Pic" className="rounded-full items-center h-12 w-12 md:h-20 md:w-20"></img>
                            <div className = "w-52 text-center">
                                <h1 className="text-black text-center text-base md:text-xl font-bold mt-1">{d.time}</h1>
                                <h1 className="text-gray text-base md:text-lg text-center font-semibold ">{d.jar}</h1>
                            </div>
                        </div>
                        <h1 className="w-28 text-gray text-lg text-center font-semibold mt-2">{d.amount}</h1>
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