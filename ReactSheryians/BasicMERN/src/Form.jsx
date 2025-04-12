import React, { useState } from 'react'

const Form = () => {

 const [name, setName] = useState('');
 const [pass, setPass] = useState('');


 let handelForm = (e) => {
    e.preventDefault();
    console.log("hello");
    console.log(name , pass);
    setName('')
    setPass('')
    
 }

  return (
    <div className='bg-blue-200'>
        <form action="" className='flex flex-col items-center text-center' onSubmit={handelForm} >
            <input type="text" 
            className='px-4 py-3 text-xl m-5 border-2 rounded' 
            placeholder='Name' value={name}
            onChange={(e) => {
                setName(e.target.value)               
            }}
            />
            <input type="text" 
            className='px-4 py-3 text-xl m-5 border-2 rounded' 
            placeholder='Password' value={pass}
            onChange={(e) => {
                setPass(e.target.value)  
            }}
            
            />
            <button className='px-9 py-3 m-5 text-xl rounded font-semibold bg-green-400 border-2'>Submit</button>
        </form>
    </div>
  )
}

export default Form