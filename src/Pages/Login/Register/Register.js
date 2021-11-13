import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';
import Headar from '../../Shared/Headar/Headar';
const Register = () => {
  const [loginData, setLoginData] = useState({});

  const { user, registerUser, authError } = useAuth();

  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  }
  const handleLoginSubmit = e => {
    if (loginData.password !== loginData.password2) {
      alert('Your password did not match');
      return
    }
    registerUser(loginData.email, loginData.password);
    e.preventDefault();
  }
  return (
    <div>
      <Headar></Headar>
      <div className="container mx-auto px-4">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-10 mx-auto flex flex-wrap items-center">
            <div className="lg:max-w-lg lg:ml-36 lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img className="object-cover object-center rounded circle" alt="hero" src="https://i.ibb.co/qCkT73B/image.png" />
            </div>
            <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
              <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Register</h2>
              <form onSubmit={handleLoginSubmit}>

                <label htmlFor="name" className="leading-7 text-sm text-gray-600 font-bold ">Name</label>
                <input type="name" onBlur={handleOnBlur} name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                <label htmlFor="email" className="leading-7 text-sm text-gray-600 font-bold ">Email</label>
                <input type="email" onBlur={handleOnBlur} name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                <label htmlFor="password" className="leading-7 text-sm text-gray-600 font-bold ">Password</label>
                <input type="password" onBlur={handleOnBlur} name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                <label htmlFor="password" className="leading-7 text-sm text-gray-600 font-bold ">Re-type Password</label>
                <input type="password" onBlur={handleOnBlur} name="password2" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                {user?.email && <p className="success font-bold ">Register successfully!</p>}
                {authError && <p className="error">{authError}</p>}
                <button className="text-white font-bold bg-gray-600 border-0 py-2 px-8 focus:outline-none rounded text-lg" type="submit">Submit</button>

              </form>
              <Link to='/login'><button className="text-lg text-gray-500 font-bold mt-3">LogIn Now</button></Link>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
};

export default Register;