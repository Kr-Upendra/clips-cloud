import Image from "next/image";
import { testimonials } from "@/utils";

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
          {testimonials.map((testimonial: any) => (
            <div
              className="border p-3 py-5 rounded-lg relative border-gray-800 shadow-xl"
              key={testimonial?.id}
            >
              <div className="flex items-center gap-x-3">
                <Image
                  src={testimonial?.userProfile}
                  className="selector"
                  alt={testimonial?.user}
                  width={40}
                  height={40}
                />
                <h1 className="text-white">{testimonial?.user}</h1>
              </div>

              <div className="rounded-b-lg px-2 pt-4">
                <h1 className="text-gray-300 mb-2">{testimonial?.title}</h1>
                <p className="text-gray-500">{testimonial?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
