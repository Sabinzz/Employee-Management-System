import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Login from './Components/auth/Login'
import { getLocalStorage, SetLocalStorage } from './LocalStorage/LocalStorage'
import EmployeeDash from './Components/auth/EmployeeDash'
import AdminDash from './Components/auth/AdminDash'
import { AuthContext } from './Context/AuthProvider'

function App() {
  const [User, setUser] = useState(null)
  const AuthData=useContext(AuthContext)
const handleLogout=()=>{
  setUser(null)
  localStorage.removeItem('loggedInUser')
}
  const handleLogin = (email, password) => {
  if (AuthData && AuthData.Admin.find((e) => e.email === email && e.password === password)) {
    setUser("Admin")
    localStorage.setItem('loggedInUser',JSON.stringify({role:'Admin'}))
  }
 else if (AuthData && AuthData.employees.find((e) => e.email === email && e.password === password)) {

  const emp = AuthData.employees.find((e) => e.email === email && e.password === password)

  setUser("Employee")
  
  localStorage.setItem(
    'loggedInUser',
    JSON.stringify({
      role: 'Employee',
      name: emp.name,  //we store name again because we want the exact employee name who loggedin
     
    })
  )
}
  else {
    alert("Invalid Credentials")
  }
}


  useEffect(() => {
SetLocalStorage()
const store=localStorage.getItem('loggedInUser')
const loggedInUser=store?JSON.parse(store):null
if(loggedInUser){
  const {role}=loggedInUser
  setUser(role)
}
  },[])
  const store = localStorage.getItem('loggedInUser')
const loggedInUser = store ? JSON.parse(store) : null


  return (
    <>
     {!User ? (
        <Login handleLogin={handleLogin} />
      ) : User === "Admin" ? (
        <AdminDash handleLogout={handleLogout} />
      ) : (
        <EmployeeDash  handleLogout={handleLogout}  name={loggedInUser?loggedInUser.name:""}/>
      )}

    </>
  )
}

export default App
