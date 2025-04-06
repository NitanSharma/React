import React, {useState} from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'

const WeatherApp = () => {

    const [weatherInfo, setWeatherInfo] = useState({
    feelslike: 0,
    humidity: 0,
    wind: 0,
    weather: 'Cloudy',
    temp : 0,
    city: 'Delhi'
    })

    let updateInfo = (result) => {
        setWeatherInfo(result)
    }

  return (
    <>
    <div className='text-2xl flex content-center justify-center bg-blue-300 rounded-xl mt-3 h-20'>WeatherApp</div>
     <SearchBox  updateInfo={updateInfo} />
     <InfoBox info={weatherInfo} />
    </>
    
   
  )
}

export default WeatherApp