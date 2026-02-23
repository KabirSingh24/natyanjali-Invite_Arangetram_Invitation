"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function InvitePage() {
  const [open, setOpen] = useState(false);
  const [showCards, setShowCards] = useState(false);
  const router = useRouter();

  const cardImages = [
    "/card1.jpeg",
    "/card2.jpeg",
    "/card3.jpeg",
    "/card4.jpeg",
    "/card5.jpeg",
    "/card6.jpeg",
  ];

  const handleOpen = () => {
    setOpen(true);

    // Wait for animation to finish before showing cards
    setTimeout(() => {
      setShowCards(true);
    }, 1600); // match animation duration
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#3b0000] via-[#6b0000] to-black overflow-hidden">
      {/* Envelope Section */}
      {!showCards && (
        <div className="flex items-center justify-center min-h-screen">
          <div className="relative w-[320px] h-[220px] sm:w-[400px] sm:h-[260px]">
            {/* Envelope Body */}
            <div className="absolute inset-0 bg-[#7a0000] rounded-md shadow-2xl border-2 border-yellow-600"></div>

            {/* Flap */}
            <motion.div
              initial={false}
              animate={{ rotateX: open ? 180 : 0 }}
              transition={{ duration: 1 }}
              style={{ transformOrigin: "top" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-[#990000] border-b-2 border-yellow-600 rounded-t-md"
            />

            {/* Inside Card */}
            <motion.div
              initial={false}
              animate={{ y: open ? -500 : 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="absolute inset-4 bg-white rounded-md shadow-lg flex items-center justify-center text-center p-4"
            >
              <div>
                <h2 className="text-xl font-serif text-red-900">
                  With Warm Hearts
                </h2>
                <p className="mt-2 text-sm text-gray-700">
                  Click to open your invitation
                </p>
              </div>
            </motion.div>

            <div
              onClick={handleOpen}
              className="absolute inset-0 cursor-pointer"
            ></div>
          </div>
        </div>
      )}

      {/* Snap Scroll Cards */}
      {showCards && (
        <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
          {cardImages.map((src, index) => (
            <div
              key={index}
              className="min-h-screen flex flex-col items-center justify-center snap-start py-10"
            >
              <Image
                src={src}
                alt={`Card ${index + 1}`}
                width={700}
                height={1200}
                className="w-[92%] max-w-lg object-contain rounded-xl shadow-2xl"
              />

              {/* Show button only on last card */}
              {index === cardImages.length - 1 && (
                <div className="mt-8 flex flex-col items-center gap-4">
                  {/* Download Button */}
                  <a
                    href="/Arangetram_Invitation.pdf"
                    download
                    className="px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-red-900 font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Download Invitation PDF
                  </a>

                  {/* Continue Button */}
                  <button
                    onClick={() => router.push("/thank-you")}
                    className="px-6 py-3 border border-yellow-500 text-yellow-300 rounded-full hover:bg-yellow-500 hover:text-red-900 transition-all duration-300"
                  >
                    Continue
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
