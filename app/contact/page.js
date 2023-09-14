import React from "react";
import Image from "next/image";
import Employee from "../components/contactUs/employees";
import maria from "../../public/imgs/mk.jpeg"
import farah from "../../public/imgs/ft.png"
import call from "../../public/imgs/call.jpg"
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import MySwiperComponent from "../components/swiper";


export default function ContactUs() {
    const employees = [
        {
            name: "Maria Khalil",
            email: "maria.khalil@creoshift.com",
            path: maria
        },
        {
            name: "Farah Taha",
            email: "farah.taha@creoshift.com",
            path: farah
        }
    ]
    return (
        <>
        <NavBar></NavBar>
        <section className="mx-auto 2xl:container" style={{ paddingTop: '100px' }}>

            <div className="flex justify-center text-white items-end leading-8 ">
                <div className="flex justify-center w-10/12 sm:flex-row flex-col items-center">
                    <div className="mx-1 sm:w-6/12 " >
                        <h2 className="text-3xl font-bold mt-5 mb-1">Contact Us</h2>
                        <h2 className="text-3xl font-bold mb-1.5">+961 8 822 224</h2>
                        <p>
                            Phone calls may be recorded and saved for documentation and
                            security reasons if you call us or if we call you at your request
                            or to follow up on your question.
                        </p>
                        <p>
                            We are required to record and store our phone conversation if we
                            speak with you about investing services.
                        </p>
                    </div>
                    <div className="sm:w-6/12 w-full">
                        <Image className="" src={call} alt="" />
                    </div>
                </div>

            </div>





            <div className="aboutUs text-white ml-5 mt-16 flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold mb-10">Our Employees</h1>

                <div className="flex justify-center sm:flex-row flex-col items-center">
                    {employees.map((employee) => (
                        <Employee key={employee.name} name={employee.name} email={employee.email} path={employee.path} />
                    ))}
                </div>
            </div>
            <MySwiperComponent></MySwiperComponent>
        </section>
        <Footer></Footer>
        </>
    )
}