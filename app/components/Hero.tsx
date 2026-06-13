// components/Hero.tsx

import Image from "next/image";
import Link from "next/link";
import Homepageimage from "../../public/vegetable-removebg-preview (1).webp"

export default function Hero() {

  
  return (
    <section className="bg-green-50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-5 py-12 sm:px-8 md:grid-cols-2 md:py-14 lg:px-12">

      {/* LEFT */}
      <div className="max-w-lg">
        <p className="text-sm text-green-600 font-semibold 
        border border-green-600 inline-block px-3  py-1 rounded-full">
          WELCOME TO VIAFARM
        </p>

        <h1 className="mt-4 text-4xl font-bold leading-tight text-black sm:text-5xl">
          Fresh Produce From Trusted <span className="text-green-600">Local Vendors</span   >
        </h1>

        <p className="mt-6 text-gray-600">
          ViaFarm is a digital marketplace which connects local vendors with consumers to buy and sell fresh fruits. Vegetables and related products.        </p>

        <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-lg bg-green-600 px-6 py-3 text-white transition hover:bg-green-700">
              Contact
            </Link>

            <Link href="/privacy-policy" className="rounded-lg border border-green-600 px-6 py-3 text-green-600 transition hover:bg-green-600 hover:text-white">
              Privacy Policy
            </Link>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex justify-center md:justify-end">
        <Image
          src={Homepageimage}
          alt="Vegetables"
          width={600}
          height={900}
          className="h-auto w-full  max-w-sm md:max-w-md lg:max-w-xl"
        />
      </div>
      </div>
    </section>
  );
}
