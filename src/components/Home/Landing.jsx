import star from "../../assets/home/brightstar.png"
import group from "../../assets/home/group.png"
import PrimaryButton from "../Button"
import homeLanding from "../../assets/home/homeLanding.png"
const Landing = () => {
  return (
    <div className="pt-10 md:pt-14 lg:pt-24 px-5 md:px-8 flex flex-col items-center">
      <div className="flex items-center gap-1 rounded-full p-2 border border-[#E4E7EC]">
        <img src={star} alt="" />
        <p className="text-secondary text-sm md:text-sm">Journey to better health</p>
      </div>
      <h1 className="text-2xl md:text-[clamp(32px,3.33vw,48px)] md:leading-10 lg:leading-[60px] text-black-100 font-semibold font-inter text-center pb-3 md:pb-4">
      BRIDGING THE GAP BETWEEN <br/> HOSPITAL AND HOME
      </h1>
      <p className="text-center font-inter text-secondary text-base font-normal md:text-lg pb-6 md:pb-8">Training healthcare professionals to provide exceptional <br className="hidden md:flex" />, personalized pharmaceutical care for seamless patient <br className="hidden md:flex" /> transitions.
      </p>
      <img src={group} className="pb-3"/>
      <p className="text-sm md:text-base font-inter font-medium pb-8 md:pb-10">
      Trusted by 3,000+ over the World
      </p>
      <PrimaryButton text="Get Started"/>

      <div className="pt-3 lg:pt-5">
      <img src={homeLanding} alt="Home Landing" />
      </div>
      <div className="font-satoshi py-12 md:py-20 lg:py-[120px]">
        <header className="text-grey-700 font-normal text-2xl md:text-[32px] text-center pb-6 md:pb-10">
        OUR MANIFESTO
        </header>
        <p className="text-[#667185] text-lg md:text-xl lg:text-2xl leading-8">
        <span className="text-grey-800 font-charmonan text-4xl md:text-5xl lg:text-6xl md:leading-8 lg:leading-8">In    </span>a time where advanced healthcare systems still leave patients <br className="hidden md:flex" /> vulnerable post-hospital discharge, Rios-Influencia steps in to bridge <br className="hidden md:flex" /> the critical gap in medicine management for home-based patients.<br className="hidden md:flex" /> Our unique approach ensures holistic healthcare for complete <br className="hidden md:flex" /> recovery beyond hospital walls.
        </p>
        <p className="text-[#667185] py-4 md:py-6 text-lg md:text-xl lg:text-2xl leading-8">
        We are dedicated to transforming community healthcare by <br className="hidden md:flex" /> delivering tailored services for patients transitioning from hospital to <br className="hidden md:flex" /> home. Our unwavering commitment to excellence and innovation <br className="hidden md:flex" /> empowers patients to achieve optimal health outcomes, fostering a <br className="hidden md:flex" /> seamless continuum of care.
        </p>
        <p className="text-grey-500 text-lg md:text-2xl font-semibold">
        We are Rios-Influencia, and we are revolutionizing post-hospital <br className="hidden lg:flex" /> care.
        </p>
      </div>
    </div>
  )
}

export default Landing
