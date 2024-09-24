const featuresList = [
  "Download videos and photos in seconds with minimal steps.",
  "Compatible with YouTube, Instagram, Twitter, and more.",
  "Save your media in HD or the format of your choice.",
  "Your downloads are safe and private. We do not track your data.",
];

export default function KeyFeatureList() {
  return (
    <div className="ml-4">
      <ul>
        {featuresList.map((featureList: string, index: number) => (
          <li className="list-disc" key={index}>
            <span className="text-gray-500">{featureList}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
