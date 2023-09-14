import React from "react";

export default function AboutUs(props) {
    return (
        <div className="box flex-1 p-5 text-center ">
            <h2 className="text-center text-dark-pink mb-5 text-2xl font-bold">{props.caption}</h2>
            <p>{props.content}</p>
        </div>
    )
}