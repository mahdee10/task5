import React from "react";
import se from "../../public/imgs/softwareE.jpeg"
import ar from "../../public/imgs/archi.jpg"
import dv from "../../public/imgs/devops.webp"
import ds from "../../public/imgs/dataS.jpg"
import fr from "../../public/imgs/frontend.png"
import bk from "../../public/imgs/backend.jpg"
// import ux from "../../public/imgs/ux.jpg"
import List from "../components/Jobs/list";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import MySwiperComponent from "../components/swiper";
export default function Jobs() {
    const jobs = [
        {
            title: "Software Engineer",
            responsibility: "Responsibilities include coding, testing, debugging, and maintaining software applications.",
            experience: "4 years",
            salary: "$3000",
            path: se
        },
        {
            title: "Software Architect",
            responsibility: "Define architecture patterns and make decisions about technology stack and integration.",
            experience: "7 years",
            salary: "$4000",
            path: ar
        },
        {
            title: "DevOps Engineer",
            responsibility: "Focus on automating and streamlining development and deployment processes.",
            experience: "2 years",
            salary: "$2000",
            path: dv
        },
        {
            title: "Data Scientist",
            responsibility: "Analyze and interpret data to help businesses make data-driven decisions.",
            experience: "5 years",
            salary: "$4000",
            path: ds
        },
        {
            title: "Front-end Developer",
            responsibility: "Create and implement user interface designs for websites and web applications.",
            experience: "4 years",
            salary: "$3900",
            path: fr
        },
        {
            title: "Back-end Developer",
            responsibility: "Develop server-side logic and databases for web applications.",
            experience: "2 years",
            salary: "$2000",
            path: bk
        },
        {
            title: "UX Designer",
            responsibility: "Design user interfaces that are intuitive and visually appealing.",
            experience: "7 years",
            salary: "$5500",
            path: dv
        },
        
    ]
    return (
        <>
            <NavBar></NavBar>
            <section className="mx-auto 2xl:container" style={{ paddingTop: '70px' }}>



                <div className="aboutUs text-white  mt-16 flex flex-col items-center justify-center">
                    <h1 className="text-5xl font-bold mb-10">Available Jobs</h1>
                    <div className="image-container ">

                        {/* {jobs.map((job) => (
                            <List key={job.title} title={job.title} responsibility={job.responsibility} experience={job.experience} salary={job.salary} path={job.path} />
                        ))} */}

                    </div>
                </div>
                <div className="">
                <MySwiperComponent jobs={jobs} />
                </div>

                <div className="aboutUs text-white ml-5 mt-16 flex flex-col items-center justify-center mb-5">
                    <h1 className="text-5xl font-bold">How to Apply</h1>

                    <div className="box-container flex items-center justify-center w-full gap-5">
                        <div className="box flex-1 p-5 text-center ">
                            <h2 className="text-2xl font-bold text-dark-pink">Email us</h2>
                            <p>jobs@creoshift.com</p>
                            <p>please mention the position you are interested in</p>
                        </div>
                        <div className="box flex-1 p-5 text-center ">
                            <h2 className="text-2xl font-bold text-dark-pink">Call us</h2>
                            <p>+961 8 822 224</p>
                            <p>check the available hours on our website</p>
                        </div>
                        <div className="box flex-1 p-5 text-center ">
                            <h2 className="text-2xl font-bold text-dark-pink">Visit us</h2>
                            <p>In our company</p>
                            <p>check workdays on our website</p>
                        </div>
                    </div>
                </div>

            </section>

            <Footer></Footer>
        </>
    )
}