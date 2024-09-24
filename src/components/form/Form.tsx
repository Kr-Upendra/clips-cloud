"use client";

import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa6";

export default function Form() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <form>
      <div className="border bg-white mt-4 p-2 rounded-md">
        <div className="flex">
          <input
            type="text"
            placeholder="Paste or enter video link here..."
            className="px-2 outline-none border-none text-[#5900ff] text-lg py-2 w-[350px] xs:w-full"
            autoFocus
          />

          <button className="px-4 ml-2 py-2 bg-[#5900ff] text-white rounded-lg">
            {isMobile ? <FaDownload /> : "Download"}
          </button>
        </div>
      </div>
    </form>
  );
}
