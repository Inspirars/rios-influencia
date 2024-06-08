import line from "../../assets/home/line.png"
import commentImg from "../../assets/home/commentImage.png"
const Testimonials = () => {
  return (
    <div className="bg-grey-100 flex flex-col items-center px-5 md:px-16 lg:px-24 py-16 md:py-32 lg:py-44">
      <div className="grid lg:grid-cols-2 gap-7 md:gap-11 lg:gap-14">
        <div>
            <header className="flex items-center gap-1">
                <img src={line} alt="comment line RIOS"/>
                <h3 className="text-[#4A3AFF] text-base font-satoshi md:text-lg font-bold">
                    TESTIMONIALS
                </h3>
            </header>
            <h2 className="py-3 md:py-4 text-[#170F49] text-xl md:text-[34px] font-bold font-inter">
            Hear what our clients say
            </h2>
            <p className="text-base font-satoshi md:text-lg font-normal pb-8">
            How dedicated support have transformed their operations and improved patient outcomes.
            </p>
            <section className="bg-white border border-[#EFF0F6] rounded-xl md:rounded-[20px] px-4 md:px-8 lg:px-11 pt-11 md:pt-14 lg:pt-20 pb-8 md:pb-11 lg:pb-14">
            <p className="text-[#514F6E] text-sm md:text-lg pb-6 md:pb-9">
            “Rios Influencia has transformed the way we manage post-hospital care. Their tailored solutions and patient-centric approach have significantly improved our patients&lsquo; recovery outcomes. We couldn&lsquo;t be more pleased with their service.”
            </p>
            <div className="flex items-center gap-3">
                <div>
                    <img src={commentImg} alt="comment image" />
                </div>
                <div>
                    <h5 className="text-[#170F49] text-sm md:text-lg font-bold font-inter">
                    Dr. Sarah Thompson
                    </h5>
                    <p className="text-[#6F6C90] text-sm md:text-lg ">
                    Healthcare Administrator
                    </p>
                </div>
            </div>
            </section>
        </div>
        <div className="flex flex-col gap-7 md:gap-11 lg:gap-14">
        <section className="bg-white border border-[#EFF0F6] rounded-xl md:rounded-[20px] px-4 md:px-8 lg:px-11 pt-11 md:pt-14 lg:pt-20 pb-8 md:pb-11 lg:pb-14">
            <p className="text-[#514F6E] text-sm md:text-lg pb-6 md:pb-9">
            “Rios Influencia has transformed the way we manage post-hospital care. Their tailored solutions and patient-centric approach have significantly improved our patients&lsquo; recovery outcomes. We couldn&lsquo;t be more pleased with their service.”
            </p>
            <div className="flex items-center gap-3">
                <div>
                    <img src={commentImg} alt="comment image" />
                </div>
                <div>
                    <h5 className="text-[#170F49] text-sm md:text-lg font-bold font-inter">
                    Dr. Sarah Thompson
                    </h5>
                    <p className="text-[#6F6C90] text-sm md:text-lg ">
                    Healthcare Administrator
                    </p>
                </div>
            </div>
            </section>
            <section className="bg-white border border-[#EFF0F6] rounded-xl md:rounded-[20px] px-4 md:px-8 lg:px-11 pt-11 md:pt-14 lg:pt-20 pb-8 md:pb-11 lg:pb-14">
            <p className="text-[#514F6E] text-sm md:text-lg pb-6 md:pb-9">
            “Rios Influencia has transformed the way we manage post-hospital care. Their tailored solutions and patient-centric approach have significantly improved our patients&lsquo; recovery outcomes. We couldn&lsquo;t be more pleased with their service.”
            </p>
            <div className="flex items-center gap-3">
                <div>
                    <img src={commentImg} alt="comment image" />
                </div>
                <div>
                    <h5 className="text-[#170F49] text-sm md:text-lg font-bold font-inter">
                    Dr. Sarah Thompson
                    </h5>
                    <p className="text-[#6F6C90] text-sm md:text-lg ">
                    Healthcare Administrator
                    </p>
                </div>
            </div>
            </section>

        </div>
      </div>
    </div>
  )
}

export default Testimonials
