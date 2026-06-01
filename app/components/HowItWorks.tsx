import {
  Store,
  ShoppingBasket,
  Truck,
} from "lucide-react";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#f5f8ed] px-5 py-14 sm:px-8 sm:py-16 lg:px-12">

      {/* TOP TEXT */}
      <div className="text-center">
        <p className="text-[#5b9e1b] font-semibold uppercase tracking-wider text-sm">
          HOW IT WORKS
        </p>

        <h2 className="mt-4 text-3xl font-bold text-black sm:text-4xl">
          Simple Steps To Get Fresh Produce
        </h2>
      </div>

      {/* STEPS */}
      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-10">

        {/* STEP 1 */}
        <div className="relative flex items-center gap-4 sm:gap-5">

          {/* NUMBER */}
          <div className="absolute -top-2 left-0 w-7 h-7 rounded-full bg-[#5b9e1b] text-white text-sm flex items-center justify-center font-bold">
            1
          </div>

          {/* ICON */}
          <div className="w-24 h-24 rounded-full bg-[#edf5df] border border-[#c9d8a8] flex items-center justify-center shrink-0">
            <Store className="text-[#5b9e1b] w-10 h-10" />
          </div>

          {/* TEXT */}
          <div>
            <h3 className="text-xl font-bold text-black lg:text-2xl">
              For Vendors
            </h3>

            <p className="text-gray-500 mt-2 leading-6 max-w-[220px]">
              List your products, manage inventory and grow your business with ease.
            </p>
          </div>
        </div>

        {/* STEP 2 */}
        <div className="relative flex items-center gap-4 sm:gap-5">

          <div className="absolute -top-2 left-0 w-7 h-7 rounded-full bg-[#5b9e1b] text-white text-sm flex items-center justify-center font-bold">
            2
          </div>

          <div className="w-24 h-24 rounded-full bg-[#edf5df] border border-[#c9d8a8] flex items-center justify-center shrink-0">
            <ShoppingBasket className="text-[#5b9e1b] w-10 h-10" />
          </div>

          <div>
            <h3 className="text-xl font-bold text-black lg:text-2xl">
              Fresh Produce
            </h3>

            <p className="text-gray-500 mt-2 leading-6 max-w-[220px]">
              Wide range of fresh fruits, vegetables and related items every day.
            </p>
          </div>
        </div>

        {/* STEP 3 */}
        <div className="relative flex items-center gap-4 sm:gap-5">

          <div className="absolute -top-2 left-0 w-7 h-7 rounded-full bg-[#5b9e1b] text-white text-sm flex items-center justify-center font-bold">
            3
          </div>

          <div className="w-24 h-24 rounded-full bg-[#edf5df] border border-[#c9d8a8] flex items-center justify-center shrink-0">
            <Truck className="text-[#5b9e1b] w-10 h-10" />
          </div>

          <div>
            <h3 className="text-xl font-bold text-black lg:text-2xl">
              For Customers
            </h3>

            <p className="text-gray-500 mt-2 leading-6 max-w-[220px]">
              Browse, Compare and buy fresh products directly from local vendors.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
