import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

function WeatherApp(){
     let [weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        temp:23.3,
        tempMin:23,
        tempMax:24,
        humidity:47,
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return(
        <div>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo} />
        </div>
    )
}

export default WeatherApp;