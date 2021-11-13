import React from 'react';
import Headar from '../../Shared/Headar/Headar';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Prodacts from '../Prodacts/Prodacts';
import Support from '../Support/Support';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
  return (
    <div>
      <Headar></Headar>
      <Banner></Banner>
      <Prodacts></Prodacts>
      <Testimonials></Testimonials>
      <Support></Support>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;