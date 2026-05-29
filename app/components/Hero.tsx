// components/Hero.tsx

import Image from "next/image";
import Link from "next/link";

export default function Hero() {

  
  return (
    <section className="grid grid-cols-2 items-center px-25 py-10 bg-green-50">

      {/* LEFT */}
      <div className="max-w-lg">
        <p className="text-sm text-green-600 font-semibold 
        border border-green-600 inline-block px-3  py-1 rounded-full">
          WELCOME TO VIAFARMA
        </p>

        <h1 className="text-5xl font-bold mt-4 text-black">
          Fresh Produce From Trusted <span className="text-green-600">Local Vendors</span   >
        </h1>

        <p className="mt-6 text-gray-600">
          VieFrame is a digital marketplace which connects local vendors with consumers to buy and sell fresh fruits. Vegetables and related products.        </p>

        <div className="flex gap-4 mt-6">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg">
            <Link href="/contact" className="hover:text-green-700">
              Contact
            </Link>          </button>

          <button className="border border-green-600 px-6 py-3 text-green-600 rounded-lg">
            <Link href="/privacy-policy" className="hover:text-green-700">
              Privacy Policy
            </Link>          </button>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex justify-end mt-6 ">
        <Image
          src="/vegetable.png"
          alt="Vegetables"
          width={600}
          height={900}
        />
      </div>
    </section>
  );
}