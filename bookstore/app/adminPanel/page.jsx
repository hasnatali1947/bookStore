import React from 'react'
import AdminNavbar from '../../component/adminNavbar/page';
import AdminPanel from '../../component/dashboard/adminPanel/page'
import Navbar from "../../component/navbar/page.jsx";

const page = () => {
  return (
    <div>
      <AdminNavbar />  
      <AdminPanel />
    </div>
  )
}

export default page
