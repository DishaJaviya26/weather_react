const Card = ({ element, weatherData }) => {

  return (
    <div className="py-1 flex items-center justify-evenly rounded-lg transition duration-300 shadow-[inset_5px_5px_60px] shadow-gray-100 hover:bg-gray-50">
      
      <img src={element[1]} alt="img" className="w-10 h-10 object-cover" />
      
      <p className="text-md font-medium">
        {weatherData[element[0]]} {element[2]}
      </p>

    </div>
  )
}

export default Card;
