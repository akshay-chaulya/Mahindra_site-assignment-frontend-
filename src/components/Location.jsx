import React from "react";
import Title from "./Title";
import { mapImg } from "../assets/assets";
import BulletPointFlower from "./BulletPointFlower";

const Location = () => {
  return (
    <section
      className="max-w-7xl mx-auto
        px-4 py-12 sm:px-12 sm:py-16 xl:px-28 grid gap-8 lg:gap-6 grid-cols-1 lg:grid-cols-2"
    >
      <div className="flex flex-col gap-4">
        <Title
          zerothText="A Perfect"
          firstText="Location"
          thirdText="Everything You Need, Just Minutes Away"
        />
        <img src={mapImg} className="rounded-2xl block lg:hidden" alt="" />
        <div className="flex flex-col gap-2 justify-start">
          <div className="flex gap-2 items-start">
            <BulletPointFlower />
            <p>Abutting Hopefarm Channasandra Metro Station</p>
          </div>
          <div className="flex gap-2 items-start">
            <BulletPointFlower />
            <p>
              Key terminals within 1.3km radius – Whitefield railway station and
              Hopefarm bus stop
            </p>
          </div>
          <div className="flex gap-2 items-start">
            <BulletPointFlower />
            <p>Major IT parks within 2.5km radius – ITPL, new Google office</p>
          </div>
          <div className="flex gap-2 items-start">
            <BulletPointFlower />
            <p>
              Social infrastructure within 3km – Schools, colleges, hospitals,
              etc.
            </p>
          </div>
        </div>
      </div>
      <img src={mapImg} className="rounded-2xl hidden lg:block" alt="" />
    </section>
  );
};

export default Location;
