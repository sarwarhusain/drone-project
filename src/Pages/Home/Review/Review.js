import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const Review = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data)
    axios.post('https://pure-springs-49512.herokuapp.com/addReview', data)
      .then(res => {
        if (res.data.insertedId) {
          alert('Thank you! for Review')
          reset();
        }

      })
  };
  return (
    <div className="container mx-auto px-4">

      <div className='review-product pb-16 text-yellow-400'>
        <h2 className='font-bold text-5xl my-5 underline'>Review</h2>
        <form onSubmit={handleSubmit(onSubmit)} className=' text-2xl  text-center mb-28'>
          <input {...register("name", { required: true, maxLength: 20 })} placeholder='Name' className='text-left border-2' />
          <input {...register("description")} placeholder='Description' className='text-left border-2' />
          <input {...register("rating")} type='number' placeholder='Rating' className='text-left border-2' />
          <input type="submit" className='ps-5 bg-green-400 rounded-xl hover:bg-green-600 text-white border-2' />
        </form>
      </div>

    </div>
  );
};

export default Review;