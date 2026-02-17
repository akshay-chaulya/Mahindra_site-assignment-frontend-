import {
  arrowUpIcon,
  callIcon,
  downloadIcon,
  timerIcon,
  wpIcon,
} from "../assets/assets";
import { useDialogContext } from "../context/ContextProvider";
import { motion } from "framer-motion";

const BottomActionBar = () => {
  const { openDialog } = useDialogContext();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-20 right-4 sm:right-1/6 z-49">
        <a
          href="https://wa.me/919901717339?text=Hello,%20I%20found%20this%20number%20from%20your%20website"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="lg:w-16 lg:h-16 w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-xl overflow-hidden cursor-pointer">
            <img src={wpIcon} alt="WhatsApp" />
          </button>
        </a>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.5, 1.5, 0, 0] }}
          transition={{
            duration: 4, // total cycle
            times: [0, 0.25, 0.5, 0.75, 1],
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="bg-[#E3EAD9]  w-25 h-25 md:w-40 md:h-40 lg:w-32 lg:h-32 rounded-full absolute sm:-left-1/2 sm:-top-1/2 -left-1/5 -top-1/5 -z-10"
        />
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white flex items-center justify-center text-white z-49">
        <button
          onClick={openDialog}
          className="bg-red-500 items-center gap-1 sm:gap-2 px-4 sm:px-8 py-2 hidden sm:flex cursor-pointer"
        >
          <img src={timerIcon} className="h-5 w-5" alt="" />
          <p>Book a Site Visit</p>
        </button>

        <a
          href="tel:+919901717339"
          className="flex items-center gap-2 px-8 py-2 text-black"
        >
          <img src={callIcon} className="invert h-4 w-4" alt="" />
          <p>+91 9901717339</p>
        </a>

        <button className="bg-red-500 flex items-center gap-1 sm:gap-2 px-4 sm:px-8 py-2 flex-1 sm:flex-none cursor-pointer">
          <img src={downloadIcon} className="h-5 w-5" alt="" />
          <p>Download Brochure</p>
        </button>

        <button
          onClick={scrollToTop}
          className="cursor-pointer hidden sm:block absolute bottom-8 sm:right-1 md:right-10 lg:right-28 p-2 rounded-full bg-white"
        >
          <img src={arrowUpIcon} alt="" />
        </button>
      </div>
    </>
  );
};

export default BottomActionBar;
