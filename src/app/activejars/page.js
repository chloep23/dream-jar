"use client";
import Link from 'next/link';
import {data} from '../../data/data'


export default function ActiveJars() {
    return(
        <div className="bg-beigeWhite h-screen">
            {/*----------HEADER------------*/}
            <div className = "flex flex-col w-screen md:w-3/4 mt-14 mx-auto left-0 right-0 items-center">
                <h1 className="text-black text-center text-3xl md:text-4xl font-bold mx-auto md:mb-4 ">Active Jars</h1>
                <h2 className="text-gray text-center text-xl font-bold mb-8 tracking-normal">Grab Jar. Get Dreamer. <br/> Go Begin.</h2>
            </div>

            {/*----------JARS DASHBOARD------------*/}
            <div className = "flex flex-col w-screen lg:w-3/4 mt-10 m-auto left-0 right-0 justify-center items-center">
                <div className = "flex flex-col md:grid grid-cols-4 gap-10 lg:gap-20 items-center">
                    <Link href="/mainjar" className = "divide-y-2 md:col-span-2">
                            <div className="bg-collegeBG bg-cover h-40 lg:h-48 lg:w-96 w-72 rounded-t-2xl "></div>
                            <div className="bg-white h-20 lg:w-96 w-72 rounded-b-2xl p-3 px-5 shadow-xl shadow-gray-700"> 
                                <h className = "text-black text-xl font-semibold">College Decor</h>
                                <div className = "flex justify-between">
                                    <div className = "text-left text-gray font-medium">Due by: 08/24/24</div>
                                    <div className = "text-right text-gray font-normal">$2100</div>
                                </div>
                            </div>
                        </Link>
                        <div className = "divide-y-2 col-span-2">
                            <div className="bg-nycBG bg-cover h-40 lg:h-48 lg:w-96 w-72 rounded-t-2xl "></div>
                            <div className="bg-white h-20 lg:w-96 w-72 rounded-b-2xl p-3 px-5 shadow-xl shadow-gray-700"> 
                                <h className = "text-black text-xl font-semibold ">New York City Trip</h>
                                <div className = "flex justify-between">
                                    <div className = "text-left text-gray font-medium">Due by: 12/29/24</div>
                                    <div className = "text-right text-gray font-normal">$3500</div>
                                </div>
                            </div>
                        </div>
                        <div className = "divide-y-2 col-span-2 col-start-2">
                            <div className="bg-gradBG bg-cover h-40 lg:h-48 lg:w-96 w-72 rounded-t-2xl "></div>
                            <div className="bg-white h-20 lg:w-96 w-72 rounded-b-2xl p-3 px-5 shadow-xl shadow-gray-700"> 
                                <h className = "text-black text-xl font-semibold ">Graduation Party</h>
                                <div className = "flex justify-between">
                                    <div className = "text-left text-gray font-medium">Due by: 05/30/25</div>
                                    <div className = "text-right text-gray font-normal">$4000</div>
                                </div>
                            </div>
                        </div>
                    {/* {data.map((d) => (
                       <Link href = "/mainjar" className = "divide-y-2 md:col-span-2">
                            <div className = "bg-collegeBG bg-cover h-40 lg:h-48 lg:w-96 w-72 rounded-t-2xl"></div>
                            <div className="bg-white h-20 lg:w-96 w-72 rounded-b-2xl p-3 px-5 shadow-xl shadow-gray-700"> 
                                <h1 className = "text-black text-xl font-semibold">{d.name}</h1>
                                <div className = "flex justify-between">
                                    <div className = "text-left text-gray font-medium">Due by: {d.due}</div>
                                    <div className = "text-right text-gray font-normal">{d.amount}</div>
                                </div>
                            </div>
                        </Link>
                    ))} */}
                </div>
                <Link href = '/dreamjars' className = "mt-10">
                    <div className = "absolute bg-purple rounded-full h-16 w-16 mx-auto left-0 right-0"></div>
                    <img src="/assets/plus.png" alt="Jar Icon" className = "absolute rounded-full h-8 w-8 m-auto mt-4 left-0 right-0"></img>
                </Link>
            </div>

            <div className="flex flex-col justify-center items-center mx-auto left-0 right-0 mt-24 w-screen h-14">
                <h3 className = "text-gray text-center text-lg font-bold">All Rights Reserved @CapitalOneBHTS</h3>
            </div>
        </div>
   
    )
};