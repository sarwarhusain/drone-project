import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import MyOrder from '../../MyOrder/MyOrder';

const Dashboard = () => {
  const { user, logout } = useAuth();
  return (
    <div className="container mx-auto px-4">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Link to="/home"><button className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <img className="w-20" src="https://i.ibb.co/h9mYS30/sx556uzh10pvawnrxeo9-1.png" alt="" /></button></Link>
            <span className="ml-3 text-xl">Dashboard</span>
          </div>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link to='/home'><button className="mr-5 hover:text-gray-900">Home</button></Link>
            <Link to='/payment'><button className="mr-5 hover:text-gray-900">Payment</button></Link>
            <Link className="mr-5 hover:text-gray-900">Rating</Link>
            <Link to='/myOrder'><button className="mr-5 hover:text-gray-900">My Order</button></Link>
            <Link to='/manageOrder'><button className="mr-5 hover:text-gray-900">ManageOrder</button></Link>
            <Link to='/addProduct'><button className="mr-5 hover:text-gray-900">Add Product</button></Link>
          </nav>
          <button onClick={logout} className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">Logout
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
      <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
    </div>
  );
};

export default Dashboard;