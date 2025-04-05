import { json } from 'express';
import React from 'react'

const URL = 'https://official-joke-api.appspot.com/random_joke'

const getJoke = async () => {
  let response =  await fetch(URL);
 console.log(response)
}

getJoke();



const Joker = () => {
  return (
    <div>
        <h1>Joker</h1>
        
        
    </div>
  
  )
}

export default Joker