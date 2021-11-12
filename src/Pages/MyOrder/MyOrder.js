import React, { useEffect, useState } from 'react';

const MyOrder = () => {
  const email = sessionStorage.getItem('email');
  const [orders, setOrders] = useState([]);

  const [control, setControl] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/myOrders/${email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [control]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/deleteOrder/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          setControl(!control);
        }
      });
    console.log(id);
  };

  return (
    <div>
      <h1>Order Details</h1>

      <div className="">
        <div className="row container">
          {orders.map((product) => (
            <div className="col-md-4">
              <div className="service border p-3">
                <div className="">
                  <img className="w-100" src={product.image} alt="" />
                </div>

                <h6>{product.name}</h6>
                <h4>{product.model}</h4>
                <p>{product.description}</p>
                <h3 className="text-danger"> price :{product.price}$</h3>

                <button
                  onClick={() => handleDelete(product._id)}
                  className="bg-red-500"
                >
                  Delate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyOrder;