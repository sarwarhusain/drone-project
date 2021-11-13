import React from 'react';
import Headar from '../Shared/Headar/Headar';

const About = () => {
  return (
    <div>
      <Headar></Headar>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <img alt="content" className="object-cover object-center h-full w-full" src="https://i.ibb.co/WK2kjQk/image.png" />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div>
                  <img className="rounded-full" src="https://i.ibb.co/qjSpF6z/image.png" alt="" />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg"> jeams</h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">Syma has been an innovator and industry leader in the manufacture of high quality radio controlled Drones and Quadcopters for over 10 years. Syma has taken an innovative and visionary approach to advancing flight experience for kids</p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">Syma has been an innovator and industry leader in the manufacture of high quality radio controlled Drones and Quadcopters for over 10 years. Syma has taken an innovative and visionary approach to advancing flight experience for kids. To provide “Fantasy, Fun and Inspiration” throughout Syma products, it makes Syma becomes “the leading Innovator in Drone and Quadcopters”. Working in-step with Syma own advanced manufacturing equipment, Syma products Make Fly Easy for kids of all ages.

                  Come and join us, Make Fly Easy!.</p>
                <span className="text-indigo-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;