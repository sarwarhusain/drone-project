import React, { useEffect, useState } from 'react';
import Prodacts from '../Home/Prodacts/Prodacts';
import Headar from '../Shared/Headar/Headar';

const Explore = () => {
  const [prodacts, setProdacts] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setProdacts(data));
  }, [])
  return (
    <>
      <Headar></Headar>
      <div class="container mx-auto px-4">

        {
          prodacts.map(prodact => <Prodacts
            key={prodact.id}
            prodact={prodact}
          ></Prodacts>)
        }

      </div>
    </>
  );
};

export default Explore;