import React from 'react';
import { NavLink } from 'react-router';

const NavBar = () => {

  const  links = (
    <>
      <li><NavLink to="/" className={({isActive}) => ` mr-1.5 ${isActive ? "text-green-500 border-2 border-green-500" : ""}`}>Home</NavLink></li>
      <li><NavLink to="/books" className={({isActive}) => ` mr-1.5 ${isActive ? "text-green-500 border-2 border-green-500" : ""}`}>Book Listed</NavLink></li>
      <li><NavLink to="/page-to-read" className={({isActive}) => `mr-1.5 ${isActive ? "text-green-500 border-2 border-green-500" : ""}`}>Page to Read</NavLink></li>
    </>
  );

  return (

    <nav className='bg-base-100 shadow-sm'>

   
    <div className="navbar  container mx-auto">

      {/* LEFT */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            ☰
          </div>

          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>

        <NavLink to="/" className="btn btn-ghost text-xl">
          Book Vibe
        </NavLink>
      </div>

      {/* CENTER */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end gap-3 ">
        <button className="btn btn-success text-white">SignIn</button>
        <button className="btn btn-accent text-white">SignUp</button>
      </div>

    </div>
     </nav>
  );
};

export default NavBar;