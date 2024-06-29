import Item from "./Item"
import communityHealth from "../../assets/blog/communityHealth.jpg"

const Hero = () => {
  return (
    <div className="flex flex-col px-5 font-satoshi">
      <h2 className="text-[#000] text-center py-11 md:py-14 lg:py-28 text-3xl md:text-4xl lg:text-[64px] lg:leading-[80px] font-medium">
      Insights & Innovations <br /> in Healthcare
      </h2>
      <section className="grid md:grid-cols-2 lg:grid-cols-4 md:pl-16 lg:pl-28">
      <Item topic='INNOVATION IN COMMUNITY HEALTH' img={communityHealth} tag='Health' subtopic='Innovation is seen when there is an update on a healthcare policy, procedure' date='April 23, 2024' to='https://www.linkedin.com/pulse/innovation-community-health-service-temitope-odetunde-ui5be/'/>
      </section>
    </div>
  )
}

export default Hero
