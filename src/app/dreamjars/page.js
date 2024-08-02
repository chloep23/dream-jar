"use client";
import {useState} from 'react';
import {useRouter} from "next/navigation";
import Modal from '../../components/Modal';


export default function DreamJars() {
    const [openModal, setOpenModal] = useState(false)

    const router = useRouter();

    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [due, setDue] = useState("");

    const nameHandler = (event) => {
        setName(event.target.value);
    }

    const amountHandler = (event) => {
        setAmount(event.target.value);
    }

    const dateHandler = (event) => {
        setDue(event.target.value);
    }

    const submitJarHandler = (event) => {
        data.push({
            name: name,
            amount: amount,
            due, due
        });
        router.push('/dreamjars');
    }

    return(
        <div className="bg-beigeWhite h-screen">
            <div className = "flex flex-col w-3/4 mt-16 mx-auto left-0 right-0 items-center">
                <h1 className="text-black text-center text-3xl md:text-4xl font-bold mx-auto md:mb-4 mt-6">Make a Jar</h1>
                <h2 className="text-gray text-center text-2xl font-bold mb-8">Jar Up and Design Along</h2>
            </div>
            {/*----------COVER IMAGE------------*/}
            <div className = "flex flex-col w-3/4 mt-10 mx-auto left-0 right-0 items-center">
                <button onClick={() => {setOpenModal(true)}} className="flex rounded-lg h-40 w-40 border-2 border-dashed border-black justify-center item-center">
                    <img src="/assets/add_pic.png" className="w-20 h-20 m-auto"></img>
                </button>
                <h1 className="text-black text-center text-lg mx-auto mt-2">Add Cover</h1>

             {/*----------JAR TITLE------------*/}
                <div className="flex flex-col w-3/4 2xl:w-1/3 itmes-left text-gray text-left text-xl md:text-xl font-bold mt-10"> 
                    <h1 className="text-gray text-xl font-bold mt-2 mb-4">Jar </h1>
                </div>
                <input onChange={nameHandler} placeholder="Name" className="flex w-5/6 2xl:w-1/3 p-3 rounded-lg shadow-sm shadow-gray focus:outline-white text-left text-gray"/>
             
             {/*----------GOAL AMOUNT------------*/}
                <div className="flex flex-col w-3/4 2xl:w-1/3 itmes-left text-gray text-left text-xl md:text-xl font-bold mt-7"> 
                    <h1 className="text-gray text-xl font-bold mt-2 mb-4">Goal </h1>
                </div>
                <input onChange={amountHandler}  placeholder="Amount" className="flex w-5/6 2xl:w-1/3 p-3 rounded-lg shadow-sm shadow-gray focus:outline-white text-left text-gray"/>

                {/*----------CUSTOM SPLIT------------*/}
                <div className="flex flex-col w-3/4 2xl:w-1/3 itmes-left text-gray text-left text-xl md:text-xl font-bold mt-7"> 
                    <h1 className="text-gray text-xl font-bold mt-2 mb-4">Split </h1>
                </div>
                <div className="flex w-3/4 2xl:w-1/3 p-3 justify-between text-gray bg-white shadow-sm shadow-gray rounded-xl px-4">
                    <img src="/assets/profile_pic.jpg" alt="Profile Pic" className = "rounded-full h-12 w-12 "></img> 
                    <input name="myInput" placeholder="%" className="focus:outline-white text-right w-3/4 text-gray"/>
                </div>
                <div className="flex w-3/4 2xl:w-1/3 p-3 justify-between text-gray bg-white shadow-sm shadow-gray rounded-xl px-4 mt-8">
                    <img src="/assets/dreamer1.jpg" alt="Profile Pic" className = "rounded-full h-12 w-12 "></img> 
                    <input name="myInput" placeholder="%" className="focus:outline-white text-right w-3/4 text-gray"/>
                </div>
             {/*----------DREAM UNTIL------------*/}
                <div className="flex justify-between w-3/4 2xl:w-1/3 itmes-left text-gray text-left text-xl md:text-xl font-bold mt-7"> 
                    <h1 className="text-gray text-xl font-bold mt-2 mb-4 text-center justify-center">Dream Until </h1>
                    <input onChange={dateHandler} placeholder="YY/MM/DD" className="flex w-5/6 2xl:w-28 p-3 text-base font-normal rounded-lg shadow-sm shadow-gray focus:outline-white text-left text-gray"/>
                </div>
             {/*----------DREAMERS------------*/}
                <div className="flex flex-col w-3/4 2xl:w-1/3 itmes-left text-gray text-left text-xl md:text-xl font-bold mt-7"> 
                    <h1 className="text-gray text-xl font-bold mt-2 mb-4">Dreamers </h1>
                </div>
                <div className="flex w-1/3 justify-between text-gray items-center"> 
                    <div className="flex w-28 justify-between text-gray"> 
                        <img src="/assets/profile_pic.jpg" alt="Profile Pic" className = "rounded-full mt-3 h-12 w-12 "></img>
                        <img src="/assets/dreamer1.jpg" alt="Profile Pic" className = "rounded-full mt-3 h-12 w-12 "></img>
                    </div>
                    <button className = "h-10 w-14 bg-purple text-white rounded-xl">Add</button>
                </div>

            {/*----------BUDGETING------------*/}
            <div className="flex flex-col w-3/4 2xl:w-1/3 itmes-left text-gray text-left text-xl md:text-xl font-bold mt-7"> 
                    <h1 className="text-gray text-xl font-bold mt-2 mb-4">Plan Ahead </h1>
                </div>
                <div className="flex w-1/3 justify-between text-gray items-center"> 
                    <div className="w-5/6 2xl:w-5/6">
                        <input placeholder="Category" className="flex p-3 text-base font-normal rounded-lg shadow-sm shadow-gray focus:outline-white text-left text-gray"/>
                        <input placeholder="Budge price" className="flex p-3 text-base font-normal rounded-lg shadow-sm shadow-gray focus:outline-white text-left text-gray mt-5"/>
                    </div>
                    <div className="flex rounded-lg h-28 w-28 border-2 border-dashed border-black justify-center item-center">
                        <img src="/assets/add_pic.png" className="w-20 h-20 m-auto"></img>
                    </div>
    
                </div>
            </div>

            {/*----------SUBMIT------------*/}
            <div className="flex flex-col w-3/4 2xl:w-1/3 mx-auto items-center justify-center mt-14"> 
                <button  onClick={submitJarHandler} className = "h-16 w-28 bg-purple text-lg font-bold text-white rounded-xl mx-auto">Submit</button>
            </div>
            {/*---------FOOTNOTE ----------*/}
            <div className="flex flex-col items-center mx-auto left-0 right-0 mt-5 p-5">
                <h3 className = "text-gray text-center text-lg font-bold">All Rights Reserved @CapitalOneBHTS</h3>
            </div>
            {openModal && <Modal closeModal={setOpenModal} />}
        </div>
   
    )
};