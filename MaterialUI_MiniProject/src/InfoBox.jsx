import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const InfoBox = ({info}) => {

    const Image_URL = "https://images.unsplash.com/photo-1708552592233-5934a64eaec0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdWR5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"


  return (
    <div className='flex flex-col items-center justify-center bg-gray-200 p-4 rounded-lg shadow-md'>

        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={Image_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} >
          <p>Temperature: {info.temp}°C</p>
          <p>Weather : {info.weather}</p>
          <p>Feels Like: {info.feelslike}°C</p>
          <p>Humidity: {info.humidity}%</p>
          <p>Wind Speed: {info.wind} km/h</p>
        </Typography>
      </CardContent>
     
    </Card>

        </div>
  )
}

export default InfoBox