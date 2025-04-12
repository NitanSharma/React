import React from 'react'

const Card = (props) => {

  return (
    <div className='flex gap-4 '>
        {props.data.map((e , idx) => { 
            return <div key={idx} className='h-100 w-100 bg-blue-300 p-4 m-7 rounded'>
            <img src={e.image_url} className='rounded' alt="" />
            <h2 className='text-xl text-center mt-2'>{e.movie_name}</h2>
            <h3 className='text-medium text-center font-bold'>{e.release_year}</h3>
            </div>
        })}       
    </div>
  )
}

export default Card