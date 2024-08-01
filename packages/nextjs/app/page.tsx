"use client";

import React from "react";
import type { NextPage } from "next";
import Calculate from "~~/components/Calculate";
import Hero from "~~/components/Hero";
import Stats from "~~/components/Stats";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Stats />

      <Calculate />
    </>
  );
};

export default Home;
