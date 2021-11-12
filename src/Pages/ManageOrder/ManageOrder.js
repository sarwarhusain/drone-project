import React, { useEffect, useState } from 'react';
import Headar from '../Shared/Headar/Headar';

const ManageOrder = () => {
  const [orders, setOrders] = useState([]);

  const [status, setStatus] = useState("");

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };
  console.log(status);
  useEffect(() => {
    fetch("http://localhost:5000/allOrders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handeleUpdate = (id) => {
    fetch(`http://localhost:5000/status/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ status }),
    });

    console.log(id);
  };
  return (
    <div>
      <Headar></Headar>
      <div className="container mx-auto px-4">
        <h1 className="text-2xl">All orders {orders.length}</h1>
        <table class="table-auto">
          <thead>
            <tr>
              <th>#</th>
              <th>Service Title</th>
              <th>Event description</th>
              <th>Image Link</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {orders?.map((product, index) => (
            <tbody>
              <tr>
                <td>{index}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.image}</td>
                <td>
                  <input
                    onChange={handleStatus}
                    type="text"
                    defaultValue={product.status}
                  />
                </td>
                <button className="bg-red-500 px-3 py-2 rounded">Delete</button>
                <button
                  onClick={() => handeleUpdate(product._id)}
                  className="btn bg-success p-2"
                >
                  UPDATE
                </button>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ManageOrder;