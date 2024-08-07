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
    </div>
  )
}

export default Hero
