import Link from "next/link";
import React from "react";

const FreedomFighterGallery = ({ freedomFighters }) => {
  const fightersPerRow = 4; // Number of fighters to display in one row
  const imageHeight = "500px"; // Fixed height for gallery images

  return (
    <>
      <div className="m-5" id="show">
        <h2 className="text-2xl font-semibold text-center mt-7 mb-7 text-white">
          FREEDOM FIGHTER GALLERY
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {freedomFighters.map((fighter, index) => (
            <div>

            <Link
            href={fighter.wikipedia}
            target="_blank"
            rel="noopener noreferrer"
            key={fighter.id}
          >
            <div
              className={`card cursor-pointer relative overflow-hidden transition-transform duration-300 hover:scale-105`}
              
              style={{ height: imageHeight }}
            >
              <figure className="relative">
                <a
                  href={fighter.wikipedia}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={fighter.image}
                    alt={fighter.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    style={{ height: imageHeight }}
                  />
                </a>
                <div className="absolute inset-0 flex justify-center items-center text-white bg-black bg-opacity-50 transition-opacity opacity-0 hover:opacity-100">
                  <a
                    href={fighter.wikipedia}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-center"
                  >
                    {fighter.name}
                  </a>
                </div>
              </figure>
          
            </div>
            </Link>
          </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FreedomFighterGallery;
