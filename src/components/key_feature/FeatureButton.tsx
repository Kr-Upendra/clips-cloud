export default function FeatureButton({ activeIndex, setActiveIndex }: any) {
  const buttons = [
    "Easy Downloads",
    "Infinite Platforms",
    "High-Quality Media",
    "Secure and Private",
  ];

  return (
    <div className="mt-8 flex flex-wrap gap-3 md:justify-center">
      {buttons.map((buttonText, index) => (
        <button
          key={buttonText}
          onClick={() => setActiveIndex(index)}
          className={`py-1.5 px-4 text-xs rounded-full transition-colors duration-700 ${
            index === activeIndex
              ? "bg-[#5900ff] text-white"
              : "bg-white text-black hover:bg-[#5900ff] hover:text-white"
          }`}
        >
          {buttonText}
        </button>
      ))}
    </div>
  );
}
