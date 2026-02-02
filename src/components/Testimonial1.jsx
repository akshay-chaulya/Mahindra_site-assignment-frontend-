import React from "react";
import Title from "./Title";
import { cardBg, soldOutImg } from "../assets/assets";
import Btn1 from "./Btn1";

const Testimonial1 = () => {
  // Card data array
  const cardData = [
    {
      flat: "2 BHK",
      area: "1200-1400 sq.ft.",
      price: 1.85,
      soldOut: true,
    },
    {
      flat: "3 BHK",
      area: "1800-1850 sq.ft.",
      price: 2.18,
      soldOut: false,
    },
    {
      flat: "4 BHK",
      area: "2200-2350 sq.ft.",
      price: 2.88,
      soldOut: false,
    },
  ];

  return (
    <section
      className="bg-[#ED3237] text-white max-w-7xl mx-auto
        px-4 py-12 sm:px-12 sm:py-16 xl:p-28"
    >
      <Title
        secondText="Unlock the Door to Affordable Luxury"
        thirdText="Explore apartment options and pricing details tailored to your needs"
      />

      {/* Cards Container – ALWAYS 3 CARDS */}
      <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 mt-10 text-[#4B4D4C]">
        {cardData.map((item, idx) => (
          <div
            key={idx}
            className="rounded-2xl sm:rounded-3xl overflow-hidden relative h-[280px] sm:h-[350px] md:h-[350px]"
            style={!item.soldOut ? { backgroundImage: `url(${cardBg})` } : {}}
          >
            {/* Background layer */}
            <div className="absolute inset-0 bg-white/90" />

            {item.soldOut ? (
              // SOLD OUT CARD
              <>
                {/* Blurred background text */}
                <div className="absolute inset-0 flex flex-col items-center justify-around py-10 text-3xl">
                  <p>{item.area}</p>
                  <p>{item.area}</p>
                </div>

                {/* Blur overlay */}
                <div className="absolute text-transparent inset-0 backdrop-blur-sm bg-linear-to-b from-white via-transparent to-white via-4/5" />

                {/* Main content */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-start gap-3 sm:gap-4 md:gap-6 pt-16">
                  <p className="text-lg sm:text-2xl md:text-4xl font-bold">
                    {item.flat}
                  </p>
                  <img
                    src={soldOutImg}
                    alt="Sold Out"
                    className="w-2/3 sm:w-3/4 -rotate-12 drop-shadow-lg"
                  />
                </div>
              </>
            ) : (
              // AVAILABLE CARD
              <>
                {/* Main content */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-start gap-2 sm:gap-3 md:gap-4 px-2 text-center pt-16">
                  <p className="text-lg sm:text-2xl md:text-4xl font-bold uppercase">
                    {item.flat}
                  </p>
                  <p className="text-xs sm:text-sm md:text-xl font-semibold">
                    {item.area}
                  </p>
                  <p className="text-sm sm:text-lg md:text-2xl">
                    <span className="font-bold">₹ {item.price}cr</span>{" "}
                    <span className="italic">Onwards</span>
                  </p>

                  <div className="mt-2 sm:mt-4 md:mt-8">
                    <Btn1 text="Get Quote" />
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial1;
