import {
  Store,
  ShoppingBasket,
  Truck,
  ArrowRight,
} from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="bg-[#f5f8ed] py-16 px-10">

      {/* TOP TEXT */}
      <div className="text-center">
        <p className="text-[#5b9e1b] font-semibold uppercase tracking-wider text-sm">
          HOW IT WORKS
        </p>

        <h2 className="text-4xl font-bold text-black mt-4">
          Simple Steps To Get Fresh Produce
        </h2>
      </div>

      {/* STEPS */}
      <div className="flex items-center justify-center gap-10 mt-15">

        {/* STEP 1 */}
        <div className="flex items-center gap-5 relative">

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
            <h3 className="text-2xl font-bold text-black">
              For Vendors
            </h3>

            <p className="text-gray-500 mt-2 leading-6 max-w-[220px]">
              List your products, manage inventory and grow your business with ease.
            </p>
          </div>
        </div>

        {/* ARROW */}
        <ArrowRight className="text-[#5b9e1b] w-8 h-8" />

        {/* STEP 2 */}
        <div className="flex items-center gap-5 relative">

          <div className="absolute -top-2 left-0 w-7 h-7 rounded-full bg-[#5b9e1b] text-white text-sm flex items-center justify-center font-bold">
            2
          </div>

          <div className="w-24 h-24 rounded-full bg-[#edf5df] border border-[#c9d8a8] flex items-center justify-center shrink-0">
            <ShoppingBasket className="text-[#5b9e1b] w-10 h-10" />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-black">
              Fresh Produce
            </h3>

            <p className="text-gray-500 mt-2 leading-6 max-w-[220px]">
              Wide range of fresh fruits, vegetables and related items every day.
            </p>
          </div>
        </div>

        {/* ARROW */}
        <ArrowRight className="text-[#5b9e1b] w-8 h-8" />

        {/* STEP 3 */}
        <div className="flex items-center gap-5 relative">

          <div className="absolute -top-2 left-0 w-7 h-7 rounded-full bg-[#5b9e1b] text-white text-sm flex items-center justify-center font-bold">
            3
          </div>

          <div className="w-24 h-24 rounded-full bg-[#edf5df] border border-[#c9d8a8] flex items-center justify-center shrink-0">
            <Truck className="text-[#5b9e1b] w-10 h-10" />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-black">
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