import React , {useEffect , useState} from 'react'

const Counter = () => {
    const [countX, setCountX] = useState(0);
    const [countY, setCountY] = useState(0);

    // useEffect(function printSomething(){ // simple use Effect()
    //     console.log("this is a side effect");
    // })

    // useEffect() with Dependencies
    // Case 2
    useEffect(function printSomething(){ // this will run only when countX changes
        console.log("this is a side effect");
    }, [countX]) // this will run only when countX changes

    // Case 3
    useEffect(function printSomething(){ // this will run only when countX and countY changes
        console.log("this is a side effect");
    }, [countX, countY]) // this will run only when countX and countY changes

    // Case 4
    useEffect(function printSomething(){ // this will render only one time , after i will not see it again
        console.log("this is a side effect");
    }, []) //

  return (
    <div> 
        <h3>countX ={countX}</h3>
        <button onClick={() => setCountX(countX + 1)}>+1</button>
        <h3>CountY = {countY}</h3>
        <button onClick={() => setCountY(countY + 1)}>+1</button>
    </div>
  )
}

export default Counter