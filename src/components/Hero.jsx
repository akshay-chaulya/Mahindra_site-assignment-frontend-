import { heroBg, heroGif, treeImg } from "../assets/assets";
import BulletPointFlower from "./BulletPointFlower";
import Title from "./Title";

const FEATURES = [
  "8 Acres | 1 Towers | 6 Wings | 733 Units",
  "Make it yours at just 7.5% down payment",
  "Abutting Hopefarm metro station",
  "IGBC Gold rated green home",
  "75+ Years of Mahindra Trust",
];

const Hero = () => {
  return (
    <section className="relative min-h-screen">
      {/* ================= DESKTOP ================= */}
      <div
        className="hidden sm:flex bg-cover bg-center relative overflow-hidden h-[130vh] items-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div
          className="
    absolute inset-y-0 left-0 w-[50%]
    backdrop-blur-sm
    bg-black/40
    mask-[linear-gradient(to_right,black_0%,black_70%,transparent_100%)]
    [-webkit-mask-image:linear-gradient(to_right,black_0%,black_70%,transparent_100%)]
  "
        ></div>
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/70 to-transparent" />

        <div className="relative z-10 px-16 mt-16 flex flex-col">
          <HeroContent />

          <FeatureList features={FEATURES} />
        </div>

        <div className="absolute bottom-0 right-1/5 ">
          <DoorItem />
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="sm:hidden relative">
        <img
          src={heroBg}
          alt="Hero Background"
          className="w-full h-[50vh] object-cover"
        />

        <div className="absolute top-2/5 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md px-4 z-10">
          <div className="relative backdrop-blur-md bg-linear-to-b from-black/40 via-black/30 to-black/40 border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
            <div className="relative px-8 py-10 text-center space-y-3">
              <HeroContent center />

              <FeatureList features={FEATURES} />
            </div>
          </div>
        </div>

        <div className="bg-black h-[110vh] relative">
          <img src={treeImg} alt="" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
            <DoorItem />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

const HeroContent = ({ center = false }) => (
  <div
    className={`max-w-xl text-white space-y-2 flex flex-col ${
      center ? "items-center text-center" : "items-center"
    }`}
  >
    <Title
      firstText="Mahindra"
      secondText="Blossom"
      thirdText="HOME OF POSITIVE ENERGY"
    />

    <p className="text-lg font-light">
      2, 3 & 4BHK premium homes in
      <br />
      Hopefarm Jn., Whitefield
    </p>

    <PriceButton />
  </div>
);

const PriceButton = () => (
  <button
    className="
      relative inline-flex items-center gap-2
      px-8 py-3
      text-white
      bg-black/40 backdrop-blur-md
      border border-white/30
      skew-x-[-10deg]
      hover:bg-black/60
      transition-all duration-300
    "
  >
    <span className="skew-x-10 text-3xl font-bold">₹1.88cr</span>
    <span className="skew-x-10 italic opacity-90">Onwards</span>
  </button>
);

const FeatureList = ({ features }) => (
  <div className="space-y-3 pt-4">
    {features.map((text, i) => (
      <FeatureItem key={i} text={text} />
    ))}
  </div>
);

const FeatureItem = ({ text }) => (
  <div className="flex  gap-3 text-left group hover:translate-x-1 transition-transform duration-200">
    <BulletPointFlower />

    <p className="text-white font-light leading-relaxed text-[clamp(0.85rem,1.8vw,1rem)]">
      {text}
    </p>
  </div>
);

const DoorItem = () => (
  <div className="relative">
    <div className="bg-linear-to-b from-gray-100 to-white w-75 h-125 rounded-t-full shadow-2xl overflow-hidden border-8 border-b-0 border-white">
      <img src={heroGif} className="w-full h-full object-cover" alt="Door" />
    </div>
  </div>
);
