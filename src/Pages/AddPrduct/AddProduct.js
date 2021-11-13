import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddProduct.css'



const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data)
    axios.post('https://pure-springs-49512.herokuapp.com/productSymaOfficial', data)
      .then(res => {
        if (res.data.insertedId) {
          alert('Successfully Added')
          reset();
        }

      })
  }
  return (
    <div>
      <div className="container mx-auto px-4">
        <img className='lg:w-60 mx-auto' src="https://i.ibb.co/GPtkH7h/image.png" alt="" />
        <div className='add-product pb-16 text-black '>
          <h2 className='font-bold text-5xl my-5 underline'>Add Product</h2>
          <form onSubmit={handleSubmit(onSubmit)} className='text-2xl  text-center mb-28'>
            <input {...register("name", { required: true, maxLength: 20 })} placeholder='Name' className='text-left ' />
            <input {...register("description")} placeholder='Description' className='text-left ' />
            <input type="number" {...register("price")} placeholder='Price' className='text-left ' />
            <input {...register("img")} placeholder='Img Url' className='text-left ' />
            <input type="submit" className='bg-yellow-500 rounded-xl hover:bg-green-600 text-white ' />
          </form>
        </div>
      </div>
    </div>

  );
};

export default AddProduct;