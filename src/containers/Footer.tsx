import Link from "next/link";
import logo from "../../public/logo.png";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="px-14 lg:px-9 md:px-6 sm:px-4 py-20 pb-28 bg-zinc-950 ">
      <div>
        <div className="flex items-center justify-between md:flex-col md:gap-y-3">
          <Link href="/">
            <Image
              className="selector"
              src={logo}
              alt="Clips Cloud Logo"
              width={120}
              height={40}
            />
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
