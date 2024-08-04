import React from 'react'

function Card({user,Delete,id}) {
  return (
    <>
        <div className='flex-shrink-0 w-52 bg-gray-800 p-4 rounded-md flex flex-col justify-center items-center gap-2'>
            <img className='size-16 bg-black rounded-full object-cover object-center' src={user.image}/>
            <h1 className='font-semibold text-lg text-white text-center'>{user.name}</h1>
            <h3 className='text-xs text-white text-center'>{user.email}</h3>
            <p className='font-light text-center text-gray-500 leading-5'>Lorem ipsum dolor veritatis velit? Deserunt id sit eos itaque.</p>
            <button onClick={()=>Delete(id)} className='bg-red-500 py-1 px-3 text-white font-semibold rounded-md text-xs'>Delete</button>
        </div> 
    </>
  )
}

export default Card