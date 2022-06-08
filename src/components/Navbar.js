import React from "react";
import { Link, useNavigate } from "react-router-dom";

import UserDropdown from "./UserDropdown.js";

export default function Navbar() {
    const navig = useNavigate()
    const toHome = (e)=>{
        e.preventDefault()
        navig('/branch')
    }
  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <Link
            className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
            to="/branch"
            onClick={toHome}
          >
            Dashboard
          </Link>
          {/* Form */}
          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <UserDropdown />
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  )};