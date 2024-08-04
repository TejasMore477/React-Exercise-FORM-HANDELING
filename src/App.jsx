import React, { useState } from 'react'
import Cards from './component/Cards'
import Form from './component/Form'

function App() {
  let [users,setUsers] = useState([])
  return (
    <>
        <div className='w-full h-screen bg-black px-8 py-3'>
          <Cards users={users}/>
          <Form />
        </div>
    </>
  )
}

export default App