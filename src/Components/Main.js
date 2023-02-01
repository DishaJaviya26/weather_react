import iconList from "../iconList";
import Card from "./Card";
import { useRef, useState } from "react";
import fetchApi from "../fetchApi";

const Main = () => {
  const [weatherData, setWeatherData] = useState({});
  const cityName = useRef();

  const weatherDetails = async () => {
    const inputBox = cityName.current;

    if (inputBox.value) {
      const res = await fetchApi(inputBox.value);
      res.city = inputBox.value;
      setWeatherData(res);

      inputBox.placeholder = "Search";
      inputBox.value = "";
    } else {
      inputBox.placeholder = "please search here";
    }
  };

  return (
    <div className="min-h-full flex items-center justify-center py-8 sm:px-4 px-1 lg:px-8 overflow-hidden">
      <div className="md:w-2/5 sm:w-3/5 bg-center sm:bg-right bg-cover bg-weather brightness-100 p-6 sm:px-8 px-8 md:mx-0 mx-4 rounded-lg shadow-lg">
        {/* search bar */}
        <div className="flex py-2 items-center space-x-2">
          <div className="shadow-[inset_1px_1px_10px] shadow-gray-400 bg-blue-50 w-4/5 flex rounded-lg">
            <input
              type="text"
              placeholder="Search"
              ref={cityName}
              className="font-bold capitalize rounded-full w-full py-3 pl-4 text-gray-700 bg-transparent leading-tight focus:outline-none focus:shadow-outline text-md"
            />
          </div>

          <button
            onClick={weatherDetails}
            type="submit"
            className="px-5 py-[9px] cursor-pointer rounded-lg bg-gray-200 text-gray-900 hover:bg-gray-100 hover:shadow-xl"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* weather details*/}
        <div className="space-y-4">
          <div className="flex justify-center items-center">
            <div className="w-1/2 my-12 space-y-4">
              <h2 className="text-2xl text-center font-semibold text-gray-100 capitalize">
                {weatherData.city || "City Name"}
              </h2>
              {weatherData.status === 200 && (
                <h1 className="text-7xl text-center text-gray-100">
                  {weatherData.temp + "°C"}
                </h1>
              )}
              {weatherData.status === 400 && (
                <p className="text-2xl text-center font-semibold text-red-200">
                  Data Not Found
                </p>
              )}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 grid-rows-2 grid-cols-2 gap-x-4 gap-y-6">
            {weatherData.status === 200 &&
              iconList.map((ele) => (
                <Card ele={ele} weatherData={weatherData} key={ele[0]} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
