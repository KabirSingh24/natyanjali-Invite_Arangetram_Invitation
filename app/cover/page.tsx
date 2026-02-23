"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CoverPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#3b0000] via-[#6b0000] to-black px-4">
      {/* Decorative PNG Window */}

      <div className="relative w-[100%] max-w-md sm:max-w-xl md:max-w-2xl drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
        <div className="relative min-h-[520px] sm:min-h-[600px] md:min-h-[680px]">
          <Image
            src="/card.png"
            alt="Decorative Window"
            fill
            className="object-contain rounded-2xl sm:rounded-3xl md:rounded-[40px]"
            priority
          />
        </div>

        {/* Content Card On Top */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 -translate-y-7 sm:translate-y-0"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-yellow-300 tracking-widest">
            Natyanjali
          </h2>

          <p className="mt-3 text-sm sm:text-lg md:text-xl text-gray-200">
            With divine blessings of
          </p>

          <p className="mt-1 text-lg sm:text-2xl md:text-3xl text-yellow-400 font-semibold">
            Lord Natraj
          </p>

          <button
            onClick={() => router.push("/invite")}
            className="mt-3 cursor-pointer px-5 py-1.5 sm:px-6 sm:py-2 bg-gradient-to-r from-yellow-600 to-yellow-400 text-black text-xs sm:text-sm rounded-full hover:scale-105 transition duration-300 shadow-lg"
          >
            Open Invitation
          </button>
        </motion.div>
      </div>
    </div>
  );
}
