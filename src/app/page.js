import Image from "next/image";
import './globals.css';


export default function Home() {
  return (
    <main>
        <div className="bg-beigeWhite">
            <div className = "flex flex-col h-80 w-full">
                <div className = "grid grid-cols-2 h-80"> 
                    <div className="flex flex-col bg-beigeWhite">
                        <h1 className="text-black text-center text-lg mx-auto font-bold mt-8 mb-4">Welcome Rachel</h1>
                        <div className = "relative justify-content-center align-items-center">
                            <img src="/assets/purple_bg.png" alt="Profile Pic" className = "absolute mx-auto h-44 w-44 "></img>
                            <img src="/assets/profile_pic.png" alt="Profile Pic" className = "absolute mx-auto h-44 w-44 "></img>
                        </div>
                        <h2 className="text-black text-center text-lg mx-auto mt-4">$4,456.00 Savings</h2>
                    </div>

                    <div className="flex flex-col bg-beigeWhite">
                        <h1 className="text-black text-center text-lg mx-auto mt-8">Make Dreams Happen</h1>
                        <h2 className="text-gray text-center text-lg mx-auto">One Jar at a Time</h2>
                        
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}
