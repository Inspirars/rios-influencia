import Champion from "../components/Home/Champion"
import Landing from "../components/Home/Landing"
import Provide from "../components/Home/Provide"
import Solution from "../components/Home/Solution"
import Story from "../components/Home/Story"
import Testimonials from "../components/Home/Testimonials"

const Home = () => {
  return (
    <div>
      <Landing/>
      <Provide/>
      <Champion/>
      <Story/>
      <Solution/>
      <Testimonials/>
    </div>
  )
}

export default Home
