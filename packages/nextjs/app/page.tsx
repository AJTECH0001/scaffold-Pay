"use client";

import React from "react";
import type { NextPage } from "next";
import Stats from "~~/components/Stats/Stats";
import Why from "~~/components/Stats/Why";
import Hero from "~~/components/hero/Hero";
import Calculate from "~~/components/sections/Calculate";
import Features from "~~/components/sections/Features";
import Footer from "~~/components/sections/Footer";
import NewsLetter from "~~/components/sections/NewsLetter";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Why />
      <Calculate />
      <Features />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
