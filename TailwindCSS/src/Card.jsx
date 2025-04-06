import React from 'react'

const Card = () => {
  return (
    <div className='mt-20 mx-52 flex flex-wrap rounded border-1'>
        <div className="w-full h-24 bg-linear-to-t from-sky-500 to-indigo-500 text-white flex justify-center items-center font-bold text-2xl">
            News you can Trust.
        </div>
        <div className='w-full text-center mt-6'>
            <h3 className='text-xl font-semibold'>Stay up to date with the Latest!</h3>
            <p>Subscribe to our newsletter for the latest news straight into your inbox.</p>
            <form action="" className='flex flex-wrap'>
                <input type="text" placeholder='your@email.com' className='w-full bg-slate-200 mx-52 text-center placeholder:text-sm my-4 py-2 rounded' />
                <button className='bg-blue-500 w-full mx-52 py-2 text-white rounded-full font-bold'>Subscribe Now</button>
            </form>
            <p className='my-6 text-sm'>We value your privacy</p>
        </div>
    </div>
  )
}

export default Card