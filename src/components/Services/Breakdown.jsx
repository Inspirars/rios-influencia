import medication from "../../assets/services/medication.png"
import regulatory from "../../assets/services/regulatory.png"
import care from "../../assets/services/care.png"
import system from "../../assets/services/system.png"
import coaching from "../../assets/services/coaching.png"
import medicine from "../../assets/services/medicine.png"

const Breakdown = () => {
  return (
    <div className="flex flex-col items-center px-5 md:px-14 lg:px-28 font-satoshi">
      <div className="pb-14 md:pb-28 lg:pb-44">
        <div className="flex flex-col lg:flex-row items-start justify-center gap-7 md:gap-9 lg:gap-24 pb-11 md:pb-14 lg:pb-20">
            <h4 className="text-xl md:text-[26px] text-[#000] font-bold">
            Medication Management <br/> Training.
            </h4>
            <p className="text-base md:text-2xl text-grey-400">
            Equip your healthcare team with the skills to<br className="hidden md:flex" /> optimize medication regimens, ensuring the safety<br className="hidden md:flex" /> and effectiveness of patient treatment. Our expert<br className="hidden md:flex" /> guidance empowers your  professionals  to deliver<br className="hidden md:flex" /> the best possible care with confidence.
            </p>
        </div>
        <div>
            <img src={medication} alt="" />
        </div>
      </div>
      <div className="pb-14 md:pb-28 lg:pb-44">
        <div className="flex flex-col lg:flex-row items-start justify-center gap-7 md:gap-9 lg:gap-24 pb-11 md:pb-14 lg::pb-20">
            <h4 className="text-xl md:text-[26px] text-[#000] font-bold">
            Regulatory Compliance<br/> Consulting.
            </h4>
            <p className="text-base md:text-2xl text-grey-400">
            Stay ahead of regulatory standards with our comprehensive<br className="hidden md:flex" /> training and consultancy. We navigate the complexities of<br className="hidden md:flex" /> compliance, allowing your team to focus on delivering<br className="hidden md:flex" /> exceptional care while maintaining quality assurance.
            </p>
        </div>
        <div>
            <img src={regulatory} alt="" />
        </div>
      </div>
      {/* <div className="pb-14 md:pb-28 lg:pb-44">
        <div className="flex flex-col lg:flex-row items-start justify-center gap-7 md:gap-9 lg:gap-24 pb-11 md:pb-14 lg::pb-20">
            <h4 className="text-xl md:text-[26px] text-[#000] font-bold">
            Care Homes Policies <br />and Procedure.
            </h4>
            <p className="text-base md:text-2xl text-grey-400">
            Enhance operational efficiency and resident care with<br className="hidden md:flex" /> tailored policies and procedures. Streamline your<br className="hidden md:flex" /> processes and create a nurturing environment for both<br className="hidden md:flex" /> staff and residents with our expert solutions.
            </p>
        </div>
        <div>
            <img src={care} alt="" />
        </div>
      </div> */}
      <div className="pb-14 md:pb-28 lg:pb-44">
        <div className="flex flex-col lg:flex-row items-start justify-center gap-7 md:gap-9 lg:gap-24 pb-11 md:pb-14 lg::pb-20">
            <h4 className="text-xl md:text-[26px] text-[#000] font-bold">
            Medicine Optimization.
            </h4>
            <p className="text-base md:text-2xl text-grey-400">
            Maximize therapeutic benefits and minimize risks with our<br className="hidden md:flex" /> personalized training interventions. Our programs ensure<br className="hidden md:flex" /> your healthcare professionals can optimize medication<br className="hidden md:flex" /> use and promote patient well-being effectively.
            </p>
        </div>
        <div>
            <img src={medicine} alt="" />
        </div>
      </div>
      <div className="pb-14 md:pb-28 lg:pb-44">
        <div className="flex flex-col lg:flex-row items-start justify-center gap-7 md:gap-9 lg:gap-24 pb-11 md:pb-14 lg::pb-20">
            <h4 className="text-xl md:text-[26px] text-[#000] font-bold">
            System Optimization.
            </h4>
            <p className="text-base md:text-2xl text-grey-400">
            Improve workflow efficiency and streamline your healthcare<br className="hidden md:flex" />  systems with our expert evaluation and enhancement<br className="hidden md:flex" />  training. We help you optimize resources, enabling your<br className="hidden md:flex" />  team to focus on delivering superior patient care.
            </p>
        </div>
        <div>
            <img src={system} alt="" />
        </div>
      </div>
      <div className="pb-14 md:pb-28 lg:pb-44">
        <div className="flex flex-col lg:flex-row items-start justify-center gap-7 md:gap-9 lg:gap-24 pb-11 md:pb-14 lg::pb-20">
            <h4 className="text-xl md:text-[26px] text-[#000] font-bold">
            Coaching and Mentoring.
            </h4>
            <p className="text-base md:text-2xl text-grey-400">
            Empower your healthcare professionals to excel in their roles<br className="hidden md:flex" />  with dedicated coaching and mentoring programs. Foster<br className="hidden md:flex" />  continuous professional development and growth within<br className="hidden md:flex" />  your team, ensuring a brighter future for your organization.
            </p>
        </div>
        <div>
            <img src={coaching} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Breakdown
