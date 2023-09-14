import React from "react";
import Image from "next/image";
export default function Employee(props) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg border-white">
            <Image className="w-full  mx-2.5 h-56" src={props.path} alt="" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-neutral-50">{props.name}</div>
                <p className=" text-base text-neutral-50">
                    {props.email}
                </p>
            </div>
        </div>
    )
}