import React from "react";
import { formBgImg } from "../assets/assets";
import { useDialog } from "../context/ContextProvider";

const BookSiteVisit = () => {
    const { isOpen, closeDialog } = useDialog();

  if (!isOpen) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-black/40 px-4 py-12 sm:py-20 mb-40 fixed left-0 top-0 w-full h-full z-50">
      <div className="relative w-full max-w-6xl overflow-hidden bg-white rounded-3xl shadow-xl grid grid-cols-1 md:grid-cols-2 my-10 scale-[.8]">
        {/* Close */}
        <button
          onClick={closeDialog}
          className="absolute top-4 right-6 text-xl font-bold z-10 cursor-pointer"
        >
          ✕
        </button>

        {/* Left Content */}
        <div className="relative p-6 sm:p-10 md:p-14 flex flex-col justify-start  text-[#4B4D4C]">
          <div>
            <p className="tracking-widest font-medium text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4 text-center md:text-left">
              LET US SHOW YOU AROUND
            </p>

            <h1 className="font-serif text-4xl sm:text-4xl lg:text-6xl leading-tight text-center md:text-left">
              Book a guided <br />
              site <span className="text-red-500">visit</span> at your <br />
              convenience.
            </h1>
          </div>

          {/* Background Image */}
          <div
            className="absolute -bottom-1/3 left-0 w-full h-full opacity-30  transform rotate-y-180 invert-25"
            style={{ backgroundImage: `url(${formBgImg})` }}
          />
        </div>

        {/* Right Form */}
        <div className="p-6 sm:p-8 md:p-12">
          <form className="space-y-4">
            <div>
              <label className="font-medium block text-sm mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="Enter your full name"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <div>
              <label className="font-medium block text-sm mb-1">
                Phone Number
              </label>
              <input
                required
                type="tel"
                placeholder="Enter your phone number"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <div>
              <label className="font-medium block text-sm mb-1">Email</label>
              <input
                required
                type="email"
                placeholder="Enter your Email ID"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <div>
              <label className="font-medium block text-sm mb-1">Message</label>
              <textarea
                required
                rows={3}
                placeholder="Enter your message here"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <div className="flex items-start gap-2 text-sm">
              <input
                required
                type="checkbox"
                defaultChecked
                className="mt-1 accent-[#EE1258]"
              />
              <p className="text-gray-600">
                By clicking, you agree to our{" "}
                <span className="text-blue-600 underline cursor-pointer">
                  Privacy Policy
                </span>{" "}
                and marketing communication
              </p>
            </div>

            <button
              onClick={() => closeDialog}
              type="submit"
              className="w-full mt-4 bg-[#EE1258] hover:bg-[#ff0051] text-white font-semibold py-3 rounded-full transition cursor-pointer"
            >
              Book an Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookSiteVisit;
