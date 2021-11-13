import React, { useEffect, useState } from 'react';
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
      <div className="container mx-auto px-4">
        <h1 className="text-2xl border-2 font-bold bg-purple-50">All orders {orders.length}</h1>
        <table class="table-auto border-2 bg-purple-50">
          <thead className="border-2">
            <tr>
              <th className="border-2">#</th>
              <th className="border-2">Service Title</th>
              <th className="border-2">Event description</th>
              <th className="border-2">Image Link</th>
              <th className="border-2">Status</th>
              <th className="border-2">Action</th>
            </tr>
          </thead>
          {orders?.map((product, index) => (
            <tbody>
              <tr>
                <td className="border-2">{index}</td>
                <td className="border-2">{product.name}</td>
                <td className="border-2">{product.description}</td>
                <td className="border-2">{product.image}</td>
                <td className="border-2">
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