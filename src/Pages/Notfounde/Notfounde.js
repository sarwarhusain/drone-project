import React from 'react';
import { Link } from 'react-router-dom';

const Notfounde = () => {
  return (
    <div>
      <img className="mx-auto" style={{ width: '50%', }} src="https://i.ibb.co/6vxw38x/404-error-page-found-41910-364.jpg" alt="" />
      <Link to="/"> <button className="text-black font-bold bg-yellow-100 border-0 py-2 px-8 rounded-full inline-flex items-center md:mb-2 lg:mb-0">Go Back</button></Link>
    </div>
  );
};

export default Notfounde;