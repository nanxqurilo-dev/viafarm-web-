import {
  Store,
  Leaf,
  Users,
} from "lucide-react";

export default function Features() {
  return (
    <section className="bg-white px-5 py-10 sm:px-8 lg:px-12">
      
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3">

        {/* CARD 1 */}
        <div className="flex items-start gap-4 border-b border-gray-300 pb-6 md:border-r md:border-b-0 md:pr-6 md:pb-0 lg:items-center lg:gap-5">
          
          {/* ICON */}
<div className="min-w-[80px] min-h-[80px] rounded-full bg-[#edf5df] flex items-center justify-center border border-[#c9d8a8]">            <Store className="text-[#5b9e1b] w-10 h-10" />
          </div>

          {/* TEXT */}
          <div>
            <h3 className="text-xl font-bold text-black lg:text-2xl">
              For Vendors
            </h3>

            <p className="text-gray-500 mt-2 leading-7">
Expand your business by selling fresh produce online and reaching more customers.            </p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="flex items-start gap-4 border-b border-gray-300 pb-6 md:border-r md:border-b-0 md:pr-6 md:pb-0 lg:items-center lg:gap-5">

<div className="min-w-[80px] min-h-[80px] rounded-full bg-[#edf5df] flex items-center justify-center border border-[#c9d8a8]">            <Leaf className="text-[#5b9e1b] w-10 h-10" />
          </div>

          <div>
            <h3 className="text-xl font-bold text-black lg:text-2xl">
              Fresh Produce
            </h3>

            <p className="text-gray-500 mt-2 leading-7">
Discover handpicked fruits, vegetables and farm products sourced from trusted growers.

            </p>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="flex items-start gap-4 lg:items-center lg:gap-5">

<div className="min-w-[80px] min-h-[80px] rounded-full bg-[#edf5df] flex items-center justify-center border border-[#c9d8a8]">            <Users className="text-[#5b9e1b] w-8 h-6" />
          </div>

          <div>
            <h3 className="text-xl font-bold text-black lg:text-2xl">
              For Customers
            </h3>

            <p className="text-gray-500 mt-2 leading-7">
Order fresh produce anytime and enjoy a simple, hassle-free shopping experience.            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
