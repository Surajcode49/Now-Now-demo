/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";
import { Fade } from "react-awesome-reveal";
import Button from "../elements/Button";
import vid from "../assets/images/hero/NowNowHeroVideo-CfUmw-7F.webm";

export default function Hero() {
  return (
    <section className="hero relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={vid} // Replace with your video path
        autoPlay
        loop
        muted
        controls
      ></video>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative flex flex-col justify-center items-start h-full px-6 lg:px-12 text-left">
        <div className="w-full lg:w-1/2 xl:pl-12 sm:pr-2 mt-8">
          <h1 className="text-5xl sm:text-6xl text-white font-bold leading-tight mb-5">
          Welcome to  <br />
          Now Now Inc
          </h1>

          <p className="font-light text-xl text-gray-300 leading-relaxed mb-16">
            We provide developers & designers using the latest technologies to
            help you scale up your business.
          </p>

          <Fade direction="up" delay={500} triggerOnce>
            <Button
              href="/project"
              type="link"
              className="flex w-71 h-18 items-center px-14 py-5 text-white text-xl bg-theme-purple rounded-lg shadow-2xl hover:bg-dark-theme-purple transition duration-200"
            >
              See Our Work
              <svg
                className="ml-2 w-7 h-7 text-white animate-bounce-x"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>
          </Fade>
        </div>
      </div>
    </section>
  );
}
