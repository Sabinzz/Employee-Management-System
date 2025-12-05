import React from 'react'
import Header from '../Employeecomponent/Header'
import TaskStatus from '../Employeecomponent/TaskStatus'
import TaskList from '../Employeecomponent/TaskList'

const EmployeeDash = ({handleLogout,name}) => {

 console.log(name)
  return (
    <div className='bg-[#212121] w-screen h-screen '>
      {/* <h1>{data.employees.name}</h1> */}
     <Header handleLogout={handleLogout} name={name}/>
     <TaskStatus/>
     <TaskList/>
    </div>
  )
}

export default EmployeeDash