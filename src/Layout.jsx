import { Outlet } from "react-router-dom"
import { ContactForm, Footer, Navbar } from "./components"
import { ScrollRestoration } from "react-router-dom";
import Enhance from "./components/Enhance"

function Layout() {

  return (
    <div className="">
      <Navbar/>
      <div>
        <Outlet/>
      </div>
      <Enhance/>
      <ContactForm/>
      <ScrollRestoration/>
      <Footer/>
    </div>
  )
}

export default Layout
