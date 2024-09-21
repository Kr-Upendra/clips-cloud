import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full pt-2 pb-8 z-50 bg-gradient-to-b from-[#5900ff59] to-indigo-600/0 px-12 lg:px-9 md:px-6 sm:px-4">
      <div className="flex justify-between items-center">
        <Link href="/">
          <h1 className="text-white text-base">Clips Cloud</h1>
        </Link>
        <Link href="/">
          <span className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-900 to-indigo-600/90 text-white">
            Get Started
          </span>
        </Link>
      </div>
    </header>
  );
}
