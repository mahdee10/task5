import React from "react";
import Image from "next/image";
export default function Banner(props){
    return(
        <div className="my-1.5 mb-4 sm: relative image-container2 ">
                <Image className=" my-0 mx-2.5 w-80 h-56 blur-sm "  src={props.path}  alt="" />
                <div className="overlay absolute top-2/4 left-1/2 text-white p-5 text-center bg-dark-blur">
                    <h2 className="text-2xl font-bold">{props.title}</h2>
                    <p>{props.content}</p>
                </div>
            </div>
    )
}