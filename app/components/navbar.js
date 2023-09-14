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

            <div className=" flex justify-between items-center text-white mx-auto 2xl:container">
                <div className="logo ">

                    <a className="block text-center no-underline decoration-white h-full leading-8 px-5 py-3.5 hover:bg-black" href="/"><Image className="l leading" src={logo} alt="" /></a>
                </div>
                <div className="nav flex">
                    <a href="/" className={`block text-center no-underline decoration-white h-full leading-8 px-5 py-3.5 hover:bg-black ${usePathname() === '/' ? 'active' : '' }`}>Home</a>
                    <a href="/job" className={`block text-center no-underline decoration-white h-full leading-8 px-5 py-3.5 hover:bg-black ${usePathname() === '/job' ? 'active' : '' }`}>Jobs</a>

                    <a className="block text-center no-underline decoration-white h-full leading-8 px-5 py-3.5 hover:bg-black" target="_blank"
                        href="https://www.google.com/maps/place/Creoshift/@33.8342279,35.9132512,15z/data=!4m6!3m5!1s0x151f352aef77f02b:0x65d04d05a4185c6a!8m2!3d33.8342279!4d35.9132512!16s%2Fg%2F11gbrkvcll?entry=ttu">Location</a>
                    <a href="/contact" className={`block text-center no-underline decoration-white h-full leading-8 px-5 py-3.5 hover:bg-black ${usePathname() === '/contact' ? 'active' : '' }`}>Contact Us</a>

                </div>
            </div>

        </header>
    )
};

