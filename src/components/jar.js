"use client";
import { useState } from 'react';
import Link from 'next/link';


export default function ActiveJar() {
    return (
        <div className = "Jar">
            <div className = "bg-collegeBG bg-cover h-40 lg:h-48 lg:w-96 w-72 rounded-t-2xl"></div>
            <div className="bg-white h-20 lg:w-96 w-72 rounded-b-2xl p-3 px-5 shadow-xl shadow-gray-700"> 
                <h1 className = "text-black text-xl font-semibold">{d.name}</h1>
                    <div className = "flex justify-between">
                        <div className = "text-left text-gray font-medium">{d.due}</div>
                        <div className = "text-right text-gray font-normal">{d.amount}</div>
                    </div>
            </div>
        </div>
    );
};