import { Sprout } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#f8fbf2] px-5 py-14 sm:px-8 sm:py-20"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#e5f5d6] text-[#4c8f16] shadow-sm">
            <Sprout size={34} strokeWidth={2.2} />
          </div>

          <p className="mt-6 text-sm font-bold uppercase tracking-[3px] text-green-700">
            About ViaFarm
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Fresh, vegetarian products straight from local farmers
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-lg border border-[#d7edc5] bg-white p-6 shadow-sm sm:p-8">
            <p className="text-base leading-8 text-gray-700 sm:text-lg">
              ViaFarm connects you directly with local farmers to enjoy fresh,
              handcrafted, 100% vegetarian products. Every item is grown or made
              by the farmers themselves with care and authenticity.
            </p>
          </div>

          <div className="rounded-lg border border-[#d7edc5] bg-white p-6 shadow-sm sm:p-8">
            <p className="text-base leading-8 text-gray-700 sm:text-lg">
              We take no commission - your payments go entirely to the farmers.
              Optional donations help us maintain the platform and support the
              farming community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
