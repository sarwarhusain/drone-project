import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';


const Admin = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const { token } = useAuth();

  const handleOnBlur = e => {
    setEmail(e.target.value);
  }
  const handleAdminSubmit = e => {
    const user = { email };
    fetch('http://localhost:5000/users/admin', {
      method: 'PUT',
      headers: {
        'authorization': `Bearer ${token}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          console.log(data);
          setSuccess(true);
        }
      })

    e.preventDefault()
  }
  return (
    <>
      <h2>Make an Admin</h2>
      <form onSubmit={handleAdminSubmit}>
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" name="email" onBlur={handleOnBlur} class="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-gray-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

        <button type="submit" class="inline-flex text-white bg-green-600 border-0 py-2 px-6 focus:outline-non rounded text-lg ">Make Admin</button>
      </form>
      {
        // success && <span severity="success">Made Admin successfully!</span>
      }

    </>
  );
};

export default Admin;