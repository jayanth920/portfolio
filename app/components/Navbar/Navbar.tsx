"use client";
import React, { useState } from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import Link from "next/link";
//shadow-[inset_0px_0px_9px_1px_#fff5f5]

function Navbar() {
    return (
        <div className="flex items-center justify-evenly h-12 w-[395px] gap-4 rounded-full m-5 bg-zinc-950 opacity-100 shadow-inner shadow-cyan-400">
                        <Link href="/">
            <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="bg-black text-white h-8 flex items-center justify-around text-sm"
            >
                <span>Home</span>
            </HoverBorderGradient>
            </Link>
            <Link href="/resume">
            <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="bg-black text-white h-8 flex items-center justify-around text-sm"
            >
                <span>Resumé</span>
            </HoverBorderGradient>
            </Link>
        </div>
    );
}


export default Navbar