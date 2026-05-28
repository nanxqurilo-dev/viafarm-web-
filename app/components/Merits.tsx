import {
  Leaf,
  Users,
} from "lucide-react";

export default function Merits() {
  return (
    <section className="bg-white py-20 px-10">

      {/* TOP TEXT */}
      <div className="text-center">

        <p className="text-[#5b9e1b] font-semibold uppercase tracking-wider text-sm">
          WHY CHOOSE VIAFERMA
        </p>

        <h2 className="text-5xl font-bold text-black mt-4">
          Benefits For Everyone
        </h2>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-4 gap-8 mt-16">

        {/* CARD 1 */}
        <div className="border border-[#c9d8a8] rounded-xl py-10 px-6 text-center shadow-sm">

          {/* ICON */}
          <div className="w-16 h-16 rounded-full bg-[#edf5df] border border-[#c9d8a8] flex items-center justify-center mx-auto">
            <Leaf className="text-[#5b9e1b] w-8 h-8" />
          </div>

          {/* TEXT */}
          <h3 className="text-2xl font-bold text-black mt-6">
            Fresh Quality
          </h3>

          <p className="text-gray-500 mt-4 leading-6">
            List your products, manage inventory and grow your business with ease.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="border border-[#c9d8a8] rounded-xl py-10 px-6 text-center shadow-sm">

          <div className="w-16 h-16 rounded-full bg-[#edf5df] border border-[#c9d8a8] flex items-center justify-center mx-auto">
            <Users className="text-[#5b9e1b] w-8 h-8" />
          </div>

          <h3 className="text-2xl font-bold text-black mt-6">
            Local Support
          </h3>

          <p className="text-gray-500 mt-4 leading-6">
            List your products, manage inventory and grow your business with ease.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="border border-[#c9d8a8] rounded-xl py-10 px-6 text-center shadow-sm">

          <div className="w-16 h-16 rounded-full bg-[#edf5df] border border-[#c9d8a8] flex items-center justify-center mx-auto">
            <Leaf className="text-[#5b9e1b] w-8 h-8" />
          </div>

          <h3 className="text-2xl font-bold text-black mt-6">
            Fresh Quality
          </h3>

          <p className="text-gray-500 mt-4 leading-6">
            List your products, manage inventory and grow your business with ease.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="border border-[#c9d8a8] rounded-xl py-10 px-6 text-center shadow-sm">

          <div className="w-16 h-16 rounded-full bg-[#edf5df] border border-[#c9d8a8] flex items-center justify-center mx-auto">
            <Users className="text-[#5b9e1b] w-8 h-8" />
          </div>

          <h3 className="text-2xl font-bold text-black mt-6">
            Local Support
          </h3>

          <p className="text-gray-500 mt-4 leading-6">
            List your products, manage inventory and grow your business with ease.
          </p>
        </div>

      </div>
    </section>
  );
}