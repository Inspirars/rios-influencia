import mission from "../../assets/about/mission.png";
import vision from "../../assets/about/vision.svg";
import temitope from "../../assets/about/temitope.png"
import { Link } from "react-router-dom";
const Mission = () => {
  return (
    <div className="bg-[#FFF0F5] grid grid-cols-1 md:grid-cols-2 py-10 md:py-14 lg:py-20 px-5 lg:px-[111px] gap-3 lg:gap-6">
        <div className="bg-white rounded-2xl lg:rounded-[20px] px-5 md:px-12 lg:px-14 pt-8 pb-10 md:pt-10 md:pb-12 lg:pt-14 lg:pb-16 flex flex-col items-center font-satoshi">
            <header className="text-[#000] text-2xl lg:text-[32px]">
                Our<span className="text-purple"> Mission</span>
            </header>
            <div className=" py-10 md:py-12 lg:py-[72px]">
            <img src={mission} alt="" />
            </div>
            <p className="text-center text-grey-500 text-sm lg:text-lg">
            To end revolving door patient care by championing <br className="hidden lg:flex" /> patient-centered, holistic healthcare and ensuring <br className="hidden lg:flex" /> seamless transitions from hospital to home.
            </p>
        </div>
        <div className="bg-white rounded-2xl lg:rounded-[20px] px-5 md:px-12 lg:px-14 pt-8 pb-10 md:pt-10 md:pb-12 lg:pt-14 lg:pb-16 flex flex-col items-center font-satoshi">
            <header className="text-[#000] text-2xl lg:text-[32px]">
                Our<span className="text-purple"> Vision</span>
            </header>
            <div className=" py-10 md:py-12 lg:py-[72px]">
            <img src={vision} alt="" />
            </div>
            <p className="text-center text-grey-500 text-sm lg:text-lg">
            To be the vital link between hospital and home <br className="hidden lg:flex" />, creating a global platform for leading consulting <br className="hidden lg:flex" />, training, and education in pharmaceutical care.
            </p>
        </div>
        <div className="bg-white rounded-2xl lg:rounded-[20px]">
            <img src={temitope} alt="" />
        </div>
        <div className="bg-white rounded-2xl lg:rounded-[20px] px-5 md:pl-10 lg:pl-20 pt-8 pb-10 md:pt-10 md:pb-12 lg:pt-14 lg:pb-14 flex flex-col items-start font-satoshi">
            <header className="text-[#000] font-medium text-2xl md:text-3xl lg:text-5xl pb-4 md:pb-6">
                Our <br /> <span className="text-purple"> Founder</span>
            </header>
            <p className=" text-grey-500 text-sm lg:text-lg pb-8 md:pb-9 lg:pb-8">
            Temitope Odetunde is a visionary leader with a deep<br className="hidden lg:flex" /> commitment to enhancing patient care. Her journey<br className="hidden lg:flex" /> from a community health service professional to the<br className="hidden lg:flex" /> founder of Rios-Influencia is a testament to her<br className="hidden lg:flex" /> dedication, empathy, and drive for innovation in<br className="hidden lg:flex" /> healthcare. Her firsthand experiences have shaped<br className="hidden lg:flex" /> the mission and values of Rios Influencia, guiding the<br className="hidden lg:flex" /> company towards making a global impact.
            </p>
            <Link className={`bg-transparent text-[#231F20] border border-[#231F20] font-inter font-semibold px-5 py-3 lg:px-8 lg:py-4 text-sm md:text-base rounded transition-all duration-700 ease-in-out`} to='https://www.temitopeodetunde.com/' target="_blank">
                Visit Temitope&apos;s Site
            </Link>
        </div>
    </div>
  )
}

export default Mission
