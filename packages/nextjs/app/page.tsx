"use client";

import Link from "next/link";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <section className="mb-40">
        <div className="pd:pb-[90px] mx-auto flex max-w-screen-xl flex-col-reverse items-center justify-between gap-4 px-3 pb-10 pt-[80px] md:flex-row lg:gap-[72px] lg:px-0 lg:pt-[108px]">
          <div className="mt-10 flex flex-col items-start gap-6 md:mt-0">
            <h5 className="font-poppins text-[22px] font-medium tracking-[0.44px] text-para text-secondary">
              A Different Way to Keep Your Assets Safe
            </h5>
            <h1 className="font-poppins text-4xl font-bold text-[#031432] md:text-5xl md:leading-[120%]">
              Decentralized revolution!
            </h1>
            <p className="max-w-[452px] text-para">
              Embark on the decentralized revolution! Connect your wallet to get started
            </p>
            <Link href={"/dapp"}>
              <button
                type="button"
                className="bg-white text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 rounded-md border border-gray-300 px-4 py-2 text-sm font-medium transition-colors duration-300 ease-in-out"
              >
                Get Started
              </button>
            </Link>
          </div>

          <div className="max-h-[800px] max-w-[778px] mr-20 ">
            <img className="custom-animate size-full object-contain" src="/save1.png" alt="scaffold-pay" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
