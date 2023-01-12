import iconList from '../iconList';
import Card from './Card';
import { useRef, useState } from 'react';
import fetchApi from '../fetchApi';

const Main = () => {

  const [weatherData, setWeatherData] = useState({})
  const cityName = useRef()

  const weatherDetails = async() => {
    const inputBox = cityName.current;
  
    if (inputBox.value) {
        const res = await fetchApi(inputBox.value)
        res.city = inputBox.value
        setWeatherData(res)

        inputBox.placeholder = 'Search'
        inputBox.value=''
    }
    else{
        inputBox.placeholder = 'please search here'
    }

  }

  return(
    <div className="min-h-full flex items-center justify-center py-8 sm:px-4 px-1  lg:px-8 overflow-hidden">
        <div className="md:w-2/5 sm:w-3/5 bg-blue-100 p-6 sm:px-8 px-4 md:mx-0 mx-4 rounded-sm shadow-lg">
        
        {/* search bar */}
        <div className="flex py-2 items-center space-x-2">
            
            <div className="shadow-[inset_4px_4px_10px] shadow-gray-300 bg-blue-50 w-4/5 flex rounded-lg">
                <input type="text" placeholder="Search" ref={cityName}
                className="font-bold capitalize rounded-full w-full py-3 pl-4 text-gray-700 bg-transparent leading-tight focus:outline-none focus:shadow-outline text-md"/>
            </div>

            <button onClick={weatherDetails} type='submit' className="px-5 py-2 cursor-pointer rounded-lg bg-gray-700 text-blue-100 hover:text-blue-300 hover:shadow-xl">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
            </button>

        </div>

        {/* weather details*/}
        <div className='space-y-4'>

            <div className='flex'>
                <img src='images/cloud.svg' alt='weather_image' className='w-1/2 h-40'/>
                
                <div className='w-1/2 mt-8 space-y-2'>
                    <h2 className='text-2xl text-center font-semibold text-gray-800 capitalize'>{weatherData.city || 'City Name'}</h2>
                    {weatherData.status === 200 && <h1 className='text-6xl text-center text-gray-800'>{weatherData.temp+'°C'}</h1> }
                    {weatherData.status === 400 && <p className='text-xl text-center font-semibold text-red-600'>Data Not Found</p>}
                </div>
            </div>

            <div className='grid lg:grid-cols-3 grid-rows-2 grid-cols-2 gap-x-4 gap-y-4'>
                {weatherData.status === 200 && 
                    iconList.map((ele)=> <Card ele={ele} weatherData={weatherData} key={ele[0]}/>)
                }
            </div>

        </div>

        </div>
    </div>
  )

} 

export default Main;