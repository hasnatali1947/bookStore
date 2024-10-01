"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios"
import { API } from "../utils/api";

const Context = createContext();

export const StateContext = ({ children }) => {

  const [user, setUser] = useState(null)
  const [getBook, setGetBook] = useState(null)

  console.log("user", user);

  useEffect(() => {
    const storedUser = localStorage.getItem('login')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    } else {
      console.error("No user data found in localStorage");
    }
  }, [])

  useEffect(() => {
    const storedUser = localStorage.getItem('getBooks')
    if (storedUser) {
      setGetBook(JSON.parse(storedUser))
    } else {
      console.error("No books found in localStorage");
    }
  }, [])

  const fetchBooks = async () => {
    const token = user?.token;
    try {
      const response = await axios.get(API.bookList.getBooks, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setGetBook(response.data);
      console.log("get books", response.data);
      localStorage.setItem('getBooks', JSON.stringify(response.data))
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchBooks();
    }
  }, [user]);

  return (
    <Context.Provider value={{ user, setUser, getBook, setGetBook, fetchBooks }}>
      {children}
    </Context.Provider>
  );
};

StateContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useStateContext = () => useContext(Context);
