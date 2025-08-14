import React from 'react'
import { Link, Outlet } from 'react-router'


const App = () => {



  return (
    <>
    <nav>
      <ul className='flex space-x-8 items-center justify-center bg-black text-white p-2.5'>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/users"}>Users</Link></li>
        <li><Link to={"/add-user"}>Add User</Link></li>
        <li><Link to={"/edit-user"}>Edit User</Link></li>
      </ul>
    </nav>
    <main className='p-8 max-w-screen-xl mx-auto'>
      
        <Outlet/>
      
    </main>
    </>
  )
}

export default App