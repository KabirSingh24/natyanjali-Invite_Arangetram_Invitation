"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/download.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 -z-10"></div>

      {/* Main Title */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-yellow-300 drop-shadow-xl tracking-widest">
        Natyanjali
      </h1>

      <p className="mt-2 text-lg sm:text-2xl text-gray-200 tracking-wide">
        presents
      </p>

      {/* God Image */}
      <div className="mt-10 w-[180px] sm:w-[240px] md:w-[260px] rounded-t-[120px] overflow-hidden shadow-2xl border-4 border-yellow-500">
        <Image
          src="/natraj.png"
          alt="Natraj"
          width={900}
          height={800}
          className="object-cover w-full"
        />
      </div>

      {/* Arangetram Text */}
      <div className="mt-8 max-w-md sm:max-w-xl px-4">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-serif text-yellow-400 tracking-wider">
          Arangetram of
        </h2>

        {/* Student Names */}
        <div className="mt-4 grid grid-cols-2 gap-2 text-white text-base sm:text-xl font-medium">
          <span>Aashna</span>
          <span>Ananya</span>
          <span>Avani</span>
          <span>Dwithi</span>
          <span>Mona</span>
          <span>Shreya</span>
          <span>Tanvi</span>
        </div>

        <p className="mt-3 text-sm sm:text-lg text-gray-300 italic">
          Disciples of Guru Shri Jaychandran
        </p>
      </div>

      {/* Button */}
      <button
        onClick={() => router.push("/cover")}
        className="mt-12 cursor-pointer px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-red-700 to-black text-white text-sm sm:text-lg rounded-full hover:scale-105 transition duration-300 shadow-2xl"
      >
        Generate Invitation
      </button>
    </div>
  );
}
