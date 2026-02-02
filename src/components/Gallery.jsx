import {
  balconyImg,
  bedRoomImg2,
  cricketNetsImg,
  gardenImg2,
  gymImg,
  jaggingTrackImg,
  kitchenRoomImg1,
  landscapedGardenImg,
  partyImg,
  swimmingPoolImg,
  tennisCourtImg,
  ventilatedFlatsImg,
} from "../assets/assets";
import Title from "./Title";

const Gallery = () => {
  return (
    <section
      className="max-w-7xl mx-auto
        px-4 py-12 sm:px-12 sm:py-16 xl:p-28"
    >
      <Title
        firstText="Amenities"
        secondText="for Every Age, Every Mood"
        thirdText="Premium amenities that transform your home into a private retreat."
      />

      {/* Image gallery   */}
      <div
        className="
    grid
    grid-cols-6
    sm:grid-cols-12
    auto-rows-[180px]
    gap-4
  "
      >
        {/* Image 1 – Tall (Row span 2) */}
        <GalleryCard
          img={gardenImg2}
          title="Aromatic Garden"
          className="col-span-6 sm:col-span-4 sm:row-span-2"
        />

        {/* Row 1 */}
        <GalleryCard
          img={kitchenRoomImg1}
          title="Spacious Kitchen"
          className="col-span-2 sm:col-span-3"
        />
        <GalleryCard img={partyImg} title="Party Lawn" className="col-span-4 sm:col-span-5" />

        {/* Row 2 */}
        <GalleryCard
          img={tennisCourtImg}
          title="Multipurpose Court"
          className="col-span-4 sm:col-span-5"
        />
        <GalleryCard
          img={bedRoomImg2}
          title="Modern Bedroom"
          className="col-span-2 sm:col-span-3"
        />
        {/* Row 3 – Equal */}
        <GalleryCard img={gymImg} title="Gym" className="col-span-3 sm:col-span-4" />
        <GalleryCard
          img={cricketNetsImg}
          title="Cricket Nets"
          className="col-span-3 sm:col-span-4"
        />
        <GalleryCard
          img={swimmingPoolImg}
          title="Swimming Pool"
          className="col-span-6 sm:col-span-4"
        />

        {/* Row 4 – 4 Equal */}
        <GalleryCard
          img={landscapedGardenImg}
          title="Landscaped Garden"
          className="col-span-3"
        />
        <GalleryCard
          img={ventilatedFlatsImg}
          title="Ventilated Flats"
          className="col-span-3"
        />
        <GalleryCard
          img={balconyImg}
          title="Large Balcony"
          className="col-span-3"
        />
        <GalleryCard
          img={jaggingTrackImg}
          title="Jogging Track"
          className="col-span-3"
        />
      </div>
    </section>
  );
};

export default Gallery;

const GalleryCard = ({ img, title, className }) => (
  <div
    className={`
      group relative overflow-hidden rounded-2xl cursor-pointer
      ${className}
    `}
  >
    {/* Image */}
    <img
      src={img}
      alt={title}
      className="
        w-full h-full object-cover
        transition-transform duration-700 ease-out
        group-hover:scale-110
        will-change-transform
      "
    />

    {/* Overlay */}
    <div
      className="
        absolute inset-0
        bg-gradient-to-t from-black/60 via-black/20 to-transparent
        opacity-90
      "
    />

    {/* Label */}
    <p
      className="
        absolute bottom-3 left-1/2 -translate-x-1/2
        text-white font-semibold text-sm
        transition-all duration-500
        group-hover:bottom-4
      "
    >
      {title}
    </p>
  </div>
);
