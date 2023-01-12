const Card = ({ele, weatherData}) => {
    return(
        <div className="py-1 flex items-center justify-evenly rounded-lg transition duration-300 shadow-[inset_2px_2px_8px] shadow-gray-400 hover:bg-gray-50">
            <img src={ele[1]} alt='img' className='w-10 h-10 object-cover'/>
            <p className='text-md font-medium'>{weatherData[ele[0]]} {ele[2]}</p>
        </div>
    )
}

export default Card;