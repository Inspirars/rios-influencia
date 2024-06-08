import { Outlet } from "react-router-dom"
import { ContactForm, Footer, Navbar } from "./components"

function Layout() {

  return (
    <div className="">
      <Navbar/>
      <div>
        <Outlet/>
      </div>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Layout
