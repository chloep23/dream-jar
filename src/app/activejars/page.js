"use client";

export default function ActiveJars() {
    return(
        <div className="bg-beigeWhite h-screen">
            <h1 className="text-black text-center text-3xl md:text-4xl font-bold mx-auto md:mb-4">Active Jars</h1>
            <h2 className="text-gray text-center">Grab Jar. Get Dreamer. Go Begin.</h2>
            <div className="bg-beigeWhite h-screen">
            {/*----------HEADER------------*/}
            <div className = "flex flex-col h-80 w-3/4 m-auto left-0 right-0 justify-center items-center">
                <div className = "grid grid-cols-2 left-0 right-0">
                    <div className="flex flex-col bg-beigeWhite">
                            <div className ="flex relative">
                                <div className = "box-content shadow-xl shadow-gray-700 rounded-2xl w-96 h-64 p-5 relative">
                                    
                                    <h3 className = "text-blue text-left font-bold">College Decor</h3>
                                    <div className = "h-3/4 text-black "> </div> 
                                    <div className = "box-content rounded-2xl w-96 h-16 bg-white p-5 m-auto">
                                        <h className = "text-black font-semibold ">College Decor</h>
                                        <div className = "flex justify-between">
                                                <div className = "text-left text-gray font-medium">Due in: 14 days</div>
                                                <div className = "text-right text-gray font-normal">46%</div>
                                    </div>
                                    </div>
                                    
                                    <img src="/assets/new_york.jpg" alt="College Dorm" className = "mr-12 mt-16 left-0 right-0 rounded-none h-72 w-72"></img>
                                    <img src="/assets/grad_party.jpg" alt="College Dorm" className = "mr-12 mt-16 left-0 right-0 rounded-full h-72 w-72"></img>
                                </div>
                                
                            </div>
                    </div>
                    
                    <div className="flex flex-col bg-beigeWhite">
                    
                            <div className ="flex">
                                <div className = "box-content shadow-xl shadow-gray-700 rounded-2xl w-96 h-64 p-5">
                                    <h3 className = "text-blue text-left font-bold">New York City Trip</h3>
                                    <div className = "h-3/4 text-black ">
        
                                    </div>
                                    <div className = "box-content rounded-2xl w-96 h-16 bg-white p-5">
                                        <p className = "text-black font-semibold">College Decor</p>
                                        <div className = "flex justify-between ">
                                            <div className = "text-left text-gray font-medium">Due in: 27 days</div>
                                            <div className = "text-right text-gray font-normal">18%</div>
                                        </div>
                                    </div>
                                {/*    <img src="/assets/new_york.jpg" alt="College Dorm" className = "absolute mr-12 mt-16 left-0 right-0 rounded-none h-72 w-72"></img>
                                    <img src="/assets/grad_party.jpg" alt="College Dorm" className = "absolute mr-12 mt-16 left-0 right-0 rounded-none h-72 w-72"></img>
                             */}   </div> 
                                
                            </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    )
};