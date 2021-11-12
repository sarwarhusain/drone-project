import React, { useEffect, useState } from 'react';
import Prodacts from '../Home/Prodacts/Prodacts';

const Explore = () => {
  const [prodacts, setProdacts] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setProdacts(data));
  }, [])
  return (
    <div>
      <div className="delivery-container">
        {
          prodacts.map(prodact => <Prodacts
            key={prodact._id}
            prodact={prodact}
          ></Prodacts>)
        }
      </div>
    </div>
  );
};

export default Explore;