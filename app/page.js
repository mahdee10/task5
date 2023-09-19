'use client'
import React, { useState } from "react";
import './globals.css'
import Banner from "./components/home/banner";
import frontend from "../public/imgs/frontend.png"
import backend from "../public/imgs/backend.jpg"
import mobile from "../public/imgs/mobile.webp"
import AboutUs from "./components/home/aboutus";
import MyForm from "./components/home/form";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
export default function Page() {
    const [choose,setChoose]=useState("")
    const imgs = [
        {
            title: "Frontend",
            content: "Learn HTML, CSS, JavaScript, and React",
            path: frontend
        },
        {
            title: "Backend",
            content: "Learn PHP and Laravel",
            path: backend
        },
        {
            title: "Mobile",
            content: "Learn React Native",
            path: mobile
        }
    ]
    const details = [
        {
            caption: "At Creoshift we have a dedicated team of Software Engineers",
            content: "We are ready to help you through the journey of creating bespoke software. Our team pride themselves in being great problem solvers who will rise to any challenge you wish to throw at them and always display a positive ‘can-do’ attitude."
        },
        {
            caption: "The team is made up of experts from a range of specialities",
            content: "This means we are fully equipped to take your rough idea through every stage, resulting in a polished piece of software. We love nothing better than nurturing your initial idea through each stage until it is fully functional, meeting all of your exact requirements."

        },
        {
            caption: "We believe in an agile iterative process",
            content: "Starting with your idea, or concept, we will build the basic application allowing you to tweak, mould and enhance as we journey through each development stage. By providing initial builds and preview releases we enable you to see your software take shape."
        }
    ]

    function fieldChange(field){
        setChoose(field)
    }
    return (
        <>
        <NavBar></NavBar>
        <section className="mx-auto 2xl:container" style={{ paddingTop: '100px' }}>
        <div className=" image-container flex  justify-center sm:flex-row  flex-col  items-center">

            {imgs.map((img) => (
                <Banner  key={img.title} title={img.title} content={img.content} path={img.path} fieldChange={fieldChange} />
            ))}
        </div>

        <div className="aboutUs text-white  mt-16 flex flex-col items-center justify-center md:ml-5">
        <h1 className="text-5xl font-bold">About Us</h1>

            <div className=" box-container flex items-center justify-center w-full sm:gap-5 sm:flex-row flex-col ">
                {details.map((detail) => (
                    <AboutUs key={detail.caption} caption={detail.caption} content={detail.content} />
                ))}
            </div>
        </div>


        <div className="register text-white text-center flex justify-center flex-col items-center mt-8">
            <h2 className="text-2xl font-bold">Fill the following form if you are interested to join one of our internships</h2>
            <MyForm choose={choose}></MyForm>
        </div>
    </section>
    <Footer></Footer>
    </>
    )
}

