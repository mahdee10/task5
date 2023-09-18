'use client'
import React from "react";
import '../globals.css'
import Image from "next/image";
import logo from "../../public/imgs/logo.gif"

import { usePathname } from 'next/navigation'
export default function NavBar() {
    const pathname = usePathname()
    return (
        <header className="z-10 fixed w-full bg-dark-pink">

            <div className=" max-w-screen-xl flex flex-wrap justify-between items-center text-white mx-auto 2xl:container">
                <div className="logo ">

                    <a className="block text-center no-underline decoration-white h-full leading-8 px-5 py-3.5 hover:bg-black" href="/"><Image className="l leading" src={logo} alt="" /></a>
                </div>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <div className="nav flex flex-col md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        <a href="/" className={`block text-center no-underline decoration-white h-full leading-8 px-5 py-3.5 hover:bg-black ${usePathname() === '/' ? 'active' : ''}`}>Home</a>
                        <a href="/job" className={`block text-center no-underline decoration-white h-full leading-8 px-5 py-3.5 hover:bg-black ${usePathname() === '/job' ? 'active' : ''}`}>Jobs</a>

                        <a className="block text-center no-underline decoration-white h-full leading-8 px-5 py-3.5 hover:bg-black" target="_blank"
                            href="https://www.google.com/maps/place/Creoshift/@33.8342279,35.9132512,15z/data=!4m6!3m5!1s0x151f352aef77f02b:0x65d04d05a4185c6a!8m2!3d33.8342279!4d35.9132512!16s%2Fg%2F11gbrkvcll?entry=ttu">Location</a>
                        <a href="/contact" className={`block text-center no-underline decoration-white h-full leading-8 px-5 py-3.5 hover:bg-black ${usePathname() === '/contact' ? 'active' : ''}`}>Contact Us</a>

                    </div>
                </div>
            </div>

        </header>
    )
};

