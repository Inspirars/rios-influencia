// import healthcare from "../../assets/about/healthcare.svg";
// import patients from "../../assets/about/patients.svg";
// import satisfaction from "../../assets/about/satisfaction.svg";
// import years from "../../assets/about/years.svg";

const Hero = () => {
  return (
    <div className="pt-16 pb-14 md:pt-20 md:pb-16 lg:pt-[154px] lg:pb-[148px] px-5 lg:pl-[157px] md:px-14 flex flex-col">
      <div className="font-satoshi flex flex-col gap-6 lg:gap-[32px] pb-11 md:pb-14 lg:pb-[72px]">
        <header className="text-grey-700 text-2xl md:text-4xl lg:text-[clamp(32px,3.33vw,48px)] font-bold lg:leading-[60px]">
        At Rios-Influencia, we are dedicated to<br className="hidden lg:flex" /> providing expert solutions that elevate<br className="hidden lg:flex" /> patient care and operational excellence. 
        </header>
        <p className="text-grey-500 text-lg md:text-2xl lg:text-[32px] lg:leading-10 ">
        Our comprehensive range of services is designed to meet the<br className="hidden lg:flex" /> unique needs of healthcare institutions and professionals. Explore<br className="hidden lg:flex" /> our offerings to discover how we can support you in delivering<br className="hidden lg:flex" /> exceptional care and achieving optimal health outcomes through<br className="hidden lg:flex" /> innovative training and consultancy.
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
    </div>
  )
}

export default Hero
