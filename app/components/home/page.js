import React from "react";
import Banner from "./banner";
import frontend from "../../../public/imgs/frontend.png"
import backend from "../../../public/imgs/backend.jpg"
import mobile from "../../../public/imgs/mobile.webp"
import AboutUs from "./aboutus";
import MyForm from "./form";
export default function Home() {
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
    return (
        <section className="mx-auto 2xl:container" style={{ paddingTop: '100px' }}>
        <div className="image-container flex justify-center">

            {imgs.map((img) => (
                <Banner key={img.title} title={img.title} content={img.content} path={img.path} />
            ))}
        </div>

        <div className="aboutUs text-white ml-5 mt-16 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold">About Us</h1>

            <div className="box-container flex items-center justify-center w-full gap-5">
                {details.map((detail) => (
                    <AboutUs key={detail.caption} caption={detail.caption} content={detail.content} />
                ))}
            </div>
        </div>


        <div className="register text-white text-center flex justify-center flex-col items-center mt-8">
            <h2 className="text-2xl font-bold">Fill the following form if you are interested to join one of our internships</h2>
            <MyForm></MyForm>
        </div>
    </section>
    )
}