import React from 'react';
import { Link } from 'react-router-dom';

const Prodact = ({ prodact }) => {
  const { _id, name, description, img } = prodact;
  return (
    <div>
      <div className="container mx-auto px-4">
        <section className="text-gray-600 body-font -mt-20 ">
          <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center shadow-md rounded-md">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{name}
              </h1>
              <p className="mb-8 leading-relaxed">{description}</p>

              <div className="flex justify-center">
                <Link to={`/product/${_id}`}><button className="text-indigo-500 inline-flex items-center lg:font-bold md:mb-2 lg:mb-0 bg-green-400 p-2 rounded-3xl">Buy Now
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </button></Link>
              </div>

            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img className="object-cover object-center" alt="hero" src={img} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Prodact;