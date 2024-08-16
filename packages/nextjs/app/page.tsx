"use client";

import React from "react";
import type { NextPage } from "next";
import Hero from "~~/components/hero/Hero";
import Calculate from "~~/components/sections/Calculate";
import Features from "~~/components/sections/Features";
import Footer from "~~/components/sections/Footer";
import Stats from "~~/components/stats/Stats";
import Why from "~~/components/stats/Why";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Why />
      <Calculate />
      <Features />
      <Footer />
    </>
  );
};

export default Home;
