"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { useStateContext } from '../../context/stateContext';
import { toast } from 'react-toastify';

const page = () => {

  const { user, setUser } = useStateContext()
  const [sticky, setSticky] = useState(false);
  const [search, setSearch] = useState('');

  const { getBook, setGetBook } = useStateContext();
  console.log("search", search);
  console.log("getBook", getBook);

  useEffect(() => {
    // Fetch books initially or when search term changes
    if (search.length === 0) {
      // If search is cleared, reset to original books
      const storedBooks = localStorage.getItem('getBooks');
      if (storedBooks) {
        setGetBook(JSON.parse(storedBooks));
      }
    } else {
      // Filter books based on the search term
      const filteredBooks = JSON.parse(localStorage.getItem('getBooks') || '[]').filter(book =>
        book.title.toLowerCase().includes(search.toLowerCase())
      );
      setGetBook(filteredBooks);
    }
  }, [search, setGetBook]);


  const router = useRouter()

  const goCourse = () => {
    if (user) {
      router.push("/course")
    } else {
      router.push("login")
    }
  }

  const navItems = (
    <>
      <li>
        <a onClick={() => router.push("/")}>Home</a>
      </li>
      <li >
        <a onClick={goCourse}>
          Course
        </a>
      </li>
      <li>
        <a onClick={() => router.push("/contact")}>Contact</a>
      </li>
      <li>
        <a onClick={() => router.push("/aboutUs")}>About</a>
      </li>
    </>
  );


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("login")
    setUser(null);
    toast("logout")
  }

  return (
    <div
      className={`
        "sticky-navbar shadow-md bg-base-200 dark:bg-slate-600 dark:text-white duration-300 transition-all ease-in-out"`}
    >
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <a onClick={() => router.push("/")} className=" text-2xl font-bold cursor-pointer">bookStore</a>
        </div>
        <div className="navbar-end space-x-3">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>
          <div className="hidden md:block">
            <label className=" px-3 py-2 border rounded-md flex items-center gap-2">
              <input
                type="text"
                className="grow outline-none px-1 dark:bg-slate-900 dark:text-white"
                placeholder="Search"
                onChange={(e) => { setSearch(e.target.value) }}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              className="theme-controller"
              value="synthwave"
            />
          </label>

          {!user ?

            <div className="" onClick={() => { router.push('/login') }}>
              <a
                className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
              >
                Login
              </a>

            </div>
            :
            <div className="" onClick={handleLogout}>
              <a
                className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
              >
                Logout
              </a>
            </div>

          }

        </div>
      </div>
    </div>
  )
}

export default page
