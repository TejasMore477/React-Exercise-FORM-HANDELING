import React from 'react'

function Form() {
  return (
    <div className='w-full mt-8 py-4 px-8'>
        <form action="" className='w-full gap-3 flex justify-center items-center'>
            <input type="text" placeholder='past img url here' className='w-80 py-1 rounded-md text-center font-semibold'/>
            <input type="text" placeholder='name' className='w-80 py-1 rounded-md text-center font-semibold' />
            <input type="text" placeholder='description' className='w-80 py-1 rounded-md text-center font-semibold' />
            <input type="email" placeholder='email' className='w-80 py-1 rounded-md text-center font-semibold' />
            <input type="submit" className='bg-orange-600 rounded-md px-3 py-1 font-bold text-white' />
        </form>
    </div>
  )
}

export default Form