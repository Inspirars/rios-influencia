import { Outlet } from "react-router-dom"
import { Footer, Navbar } from "./components"

function Layout() {

  return (
    <div className="">
      <Navbar/>
      <div>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout
