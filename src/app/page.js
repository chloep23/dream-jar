import Image from "next/image";
import Link from 'next/link';
import './globals.css';


export default function Home() {

  return (
    <main>
        <div className="bg-beigeWhite">
            {/*----------HEADER------------*/}
            <div className = "flex flex-col h-screen w-screen xl:w-3/4 mx-auto left-0 right-0">
                <div className = "lg:grid grid-cols-2"> 
                    <div className="flex flex-col justify-center items-center h-screen">
                        <h1 className="text-black text-center text-3xl md:text-4xl font-bold mx-auto md:mb-4">Welcome Rachel!</h1>
                        <div className = "z-0 relative md:box-content md:shadow-xl md:shadow-gray-900 md:bg-white md:rounded-2xl h-72 w-screen md:h-96 md:w-96 ">
                            <img src="/assets/purple_bg.png" alt="Profile Pic" className = "absolute mt-2 md:mt-5 h-64 w-full "></img>
                            <img src="/assets/profile_pic.jpg" alt="Profile Pic" className = "absolute m-auto mt-10 md:mt-16 left-0 right-0 rounded-full h-56 w-56 md:h-72 md:w-72"></img>
                        </div>

                         {/*----------SUB HEADER------------*/}
                        <h2 className="text-black text-center text-2xl font-bold mx-auto mt-4">$4,456.00 Savings</h2>
                        <div className = "flex justify-between mx-auto left-0 right-0 w-52">
                            <div className = "relative w-12">
                                <img src="/assets/dreamer1.jpg" alt="User Pic" className = "absolute rounded-full mt-3 h-8 w-8 "></img>
                                <img src="/assets/dreamer2.jpg" alt="User Pic" className = "absolute rounded-full ml-5 mt-3 h-8 w-8 "></img>
                            </div>
                            <h2 className="text-black text-center text-xl font-bold mt-4">20+ Dreamates</h2>
                        </div>
                        <h3 className="text-gray text-center text-xl font-bold mx-auto mt-2">27 Dream Jars</h3>
                    </div>

                     {/*----------DASHBOARD------------*/}

                     {/*----------FIRST HALF------------*/}
                      {/*----------GOALS------------*/}
                    <div className="flex flex-col mx-auto left-0 right-0 justify-center items-center md:mb-28">
                        <h1 className="text-black text-center font-bold text-3xl m-auto mt-8 mb-4">Make Dreams Happen</h1>
                        <h2 className="text-gray text-center font-bold text-2xl mx-auto">One Jar at a Time</h2>
                        <div className = "flex flex-col md:grid md:grid-cols-2 md:mx-auto md:left-0 md:right-0 md:gap-10 mt-10">
                            <Link href = "/activejars" className = "box-content shadow-xl shadow-gray-700 rounded-2xl bg-light-blue size-44 2xl:size-52 p-5 ">
                                <div className = "flex justify-between mx-auto left-0 right-0">
                                    <h3 className = "text-blue text-left font-bold">Goals</h3>
                                    <div className = "relative w-1/2 ">
                                        <div className = "absolute bg-blue rounded-full h-16 w-16 mx-auto left-7 2xl:left-10 right-0"></div>
                                        <img src="/assets/white_jar_icon.png" alt="Jar Icon" className = "absolute rounded-full h-12 w-10 m-auto mt-2 left-8 2xl:left-10 right-0"></img>
                                    </div>
                                </div>
                                <h4 className = "text-black text-left font-bold mt-24 2xl:mt-32">Dream Jars</h4>
                                <div className = "flex justify-between mx-auto left-0 right-0">
                                    <h5 className = "text-gray text-left font-semibold mt-1">Fill Jar Dream Big</h5>
                                    <img src="/assets/arrow.png" alt="Arrow" className ="h-8 w-8 mb-5"></img>
                                </div>
                            </Link>

                     {/*----------FRIENDS------------*/}
                            <Link href = "/dreamers" className = "box-content shadow-xl shadow-gray-700 rounded-2xl bg-light-yellow size-44 2xl:size-52 p-5 mt-8 md:mt-0">
                                <div className = "flex justify-between mx-auto left-0 right-0">
                                    <h3 className = "text-yellow text-left font-bold">Friends</h3>
                                    
                                    <div className = "relative w-1/2 ">
                                        <div className = "absolute bg-yellow rounded-full h-16 w-16 mx-auto left-7 2xl:left-10 right-0"></div>
                                        <img src="/assets/friends_icon.png" alt="Jar Icon" className = "absolute h-12 w-12 m-auto mt-2 left-8 2xl:left-10 right-0"></img>
                                    </div>
                                </div>
                                    <h4 className = "text-black text-left font-bold mt-24 2xl:mt-32">Dreamers</h4>
                                    <div className = "flex justify-between mx-auto left-0 right-0">
                                        <h5 className = "text-gray text-left font-semibold mt-1">Shine Together</h5>
                                        <img src="/assets/arrow.png" alt="Arrow" className ="h-8 w-8 mb-5"></img>
                                    </div>
                            </Link>
                     {/*----------SECOND HALF------------*/}
                      {/*----------TRANSACTIONS------------*/} 
                            <Link href = "/transactions" className = "box-content shadow-xl shadow-gray-700 rounded-2xl bg-light-orange size-44 2xl:size-52 p-5 mt-8 md:mt-0">
                                <div className = "flex justify-between mx-auto left-0 right-0">
                                    <h3 className = "text-orange text-left font-bold">History</h3>
                                    <div className = "relative w-1/2 ">
                                        <div className = "absolute bg-orange rounded-full h-16 w-16 mx-auto left-7 2xl:left-10 right-0"></div>
                                        <img src="/assets/money_icon.png" alt="Jar Icon" className = "absolute h-12 w-10 m-auto mt-2 left-8 2xl:left-10 right-0"></img>
                                    </div>
                                </div>
                                    <h4 className = "text-black text-left font-bold mt-24 2xl:mt-32">Transactions</h4>
                                    <div className = "flex justify-between mx-auto left-0 right-0">
                                        <h5 className = "text-gray text-left font-semibold mt-1">Each Coin Counts</h5>
                                        <img src="/assets/arrow.png" alt="Arrow" className ="h-8 w-8 mb-5"></img>
                                    </div>
                            </Link>

                            {/*----------PROGRESS------------*/}
                            <Link href = "/milestones" className = "box-content shadow-xl shadow-gray-700 rounded-2xl bg-light-pink size-44 2xl:size-52 p-5 mt-8 md:mt-0">
                                <div className = "flex justify-between mx-auto left-0 right-0">
                                    <h3 className = "text-pink text-left font-bold">Progress</h3>
                                    <div className = "relative w-1/2 ">
                                        <div className = "absolute bg-pink rounded-full h-16 w-16 mx-auto left-7 2xl:left-10 right-0"></div>
                                        <img src="/assets/stars_icon.png" alt="Jar Icon" className = "absolute h-12 w-12 m-auto mt-2 left-8 2xl:left-10 right-0"></img>
                                    </div>
                                </div>
                                    <h4 className = "text-black text-left font-bold mt-24 2xl:mt-32">Milestones</h4>
                                    <div className = "flex justify-between mx-auto left-0 right-0">
                                        <h5 className = "text-gray text-left font-semibold mt-1">Collection of Jars</h5>
                                        <img src="/assets/arrow.png" alt="Arrow" className ="h-8 w-8 mb-5"></img>
                                    </div>
                            </Link>
                        </div>
                    </div>
                  
                </div>
            </div>
            <div className="flex flex-col justify-center items-center mx-auto left-0 right-0 mt-10 h-14 w-screen">
                        <h3 className = "text-gray text-center text-lg font-bold">All Rights Reserved @CapitalOneBHTS</h3>
                    </div>
        </div>
    </main>
  );
}
