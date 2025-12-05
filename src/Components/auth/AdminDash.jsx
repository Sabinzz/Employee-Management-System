import React from 'react'
import Header from '../Employeecomponent/Header'
import TaskDetail from '../AdminComponent/TaskDetail'
import Tasks from '../AdminComponent/Tasks'

const AdminDash = ({handleLogout}) => {
  return (
    <div className='bg-black w-screen h-screen'>
<Header handleLogout={handleLogout}/>
<TaskDetail/>
<Tasks/>
      {/* <div>
        <button onClick={handleLogout} className='h-20 w-20 bg-red-300 text-black text-2xl'>Log Out</button>
      </div> */}
    </div>
  )
}

export default AdminDash