import React, { useContext, useEffect, useEffectEvent } from 'react'
import { AuthContext } from '../../Context/AuthProvider'
import { useState } from 'react'

const TaskDetail = () => {
  const [taskTitle, settaskTitle] = useState('')
  const [Date, setDate] = useState('')
  const [assignTo, setassignTo] = useState('')
  const [category, setcategory] = useState('')
  const [description, setdescription] = useState('')
  
const submitHandler = (e) => {
  e.preventDefault();

  // 1️⃣ Create task object directly (NO setState here)
  const newTask = {
    taskTitle,
    Date,
    assignTo,
    category,
    description,
    active: false,
    newTask: true,
    failed: false,
    completed: false
  };

  // 2️⃣ Reset inputs
  settaskTitle('');
  setDate('');
  setassignTo('');
  setcategory('');
  setdescription('');

  // 3️⃣ Read employees from localStorage
  const data = JSON.parse(localStorage.getItem('employees')) || [];

  // 4️⃣ Update correct employee
  const updatedEmployees = data.map((elem) => {
    if (assignTo === elem.name) {
      return {
        ...elem,
        tasks: [...(elem.tasks || []), newTask]   // push safely
      };
    }
    return elem;
  });

  // 5️⃣ Save back to localStorage
  localStorage.setItem('employees', JSON.stringify(updatedEmployees));

  console.log("Task Added:", newTask);
};

// useEffect(() => {
//   console.log("Updated Task:", Task)
// }, [Task])


  return (
    <div className='mx-7 h-80 bg-[#212121] mt-14 '>
<div className='flex justify-between'>
    <div className='relative'>
    <form  onSubmit={submitHandler} action="" className='px-4 py-3'>
<div className='flex flex-col gap-1'>
        <label className='text-white'>Task Title</label>
        <input value={taskTitle} onChange={(e)=>{
          settaskTitle(e.target.value)
        }} type="text" placeholder='Make a UI design' className='placeholder:text-gray-500 text-gray-300 border-1  border-gray-400 px-2 py-1 w-[40vw] rounded-lg' />
</div>
<div className='flex flex-col gap-1 mt-3'>
<label className='text-white'>Date</label>
<input value={Date} onChange={(e)=>{
          setDate(e.target.value)
        }} type="date" placeholder='dd/mm/yyyy' className='placeholder:text-gray-300 text-gray-300 border-1  border-gray-400 px-2 py-1 w-[40vw] rounded-lg' />
</div>
<div className='flex flex-col gap-1 mt-3'>
        <label className='text-white'>Assign to</label>
        <input value={assignTo} onChange={(e)=>{
          setassignTo(e.target.value)
        }} type="text" placeholder='employee name' className='placeholder:text-gray-500 text-gray-300 border-1  border-gray-400 px-2 py-1 w-[40vw] rounded-lg' />
</div>
<div className='flex flex-col gap-1 mt-3'>
        <label className='text-white'>Category</label>
        <input value={category} onChange={(e)=>{
          setcategory(e.target.value)
        }} type="text" placeholder='design,dev etc' className='placeholder:text-gray-500 text-gray-300 border-1  border-gray-400 px-2 py-1 w-[40vw] rounded-lg' />
</div>
   <div className='flex flex-col gap-1  mt-3 mr-8 absolute top-0 left-[50vw]'>
        <label className='text-white'>Description</label>
<textarea value={description} onChange={(e)=>{
          setdescription(e.target.value)
        }} rows="8" cols="65" className='border-1 border-gray-400 text-gray-300'></textarea>
<button type='submit' className='bg-green-400 h-10 text-white mt-3 cursor-pointer hover:bg-green-600 hover:text-gray-300'>Create Task</button>
    </div>
    </form>
    </div>
 
</div>

    </div>
  )
}

export default TaskDetail