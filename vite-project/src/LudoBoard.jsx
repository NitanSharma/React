import React from 'react';
import { useState } from 'react';
// Object and State

const LudoBoard = () => {
    const [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0 , green: 0})
    // State with Array
    const [arr, setArr] = useState(['no moves']);

    let updateBlue = () => {
        console.log(`Blue moves = ${moves.blue}`);
        setMoves( (prevMoves) =>{
            return { ...prevMoves, blue: prevMoves.blue + 1 } 
        })
    //  we have to spread the object to update the state because react does not detect the changes in 
    //  the object directly so it will not renender the component
    // arr.push("blue moves");
    setArr((prevArr) => { return [...prevArr, "blue moves"]});
    console.log(arr);
    };

    let updateRed = () => {
        console.log(`Red moves = ${moves.red}`);
        setMoves((prevMoves) => {
            return { ...prevMoves, red: prevMoves.red + 1 };
        });
    };

  return (
    <div>
        <p>Game Begins</p>
        <div className='board'>
            <p>Blue moves = {moves.blue} </p>
            <button style={{ backgroundColor: 'blue'  }} onClick={updateBlue}>+1</button>
            <p>Red moves = {moves.red} </p>
            <button style={{ backgroundColor: 'red' }} onClick={updateRed}>+1</button>
            <p>Yellow moves = {moves.yellow} </p>
            <button style={{ backgroundColor: 'yellow' , color : 'black'}}>+1</button>
            <p>Green moves = {moves.green} </p>
            <button style={{ backgroundColor: 'green' }}>+1</button>
        </div>
    </div>
  )
}

export default LudoBoard