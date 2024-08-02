"use client";
import { useState } from 'react';
import Link from 'next/link';


export default function NavBar() {
  const[isOpen, setIsOpen] = useState(false);
  return (
      <nav className="bg-purple shadow-xl shadow-gray-700 px-5 sticky top-0 left-0 items-center w-full round z-10">
        <div className="flex flex-row justify-between h-20">
          <button className = "mt-1 lg:hidden" onClick={()=>{setIsOpen((!isOpen))}}>
            <img src="/assets/dropdown.png" alt="dropdown" className ="h-8 w-8 m-auto"></img>
          </button>
          <div className="hidden lg:flex mt-7 justify-between lg:w-2/3 xl:w-3/4 2xl:w-1/3">
            <Link href='/' className="text-white text-lg font-bold items-left mt-3 md:mt-0">Home</Link>
            <Link href='/activejars' className="text-white text-lg font-bold items-left mt-3 md:mt-0">Dream Jars</Link>
            <Link href='/dreamers' className="text-white text-lg font-bold items-left mt-3 md:mt-0">Dreamers</Link>
            <Link href='/transactions' className="text-white text-lg font-bold items-left mt-3 md:mt-0">Transactions</Link>
            <Link href='/milestones' className="text-white text-lg font-bold items-left mt-3 md:mt-0">Milestones</Link>
          </div>
          <img src="/assets/profile_pic.jpg" alt="Profile Pic" className = "rounded-full h-12 w-12 mt-4"></img>
        </div>
        {
          isOpen && (<div className="lg:hidden flex flex-col sticky bg-purple h-auto w-screen">
            <Link href='/' className="text-white font-bold items-left mt-4">Home</Link>
            <Link href='/activejars' className="text-white font-bold items-left mt-4">Dream Jars</Link>
            <Link href='/dreamers' className="text-white text-lg font-bold items-left mt-3 md:mt-0">Dreamers</Link>
            <Link href='/transactions' className="text-white text-lg font-bold items-left mt-3 md:mt-0">Transactions</Link>
            <Link href='/milestones' className="text-white text-lg font-bold items-left mt-3 md:mt-0">Milestones</Link>
          </div>)
        }
      </nav>
  )
};