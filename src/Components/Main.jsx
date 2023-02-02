import {  useState } from "react";
import Loader from "./Loader";
import WeatherDetails from "./WeatherDetails";
import Search from "./Search";

const Main = () => {
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(false);
 
  return (
    <div className="min-h-full flex items-center justify-center py-8 sm:px-4 px-1 lg:px-8 overflow-hidden">
      <div className="md:w-2/5 sm:w-3/5 bg-center sm:bg-right bg-cover bg-weather brightness-100 p-6 sm:px-8 px-8 md:mx-0 mx-4 rounded-lg shadow-lg">
        
      <Search setWeatherData={setWeatherData} setLoading={setLoading}/>

      {loading ? 
        <Loader/> : <WeatherDetails weatherData={weatherData}/>
      }

      </div>
    </div>
  );
};

export default Main;
