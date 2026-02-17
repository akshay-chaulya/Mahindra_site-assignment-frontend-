import { useEffect, useRef } from "react";
import { balconyImg, gardenImg2, treeImg } from "../assets/assets";
import BulletPointFlower from "./BulletPointFlower";
import Title from "./Title";
import { useInView, motion, useAnimationControls } from "framer-motion";

const features = [
  {
    title: "PRIME AND WELL CONNECTED LOCATION",
    text: "Located at Hope Farm Junction, Whitefield, Mahindra Blossom places you minutes away from ITPL, tech parks, top schools, hospitals, malls, and the fully operational metro — ensuring effortless daily travel and high future value.",
  },
  {
    title: "HOMES DESIGNED FOR SPACE, LIGHT & COMFORT",
    text: "Choose from 2, 3 & 4 BHK premium apartments with smart, vastu compliant layouts, abundant natural light, and excellent ventilation — crafted for modern families, work-from-home needs, and everyday comfort.",
  },
  {
    title: "WAKE UP TO GREEN, CALM LIVING",
    text: "Surrounded by landscaped open spaces and greenery, Mahindra Blossom offers 4 acres of landscaped garden with bougainvillea canopies, aromatic and native plantations and butterfly park.",
  },
  {
    title: "RESORT-STYLE AMENITIES AT YOUR DOORSTEP",
    text: "Offering 97,000 sq. ft. of amenities and clubhouse spaces, including Bougainvillea canopies, half-Olympic size swimming pool, 25+ seater business center, cricket nets, 2 running tracks, 2 indoor badminton courts and much more.",
  },
  {
    title: "SUSTAINABLE LIVING",
    text: "Pre-certified IGBC Gold green homes with Net Zero Waste practices and energy-efficient design for lower consumption and sustainable living.",
  },
  {
    title: "75+ YEARS OF MAHINDRA TRUST",
    text: "Developed by Mahindra Lifespaces, part of the Mahindra Group, this project offers peace of mind through quality construction, transparency, & a proven track record of timely delivery.",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      controls.start({
        right: "auto",
        top: "auto",
        left: "5rem",
        bottom: "16.66%",
        rotate: 0,
        skewX: 0,
        skewY: 0,
      });
    }
  }, [isInView, controls]);

  return (
    <section
      ref={ref}
      className="relative w-full bg-linear-to-br from-pink-50 via-pink-100/40 to-pink-50 overflow-hidden max-w-7xl mx-auto
        px-4 sm:px-12 py-28 xl:p-28 "
    >
      {/* Background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${treeImg})` }}
      />

      {/* ================= ABOUT SECTION ================= */}
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-28 lg:gap-12 items-center">
          {/* Left Content (UNCHANGED) */}
          <div className="space-y-6">
            <Title
              firstText="About"
              secondText="Mahindra Blossom"
              thirdText="Premium Apartments in Whitefield, Bengaluru"
            />

            <div className="space-y-4 text-gray-700 leading-6 md:leading-5">
              {/* CONTENT KEPT EXACTLY SAME */}
              <p>
                <span className="font-semibold text-gray-800">
                  Mahindra Blossom
                </span>{" "}
                is a thoughtfully designed{" "}
                <span className="font-semibold text-gray-800">
                  premium residential apartment project in Whitefield, Bangalore
                </span>
                , developed by{" "}
                <span className="font-semibold text-gray-800">
                  Mahindra Lifespaces
                </span>
                , part of the trusted Mahindra Group. Known for quality
                construction, transparency, and sustainable development,
                Mahindra Lifespaces has delivered landmark residential
                communities across India.
              </p>

              <p>
                Strategically located{" "}
                <span className="font-semibold text-gray-800">
                  near Hope Farm Junction, Whitefield
                </span>
                , Mahindra Blossom offers{" "}
                <span className="font-semibold text-gray-800">
                  2 BHK, 3 BHK, and 4 BHK luxury apartments
                </span>{" "}
                crafted for modern families, professionals, and long-term
                investors. The project blends{" "}
                <span className="font-semibold text-gray-800">
                  urban convenience with green living
                </span>
                , creating a calm, secure, and future-ready residential
                environment.
              </p>

              <p>
                With excellent connectivity to{" "}
                <span className="font-semibold text-gray-800">
                  ITPL, major tech parks, schools, hospitals, shopping hubs, and
                  fully operational metro station
                </span>
                , Mahindra Blossom ensures everyday comfort while offering
                strong potential for property appreciation and rental demand.
              </p>

              <p className="italic text-gray-600 pt-2">
                Mahindra Blossom is not just a home — it's a lifestyle upgrade
                backed by the reliability of a trusted developer.
              </p>
            </div>
          </div>

          {/* Right Image Stack */}
          <div className="flex justify-center items-center w-full">
            <div
              className="relative w-3/5 sm:w-3/5 md:w-3/5 lg:w-full 
                  h-[280px] sm:h-[360px] md:h-[420px] lg:h-[500px]"
            >
              {/* Back Tilted Image (UNCHANGED STYLE) */}
              <div
                className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg block lg:hidden"
                style={{
                  transform: "skewY(-2deg) skewX(4deg) rotate(-6deg)",
                  transformOrigin: "bottom left",
                }}
              >
                <img
                  src={balconyImg}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>

              {/* Front Image */}
              <div className="absolute inset-0 bg-white rounded-2xl p-1 shadow-2xl z-10">
                <img
                  src={gardenImg2}
                  className="w-full h-full object-cover rounded-2xl"
                  alt="Mahindra Blossom Garden"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= FEATURES SECTION ================= */}
      <div className="relative max-w-7xl mx-auto mt-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-center">
          {/* Left Image */}
          <div className="hidden lg:block">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              {/* <img
                src={balconyImg}
                alt="Mahindra Blossom Interior"
                className="w-full h-[600px] object-cover"
              /> */}
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 leading-6 md:leading-5">
            <Title
              firstText="Features &"
              secondText="Highlights"
              thirdText="Why Buy a Home at Mahindra Blossom"
            />

            <div className="space-y-6">
              {features.map((feature, index) => (
                <Feature
                  key={index}
                  title={feature.title}
                  text={feature.text}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* for animation  */}
      {/* <div className="absolute right-28 top-25 ">
        <img
          style={{
            transform: "skewY(-2deg) skewX(4deg) rotate(-5deg)",
            transformOrigin: "bottom left",
          }}
          src={balconyImg}
          className="h-125 w-82 object-cover rounded-2xl rotate"
          alt=""
        />
      </div> */}

      {/* <div className="absolute bottom-1/6 left-20 ">
        <img
          src={balconyImg}
          className="h-150 w-82 object-cover rounded-2xl rotate"
          alt=""
        />
      </div> */}

      <motion.div
        initial={{
          position: "absolute",
          right: "7rem",
          top: "6.25rem",
          left: "auto",
          bottom: "auto",
          rotate: -5,
          skewX: 4,
          skewY: -2,
        }}
        animate={controls}
        transition={{
          duration: 6,
          // ease: [0.76, 0, 0.24, 1], // custom cubic-bezier for cinematic feel
          ease: "easeInOut"
        }}
        style={{ position: "absolute" }}
      >
        <motion.img
          initial={{ height: "500px" }}
          animate={isInView ? { height: "600px" } : { height: "500px" }}
          transition={{
            duration: 6,
            // ease: [0.76, 0, 0.24, 1],
            ease: "easeInOut"
          }}
          style={{
            width: "320px",
            objectFit: "cover",
            borderRadius: "1rem",
            display: "block",
          }}
          src={balconyImg}
          className="w-[320px] object-cover rounded-2xl"
          alt=""
        />
      </motion.div>
    </section>
  );
};

export default About;

const Feature = ({ title, text }) => (
  <div className="flex gap-4 items-start">
    <BulletPointFlower />
    <div className="flex-1">
      <h3 className="font-semibold text-gray-800 text-sm mb-2 tracking-wide">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
    </div>
  </div>
);
