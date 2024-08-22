import { Link } from "react-router-dom"

const Story = () => {
  return (
    <div className=" py-14 md:py-20 lg:py-32">
      <div className=" bg-to1 bg-black-100 bg-no-repeat py-10 md:py-14 lg:py-24 flex flex-col items-center px-5">
        <div className="bg-[#F1E5FF] p-5 lg:p-14 rounded-[20px] font-satoshi max-w-[890px]">
            <h5 className="pb-3 lg:pb-4 text-[#667185] font-normal md:text-base lg:text-xl">
            BRAND STORY
            </h5>
            <header className=" pb-4 md:pb-6 lg:pb-8 font-bold  text-[#231F20] text-[28px] md:text-[clamp(45px,4vw,64px)] md:leading-[50px] lg:leading-[70px]">
            Dedicated to Seamless <br className="flex"/> Patient Care
            </header>
            <p className="font-normal md:text-base lg:text-xl text-[#667185] text-justify">
            Rios-Influencia was born from a place of passion, empathy, and a steadfast commitment to transforming patient care. Founded by Temitope Odetunde, the journey began with her firsthand experience in Community Health Services in the UK. She identified a critical gap in healthcare management: patients often relapsed due to inadequate post-discharge care. This issue deeply affected her, particularly as the demanding nature of her hospital role interfered with her family responsibilities.
            </p>
            <p className="font-normal md:text-base lg:text-xl text-[#667185] py-4 lg:py-7 text-justify">
            Determined to find a better solution, Temitope transitioned to a local community health service. There, she recognized the urgent need for a system that bridges hospital care and continued home support. Thus, Rios-Influencia was born from her unwavering commitment to fill this void by training healthcare professionals to ensure patients receive the comprehensive care they need for a full recovery.
            </p>
            <p className="font-normal md:text-base lg:text-xl text-[#667185] text-justify">
            The name &apos;Rios-Influencia,&apos; meaning &apos; global influence, &apos; reflects her vision to extend their solutions worldwide. With a mission to revolutionize healthcare delivery through expert training, Rios-Influencia is dedicated to making a positive impact and ensuring no patient is left behind by empowering healthcare professionals with the skills and knowledge they need to excel.
            </p>
            <div className="pt-6 lg:pt-10 flex items-center gap-3">
              <Link to='/about' className={`bg-[#231F20] text-[#F1E5FF] font-inter font-semibold px-4 py-3 lg:px-6 lg:py-4 text-center text-sm md:text-base rounded md:rounded-lg hover:text-[#231F20] hover:border hover:border-[#231F20] hover:bg-white transition-all duration-700 ease-in-out disabled:bg-[rgba(35,31,32,0.05)]`}>
              Read More
              </Link>
                <Link className={`bg-transparent text-[#231F20] border border-[#231F20] font-inter font-semibold px-5 py-3 lg:px-8 lg:py-4 text-sm md:text-base rounded transition-all duration-700 ease-in-out`} to='https://www.temitopeodetunde.com/' target="_blank">
                Visit Temitope&apos;s Site
                </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Story
