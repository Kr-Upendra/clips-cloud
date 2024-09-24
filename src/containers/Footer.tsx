import Link from "next/link";

export default function Footer() {
  return (
    <div className="px-14 lg:px-9 md:px-6 sm:px-4 py-20 pb-28 bg-zinc-950 ">
      <div>
        <div className="flex items-center justify-between md:flex-col md:gap-y-3">
          <Link href="/">
            <h1 className="text-xl text-white">Clips Cloud</h1>
          </Link>

          <Link href="/">
            <span className="text-gray-500">Contact Us</span>
          </Link>

          <Link href="/">
            <span className="text-gray-500">Privacy & Terms</span>
          </Link>

          <span className="text-gray-500">
            @2024 Clips cloud | All rights reserved
          </span>
        </div>
      </div>
    </div>
  );
}
