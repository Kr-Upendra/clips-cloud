import Image from "next/image";
import youtube from "../../public/platform/youtube.svg";
import instagram from "../../public/platform/instagram.svg";
import facebook from "../../public/platform/facebook.svg";
import x from "../../public/platform/x.svg";
import Link from "next/link";

const images = [youtube, instagram, facebook, x];
const platforms = ["Youtube", "Instagram", "Facebook", "X (Twitter)"];

export default function Platform() {
  return (
    <section
      id="key-feature"
      className="bg-zinc-950 py-10 md:py-8 sm:py-6 px-12 lg:px-9 md:px-6 sm:px-4"
    >
      <div>
        <div className="text-center">
          <h1 className="text-4xl sm:text-2xl text-white mb-2 font-bold">
            Platforms We Support
          </h1>
          <p className="text-gray-500">
            We are continually expanding our platform support to enhance your
            experience.
          </p>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-6 mt-10">
          {Array.from({ length: 4 }).map((_, index: number) => (
            <div
              className="border rounded-lg relative border-gray-800 shadow-xl pb-5 pt-4"
              key={index}
            >
              <Link href={`${platforms[index].toLowerCase()}`} className="">
                <div className="text-center">
                  <Image
                    src={images[index]}
                    className="mx-auto select-none selector"
                    alt="instagram logo"
                    width={170}
                    height={170}
                  />
                </div>
                <div className="text-center">
                  <h1 className="text-xl text-white font-bold mb-3">
                    {platforms[index]}
                  </h1>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
