import React, { useRef, useState } from "react";
import { apartmentImg, footerVideo, playIcon } from "../assets/assets";

const Footer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);

    setTimeout(() => {
      videoRef.current?.play();
    }, 50);
  };

  return (
    <footer className="w-full pt-50">
      {/* Footer content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16 bg-[#ED3237] text-white min-h-110 flex flex-col justify-end">
        {/* Floating virtual tour card */}
        <div
          className="overflow-hidden absolute -top-1/3 left-1/2 -translate-x-1/2 w-4/5 sm:w-2/3 bg-cover bg-center min-h-80 rounded-2xl sm:rounded-4xl flex flex-col text-white justify-end items-center"
          style={{ backgroundImage: `url(${apartmentImg})` }}
        >
          {/* Gradient overlay */}
          <div className="bg-linear-to-t from-black/80 via-black/20 to-black/40 w-full h-full absolute" />

          {/* VIDEO */}
          {isPlaying && (
            <video
              ref={videoRef}
              src={footerVideo} 
              className="absolute inset-0 w-full h-full object-cover z-20"
              controls
              onPause={() => setIsPlaying(false)}
            />
          )}

          {/* Play icon */}
          {!isPlaying && (
            <img
              onClick={handlePlay}
              src={playIcon}
              className="w-22 h-22 invert absolute top-1/2 left-1/2 -translate-1/2 z-1"
              alt="Play"
            />
          )}

          <h1 className="inline-flex mb-4 text-xl sm:text-3xl z-10 text-center">
            Take The Virtual Tour
          </h1>
        </div>
        {/* RERA info */}
        <div className="space-y-2 text-center text-sm sm:text-base opacity-90 mt-32 sm:mt-0">
          <p>PROJECT RERA No: PRM/KA/RERA/1251/446/PR/171225/008348</p>
          <p>AGENT RERA No.: PRM/KA/RERA/1251/446/AG/240723/004988</p>
        </div>

        {/* Divider */}
        <hr className="my-8 border-t border-[#fc565c]/80" />

        {/* Bottom row */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-sm sm:text-base">
          {/* Links */}
          <div className="flex items-center justify-center sm:justify-start gap-4 opacity-80">
            <p className="cursor-pointer hover:opacity-75">DISCLAIMER</p>
            <span>|</span>
            <p className="cursor-pointer hover:opacity-75">PRIVACY POLICY</p>
          </div>

          {/* Copyright */}
          <p className="text-center sm:text-right">
            © 2025 Mahindra Blossom. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
