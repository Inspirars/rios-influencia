import { useEffect, useState } from "react"
import line from "../../assets/home/line.png"
// import commentImg from "../../assets/home/commentImage.png"
const Testimonials = () => {
    const [content, setContent] = useState({})
    function getRandomComments(){
        const arrayOfComments = [
            {
                comment : '“I highly recommend Temitope to anyone looking to take themselves to new heights. Her expertise, professionalism, and passion for what she does makes her a true asset to the world. I look forward to the opportunity to work with her more”',
                name : 'Amarachukwu Ruth',
                title : 'CPLP'
            },
            {
                comment : "“I wanted to take a moment to express my gratitude for the invaluable information and insights you've shared with me. Your expertise and generosity in providing such detailed guidance have been truly remarkable and have greatly enriched my understanding of your role. Once again thank you so much for your support and mentorship”",
                name : 'Antonia Akobi',
                title : ''
            },
            {
                comment : "“I want to express my sincere appreciation for taking your time to coach me for my interview, I'm still so short of words on how to express my appreciation. 4 of the questions you asked me was asked at my interview. One of the best interview so far.”",
                name : 'Ibitola Omotola',
                title : 'Msc CAMHS, BSc Psych'
            },
            {
                comment : 'I highly recommend Temitope for her exceptionsal leadership in medice management.  Temitope empowers healthcare professionals with tailored pharmaceutical advice and mentoring, ensuring optima patient care in community health and domiciliary settings. Her dedication to empowering others and driving positive change is exceptional.',
                name : 'Beatrice Akijo',
                title : 'Qualitative Research Consultant'
            },
            {
                comment : 'Inspiring and highly motivated is how i would describe my former work colleague Temi. She is conscientious and passionate about delivering safe and efficient patient care. I admire her positive energy and "can do attitude". I highly recommend Temi for her dedication, professionalism, and ability to engender support to deliver results',
                name : 'Cherise Gyimah MPharm',
                title : 'Mentor | Empowering Healthcare Professionals'
            },
            {
                comment : 'Temitope provided advice and guidance, to me at the start of my future Healthcare career. Her mentorship and help has helped shape my vision for my future and has supported me as a student, and future Healthcare professional. I will continue to speak with her for her expertise and knowledge  is of great value to me. I truly appreciate her support',
                name : 'Boris Burnell-Anderson',
                title : 'Pharmacy Student & Representative'
            }
        ]
        const randomComments = []

        while(randomComments.length < 3){
            const randomIndex = Math.floor(Math.random() * arrayOfComments.length)
            if(!randomComments.includes(randomIndex)){
                randomComments.push(randomIndex)
            }            
        }
        return {
            content1 : arrayOfComments[randomComments[0]],
            content2 : arrayOfComments[randomComments[1]],
            content3 : arrayOfComments[randomComments[2]],
        }
    }
    useEffect(()=>{
        setInterval(()=>{
            setContent(getRandomComments())
        },7500)
    },[])

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
            <section className="bg-white border border-[#EFF0F6] rounded-xl md:rounded-[20px] px-4 md:px-8 lg:px-11 pt-11 md:pt-14 lg:pt-20 pb-8 md:pb-11 lg:pb-14 transition-all duration-700">
            <p className="text-[#514F6E] text-sm md:text-lg pb-6 md:pb-9">
                {content.content1?.comment}
            </p>
            <div className="flex items-center gap-3">
                {/* <div>
                    <img src={commentImg} alt="comment image" />
                </div> */}
                <div>
                    <h5 className="text-[#170F49] text-sm md:text-lg font-bold font-inter">
                    {content.content1?.name}
                    </h5>
                    <p className="text-[#6F6C90] text-sm md:text-lg ">
                    {content.content1?.title}
                    </p>
                </div>
            </div>
            </section>
        </div>
        <div className="flex flex-col gap-7 md:gap-11 lg:gap-14">
        <section className="bg-white border border-[#EFF0F6] rounded-xl md:rounded-[20px] px-4 md:px-8 lg:px-11 pt-11 md:pt-14 lg:pt-20 pb-8 md:pb-11 lg:pb-14 transition-all duration-700">
            <p className="text-[#514F6E] text-sm md:text-lg pb-6 md:pb-9">
            {content.content2?.comment}
            </p>
            <div className="flex items-center gap-3">
                {/* <div>
                    <img src={commentImg} alt="comment image" />
                </div> */}
                <div>
                    <h5 className="text-[#170F49] text-sm md:text-lg font-bold font-inter">
                    {content.content2?.name}
                    </h5>
                    <p className="text-[#6F6C90] text-sm md:text-lg ">
                    {content.content2?.title}
                    </p>
                </div>
            </div>
            </section>
            <section className="bg-white border border-[#EFF0F6] rounded-xl md:rounded-[20px] px-4 md:px-8 lg:px-11 pt-11 md:pt-14 lg:pt-20 pb-8 md:pb-11 lg:pb-14 hidden lg:block transition-all duration-700">
            <p className="text-[#514F6E] text-sm md:text-lg pb-6 md:pb-9">
                {content.content3?.comment}
            </p>
            <div className="flex items-center gap-3">
                {/* <div>
                    <img src={commentImg} alt="comment image" />
                </div> */}
                <div>
                    <h5 className="text-[#170F49] text-sm md:text-lg font-bold font-inter">
                    {content.content3?.name}
                    </h5>
                    <p className="text-[#6F6C90] text-sm md:text-lg ">
                    {content.content3?.title}
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
