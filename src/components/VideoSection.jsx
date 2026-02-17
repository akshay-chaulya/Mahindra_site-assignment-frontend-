import { useRef, useState } from "react";
import { apartmentImg, playIcon } from "../assets/assets";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);

    setTimeout(() => {
      videoRef.current?.play();
    }, 50);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <div
      className="overflow-hidden absolute -top-1/3 left-1/2 -translate-x-1/2 w-4/5 sm:w-2/3 bg-cover bg-center min-h-80 rounded-2xl sm:rounded-4xl flex flex-col text-white justify-end items-center relative"
      style={{ backgroundImage: `url(${apartmentImg})` }}
    >
      {/* Gradient overlay */}
      <div className="bg-linear-to-t from-black/80 via-black/20 to-black/40 w-full h-full absolute" />

      {/* VIDEO */}
      {isPlaying && (
        <video
          ref={videoRef}
          src="/your-video.mp4"  // 👈 replace with your video path
          className="absolute inset-0 w-full h-full object-cover z-20"
          controls
          onPause={handlePause}
        />
      )}

      {/* PLAY BUTTON + TEXT */}
      {!isPlaying && (
        <>
          <img
            src={playIcon}
            onClick={handlePlay}
            className="w-22 h-22 invert absolute top-1/2 left-1/2 -translate-1/2 z-10 cursor-pointer"
            alt="Play"
          />

          <h1 className="inline-flex mb-4 text-xl sm:text-3xl z-10 text-center">
            Take The Virtual Tour
          </h1>
        </>
      )}
    </div>
  );
};

export default VideoSection;