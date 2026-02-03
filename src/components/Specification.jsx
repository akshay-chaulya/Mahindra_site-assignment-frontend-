import {
  balconyImg,
  bathroomImg,
  bedRoomImg1,
  kitchenRoomImg1,
} from "../assets/assets";
import BulletPointFlower from "./BulletPointFlower";
import Title from "./Title";

const specifications = [
  {
    name: "Doors, Windows & Railings",
    img: balconyImg,
    list: [
      "uPVC windows. Balcony with SS and glass railing.",
      "Main door, Interior and Toilet doors - Engineered wooden door frame and flush door shutter.",
      "Balcony and utility - uPVC door.",
      "Smart door locks.",
    ],
  },
  {
    name: "Walls",
    img: bedRoomImg1,
    list: [
      "Living, Dining, Bedrooms, Kitchen - Emulsion Paint for walls and oil bound distemper for ceiling.",
      "Exterior paint for external finish and enamel paint for MS grills and railings.",
    ],
  },
  {
    name: "CP & Sanitary fittings",
    img: bathroomImg,
    list: ["Chromium Plated Fittings of reputed make."],
  },
  {
    name: "Floor Finishes",
    img: kitchenRoomImg1,
    list: [
      "Large format Vitrified tiles in living & dining room, bedrooms and kitchen.",
      "Anti-skid ceramic tiles in bathrooms and utility.",
      "Balcony and utility - uPVC door.",
      "Smart door locks.",
    ],
  },
];

const Specification = () => {
  return (
    <section
      className="max-w-7xl mx-auto
        px-4 py-12 sm:px-12 sm:py-16 xl:px-28"
    >
      <Title
        zerothText="Smart Specifications"
        thirdText="Where Quality Meets Functionality"
      />

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {specifications.map((spec, idx) => (
          <div
            key={idx}
            className="rounded-2xl overflow-hidden shadow-2xl pb-6 text-[#4B4D4C] min-h-112"
          >
            <img src={spec.img} className="w-full h-50 object-cover" alt="" />
            <div className="px-6 flex flex-col gap-6 pt-6">
              <p className="text-md font-semibold text-center ">
                {spec.name}
              </p>

              <div className="space-y-2">
                {spec.list.map((item, idx) => (
                  <div key={idx} className="flex gap-2 items-start">
                    <BulletPointFlower />
                    <p className="text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specification;
