import { HashLink } from "react-router-hash-link"
import logoWhite from "../assets/home/riosLogoWhite.png"
import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"
import linkedin from "../assets/linkedin.svg"
import x from "../assets/twitter.svg"
import ig from "../assets/ig.svg"
import fb from "../assets/fb.svg"
import tiktok from "../assets/tiktok.svg"
const Footer = () => {
  return (
    <div className="bg-[#000] py-11 md:py-14 ld:py-[79px] flex flex-col md:flex-row gap-7 items-center justify-between md:px-20 lg:px-36">
      <div className="w-20 md:w-32">
        <img src={logoWhite} alt="" />
      </div>
      <div className="font-inter text-white text-base">
        <div className="flex items-center gap-8">
        <NavLink to='/about'>
          About us
        </NavLink>
        <NavLink to='/services'>
          Services
        </NavLink>
        <HashLink smooth to="/#contact" >
          Contact Us
        </HashLink >
        <NavLink to='/blog'>
          Blog
        </NavLink>
        </div>
        <div className="flex justify-center gap-4 pt-4">
          <Link to='https://www.linkedin.com/in/temitope-odetunde' target="_blank">
            <img src={linkedin} alt="" />
          </Link>
          <Link to='https://x.com/todetunde' target="_blank">
            <img src={x} alt="" />
          </Link>
          <Link to='https://www.instagram.com/odetunde.top/' target="_blank">
            <img src={ig} alt="" />
          </Link>
          <Link to='https://www.facebook.com/odetunde.top?mibextid=LQQJ4d' target="_blank">
            <img src={fb} alt="" />
          </Link>
          <Link to='https://www.tiktok.com/@topeodetunde' target="_blank">
            <img src={tiktok} alt="" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
