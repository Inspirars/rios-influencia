
const Item = ({tag, img, topic, subtopic, date }) => {
  return ( 
    <div>
      <div className="w-full max-w-[390px]">
        <img src={img} alt="" />
      </div>
      <h4 className=" mt-5 lg:mt-8 mb-3 lg:mb-6 text-xs md:text-sm text-[#3538CD] bg-[#EEF4FF] font-inter py-1 px-2">
        {tag || 'Tag'}
      </h4>
      <div>
        <div>
            <h2 className="text-lg md:text-2xl text-[#1A1A1A] font-bold font-satoshi ">
                {topic}
            </h2>
            <h5 className="text-[#667085] pb-2 md:pb-3 text-wrap">
                {subtopic}
            </h5>
            <p>
                {date}
            </p>
        </div>
        <div>
            <img src="" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Item
