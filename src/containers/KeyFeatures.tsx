"use client";

import Image from "next/image";
import download from "../../public/temp/download.png";
import platforms from "../../public/temp/platforms.png";
import quality from "../../public/temp/quality.png";
import security from "../../public/temp/security.png";
import FeatureButton from "@/components/key_feature/FeatureButton";
import KeyFeatureList from "@/components/key_feature/KeyFeatureList";
import { useEffect, useState } from "react";

export default function KeyFeatures() {
  const buttons = [
    "Easy Downloads",
    "Infinite Platforms",
    "High-Quality Media",
    "Secure and Private",
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % buttons.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [buttons.length]);

  const images = [download, platforms, quality, security];

  return (
    <section
      id="key-feature"
      className="bg-zinc-950 py-10 md:py-8 sm:py-6 px-12 lg:px-9 md:px-6 sm:px-4"
    >
      <div className="grid grid-cols-2 gap-5 min-h-[90vh] md:grid-cols-1">
        <div className="w-full flex justify-center items-start flex-col md:items-center">
          <div className="mb-5">
            <h1 className="text-2xl font-medium text-white">Key Features</h1>
          </div>
          <KeyFeatureList />
          <FeatureButton
            buttons={buttons}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </div>
        <div className="w-full relative md:mt-7">
          <div className="text-center">
            <Image
              src={images[activeIndex]}
              width={250}
              className="mx-auto rounded-md lg:w-[220px] sm:w-[180px] selector"
              height={250}
              alt="Feature Image"
            />
          </div>
          <div className="text-center absolute top-0 -left-10 md:left-0 ">
            <Image
              src={images[(activeIndex + 1) % images.length]}
              width={100}
              className="mx-auto rounded-md opacity-20 lg:w-[80px] sm:w-[60px] selector"
              height={250}
              alt="Feature Image"
            />
          </div>
          <div className="text-center absolute top-32 -right-10 md:right-0">
            <Image
              src={images[(activeIndex + 2) % images.length]}
              width={100}
              className="mx-auto rounded-md opacity-20 lg:w-[80px] sm:w-[60px] selector"
              height={250}
              alt="Feature Image"
            />
          </div>

          <div className="text-center absolute bottom-0 -left-10 md:left-0">
            <Image
              src={images[(activeIndex + 3) % images.length]}
              width={100}
              className="mx-auto rounded-md opacity-20 lg:w-[80px] sm:w-[60px] selector"
              height={250}
              alt="Feature Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
