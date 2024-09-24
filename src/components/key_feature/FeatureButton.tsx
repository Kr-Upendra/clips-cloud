interface IFeatureButton {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  buttons: string[];
}

export default function FeatureButton({
  activeIndex,
  setActiveIndex,
  buttons,
}: IFeatureButton) {
  return (
    <div className="mt-8 flex flex-wrap gap-3 md:justify-center">
      {buttons.map((buttonText: string, index: number) => (
        <button
          key={buttonText}
          onClick={() => setActiveIndex(index)}
          className={`py-1.5 px-4 rounded-full transition-colors duration-700 ${
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
