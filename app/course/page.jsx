import React from 'react'
import Course from '../../component/course/page'
import Footer from '../../component/footer/footer'
import Navbar from "../../component/navbar/page";

const page = () => {
  return (
    <div>
      <Navbar />
      <Course />
      <Footer />
    </div>
  )
}

export default page
