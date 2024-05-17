"use client";

import { useRef, useState } from "react";
import { DirectionAwareHover } from "../ui/direction-aware-hover";


export function Projects() {
    const img1 = "https://i.imgur.com/mgxleXb.png"
    const img2 = "https://i.imgur.com/ppdthj9.png"
    const img3 = "https://i.imgur.com/At0Ty5w.png"
    const img4 = "https://i.imgur.com/NwTCQl6.png"
    return (
        <div className="h-fit w-screen" id="projects">
            <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-10">
                Projects
            </h1>

            <div className="min-h-fit relative  flex items-center justify-center flex-wrap gap-5">
                <DirectionAwareHover imageUrl={img1}>
                    <p className="font-bold text-xl">Chatify v1</p>
                    <p className="font-normal text-sm">React | Firebase | Sass</p>
                </DirectionAwareHover>
                <DirectionAwareHover imageUrl={img2}>
                    <p className="font-bold text-xl">CouchWatch</p>
                    <p className="font-normal text-sm">React | RestAPI</p>
                </DirectionAwareHover>
                <DirectionAwareHover imageUrl={img3}>
                    <p className="font-bold text-xl">Em🧠ji Card game</p>
                    <p className="font-normal text-sm">HTML | CSS | Vanilla JS</p>
                </DirectionAwareHover>
                <DirectionAwareHover imageUrl={img4}>
                    <p className="font-bold text-xl">Portfolio #1</p>
                    <p className="font-normal text-sm">React | NextJS | Emailjs</p>
                </DirectionAwareHover>
            </div>
        </div>
    );
}

export default Projects
