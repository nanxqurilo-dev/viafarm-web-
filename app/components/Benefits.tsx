import {
  Store,
  Leaf,
  Users,
} from "lucide-react";

export default function Features() {
  return (
    <section className="bg-white  px-25 py-10">
      
      <div className="grid grid-cols-3 gap-6">

        {/* CARD 1 */}
        <div className="flex items-center gap-5 border-r border-gray-300 pr-6">
          
          {/* ICON */}
<div className="min-w-[80px] min-h-[80px] rounded-full bg-[#edf5df] flex items-center justify-center border border-[#c9d8a8]">            <Store className="text-[#5b9e1b] w-10 h-10" />
          </div>

          {/* TEXT */}
          <div>
            <h3 className="text-2xl font-bold text-black">
              For Vendors
            </h3>

            <p className="text-gray-500 mt-2 leading-7">
              List your products, manage inventory and grow your business with ease.
            </p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="flex items-center gap-5 border-r border-gray-300 pr-6">

<div className="min-w-[80px] min-h-[80px] rounded-full bg-[#edf5df] flex items-center justify-center border border-[#c9d8a8]">            <Leaf className="text-[#5b9e1b] w-10 h-10" />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-black">
              Fresh Produce
            </h3>

            <p className="text-gray-500 mt-2 leading-7">
              Wide range of fresh fruits, vegetables and related items every day.
            </p>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="flex items-center gap-5 ">

<div className="min-w-[80px] min-h-[80px] rounded-full bg-[#edf5df] flex items-center justify-center border border-[#c9d8a8]">            <Users className="text-[#5b9e1b] w-8 h-6" />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-black">
              For Customers
            </h3>

            <p className="text-gray-500 mt-2 leading-7">
              Browse, compare and buy fresh products directly from local vendors.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}