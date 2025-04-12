import React from 'react'

const Some = () => {

     // Simple useState Example
        const [a, setA] = useState(12);
        let changeA = () => {
          console.log(a)
          setA(20);
        }
  return (
    <div><h1>Hello , Value of a is {a}</h1>
    <button onClick={changeA}>Change A</button>

    <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1></div>
  )
}

export default Some