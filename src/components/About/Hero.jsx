import healthcare from "../../assets/about/healthcare.svg";
import patients from "../../assets/about/patients.svg";
import satisfaction from "../../assets/about/satisfaction.svg";
import years from "../../assets/about/years.svg";
import about1 from "../../assets/about/about1.png"
import about2 from "../../assets/about/about2.png"
import about3 from "../../assets/about/about3.png"

const Hero = () => {
  return (
    <div className="pt-16 pb-14 md:pt-20 md:pb-16 lg:pt-[154px] lg:pb-[148px] px-5 md:px-24 flex flex-col items-center">
      <div className="font-satoshi flex flex-col lg:flex-row gap-7 md:gap-10 lg:gap-[110px] pb-20 md:pb-32 lg:pb-44">
        <header className="text-grey-700 text-3xl md:text-4xl lg:text-[clamp(32px,3.33vw,48px)] font-bold lg:leading-[60px]">
        We are Dedicated to <br /> Seamless Patient Care
        </header>
        <p className="text-grey-500 text-sm md:text-lg ">
        At Rios Influencia, we believe in the power of comprehensive <br className="hidden lg:flex" /> and compassionate care. Join us on our journey to bridge the gap <br className="hidden lg:flex" /> between hospital and home, and to create a seamless continuum <br className="hidden lg:flex" /> of care for patients around the world.
        </p>
      </div>
      {/* <div className='grid grid-cols-2 lg:grid-cols-4 place-content-center justify-center lg:w-[81.45vw] gap-14 lg:gap-14 pb-12 md:pb-20 lg:pb-[104px]'>
        <div>
          <div className="pb-3 md:pb-5">
            <img src={patients} alt="" />
          </div>
          <h3 className='font-satoshi text-[#000] text-3xl md:text-4xl lg:text-[clamp(32px,3.33vw,48px)] font-bold lg:leading-[60px] pb-1'>
            1000+
          </h3>
          <p className='text-grey-500 font-normal text-xs md:text-base'>
          Patients Successfully Transitioned <br className="hidden md:flex" /> from Hospital to Home
          </p>
        </div>
        <div>
          <div className="pb-3 md:pb-5">
            <img src={years} alt="" />
          </div>
          <h3 className='font-satoshi text-[#000] text-3xl md:text-4xl lg:text-[clamp(32px,3.33vw,48px)] font-bold lg:leading-[60px] pb-1'>
          10+
          </h3>
          <p className='text-grey-500 font-normal text-xs md:text-base'>
          Years of Combined Experience <br className="hidden md:flex" /> in Community Health Services
          </p>
        </div>
        <div>
          <div className="pb-3 md:pb-5">
            <img src={healthcare} alt="" />
          </div>
          <h3 className='font-satoshi text-[#000] text-3xl md:text-4xl lg:text-[clamp(32px,3.33vw,48px)] font-bold lg:leading-[60px] pb-1'>
          50+
          </h3>
          <p className='text-grey-500 font-normal text-xs md:text-base'>
          Healthcare Facilities <br /> Partnered with Rios Influencia
          </p>
        </div>
        <div>
          <div className="pb-3 md:pb-5 ">
            <img src={satisfaction} alt="" />
          </div>
          <h3 className='font-satoshi text-[#000] text-3xl md:text-4xl lg:text-[clamp(32px,3.33vw,48px)] font-bold lg:leading-[60px] pb-1'>
          95%
          </h3>
          <p className='text-grey-500 font-normal text-xs md:text-base'>
          Satisfaction Rate Among <br className="hidden md:flex" /> Patients and Institutions
          </p>
        </div>
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
        <div>
          <img src={about1} alt="" />
        </div>
        <div>
        <img src={about2} alt="" />
        </div>
        <div className="hidden md:flex">
          <img src={about3} alt="" />
        </div>
      </div>
    </div>
  )
}


export default Hero
