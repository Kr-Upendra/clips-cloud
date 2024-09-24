import Image from "next/image";
import user_01 from "../../public/users/user_01.png";
import user_02 from "../../public/users/user_02.png";
import user_03 from "../../public/users/user_03.png";
import user_04 from "../../public/users/user_04.png";
import user_05 from "../../public/users/user_05.png";
import user_06 from "../../public/users/user_06.png";
import user_07 from "../../public/users/user_07.png";
import user_08 from "../../public/users/user_08.png";
import user_09 from "../../public/users/user_09.png";

const usersImage = [
  user_01,
  user_02,
  user_03,
  user_04,
  user_05,
  user_06,
  user_07,
  user_08,
  user_09,
];

export default function Feedback() {
  return (
    <section
      id="key-feature"
      className="bg-zinc-950 py-10 md:py-8 sm:py-6 px-12 lg:px-9 md:px-6 sm:px-4"
    >
      <div>
        <div className="text-center">
          <h1 className="text-4xl sm:text-2xl text-white mb-2 font-bold">
            We Value Your Feedback
          </h1>
          <p className="text-gray-500">
            Discover what our users are saying and join the conversation!
          </p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-6 mt-10">
          {Array.from({ length: 6 }).map((_, index: number) => (
            <div
              className="border p-3 py-5 rounded-lg relative border-gray-800 shadow-xl"
              key={index}
            >
              <div className="flex items-center gap-x-3">
                <Image
                  src={usersImage[index]}
                  className="selector"
                  alt="instagram logo"
                  width={40}
                  height={40}
                />
                <h1 className="text-white">Alex Jordan</h1>
              </div>

              <div className="rounded-b-lg px-2 py-3">
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Iusto, perferendis. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Corrupti hic porro doloribus nam tenetur
                  nemo!
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
