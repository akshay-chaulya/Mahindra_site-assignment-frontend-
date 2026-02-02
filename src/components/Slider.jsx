import { useEffect, useRef } from "react";
import {
  apartmentImg,
  balconyImg,
  bedRoomImg1,
  bedRoomImg2,
  cricketNetsImg,
  gardenImg2,
  jaggingTrackImg,
  kitchenRoomImg1,
  landscapedGardenImg,
  partyImg,
  swimmingPoolImg,
  tennisCourtImg,
  ventilatedFlatsImg,
} from "../assets/assets";
import Title from "./Title";

const images = [
  [
    partyImg,
    bedRoomImg1,
    tennisCourtImg,
    bedRoomImg1,
    partyImg,
    bedRoomImg1,
    tennisCourtImg,
    bedRoomImg1,
  ],
  [
    jaggingTrackImg,
    bedRoomImg2,
    gardenImg2,
    landscapedGardenImg,
    ventilatedFlatsImg,
    balconyImg,
    jaggingTrackImg,
    bedRoomImg2,
    gardenImg2,
  ],
  [
    kitchenRoomImg1,
    cricketNetsImg,
    swimmingPoolImg,
    apartmentImg,
    kitchenRoomImg1,
    cricketNetsImg,
    swimmingPoolImg,
    apartmentImg,
  ],
];

/* ---------------- HOOK ---------------- */

const useBidirectionalScroll = ({
  ref,
  initialDirection = 1,
  baseSpeed = 0.4,
  maxSpeed = 2,
  speedUpAfter = 5000,
}) => {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let direction = initialDirection;
    let speed = baseSpeed;
    let startTime = performance.now();
    let rafId;

    const animate = (time) => {
      if (time - startTime > speedUpAfter && speed < maxSpeed) {
        speed += 0.01;
      }

      el.scrollLeft += speed * direction;

      const maxScroll = el.scrollWidth - el.clientWidth;

      if (el.scrollLeft <= 0) {
        direction = 1;
        speed = baseSpeed;
        startTime = time;
      }

      if (el.scrollLeft >= maxScroll) {
        direction = -1;
        speed = baseSpeed;
        startTime = time;
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);
};

/* ---------------- ROW ---------------- */

const SliderRow = ({ direction, imageSet }) => {
  const rowRef = useRef(null);

  useBidirectionalScroll({
    ref: rowRef,
    initialDirection: direction,
  });

  return (
    <div
      ref={rowRef}
      className="
        flex gap-6
        overflow-x-scroll overflow-y-hidden
        scrollbar-hide
        py-2
      "
    >
      {imageSet.map((src, index) => (
        <img
          key={index}
          src={src}
          alt=""
          className="h-44 w-72 shrink-0 rounded-2xl object-cover"
        />
      ))}
    </div>
  );
};

/* ---------------- MAIN ---------------- */

const Slider = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 sm:py-16 xl:py-28">
      <Title
        zerothText="A"
        firstText="Glimpse"
        secondText="of Life at Mahindra Blossom"
        thirdText="View images of homes, amenities, and the surrounding environment."
      />

      <div className="mt-12 space-y-8">
        <SliderRow direction={1} imageSet={images[0]} />
        <SliderRow direction={-1} imageSet={images[1]} />
        <SliderRow direction={1} imageSet={images[2]} />
      </div>
    </section>
  );
};

export default Slider;
