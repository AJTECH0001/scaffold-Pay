import React from "react";

const Why = () => {
  return (
    <section className="section">
      <div className="container mt-10 mx-auto">
        <div className="flex flex-col items-center lg:flex-row gap-x-8">
          <div className="order-1 lg:order-2 max-w-[480px]" data-aos="fade-left" data-aos-offset="400">
            <h2 className="section-title">Why you Should choose CRAPPO</h2>
            <p className="section-subtitle">
              Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake
              reviews.
            </p>
          </div>
          <div className="order-1 lg:order-2 max-w-[480px]" data-aos="fade-left" data-aos-offset="400">
            <h2 className="section-title">Why you Should choose CRAPPO</h2>
            <p className="section-subtitle">
              Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake
              reviews.
            </p>
            <button className="btn px-6">Learn more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
