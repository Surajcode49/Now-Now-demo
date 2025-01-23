/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';

import { Fade } from 'react-awesome-reveal';

export default function Service({ data }) {
  return (
    <div className="bg-[#231F4F]"> {/* Updated background color */}
      <div className="container mx-auto pt-20 pb-28">
        <Fade direction="right" triggerOnce>
          <h1 className="text-5xl text-white text-center font-bold">Our Service</h1> {/* Changed text color to white */}
        </Fade>
        <Fade direction="left" triggerOnce>
          <p className="font-light text-lg text-gray-300 text-center mb-12">
            We are ready to scale up your business with our great service.
          </p> {/* Changed text color to gray-300 for better visibility */}
        </Fade>

        <div className="grid grid-rows-3 px-10 gap-8 sm:grid-cols-3 sm:grid-rows-1 sm:gap-6 xl:gap-16">
          {
            data.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Fade direction={item.animation} delay={500 * index} key={index} triggerOnce>
                <div>
                  <div className="bg-white group rounded-2xl shadow-2xl border border-light-theme-purple transform transition duration-500 hover:scale-105">
                    <img src={item.imageUrl} alt="Service" className="w-full rounded-t-2xl" />
                    <h2 className="text-theme-blue text-center text-xl py-7 rounded-b-2xl">{item.title}</h2>
                  </div>
                </div>
              </Fade>
            ))
          }
        </div>
      </div>
    </div>
  );
}
