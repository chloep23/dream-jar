"use client";
import Link from 'next/link';

export default function MainJar() {
    return(
        <div className="bg-beigeWhite h-screen">
             <div className = "flex flex-col h-screen w-screen mx-auto left-0 right-0 items-center">
                <div className = "flex flex-col bg-collegeBG bg-cover h-1/2 w-screen">
                    <h1 className="flex text-white text-center text-3xl md:text-4xl font-bold m-auto  justify-center items-center">College Decor</h1>
                </div>
                <div className = "flex flex-col md:grid md:grid-cols-2 md:mx-auto md:left-0 md:right-0 md:gap-10 mt-10">
                    <div className = "box-content bg-dorm_bed bg-cover shadow-xl shadow-gray-700 rounded-2xl bg-light-blue size-44 2xl:size-52 p-5 ">
                        <h3 className = "text-white text-left text-lg font-bold">Bed</h3>
                        <h4 className = "text-white text-left font-bold mt-24 2xl:mt-32">Ikea</h4>
                        <div className = "flex justify-between mx-auto left-0 right-0">
                            <h5 className = "text-white text-left font-semibold mt-1">$89.99</h5>
                        </div>
                    </div>

                    <div className = "box-content bg-dorm_desk bg-cover shadow-xl shadow-gray-700 rounded-2xl bg-light-blue size-44 2xl:size-52 p-5 ">
                        <h3 className = "text-white text-left text-lg font-bold">Desk</h3>
                        <h4 className = "text-white text-left font-bold mt-24 2xl:mt-32">Ikea</h4>
                        <div className = "flex justify-between mx-auto left-0 right-0">
                            <h5 className = "text-white text-left font-semibold mt-1">$44.99</h5>
                        </div>
                    </div>

                    <div className = "box-content bg-dorm_lights bg-cover shadow-xl shadow-gray-700 rounded-2xl bg-light-blue size-44 2xl:size-52 p-5 ">
                        <h3 className = "text-white text-left text-lg font-bold">Fairy Lights</h3>
                        <h4 className = "text-white text-left font-bold mt-24 2xl:mt-32">Amazon</h4>
                        <div className = "flex justify-between mx-auto left-0 right-0">
                            <h5 className = "text-white text-left font-semibold mt-1">$16.89</h5>
                        </div>
                    </div>

                    <div className = "box-content bg-dorm_cart bg-cover shadow-xl shadow-gray-700 rounded-2xl bg-light-blue size-44 2xl:size-52 p-5 ">
                        <h3 className = "text-white text-left text-lg font-bold">Cart</h3>
                        <h4 className = "text-white text-left font-bold mt-24 2xl:mt-32">Target</h4>
                        <div className = "flex justify-between mx-auto left-0 right-0">
                            <h5 className = "text-white text-left font-semibold mt-1">$25.56</h5>
                        </div>
                    </div>
                    
                </div>

            </div>

            <div className = "flex flex-col w-screen md:w-3/4 mt-14 mx-auto left-0 right-0 items-center">
                <h1 className="text-black text-center text-3xl md:text-4xl font-bold mx-auto md:mb-4 ">Coming Soon!</h1>
                <h2 className="text-gray text-center text-xl font-bold mb-8 tracking-normal">Keep on Dreaming</h2>
            </div>

            <div className="flex flex-col items-center mx-auto left-0 right-0 mt-5 p-5">
                <h3 className = "text-gray text-center text-lg font-bold">All Rights Reserved @CapitalOneBHTS</h3>
             </div>

            
         </div>
   
    )
};