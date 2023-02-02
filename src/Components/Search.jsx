import { useRef } from "react";
import fetchApi from "../fetchApi";

const Search = ({setWeatherData, setLoading}) => {
    const cityName = useRef();

    const weatherDetails = async () => {
        const inputBox = cityName.current;
    
        if (inputBox.value) {
          setLoading(true)
          const res = await fetchApi(inputBox.value);
          res.city = inputBox.value;
    
          setWeatherData(res);
          setLoading(false);
    
          inputBox.placeholder = "Search";
          inputBox.value = "";
        } 
        else {
          inputBox.placeholder = "please search here";
        }
      };

    return (
        <div className="flex py-2 items-center space-x-2">
          
          {/* Input box */}
          <div className="shadow-[inset_1px_1px_10px] shadow-gray-400 bg-blue-50 w-4/5 flex rounded-lg">
            <input type="text" placeholder="Search" ref={cityName}
              className="font-bold capitalize rounded-full w-full py-3 pl-4 text-gray-700 bg-transparent leading-tight focus:outline-none focus:shadow-outline text-md"/>
          </div>

          {/* Search button */}
          <button onClick={weatherDetails} type="submit"
            className="px-5 py-[9px] cursor-pointer rounded-lg bg-gray-200 text-gray-900 hover:bg-gray-100 hover:shadow-xl">

            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>

          </button>

        </div>
    )
}

export default Search;