import React, { createContext, useContext } from 'react'
import { getLocalStorage } from '../LocalStorage/LocalStorage'
import { useState } from 'react'
import { useEffect } from 'react'
export const AuthContext=createContext()
const AuthProvider = ({children}) => {
  const [UserData, setUserData] = useState([])
useEffect(() => {
 const {employees,Admin}=getLocalStorage()
 setUserData({employees,Admin})
 
}, [])


  return (

    <div>
      <AuthContext.Provider value={UserData}>
  {children}
</AuthContext.Provider>  

    </div>
  )
}

export default AuthProvider