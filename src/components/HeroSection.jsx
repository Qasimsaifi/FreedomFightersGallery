import React from "react";

const Hero = () => {
  return (
    <>
      <div
        className="hero min-h-screen  text-gray-100"
        style={{
          backgroundImage:
            "url(https://cdn.pixabay.com/photo/2023/02/18/05/28/freedom-fighter-7797302_1280.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center ">
          <div className="max-w-md w-screen">
            <h1 className="mb-5 text-6xl font-bold">Freedom Fighters Gallery</h1>
            <p className="mb-5 text-xl">Honoring the Heroes of our Nation's Struggle
            </p>
            <a href="#show"><button className="btn">Get Started</button></a>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
