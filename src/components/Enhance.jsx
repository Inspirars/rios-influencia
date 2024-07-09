import { Link } from 'react-router-dom'
import temiEnhance from '../assets/temiEnhance.png'
const Enhance = () => {
  return (
    <div className='bg-ley bg-[#F1E5FF] bg-no-repeat bg-75% md:bg-contain bg-bottom md:bg-right flex flex-col md:flex-row items-center justify-between pl-5 md:pl-16 lg:pl-28 pt-6 mt-12 md:mt-20 lg:mt-28 '>
        <div className='text-[#1B1B28] font-satoshi space-y-3'>
          <h1 className='text-2xl md:text-4xl lg:text-[64px] lg:leading-[68px]  font-bold'>
          Enhance Your <br />
          Practice Today!
          </h1>
          <p className='text-lg md:text-xl lg:text-2xl'>
          To Discover tailored mentorship and pharmaceutical <br className='hidden lg:flex' />  consulting services book a free consultation call.
          </p>
          <div className='md:pt-4 lg:pt-7'>
            <Link className='bg-purple text-grey-100 font-inter font-semibold px-4 py-3 lg:px-6 lg:py-4 text-sm md:text-base rounded-2xl hover:text-purple hover:border hover:border-purple hover:bg-white transition-all duration-700 ease-in-out' to='https://selar.co/m/temitope-odetunde1' target='_blank'>
            Get Started
            </Link>
          </div>
        </div>
        <div className='w-[60%] lg:w-[35%]'>
            <img src={temiEnhance} alt="" />
        </div>
      
    </div>
  )
}

export default Enhance
