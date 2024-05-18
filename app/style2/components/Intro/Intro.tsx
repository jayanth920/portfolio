
import React from 'react'
import { CanvasRevealEffectDemo } from '../CanvasPhoto/CanvasPhoto'
import { SpotlightPreview } from '../SpotLight/SpotLight'


const Intro = () => {
    return (
        <div className="flex justify-center items-center text-white gap-0 sm:gap-40 ">
            <div>
                <SpotlightPreview />
            </div>
            <div className="myPhoto">
                <CanvasRevealEffectDemo />
            </div>
        </div>
    )
}

export default Intro