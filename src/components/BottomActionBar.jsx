import {
  arrowUpIcon,
  callIcon,
  downloadIcon,
  timerIcon,
  wpIcon,
} from "../assets/assets";

const BottomActionBar = () => {
  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-20 right-1/6 z-50">
        <button className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-xl overflow-hidden">
          {/* ADD WHATSAPP IMAGE HERE */}
          <img src={wpIcon} alt="" />
        </button>
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white flex items-center justify-center text-white z-100">
        <button className="bg-red-500 items-center gap-2 px-8 py-2 hidden sm:flex">
          <img src={timerIcon} className="h-5 w-5" alt="" />
          <p>Book a Site Visit</p>
        </button>
        <button className="flex items-center gap-2 px-8 py-2 text-black">
          <img src={callIcon} className="invert h-4 w-4 " alt="" />
          <p>+91 9901717339</p>
        </button>
        <button className="bg-red-500 flex items-center gap-2 px-8 py-2">
          <img src={downloadIcon} className="h-5 w-5" alt="" />
          <p>Download Brochure</p>
        </button>

        <button className="hidden sm:block absolute bottom-6 sm:right-1 md:right-10 lg:right-28 p-2 rounded-full bg-white">
          <img src={arrowUpIcon} alt="" />
        </button>
      </div>
    </>
  );
};

export default BottomActionBar;

const ActionItem = ({ text, red = false, icon }) => {
  return (
    <button
      className={`flex items-center gap-2 px-6 py-3 text-sm font-medium whitespace-nowrap
        ${red ? "bg-red-500 text-white" : ""}
        ${!red ? "bg-white text-black" : ""}
        ${icon ? "bg-white text-gray-800" : ""}
      `}
    >
      {/* ICON PLACEHOLDER */}
      {icon && <span className="text-lg">📞</span>}
      {text}
    </button>
  );
};
