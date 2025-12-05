import React from 'react'

const TaskStatus = () => {
  return (
    <div>
<div className='flex mt-14 px-8 gap-4'>
<div className='h-[22vh] w-[23vw] bg-blue-400 rounded-xl'>
<div className='flex flex-col px-10 py-9 leading-10  text-white'>
<h1 className='text-[5vh]'>1</h1>
<h1 className='text-[4vh]'>New Task</h1>
</div>

</div>
<div className='h-[22vh] w-[23vw] bg-green-300 rounded-xl'>
<div className='flex flex-col px-10 py-9 leading-10  text-white'>
<h1 className='text-[5vh]'>3</h1>
<h1 className='text-[4vh]'>Completed Task</h1>
</div>

</div>
<div className='h-[22vh] w-[23vw] bg-yellow-400 rounded-xl '>
<div className='flex flex-col px-10 py-9 leading-10  text-black'>
<h1 className='text-[5vh]'>0</h1>
<h1 className='text-[4vh]'>Accepted Task</h1>
</div>

</div>
<div className='h-[22vh] w-[23vw] bg-yellow-400 rounded-xl'>
<div className='flex flex-col px-10 py-9 leading-10  text-white'>
<h1 className='text-[5vh]'>0</h1>
<h1 className='text-[4vh]'>Failed Task</h1>
</div>

</div>
</div>

    </div>
  )
}

export default TaskStatus