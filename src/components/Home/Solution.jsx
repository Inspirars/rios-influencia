import expert from "../../assets/home/expert.png"
const Solution = () => {
  return (
    <div className="flex flex-col items-center px-5 font-satoshi">
      <div className="">
      <header className="flex items-center md:gap-6 lg:gap-36">
        <h3 className=" text-xl md:text-2xl lg:text-[clamp(30px,2.77vw,40px)] lg:leading-[61px] font-bold text-[#000] pb-6 md:pb-0">
        Expert Solutions for Elevating Patient <br className="hidden md:flex" /> Care and Operational Excellence
        </h3>
        <div className="w-fit">
        <img src={expert} alt="" className="w-[90%] md:w-[75%] lg:w-[100%]" />
        </div>
      </header>
      <h6 className="text-grey-400 text-xl md:text-2xl lg:text-[clamp(30px,2.77vw,40px)] lg:leading-[61px] font-bold pb-14 md:pb-20 lg:pb-[120px]">
      At Rios-Influencia, we specialize in providing <br className="hidden md:flex" /> tailored expert solutions aimed at elevating <br className="hidden md:flex" /> patient care and achieving operational <br className="hidden md:flex" /> excellence across all levels of healthcare <br className="hidden md:flex" />  delivery. 
      </h6>
      <div className="flex flex-col lg:flex-row items-start gap-7 md:gap-9 lg:gap-24   pb-14 md:pb-20 lg:pb-[104px]">
        <h4 className="text-xl md:text-[26px] text-[#000] font-bold">
        Medication Management <br/> Training.
        </h4>
        <p className="text-base md:text-2xl text-grey-400">
        Equip your healthcare team with the skills to<br className="hidden md:flex" /> optimize medication regimens, ensuring the <br className="hidden md:flex" />   safety and effectiveness of patient treatment. <br className="hidden md:flex" />  Our expert guidance empowers your <br className="hidden md:flex" /> professionals  to deliver the best possible <br className="hidden md:flex" />  care with confidence.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-start gap-7 md:gap-9 lg:gap-24 pb-14 md:pb-20 lg:pb-[104px]">
        <h4 className="text-xl md:text-[26px] text-[#000] font-bold">
        Regulatory Compliance <br/> Consulting.
        </h4>
        <p className="text-base md:text-2xl text-grey-400">
        Stay ahead of regulatory standards with our <br className="hidden md:flex" /> comprehensive training and consultancy. We <br className="hidden md:flex" /> navigate the complexities of compliance, <br className="hidden md:flex" />allowing your team  to focus on delivering<br className="hidden md:flex" /> exceptional care while  maintaining quality <br className="hidden md:flex" /> assurance.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-start gap-7 md:gap-9 lg:gap-32 pb-14 md:pb-20 lg:pb-[104px]">
        <h4 className="text-xl md:text-[26px] text-[#000] font-bold">
        Domiciliary and Care <br /> Home Policies and <br/> Procedure.
        </h4>
        <p className="text-base md:text-2xl text-grey-400">
        Enhance operational efficiency and resident care with<br className="hidden md:flex" />  tailored policies and procedures. Streamline your<br className="hidden md:flex" />  processes and create a nurturing environment for both<br className="hidden md:flex" />  staff and residents with our expert solutions.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-start gap-7 md:gap-9 lg:gap-24 pb-14 md:pb-20 lg:pb-[104px]">
        <h4 className="text-xl md:text-[26px] text-[#000] font-bold">
        Medicine Optimization<br/> Training.
        </h4>
        <p className="text-base md:text-2xl text-grey-400">
        Maximize therapeutic benefits and minimize risks with<br className="hidden md:flex" /> our personalized training interventions. Our programs<br className="hidden md:flex" /> ensure your healthcare professionals can optimize<br className="hidden md:flex" /> medication use and promote  patient well-being<br className="hidden md:flex" /> effectively.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-start gap-7 md:gap-9 lg:gap-0 pb-10 md:pb-14 lg:pb-20">
        <h4 className="text-xl md:text-[26px] text-[#000] font-bold lg:w-[26.86vw]">
        Coaching and Mentoring.
        </h4>
        <p className="text-base md:text-2xl text-grey-400 md:w-[75vw] lg:w-[47.02vw]">
        Empower your healthcare professionals to excel in their roles with dedicated coaching and mentoring programs. Foster continuous professional development and growth within your team, ensuring a brighter future for your organization.
        </p>
      </div>
      </div>
      
    </div>
  )
}

export default Solution
