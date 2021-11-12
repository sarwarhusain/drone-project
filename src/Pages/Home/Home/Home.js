import React from 'react';
import Headar from '../../Shared/Headar/Headar';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Prodacts from '../Prodacts/Prodacts';
import Support from '../Support/Support';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
  return (
    <div>
      <Headar></Headar>
      <Banner></Banner>
      <Prodacts></Prodacts>
      <Testimonial></Testimonial>
      <Support></Support>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;