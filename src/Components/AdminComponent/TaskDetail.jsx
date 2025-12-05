import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'
import { useState } from 'react'

const TaskDetail = () => {



  return (
    <div className='mx-7 h-80 bg-[#212121] mt-14 '>
<div className='flex justify-between'>
    <div>
    <form action="" className='px-4 py-3'>
<div className='flex flex-col gap-1'>
        <label className='text-white'>Task Title</label>
        <input type="text" placeholder='Make a UI design' className='placeholder:text-gray-500 text-gray-300 border-1  border-gray-400 px-2 py-1 w-[40vw] rounded-lg' />
</div>
<div className='flex flex-col gap-1 mt-3'>
<label className='text-white'>Date</label>
<input type="date" placeholder='dd/mm/yyyy' className='placeholder:text-gray-300 text-gray-300 border-1  border-gray-400 px-2 py-1 w-[40vw] rounded-lg' />
</div>
<div className='flex flex-col gap-1 mt-3'>
        <label className='text-white'>Assign to</label>
        <input type="text" placeholder='employee name' className='placeholder:text-gray-500 text-gray-300 border-1  border-gray-400 px-2 py-1 w-[40vw] rounded-lg' />
</div>
<div className='flex flex-col gap-1 mt-3'>
        <label className='text-white'>Category</label>
        <input type="text" placeholder='design,dev etc' className='placeholder:text-gray-500 text-gray-300 border-1  border-gray-400 px-2 py-1 w-[40vw] rounded-lg' />
</div>

    </form>
    </div>
    <div className='flex flex-col gap-1  mt-3 mr-8'>
        <label className='text-white'>Description</label>
<textarea rows="8" cols="65" className='border-1 border-gray-400 text-gray-300'></textarea>
<button className='bg-green-400 h-10 text-white mt-3 cursor-pointer hover:bg-green-600 hover:text-gray-300'>Create Task</button>
    </div>
</div>

    </div>
  )
}

export default TaskDetail