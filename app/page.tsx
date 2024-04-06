
import React from "react";
import { CanvasRevealEffectDemo } from "./components/CanvasPhoto/CanvasPhoto";
import Intro from "./components/Intro/Intro";
import Separator from "./components/Separator/Separator";

export function DefaultPage() {
  return (
    <div className="flex flex-col justify-start items-center min-h-screen w-full mt-32">
    <Intro/>
    <Separator/>
    </div>
  );
}
export default DefaultPage
