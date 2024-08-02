"use client";

export default function DreamJars() {
    return(
        <div className="bg-beigeWhite h-screen">
            <div className = "flex flex-col w-3/4 mt-16 mx-auto left-0 right-0 items-center">
                <h1 className="text-black text-center text-3xl md:text-4xl font-bold mx-auto md:mb-4 mt-6">Make a Jar</h1>
                <h2 className="text-gray text-center text-2xl font-bold mb-8">Jar Up and Design Along</h2>
        
            {/*----------COVER IMAGE------------*/}
            <div className = "flex flex-col w-3/4 mt-10 mx-auto left-0 right-0 items-center">
                <div className="flex rounded-lg h-40 w-40 border-2 border-dashed border-black justify-center item-center">
                    <img src="/assets/add_pic.png" className="w-20 h-20 m-auto"></img>
                </div>
                <h1 className="text-black text-center text-lg mx-auto mt-2">Add Cover</h1>

             {/*----------JAR TITLE------------*/}
                <div className="flex flex-col w-3/4 2xl:w-1/3 itmes-left text-gray text-left text-xl md:text-xl font-bold mt-10"> 
                    <h1 className="text-gray text-xl font-bold mt-2 mb-4">Jar </h1>
                </div>
                <input name="myInput" placeholder="Name" className="flex w-5/6 2xl:w-1/3 p-3 rounded-lg shadow-sm shadow-gray focus:outline-white text-left text-gray"/>
             
             {/*----------GOAL AMOUNT------------*/}
                <div className="flex flex-col w-3/4 2xl:w-1/3 itmes-left text-gray text-left text-xl md:text-xl font-bold mt-7"> 
                    <h1 className="text-gray text-xl font-bold mt-2 mb-4">Goal </h1>
                </div>
                <input name="myInput" placeholder="Amount" className="flex w-5/6 2xl:w-1/3 p-3 rounded-lg shadow-sm shadow-gray focus:outline-white text-left text-gray"/>
             
             {/*----------DREAM UNTIL------------*/}
                <div className="flex flex-col w-3/4 2xl:w-1/3 itmes-left text-gray text-left text-xl md:text-xl font-bold mt-7"> 
                    <h1 className="text-gray text-xl font-bold mt-2 mb-4">Dream Until </h1>
                </div>
                <div className="flex w-1/3 justify-between text-gray"> 
                    <input name="myInput" placeholder="YYYY" className="flex w-5/6 2xl:w-28 p-3 rounded-lg shadow-sm shadow-gray focus:outline-white text-left text-gray"/>
                    <input name="myInput" placeholder="MM" className="flex w-5/6 2xl:w-28 p-3 rounded-lg shadow-sm shadow-gray focus:outline-white text-left text-gray"/>
                    <input name="myInput" placeholder="DD" className="flex w-5/6 2xl:w-28 p-3 rounded-lg shadow-sm shadow-gray focus:outline-white text-left text-gray"/>
                </div>

                <div className="flex flex-col w-3/4 2xl:w-1/3 itmes-left text-gray text-left text-xl md:text-xl font-bold mt-7"> 
                    <h1 className="text-gray text-xl font-bold mt-2 mb-4">Dreamers </h1>
                </div>
                <div className="flex w-1/3 justify-between text-gray"> 
                    <div className="flex w-28 justify-between text-gray"> 
                        <img src="/assets/profile_pic.jpg" alt="Profile Pic" className = "rounded-full mt-3 h-12 w-12 "></img>
                        <img src="/assets/dreamer1.jpg" alt="Profile Pic" className = "rounded-full mt-3 h-12 w-12 "></img>
                    </div>
                    <button className = "h-14 w-14 bg-purple text-white rounded-xl">Add</button>
                
                </div>
            </div>
            </div>
        </div>
   
    )
};