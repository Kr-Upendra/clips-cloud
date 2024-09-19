import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="min-h-screen bg-image px-12 lg:px-9 md:px-6 sm:px-4">
      <div className="px-40 flex flex-col justify-center min-h-screen items-center">
        <h1 className="text-6xl text-white text-center font-bold">
          Download <span className="text-indigo-800">Social Clips</span>{" "}
          Instantly
        </h1>
        <p className="mt-6 mb-4 text-white">
          Easily grab media from YouTube, Instagram, Twitter, and more with just
          a click.
        </p>
        <div className="flex gap-x-3 items-center">
          <button className="py-2 px-6 rounded-full text-white bg-gradient-to-r from-indigo-950 to-indigo-600/90">
            Get Started
          </button>
          <button className="py-2 px-6 rounded-full text-white bg-gradient-to-r from-indigo-950 to-indigo-600/90">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
