import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/addReview')
      .then(rse => rse.json())
      .then(data => setReviews(data));
  }, [])

  return (
    <div class="container mx-auto px-4">
      <section className="text-gray-600 body-font mx-auto ">
        <div className="container px-5 py-24 mx-auto ">
          <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Testimonials</h1>
          <div className="mx-auto">
            <div className="">
              <div className="h-full bg-gray-100 p-8 rounded">



                {
                  reviews.map(review => <Testimonial
                    key={review._id}
                    review={review}
                  ></Testimonial>)
                }

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;