import PropTypes from 'prop-types'

const PrimaryButton = ({text}) => {
  return (
    <button className='bg-purple text-grey-100 font-inter font-semibold px-4 py-3 lg:px-6 lg:py-4 text-sm md:text-base rounded-2xl hover:text-purple hover:border hover:border-purple hover:bg-white transition-all duration-700 ease-in-out'>
      {text}
    </button>
  )
}

PrimaryButton.propTypes = {
    text : PropTypes.string
}

export default PrimaryButton

export const SecondaryButton = ({text,width, disabled})=> {
  return (
    <button className={`bg-[#231F20] text-[#F1E5FF] font-inter font-semibold px-4 py-3 lg:px-6 lg:py-4 text-sm md:text-base rounded md:rounded-lg hover:text-[#231F20] hover:border hover:border-[#231F20] hover:bg-white transition-all duration-700 ease-in-out w-${width} disabled:bg-[rgba(35,31,32,0.05)]`} disabled={disabled}>
      {text}
    </button>
  )
}

SecondaryButton.propTypes = {
  text : PropTypes.string,
  width : PropTypes.string,
  disabled : PropTypes.bool
}

export const TertiaryButton = ({text})=> {
  return (
    <button className={`bg-transparent text-[#231F20] border border-[#231F20] font-inter font-semibold px-5 py-3 lg:px-8 lg:py-4 text-sm md:text-base rounded transition-all duration-700 ease-in-out`}>
      {text} 
    </button>
  )
}

TertiaryButton.propTypes = {
  text : PropTypes.string
}
