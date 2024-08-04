import React from 'react'
import Card from './Card'

function Cards({users,Delete}) {
  return (
    <div className='w-full h-[85%] bg-slate-900 rounded-md p-3 flex justify-center items-center gap-4 flex-wrap overflow-auto'>
        {users.map((item,index)=><Card Delete={Delete} user={item} key={index} id={index}/>)}
    </div>
  )
}

export default Cards