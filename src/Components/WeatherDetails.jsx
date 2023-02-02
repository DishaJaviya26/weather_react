import iconList from "../iconList";
import Card from "./Card";

const WeatherDetails = ({weatherData}) => {
    return (
        <div className="space-y-4">

          {/* Temperature */}
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

          {/* Other details */}
          <div className="grid lg:grid-cols-3 grid-rows-2 grid-cols-2 gap-x-4 gap-y-6">
            {  
                weatherData.status === 200 && iconList.map(element => 
                    <Card element={element} weatherData={weatherData} key={element[0]} />
                )
            }
          </div>

        </div>
    )
}

export default WeatherDetails;