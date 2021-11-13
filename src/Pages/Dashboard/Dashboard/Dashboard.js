import React from 'react';
import { Link } from 'react-router-dom';
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

import AddProduct from '../../AddPrduct/AddProduct';
import AdminRoute from '../../Login/Login/AdminRoute/AdminRoute';
import Admin from '../Admin/Admin';
import useAuth from '../../../hooks/useAuth';
import ManageOrder from '../../ManageOrder/ManageOrder';
import Review from '../../Home/Review/Review';

const Dashboard = () => {

  let { path, url } = useRouteMatch();
  const { admin, logout } = useAuth();

  return (
    <div className="container mx-auto px-4">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex title-font font-bold items-center text-gray-900 mb-4 md:mb-0">
            <Link to="/home"><button className="flex title-font items-center text-gray-900 mb-4 font-bold md:mb-0">
              <img className="w-20" src="https://i.ibb.co/h9mYS30/sx556uzh10pvawnrxeo9-1.png" alt="" /></button></Link>
            <span className="ml-3 text-xl">Dashboard</span>
          </div>
          <nav className="font-bold md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link to='/home'><button className="font-bold mr-5 hover:text-gray-900">Home</button></Link>
            <Link to='/payment'><button className="mr-5 hover:text-gray-900">Payment</button></Link>
            <Link className="font-bold" to="/myOrder"><button className="mr-5 hover:text-gray-900">My Order</button>
            </Link>
            {admin &&

              <span>
                <Link className="font-bold" to={`${url}/admin`}><button className="mr-5 hover:text-gray-900">Make Admin</button></Link>

                <Link className="font-bold" to={`${url}/addProduct`}><button className="mr-5 hover:text-gray-900"> Add Product</button>
                </Link>
                <Link className="font-bold" to={`${url}/manageOrder`}><button className="mr-5 hover:text-gray-900">Manage Order</button>
                </Link>
                <Link className="font-bold" to={`${url}/review`}><button className="mr-5 hover:text-gray-900">Review</button>
                </Link>

              </span>

            }
          </nav>
          <button onClick={logout} className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">Logout
            <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
      <div>

        <Switch>
          <Route exact path={path}>

          </Route>
          <AdminRoute path={`${path}/admin`}>
            <Admin></Admin>
          </AdminRoute>
          <AdminRoute path={`${path}/addProduct`}>
            <AddProduct></AddProduct>
          </AdminRoute>
          <AdminRoute path={`${path}/manageOrder`}>
            <ManageOrder ></ManageOrder>
          </AdminRoute>
          <AdminRoute path={`${path}/review`}>
            <Review></Review>
          </AdminRoute>
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;