"use client";

import Link from 'next/link';

export default function NavBar() {
  return (
      <nav className="bg-purple p-2 flex justify-between items-center h-20 w-full round">
        <ul className="flex justify-left flex-wrap text-white items-left mt-4 md:mt-0">DreamJar</ul>
        <img src="/assets/logo.png" alt="Company Logo" className="h-10 w-auto"/>
      </nav>

      
  )
};