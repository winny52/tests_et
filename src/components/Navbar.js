import React from 'react';
import { Link } from 'react-router-dom'; 


function Navbar() {
  return (
    <nav className="m-5 fixed top-0 right-0 p-4">
      <ul className="flex space-x-10">
        <li>
          <Link to="/contact" className="text-blue-500 text-2xl font-bold">Contact</Link>
        </li>
        <li>
          <Link to="/login" className=" text-blue-500 text-2xl px-6 py-3 font-bold ">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;