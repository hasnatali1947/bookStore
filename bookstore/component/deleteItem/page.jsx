"use client"
import axios from 'axios'
import React, { useEffect } from 'react'
import { useStateContext } from '../../context/stateContext'
import { API } from '../../utils/api'
import { toast } from 'react-toastify';

const DeleteItem = () => {

  const { user, getBook, setGetBook } = useStateContext()

  console.log("getbook", getBook);

  const handleDlt = async (index) => {
    const itemId = getBook[index]?._id
    const token = user?.token

    try {
      const response = await axios.put(API.bookList.deleteBooks, { itemId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

      const deleteData = getBook.filter((_, i) => i !== index)
      setGetBook(deleteData)
      toast("Deleted item")
    } catch (error) {
      console.error(error);
    }

  }

  useEffect(() => {
    
  },[getBook])

  return (
    <div class="mt-14 mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 class="text-2xl font-bold mb-4 text-gray-800">Delete Items</h2>
      <div class="space-y-4">
        {Array.isArray(getBook) && getBook.map((item, index) => (
          <div key={index} class="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-sm">
            <div>
              <span class="block text-lg font-semibold text-gray-700">{item.name}</span>
              <span class="text-sm text-gray-500">{item.title}</span>
            </div>
            <button onClick={() => handleDlt(index)} class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DeleteItem

