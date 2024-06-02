import { SecondaryButton, TertiaryButton } from "../Button"

const Story = () => {
  return (
    <div className=" pt-14 md:pt-20 lg:pt-32 pb-10 md:pb-14 lg:pb-20">
      <div className=" bg-to1 bg-black-100 bg-no-repeat py-10 md:py-14 lg:py-24 flex flex-col items-center px-5">
        <div className="bg-[#F1E5FF] p-5 lg:p-14 rounded-[20px] font-satoshi">
            <h5 className="pb-3 lg:pb-4 text-[#667185] font-normal md:text-base lg:text-xl">
            BRAND STORY
            </h5>
            <header className=" pb-4 md:pb-6 lg:pb-8 font-bold  text-[#231F20] text-[28px] md:text-[clamp(45px,4vw,64px)] md:leading-[50px] lg:leading-[70px]">
            Dedicated to Seamless <br className="flex"/> Patient Care
            </header>
            <p className="font-normal md:text-base lg:text-xl text-[#667185]">
            Rios Influencia was born from a place of passion, empathy, and a steadfast commitment to <br className="hidden md:flex" /> transforming patient care. Founded by Temitope Odetunde, the journey began with her <br className="hidden md:flex"/> firsthand experience in Community Health Services in the UK. She identified a critical gap <br className="hidden md:flex"/> in healthcare management: patients often relapsed due to inadequate post-discharge <br className="hidden md:flex"/> care. This issue deeply affected her, particularly as the demanding nature of her hospital <br className="hidden md:flex"/> role interfered with her family responsibilities.
            </p>
            <p className="font-normal md:text-base lg:text-xl text-[#667185] py-4 lg:py-7">
            Determined to find a better solution, Temitope transitioned to a local community health <br className="hidden md:flex"/> service. There, she recognized the urgent need for a system that bridges hospital care and <br className="hidden md:flex"/> continued home support. Thus, Rios Influencia was born from her unwavering <br className="hidden md:flex"/> commitment to fill this void by training healthcare professionals to ensure patients receive the <br className="hidden md:flex"/> comprehensive care they need for a full recovery.
            </p>
            <p className="font-normal md:text-base lg:text-xl text-[#667185]">
            The name &apos;Rios Influencia,&apos; meaning &apos; global influence, &apos; reflects her vision to extend their <br className="hidden md:flex"/> solutions worldwide. With a mission to revolutionize healthcare delivery through expert training, <br className="hidden md:flex"/> Rios Influencia is dedicated to making a positive impact and ensuring no patient is left behind <br className="hidden md:flex"/> by empowering healthcare professionals with the skills and knowledge they need to excel.
            </p>
            <div className="pt-6 lg:pt-10 flex items-center gap-3">
                <SecondaryButton text="Read More" />
                <TertiaryButton text="Visit Temitope's Site" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Story
