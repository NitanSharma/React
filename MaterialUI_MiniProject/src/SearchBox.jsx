import React , {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { get } from 'mongoose';

const SearchBox = ({updateInfo}) => {
const [city, setCity] = useState('');
    
    const API_KEY ='7a1d35862955fdd84b8b008cee4dc41f'


    let handelChange = (e) => {
        setCity(e.target.value)
    }

    let getWeatherData = async () => {
        // const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`)

        const findLatAndLon = async () => { 
            const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`)
            const data = await response.json();
            // console.log(data);
            let lat = data[0].lat;
            let lon = data[0].lon;
            // console.log(lat , lon);
            return {lat, lon};
        }
       let {lat , lon} = await findLatAndLon() ;

    //    console.log(lat , "This is lat");
    //    console.log(lon , "This is lon");

        const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
        const data = await response.json()
        let weatherData = {
            city: data.name,
            temp: data.main.temp,
            humidity: data.main.humidity,
            wind: data.wind.speed,
            weather: data.weather[0].description
        }
        // console.log(data)
        console.log(weatherData);
        return weatherData;
    }

    let handelSubmit = async (e) => {
        e.preventDefault()
        console.log(city)
        setCity('')
       let info = await getWeatherData();
       updateInfo(info)
    }

  return (
    <div className='flex flex-col h-50 w-100 justify-center ml-auto mr-auto'>
        <form action="" className='flex flex-col ' onSubmit={handelSubmit}>
        <TextField id="city" label="City Name" variant="outlined" className='' value={city} onChange={handelChange} /> <br /> <br />
        <Button variant="contained" type='submit' className='' >Search</Button>
        </form>
    </div>
  )
}

export default SearchBox