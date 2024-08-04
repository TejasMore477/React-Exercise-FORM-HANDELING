import React from 'react'

function Card({users}) {
  return (
    <>
        <div className='flex-shrink-0 w-52 bg-gray-800 p-4 rounded-md flex flex-col justify-center items-center gap-3'>
            <img className='size-16 bg-black rounded-full' src="" alt="" />
            <h1 className='font-semibold text-lg text-white text-center'>FUll Name</h1>
            <p className='font-light text-center text-gray-500 leading-5'>Lorem ipsum dolor veritatis velit? Deserunt id sit eos itaque.</p>
            <button className='bg-red-500 py-1 px-3 text-white font-semibold rounded-md text-xs'>Delete</button>
        </div> 
    </>
  )
}

export default Card