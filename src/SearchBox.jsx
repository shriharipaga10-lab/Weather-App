import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import InfoBox from './InfoBox';
import WeatherApp from './WeatherApp';


function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let API_URL="https://api.openweathermap.org/data/2.5/weather";
    let API_KEY="3d37d1f284b7788ab209aa2d1ec9b7db";

    let handleWeather=async ()=>{
        let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let jsonResponce= await response.json();
        let result={
            city:city,
            temp:jsonResponce.main.temp,
            tempMin:jsonResponce.main.temp_min,
            tempMax:jsonResponce.main.temp_max,
            humidity:jsonResponce.main.humidity,
        }
        console.log(result);
        return result;
    }

    let handleChange=(event)=>{
        setCity(event.target.value);
    }

    let handleSubmit=async (event)=>{
        event.preventDefault();
        console.log(city);
        setCity("")
       let newInfo=await handleWeather();
       updateInfo(newInfo);
    }
 return(
<div>
    <h1>search Box</h1>
    <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="outlined" required  value={city} onChange={handleChange}/>
        <br></br>
        <Button variant="contained" type='submit'>
        Search
      </Button>
    </form>
    <InfoBox/>
</div>
 )
}

export default SearchBox;