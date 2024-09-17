"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { useStateContext } from '../../context/stateContext';


const AdminNavbar = () => {

  const { user } = useStateContext()

  const router = useRouter()

  const isDeleteItemPath = router.asPath === "/deleteItem";

  const handleDeleteItems = () => {
    router.push("/deleteItem"); // Redirect to /deleteItem when clicked
  };

  const navItems = (
    <>
      {isDeleteItemPath ? (
        <li>
          <a onClick={() => router.push("/adminPanel")}>Admin Panel</a> {/* Redirect to Admin Panel */}
        </li>
      ) : (
        <li>
          <a onClick={handleDeleteItems}>Delete Items</a> {/* Redirect to Delete Items */}
        </li>
      )}
    </>)

  return (
    <div
      className="sticky-navbar shadow-md bg-base-200 dark:bg-slate-600 dark:text-white duration-300 transition-all ease-in-out"
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
          <a onClick={() => router.push("/admin")} className=" text-2xl font-bold cursor-pointer">bookStore</a>
        </div>
        <div className="navbar-end space-x-3">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              className="theme-controller"
              value="synthwave"
            />
          </label>

        </div>
      </div>
    </div>
  )
}

export default AdminNavbar
