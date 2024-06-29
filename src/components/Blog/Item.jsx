import { Link } from "react-router-dom"
import angleArrow from "../../assets/blog/angleArrow.png"
import PropTypes from 'prop-types'

const Item = ({tag, img, topic, subtopic, date, to }) => {
  return ( 
    <Link to={to} target="_blank" className="w-full max-w-[384px]">
      <div className=" ">
        <img src={img} alt="" className="h-full max-h-[240px] w-full"/>
      </div>
      <h4 className=" mt-5 lg:mt-8 mb-3 lg:mb-6 text-xs md:text-sm text-[#3538CD] bg-[#EEF4FF] font-inter py-1 px-2 w-fit">
        {tag || 'Tag'}
      </h4>
      <div className="flex">
        <div>
            <h2 className="text-lg md:text-2xl text-[#1A1A1A] font-bold font-satoshi pb-2">
                {topic}
            </h2>
            <h5 className="text-[#667085] pb-2 text-wrap">
                {subtopic}
            </h5>
            <p className="font-inter text-xs text-[#6941C6] font-semibold">
                {date}
            </p>
        </div>
        <div>
            <img src={angleArrow} alt="" />
        </div>
      </div>
    </Link>
  )
}

Item.propTypes = {
  tag : PropTypes.string,
  img : PropTypes.string,
  topic : PropTypes.string,
  subtopic : PropTypes.string,
  date : PropTypes.string,
  to : PropTypes.string
}

export default Item
