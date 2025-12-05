import React, { useState } from 'react'
import { Eye, EyeOff} from 'lucide-react';
const Login = ({handleLogin}) => {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [ShowPassword, setShowPassword] = useState(false)
    const handleChange=(e)=>{
        e.preventDefault();
        console.log("Email is",Email);
        console.log("Password is",Password);
        handleLogin(Email,Password)
        setEmail('')
        setPassword('')
    }
  return (
    <div className='w-screen h-screen bg-black flex justify-center items-center '>
<div className=' border-emerald-500 border-2 h-130 w-130 rounded-xl'>
<form onSubmit={handleChange} action="" className='flex flex-col justify-center items-center h-full w-full gap-5'>
    <input value={Email} onChange={(e)=>{
        setEmail(e.target.value)
    }} required type="email" className='border-emerald-500 text-white text-xl  border-2 bg-transparent placeholder:text-gray-500 rounded-full w-100 h-20 px-5 placeholder:text-xl' placeholder='Enter Your Email'/>
    <input value={Password} onChange={(e)=>{ 
        setPassword(e.target.value)
    }} required type={ShowPassword?'text':'password'} className='relative border-emerald-500 text-white text-xl border-2 bg-transparent placeholder:text-gray-500 rounded-full w-100 h-20 px-5 placeholder:text-xl' placeholder='Enter Password'/>
    <button className='bg-emerald-400 w-100 h-15 rounded-full text-white text-semibold text-2xl cursor-pointer hover:text-gray-500 hover:bg-emerald-600'>Log in</button>
    {
        !ShowPassword?(
<Eye onClick={()=>{
    setShowPassword(true)
}} className=' absolute left-[59vw] mt-6 cursor-pointer' size={35} color='gray'/>)
:(
<EyeOff onClick={()=>{
    setShowPassword(false)
}} className=' absolute left-[59vw] mt-6 cursor-pointer' size={35} color='gray'/>)
}
</form>
</div>

    </div>
  )
}

export default Login