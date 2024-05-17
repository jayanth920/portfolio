
import React from "react";
import { CanvasRevealEffectDemo } from "./components/CanvasPhoto/CanvasPhoto";
import Intro from "./components/Intro/Intro";
import Separator from "./components/Separator/Separator";
import Projects from "./components/Projects/Projects";
import Techstack from "./components/TechStack/TechStack";
import Contact from "./components/Contact/Contact";

export function DefaultPage() {
  return (
    <div className = "flex flex-col justify-center items-center min-h-screen w-full mt-32">
    <Intro/>
    <Separator/>
    <Projects/>
    <Separator/>
    <Techstack/>
    <Separator/>
    <Contact/>
    </div>
  );
}
export default DefaultPage
