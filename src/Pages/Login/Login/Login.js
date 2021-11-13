import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Headar from '../../Shared/Headar/Headar';

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  }
  const handleLoginSubmit = e => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  }
  return (
    <div>
      <Headar></Headar>
      <div className="container mx-auto px-4">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-10 mx-auto flex flex-wrap items-center">
            <div className="lg:max-w-lg lg:ml-36 lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img className="object-cover object-center rounded" alt="hero" src="https://i.ibb.co/VCCzM7R/image.png" />
            </div>
            <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
              <h2 className="text-gray-900 text-lg font-medium title-font mb-5">LOGIN</h2>
              <form onSubmit={handleLoginSubmit}>
                <label htmlFor="email" className="leading-7 text-sm text-gray-600 font-bold ">Email</label>
                <input onChange={handleOnChange} type="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                <label htmlFor="password" className="leading-7 text-sm text-gray-600 font-bold ">Password</label>
                <input onChange={handleOnChange} type="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                {user?.email && <p className="success font-bold ">Login successfully!</p>}
                {authError && <p className="error">{authError}</p>}
                <button className="font-bold text-white bg-gray-600 border-0 py-2 px-8 focus:outline-none rounded text-lg" type="submit">Login</button>
              </form>
              <Link to='/register'><button className="text-xs font-bold text-gray-800 mt-3">Create Your Account</button></Link>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
};

export default Login;