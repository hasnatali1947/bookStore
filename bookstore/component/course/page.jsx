"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useStateContext } from '../../context/stateContext'
import list from "../../public/list.json"
import { API } from '../../utils/api'
import Cards from '../cards.jsx/page'

const Course = () => {

  const { getBook } = useStateContext()

  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
            We're thrilled to welcome you! In this section, you'll find all the books
            you need to enhance your learning experience. Whether you're starting a new
            course or looking to deepen your knowledge, we have everything ready for you.
            Dive in, explore, and make the most of your learning journey with us!
          </p>
          <Link href="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {getBook?.map((item) => (
            <Cards key={item._id} item={item} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Course
