
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Headar = () => {
  const { user, logout } = useAuth()
  return (
    <div className="container mx-auto px-4">
      <container className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img className="w-50" src="https://i.ibb.co/h9mYS30/sx556uzh10pvawnrxeo9-1.png" alt="" />

          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-bold">
            <Link to="/home" className="mr-5 hover:text-yellow-400">Home</Link>
            <Link className="mr-5 hover:text-gray-900">Explore</Link>
            <Link className="mr-5 hover:text-gray-900">About</Link>
            <Link to="/myOrder" className="mr-5 hover:text-gray-900">My Order</Link>
          </nav>
          {user?.email ?
            <button className="text-black font-bold bg-green-100 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-100 rounded text-lg" onClick={logout} >Logout</button> :
            <button className="text-black font-bold bg-green-100 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-100 rounded text-lg"><Link to="/login">Login</Link>
            </button>
          }
          <p className="font-bold text-red-100">
            Signed as: <a href="/login">{user?.displayName}</a>
          </p>
        </div>
      </container>
    </div>
  );
};

export default Headar;