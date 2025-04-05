import React, { useEffect } from 'react'

const Joker = () => {

    const [joke, setJoke] = React.useState({});

    const URL = "https://official-joke-api.appspot.com/random_joke"

    const getJoke = async() => {
      const response =   await fetch(URL);
      let data = await response.json();
      setJoke({setup : data.setup, punchline: data.punchline});
    }

    useEffect( () => {
        async function getFirstJoke(){
        const response =   await fetch(URL);
        let data = await response.json();
        setJoke({setup : data.setup, punchline: data.punchline});
       }
         getFirstJoke();
}, []);
   
  return (
    <div>
        <h3>Joker!</h3>
        <h2>{joke.setup}</h2>
        <h2>{joke.punchline}</h2>
        <button onClick={getJoke}>New Joke</button>
    </div>
  )
}

export default Joker