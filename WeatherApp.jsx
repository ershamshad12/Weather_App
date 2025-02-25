import React, { useState } from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'

const WeatherApp = () => {
    const [weatherInfo, setWeatherInfo] = useState(
        {
            city: "Bihar",
            feels_Like: 26.53,
            humidity: 32,
            temp: 27.05,
            tempMax: 27.05,
            tempMin: 27.05,
            weather: "haze",
          }
    )

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }
  return (
    <div style={{textAlign:'center'}}>
        <h2>Weather App by Delta</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
    </div>
  )
}

export default WeatherApp