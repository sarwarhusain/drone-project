import React, { useEffect, useState } from 'react';
import Prodacts from '../Home/Prodacts/Prodacts';
import Headar from '../Shared/Headar/Headar';

const Explore = () => {
  const [prodacts, setProdacts] = useState([])
  useEffect(() => {
    fetch('https://pure-springs-49512.herokuapp.com/products')
      .then(res => res.json())
      .then(data => setProdacts(data));
  }, [])
  return (
    <>
      <Headar></Headar>
      <div className="container mx-auto px-4">

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