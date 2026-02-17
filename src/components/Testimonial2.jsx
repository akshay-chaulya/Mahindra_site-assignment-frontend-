import { useRef } from "react";
import { cardBg2, cardBg3, soldOutImg } from "../assets/assets";
import Btn1 from "./Btn1";
import Title from "./Title";
import { motion, useInView } from "framer-motion";

const plans = [
  {
    name: "Master Plan",
    soldOut: false,
    img: cardBg2,
  },
  {
    name: "2 BHK",
    soldOut: true,
    img: cardBg3,
  },
  {
    name: "2 BHK (Large)",
    soldOut: true,
    img: cardBg3,
  },
  {
    name: "3 BHK",
    soldOut: false,
    img: cardBg3,
  },
  {
    name: "3.5 BHK",
    soldOut: false,
    img: cardBg3,
  },
  {
    name: "4 BHK",
    soldOut: false,
    img: cardBg3,
  },
];

const Testimonial2 = () => {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px", // triggers slightly after entering
  });

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 120 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1], // smooth premium easing
      }}
      className="bg-[#ED3237] text-white max-w-7xl mx-auto
        px-4 py-12 sm:px-12 sm:py-16 xl:px-28"
    >
      <Title
        secondText="Thoughtfully Designed Floor Plans"
        thirdText="Smart layouts that maximize space, light, and everyday comfort."
      />

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 text-[#4B4D4C]">
        {plans.map((plan, idx) => (
          <div key={idx} className="relative">
            <div
              className="bg-white rounded-2xl bg-center bg-cover min-h-64 relative overflow-hidden"
              style={{ backgroundImage: `url(${plan.img})` }}
            >
              {/* Overlay */}
              <div className="absolute w-full h-full backdrop-blur-lg" />

              {/* middle  */}
              <div className="absolute h-full w-full flex items-center justify-center">
                {plan.soldOut ? (
                  <img
                    src={soldOutImg}
                    className="h-40 bg-cover bg-center -rotate-15"
                    alt=""
                  />
                ) : (
                  <div className="text-xl">
                    <Btn1 text="View Plan" />
                  </div>
                )}
              </div>
            </div>
            {/* flat name  */}
            <button className="absolute left-1/2 -translate-x-1/2 -top-5 bg-white px-4 py-2 rounded-full shadow-xl font-semibold text-xl lg:text-lg">
              {plan.name}
            </button>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Testimonial2;
