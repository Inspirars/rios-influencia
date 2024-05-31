import { Outlet } from "react-router-dom"

function Layout() {

  return (
    <div className="flex ">
      <h1 className="text-7xl">welcome</h1>
      <div id="yes"><Outlet/></div>
    </div>
  )
}

export default Layout
