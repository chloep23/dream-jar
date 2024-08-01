import Image from "next/image";
import './globals.css';


export default function Home() {
  return (
    <main>
        <div className="bg-beigeWhite h-screen">
            <div className = "flex flex-col h-80 w-3/4 m-auto left-0 right-0">
                <div className = "grid grid-cols-2"> 
                    <div className="flex flex-col bg-beigeWhite m-auto">
                        <h1 className="text-black text-center text-4xl font-bold mx-auto mt-8 mb-4">Welcome Rachel!</h1>
                        <div className = "relative box-content shadow-xl shadow-gray-900 bg-purple_bg.png rounded-2xl mx-auto left-0 right-0 h-96 w-96 ">
                            <img src="/assets/purple_bg.png" alt="Profile Pic" className = "absolute mx-auto mt-16 h-3/4 w-full "></img>
                            <img src="/assets/profile_pic.jpg" alt="Profile Pic" className = "absolute mx-auto mt-16 left-0 right-0 rounded-full h-72 w-72"></img>
                        </div>
                        <h2 className="text-black text-center text-2xl font-bold mx-auto mt-4">$4,456.00 Savings</h2>
                        <h2 className="text-black text-center text-xl font-bold mx-auto mt-4">20+ Dreamates</h2>
                        <h3 className="text-gray text-center text-xl font-bold mx-auto mt-2">27 Dream Jars</h3>
                    </div>

                    <div className="flex flex-col bg-beigeWhite">
                        <h1 className="text-black text-center font-bold text-2xl mx-auto mt-8 mb-4">Make Dreams Happen</h1>
                        <h2 className="text-gray text-center font-bold text-xl mx-auto">One Jar at a Time</h2>
                        <div className = "grid grid-cols-2 h-80 mx-auto left-0 right-0 gap-10 mt-8">
                            <div className ="flex">
                                <div className = "box-content shadow-xl shadow-gray-700 rounded-2xl bg-light-blue size-52 p-5">
                                    <h3 className = "text-blue text-left">Goals</h3>
                                    <h4 className = "text-black text-left mt-36">Dream Jars</h4>
                                    <h5 className = "text-black text-left">Fill Jar, Fulfill Dreams</h5>
                                </div>
                            </div>
                            <div className ="flex">
                                <div className = "box-content shadow-xl shadow-gray-700 rounded-2xl bg-light-yellow size-52 p-5">
                                    <h3 className = "text-yellow text-left">Friends</h3>
                                    <h4 className = "text-black text-left mt-36">Dreamers</h4>
                                    <h5 className = "text-black text-left">Shine Together</h5>
                                </div>
                            </div>
                        </div>
                        <div className = "grid grid-cols-2 h-80 mx-auto left-0 right-0 gap-10">
                            <div className ="flex">
                                <div className = "box-content shadow-xl shadow-gray-700 rounded-2xl bg-light-orange size-52 p-5">
                                    <h3 className = "text-orange text-left">History</h3>
                                    <h4 className = "text-black text-left mt-36">Transactionss</h4>
                                    <h5 className = "text-black text-left">Each Count Counts</h5>
                                </div>
                            </div>
                            <div className ="flex">
                                <div className = "box-content shadow-xl shadow-gray-700 rounded-2xl bg-light-pink size-52 p-5">
                                    <h3 className = "text-pink text-left">Progress</h3>
                                    <h4 className = "text-black text-left mt-36">Milestones</h4>
                                    <h5 className = "text-black text-left">Collection of Jars</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
      
    </main>
  );
}
