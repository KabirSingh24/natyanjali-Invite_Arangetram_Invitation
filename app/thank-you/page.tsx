"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"

export default function ThankYouPage() {
  const router = useRouter()

  return (
    <div className="bg-[#3b0000] text-white">

      {/* Section 1 – Hero */}
      <div className="relative h-[80vh] flex items-center justify-center text-center">
        <Image
          src="/thankyou.jpg"
          alt="Welcome"
          fill
          className="object-cover opacity-50"
        />
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-5xl font-serif text-yellow-300">
            Welcome With Blessings
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            We Await You & Your Family
          </p>
        </div>
      </div>

      {/* Section 2 – Food */}
      <div className="flex flex-col md:flex-row items-center py-16 px-6 gap-10">
        <div className="md:w-1/2">
          <Image
            src="/food.jpg"
            alt="Food"
            width={400}
            height={100}
            className="rounded-xl shadow-xl"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl text-yellow-400 font-semibold">
            Traditional Cuisine
          </h2>
          <p className="mt-4 text-gray-200">
            Pure Veg • Sweets • South Indian Special
          </p>
        </div>
      </div>

      {/* Section 3 – Dance */}
      <div className="flex flex-col md:flex-row-reverse items-center py-16 px-6 gap-10 bg-[#4b0000]">
        <div className="md:w-1/2">
          <Image
            src="/dance.jpg"
            alt="Dance"
            width={600}
            height={400}
            className="rounded-xl shadow-xl"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl text-yellow-400 font-semibold">
            Classical Dance
          </h2>
          <p className="mt-4 text-gray-200">
            Bharatanatyam • Cultural Celebration
          </p>
        </div>
      </div>

      {/* Section 4 – Family */}
      <div className="flex flex-col md:flex-row items-center py-16 px-6 gap-10">
        <div className="md:w-1/2">
          <Image
            src="/family.jpg"
            alt="Family"
            width={600}
            height={400}
            className="rounded-xl shadow-xl"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl text-yellow-400 font-semibold">
            Celebration Together
          </h2>
          <p className="mt-4 text-gray-200">
            Blessings • Joy • Togetherness
          </p>
        </div>
      </div>

      {/* Final Section */}
      <div className="text-center py-20 bg-black">
        <h2 className="text-3xl text-yellow-300 font-serif">
          Thank You
        </h2>

        <button
          onClick={() => router.push("/")}
          className="mt-8 px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-red-900 font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105"
        >
          Back to Home
        </button>
      </div>

    </div>
  )
}