import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import './ProductVerify.css'
const ProductVerify = () => {
  const { verifyId } = useParams();
  const [product, setProduct] = useState({})
  const email = sessionStorage.getItem("email");
  // const email = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/products/${verifyId}`)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, []);


  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {

    data.email = email;

    fetch("http://localhost:5000/confirmOrder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);
  };

  return (
    // from for update
    <div className="bg-yellow-200 verify-product container px-24 py-24 mx-auto flex items-center gap-80 ">
      <div className="col-md-6">
        <div className="">
          <img className="w-50" src={product.img} alt="" />
        </div>
        <h1 className="text-danger font-bold">Name:{product.name}</h1>
        <h1 className="text-danger font-bold">Price:{product.price}$</h1>
      </div>
      <div className="col-md-6 verify-ite bg-gray-500 bg-opacity-50 ">
        <h2 className="text-yellow-500 text-3xl font-bold">Order Information</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name", { required: true, maxLength: 20 })}
            defaultValue={product.name}
            placeholder="name" />

          <input {...register("email",)}
            placeholder="Email" />

          <input {...register("price",)}
            defaultValue={product.price}
            placeholder="price" />

          <input {...register("image",)}
            defaultValue={product.img}
            placeholder="image" />
          <input className="text-2xl rounded-full text-yellow-400 font-bold hover:bg-green-600" type="submit" />
          <br />

        </form>
      </div>
    </div>
  );
};

export default ProductVerify;