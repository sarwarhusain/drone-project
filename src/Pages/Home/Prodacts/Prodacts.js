import React, { useEffect, useState } from 'react';
import Prodact from '../Prodact/Prodact';

const Prodacts = () => {
  const [prodacts, setProdacts] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setProdacts(data));
  }, [])

  return (
    <>
      <div className="text-center mb-20">

        <h1 className="lg:text-5xl sm:text-3xl text-5xl font-bold title-font mt-5 ">Products</h1>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-yellow-500 inline-flex"></div>
        </div>
      </div>
      <div className="delivery-container">
        {
          prodacts.slice(0, 6).map(prodact => <Prodact
            key={prodact._id}
            prodact={prodact}
          ></Prodact>)
        }
      </div>
    </>
  );
};

export default Prodacts;