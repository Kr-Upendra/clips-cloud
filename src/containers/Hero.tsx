export default function Hero() {
  return (
    <section className="min-h-screen bg-image px-12 lg:px-9 md:px-6 sm:px-4">
      <div className="px-40 md:px-0 flex flex-col justify-center min-h-screen items-center">
        <h1 className="text-6xl sm:text-3xl md:text-4xl lg:text-5xl text-white text-center font-bold">
          Download <span className="text-[#5900ff]">Social Clips</span>{" "}
          Instantly
        </h1>
        <p className="mt-6 text-lg mb-4 text-white">
          Easily grab media from YouTube, Instagram, Twitter, and more with just
          a click.
        </p>
        <div className="flex gap-x-3 items-center">
          <button className="py-2 px-6 rounded-full text-white bg-gradient-to-r from-[#5900ff] to-[#3b00a8]">
            Get Started
          </button>
          <button className="py-2 px-6 rounded-full text-white bg-gradient-to-r from-[#5900ff] to-[#3b00a8]">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
