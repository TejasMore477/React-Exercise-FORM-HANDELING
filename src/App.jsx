import React, { useState } from 'react'
import Cards from './component/Cards'
import Form from './component/Form'

function App() {
  let [users,setUsers] = useState([]);

  let handelDatasubmit=(data)=>{
    setUsers([...users,data])
  }

  let handelDelete =(id)=>{
    setUsers(()=>users.filter((ele,index)=> index!=id))
  }
  return (
    <>
        <div className='w-full h-screen bg-black px-8 py-3'>
          <Cards Delete={handelDelete} users={users}/>
          <Form  handelSubmitdata={handelDatasubmit} />
        </div>
    </>
  )
}

export default App