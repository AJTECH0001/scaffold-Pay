import React from "react";
//components
import CalcForm from "./CalcForm";

const Calculate = () => {
  return (
    <section className="">
      <div className="container mt-10 mx-auto">
        {/* text */}
        <div className="text-center">
          <h2
            className=""
            data-aos="fade-up"
            data-aos-offset="400"
          >
            Check how much you can earn.
          </h2>
          <p
            className=" text-lg mb-16 max-w-[622px] mx-auto"
            data-aos="fade-up"
            data-aos-offset="450"
          >
            Let&apos;s check your hash rate to see how much you will earn today.
          </p>
        </div>
        {/* form */}
        <CalcForm />
      </div>
    </section>
  );
};

export default Calculate;
