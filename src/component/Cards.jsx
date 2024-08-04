import React from 'react'
import Card from './Card'

function Cards({users}) {
  return (
    <div className='w-full h-[85%] bg-slate-900 rounded-md p-3 flex justify-center items-center gap-4 flex-wrap overflow-auto'>
        {users.map((items,index)=><Card  users={users}/>)}
    </div>
  )
}

export default Cards