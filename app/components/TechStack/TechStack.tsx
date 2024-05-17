
import TechBox from '../TechBox/TechBox'

const Techstack = () => {
    return (
        <div className='flex flex-col justify-center items-center' id="techstack">
            <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-10">
                Tech
            </h1>
            <TechBox />
        </div>
    )
}

export default Techstack