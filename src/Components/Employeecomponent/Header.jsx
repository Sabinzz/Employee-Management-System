import React from 'react'

const Header = ({handleLogout,name}) => {
  return (
    <div>
      <div className='flex justify-between text-white pt-7 px-8'>
        <div className='leading-8'>
            <h2 className='text-[3.5vh]'>Hello</h2>
            <h1 className='text-[5vh]'>{name} 👋</h1>
        </div>
        <div className='pt-4 '>
            <button onClick={handleLogout} className='bg-red-500 cursor-pointer  px-2 py-2 text-white text-xl'>Log out</button>
        </div>

        </div>  
    </div>
  )
}

export default Header