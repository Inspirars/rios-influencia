import bridging from '../../assets/home/bridging.png'
import empowering from "../../assets/home/empowering.png"
import mastering from "../../assets/home/mastering.png"
import reinforcing from "../../assets/home/reinforcing.png"

const Champion = () => {
  return (
    <div className="flex flex-col items-center bg-grey-50 bg-champion bg-no-repeat bg-center px-7 py-12 md:py-20">
        <header className="text-center text-grey-500 font-medium font-satoshi text-lg md:text-2xl lg:text-[32px] lg:leading-[96px] pb-10 md:pb-16">
        HOW WE CHAMPION YOUR HEALTH
        </header>
        <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
            <div  className="bg-[#E6E6FA] py-5 pl-5 md:py-8 md:pl-8 lg:py-12 lg:pl-12 w-fit rounded-2xl border border-grey-200 lg:max-w-[560px]">
                <img src={bridging} alt="bridging" className='lg:w-[35.63vw] pb-8 md:pb-12 lg:pb-14' />
                <div className='bg-[#1D2739] rounded-md py-1 px-2 w-fit text-white  mb-2 md:mb-4'>
                  <h6 className='text-[8px] md:text-sm'>
                  Ensuring Seamless Transitions
                  </h6>
                </div>
                 <h2 className='text-2xl lg:text-[clamp(30px,2.77vw,40px)] md:leading-10 lg:leading-[56px] text-grey-700 font-bold font-satoshi pb-3 lg:pb-7'>
                 Bridging the Gap in <br className="" /> Domiciliary Care
                 </h2>
                 <div className='pr-3 lg:px-0'>
                 <p className='text-sm md:text-lg lg:text-xl lg:max-w-[85%] text-justify'>
                 We train healthcare professionals to deliver comprehensive care and support for home-based patients,  ensuring a smooth transition from hospital to home.
                 </p>
                 </div>
            </div>
            <div  className="bg-[#F3E5F5] py-5 pl-5 md:py-8 md:pl-8 lg:py-12 lg:pl-12 w-fit rounded-2xl border border-grey-200 max-w-[560px]">
                <img src={empowering} alt="bridging" className='lg:w-[35.63vw] pb-8 md:pb-12 lg:pb-14' />
                <div className='bg-[#1D2739] rounded-md py-1 px-2 w-fit text-white  mb-2 md:mb-4'>
                  <h6 className='text-[8px] md:text-sm'>
                  Support and Guidance
                  </h6>
                </div>
                 <h2 className='text-2xl lg:text-[clamp(30px,2.77vw,40px)] md:leading-10 lg:leading-[56px] text-grey-700 font-bold font-satoshi pb-3 lg:pb-7'>
                 Empowering Patient-<br className="" />Centered Care
                 </h2>
                 <div className='pr-3 lg:px-0'>
                 <p className='text-sm md:text-lg lg:text-xl lg:max-w-[85%] text-justify'>
                 Our programs prioritize patient-centric  approaches, equipping professionals with the  skills to provide personalized support tailored to individual needs.
                 </p>
                 </div>
            </div>
            <div  className="bg-[#F5EAF7] py-5 pl-5 md:py-8 md:pl-8 lg:py-12 lg:pl-12 w-fit rounded-2xl border border-grey-200 max-w-[560px]">
                <img src={mastering} alt="bridging" className='lg:w-[35.63vw] pb-8 md:pb-12 lg:pb-14' />
                <div className='bg-[#1D2739] rounded-md py-1 px-2 w-fit text-white  mb-2 md:mb-4'>
                  <h6 className='text-[8px] md:text-sm'>
                  Treatment and Compliance
                  </h6>
                </div>
                 <h2 className='text-2xl lg:text-[clamp(30px,2.77vw,40px)] md:leading-10 lg:leading-[56px] text-grey-700 font-bold font-satoshi pb-3 lg:pb-7'>
                Medicines Management <br className="" /> Training
                 </h2>
                 <div className='pr-3 lg:px-0'>
                 <p className='text-sm md:text-lg lg:text-xl lg:max-w-[85%] text-justify'>
                 We offer specialized training in medication  management, regulatory compliance, and enhancing care homes&apos; policies and procedures  to optimize patient outcomes.
                 </p>
                 </div>
            </div>
            <div  className="bg-[#FFF0F5] py-5 pl-5 md:py-8 md:pl-8 lg:py-12 lg:pl-12 w-fit rounded-2xl border border-grey-200 max-w-[560px]">
                <img src={reinforcing} alt="bridging" className='lg:w-[35.63vw] pb-8 md:pb-12 lg:pb-14' />
                <div className='bg-[#1D2739] rounded-md py-1 px-2 w-fit text-white  mb-2 md:mb-4'>
                  <h6 className='text-[8px] md:text-sm'>
                  Post-Discharge Support
                  </h6>
                </div>
                 <h2 className='text-2xl lg:text-[clamp(30px,2.77vw,40px)] md:leading-10 lg:leading-[56px] text-grey-700 font-bold font-satoshi pb-3 lg:pb-7'>
                 Supporting <br className="" />Services Provider
                 </h2>
                 <div className='pr-3 lg:px-0'>
                 <p className='text-sm md:text-lg lg:text-xl lg:max-w-[85%] text-justify'>
                 Through our holistic training solutions, we strengthen community healthcare systems, ensuring healthcare providers can effectively manage patients post-hospital discharge and prevent readmission.
                 </p>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Champion
