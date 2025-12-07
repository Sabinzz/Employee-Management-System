import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const Tasks = () => {
  const authData=useContext(AuthContext)
  
  return (
    <div id='Tasks' className='bg-[#212121] h-56 overflow-hidden mx-7  pt-3 mt-8 '>
<div className='bg-red-400 mb-2 text-xl text-white justify-between h-12 mx-5 rounded-lg flex px-4 py-3 w-[96.5%]'>
<h1 className='w-1/5 '>Employee name</h1>
<h1 className='w-1/5 '>New Task</h1>
<h1 className='w-1/5 '>Active Task</h1>
<h1 className='w-1/5 '>Completed</h1>
<h1 className='w-1/5 '>Failed</h1>
</div>
<div id='TaskDetail' className='h-[80%] overflow-auto'>
      {authData.employees.map((elem,id)=>{
        return<div key={id} className='border-2 border-emerald-500 mb-2 text-xl text-white justify-between h-12 mx-5 rounded-lg flex px-4 py-3'>
<h1 className='w-1/5'>{elem.name}</h1>
<h1 className='w-1/5 text-blue-500'>Task</h1>
<h1 className='w-1/5 text-green-800'>Status</h1>
<h1 className='w-1/5 text-yellow-300'>Status</h1>
<h1 className='w-1/5 text-red-700'> Failed</h1>
</div>

      })}
      </div>


    </div>
  )
}

export default Tasks