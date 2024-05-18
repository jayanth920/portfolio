"use client";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import Link from "next/link";
import ProjectButton from "../ui/project-button";
//shadow-[inset_0px_0px_9px_1px_#fff5f5]

function Navbar() {
    return (
        <div className="flex items-center justify-evenly h-12 w-fit gap-4 rounded-full m-5 p-2 bg-zinc-950 opacity-100 shadow-inner shadow-cyan-400">
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
            <Link href="/style1">
                <ProjectButton text={"Style #1"} bool={true}/>
            </Link>
                {/* <ProjectButton text={"Viewing Style #2"} bool={false} color="yellow"/> */}
                <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className="bg-black text-white h-8 flex items-center justify-around text-sm"
                    onClick={() => {
                      const projectsSection = document.getElementById('projects');
                      projectsSection?.scrollIntoView({ behavior: 'smooth' });}}
                >
                    <span>Projects</span>
                </HoverBorderGradient>
                <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className="bg-black text-white h-8 flex items-center justify-around text-sm"
                    onClick={() => {
                      const techSection = document.getElementById('techstack');
                      techSection?.scrollIntoView({ behavior: 'smooth' });}}
                >
                    <span>Tech</span>
                </HoverBorderGradient>
                <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className="bg-black text-white h-8 flex items-center justify-around text-sm"
                    onClick={() => {
                      const contactSection = document.getElementById('contact');
                      contactSection?.scrollIntoView({ behavior: 'smooth' });}}
                >
                    <span>Contact</span>
                </HoverBorderGradient>










        </div>
    );
}


export default Navbar
