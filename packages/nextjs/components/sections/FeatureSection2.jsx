import React from "react";


const FeatureSection2 = () => {
  return (
    <section className="py-[30px] lg:py-[120px]">
      <div className="container mx-auto">
        <div className="flex flex-col justify-end items-center lg:flex-row">
          {/* images */}
          <div
            className="flex-1 lg:absolute lg:left-0 order-2 lg:order-1"
            data-aos="fade-right"
            data-aos-offset="400"
          >
            <img src="/feature-2-img.png" alt="image2" draggable="false" />
          </div>
          {/* text */}
          <div
            className="flex-1 max-w-[500px]"
            data-aos="fade-left"
            data-aos-offset="400"
          >
            <h3 className="h3 mb-6">Detailed Statistics</h3>
            <p className="text-slate-700 mb-8">
              View all mining related information in realtime, at any point at
              any location and decide which polls you want to mine in.
            </p>
            <button className="btn px-8 mb-6 lg:mb-0 mx-auto lg:mx-0">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection2;
