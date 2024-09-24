import Form from "@/components/form/Form";

export default function Youtube() {
  return (
    <section className="min-h-screen bg-zinc-950 px-12 lg:px-9 md:px-6 sm:px-4">
      <div className="px-40 md:px-0 flex flex-col justify-center min-h-screen items-center">
        <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-white text-center font-bold">
          Download <span className="text-[#5900ff]">Youtube</span> Video
        </h1>
        <Form />
      </div>
    </section>
  );
}
