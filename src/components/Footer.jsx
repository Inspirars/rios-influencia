import logoWhite from "../assets/home/riosLogoWhite.png"
import { NavLink } from "react-router-dom"
const Footer = () => {
  return (
    <div className="bg-[#000] py-11 md:py-14 ld:py-[79px] flex flex-col md:flex-row gap-7 items-center justify-between md:px-20 lg:px-36">
      <div className="w-20 md:w-32">
        <img src={logoWhite} alt="" />
      </div>
      <div className="font-inter text-white flex items-center gap-8 text-base">
        <NavLink to='/about'>
          About us
        </NavLink>
        <NavLink to='/services'>
          Services
        </NavLink>
        <NavLink to='https://selar.co/m/temitope-odetunde1' target='_blank'>
          Contact Us
        </NavLink>
        <NavLink to='/blog'>
          Blog
        </NavLink>
      </div>
    </div>
  )
}

export default Footer
