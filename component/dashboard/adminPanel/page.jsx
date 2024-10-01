"use client"

import React, { useState } from 'react';
import { useStateContext } from '../../../context/stateContext';
import { API } from '../../../utils/api';
import axios from "axios"
import { toast } from 'react-toastify';

const AdminPanel = () => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [errors, setErrors] = useState({});
  
  const { user, getBooks , fetchBooks} = useStateContext()

  console.log("getBooks ::", getBooks);

  const validate = () => {
    const newErrors = {};

    if (!name) {
      newErrors.name = 'Name is required';
    }

    if (!title) {
      newErrors.title = 'Message is required';
    }

    if (!price) {
      newErrors.price = 'Price is required';
    }

    if (!category) {
      newErrors.category = 'category is required';
    }

    if (!image) {
      newErrors.image = 'image is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = async (e) => {
    const token = user.token
    e.preventDefault();
    const formData = {
      name,
      title,
      price,
      category,
      image,
    };

    if (validate()) {

      try {
        const response = await axios.put(API.bookList.updateBooks, formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
          setName("")
          setTitle("")
          setPrice("")
          setCategory("")
          setImage("")
          fetchBooks()
          toast("Book Added")
          
        } catch (error) {
          console.error(error);
          console.log("error during signUp");
          toast.error("Book not add")
      }
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-20 p-6 bg-white rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring focus:border-blue-300`}
            placeholder="Enter the name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full px-3 py-2 border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring focus:border-blue-300`}
            placeholder="Enter the title"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
            Price
          </label>
          <input
            id="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className={`w-full px-3 py-2 border ${errors.price ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring focus:border-blue-300`}
            placeholder="Enter the price"
          />
          {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 font-bold mb-2">
            Category
          </label>
          <input
            id="category"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={`w-full px-3 py-2 border ${errors.category ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring focus:border-blue-300`}
            placeholder="Enter the category"
          />
          {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
            Image URL
          </label>
          <input
            id="image"
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className={`w-full px-3 py-2 border ${errors.image ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring focus:border-blue-300`}
            placeholder="Enter the image URL"
          />
          {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
        </div>

        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminPanel;
