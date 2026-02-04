import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
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

/* ---------------- COORDINATED SCROLL CONTROLLER ---------------- */

const useCoordinatedScroll = (tracksRefs) => {
  const [phase, setPhase] = useState("forward"); // "forward" or "backward"
  const timelineRef = useRef(null);

  useEffect(() => {
    if (!tracksRefs.current || tracksRefs.current.length === 0) return;

    const tracks = tracksRefs.current.filter(Boolean);
    if (tracks.length === 0) return;

    // Separate tracks: rows 1 & 3 go together, row 2 goes opposite
    const row1and3 = [tracks[0], tracks[2]]; // First and Last rows
    const row2 = tracks[1]; // Middle row

    // Get the width to scroll
    const trackWidth = tracks[0].scrollWidth / 2;

    // Kill any existing timeline
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    // Create new timeline
    const tl = gsap.timeline({
      onComplete: () => {
        // Switch phase and it will trigger useEffect again
        setPhase(prev => prev === "forward" ? "backward" : "forward");
      }
    });

    timelineRef.current = tl;

    if (phase === "forward") {
      
      // Reset positions for FORWARD
      gsap.set(row1and3, { x: 0 });
      gsap.set(row2, { x: -trackWidth });

      // Phase 1: Slow scroll (8 seconds)
      tl.to(row1and3, {
        x: -trackWidth * 0.25,
        duration: 8,
        ease: "power1.inOut",
      }, 0)
      .to(row2, {
        x: -trackWidth * 0.75,
        duration: 8,
        ease: "power1.inOut",
      }, 0);

      // Phase 2: Pause for 2 seconds
      tl.to(row1and3, {
        x: -trackWidth * 0.25,
        duration: 2,
      })
      .to(row2, {
        x: -trackWidth * 0.75,
        duration: 2,
      }, "<");

      // Phase 3: Fast scroll (5 seconds)
      tl.to(row1and3, {
        x: -trackWidth * 0.85,
        duration: 5,
        ease: "power2.in",
      })
      .to(row2, {
        x: -trackWidth * 0.15,
        duration: 5,
        ease: "power2.in",
      }, "<");

      // Phase 4: Slow down (2 seconds)
      tl.to(row1and3, {
        x: -trackWidth * 0.95,
        duration: 2,
        ease: "power2.out",
      })
      .to(row2, {
        x: -trackWidth * 0.05,
        duration: 2,
        ease: "power2.out",
      }, "<");

      // Phase 5: Pause (2 seconds)
      tl.to(row1and3, {
        x: -trackWidth * 0.95,
        duration: 2,
      })
      .to(row2, {
        x: -trackWidth * 0.05,
        duration: 2,
      }, "<");

      // Phase 6: Continue to end (1 second)
      tl.to(row1and3, {
        x: -trackWidth,
        duration: 1,
        ease: "power1.out",
      })
      .to(row2, {
        x: 0,
        duration: 1,
        ease: "power1.out",
      }, "<");

    } else {
      console.log("Starting BACKWARD animation");
      
      // Reset positions for BACKWARD
      gsap.set(row1and3, { x: -trackWidth });
      gsap.set(row2, { x: 0 });

      // Phase 1: Slow scroll back (8 seconds)
      tl.to(row1and3, {
        x: -trackWidth * 0.75,
        duration: 8,
        ease: "power1.inOut",
      }, 0)
      .to(row2, {
        x: -trackWidth * 0.25,
        duration: 8,
        ease: "power1.inOut",
      }, 0);

      // Phase 2: Pause for 2 seconds
      tl.to(row1and3, {
        x: -trackWidth * 0.75,
        duration: 1,
      })
      .to(row2, {
        x: -trackWidth * 0.25,
        duration: 2,
      }, "<");

      // Phase 3: Fast scroll back (5 seconds)
      tl.to(row1and3, {
        x: -trackWidth * 0.15,
        duration: 5,
        ease: "power2.in",
      })
      .to(row2, {
        x: -trackWidth * 0.85,
        duration: 5,
        ease: "power2.in",
      }, "<");

      // Phase 4: Slow down (2 seconds)
      tl.to(row1and3, {
        x: -trackWidth * 0.05,
        duration: 2,
        ease: "power2.out",
      })
      .to(row2, {
        x: -trackWidth * 0.95,
        duration: 2,
        ease: "power2.out",
      }, "<");

      // Phase 5: Pause (2 seconds)
      tl.to(row1and3, {
        x: -trackWidth * 0.05,
        duration: 2,
      })
      .to(row2, {
        x: -trackWidth * 0.95,
        duration: 2,
      }, "<");

      // Phase 6: Continue to start (1 second)
      tl.to(row1and3, {
        x: 0,
        duration: 1,
        ease: "power1.out",
      })
      .to(row2, {
        x: -trackWidth,
        duration: 1,
        ease: "power1.out",
      }, "<");
    }

    // Cleanup
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
        timelineRef.current = null;
      }
    };
  }, [phase]); // Re-run when phase changes

  return null;
};

/* ---------------- ROW ---------------- */

const SliderRow = ({ imageSet, trackRef }) => {
  return (
    <div className="overflow-hidden py-2">
      <div ref={trackRef} className="flex gap-6 w-max will-change-transform">
        {/* Duplicate images for seamless infinite loop */}
        {[...imageSet, ...imageSet].map((src, index) => (
          <img
            key={index}
            src={src}
            alt=""
            className="h-44 w-72 shrink-0 rounded-2xl object-cover"
          />
        ))}
      </div>
    </div>
  );
};

/* ---------------- MAIN ---------------- */

const Slider = () => {
  const tracksRefs = useRef([]);

  // Use the coordinated scroll hook
  useCoordinatedScroll(tracksRefs);

  return (
    <section className="max-w-7xl mx-auto py-12 sm:py-16">
      <div className="px-4 sm:px-16 lg:px-28">
        <Title
          zerothText="A"
          firstText="Glimpse"
          secondText="of Life at Mahindra Blossom"
          thirdText="View images of homes, amenities, and the surrounding environment."
        />
      </div>

      <div className="mt-12 space-y-8">
        <SliderRow
          imageSet={images[0]}
          trackRef={(el) => (tracksRefs.current[0] = el)}
        />
        <SliderRow
          imageSet={images[1]}
          trackRef={(el) => (tracksRefs.current[1] = el)}
        />
        <SliderRow
          imageSet={images[2]}
          trackRef={(el) => (tracksRefs.current[2] = el)}
        />
      </div>
    </section>
  );
};

export default Slider;