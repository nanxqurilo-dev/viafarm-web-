import Image from "next/image";
import Link from "next/link";
import { Sprout } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#004b1f] px-5 py-12 text-white sm:px-8 lg:px-12 lg:py-16">

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 xl:gap-16">

        {/* LOGO SECTION */}
        <div>

          {/* LOGO */}
          <div className="flex h-24 w-24 items-center justify-center bg-white sm:h-28 sm:w-28">
            <Image
              src="/viefarma.png"
              alt="Logo"
              width={80}
              height={80}
            />
          </div>

          {/* TEXT */}
          <p className="mt-6 max-w-[260px] text-sm leading-7 tracking-widest sm:text-base sm:leading-9">
            Connecting local vendors with everyday customer
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-bold uppercase sm:text-2xl">
            Quick Links
          </h3>

          <ul className="mt-6 space-y-4 text-sm sm:mt-8 sm:text-base">
            <li className="hover:text-[#9ad35d] cursor-pointer">
              <Link href="/" className="hover:text-green-700">
                Home
              </Link>
            </li>

            <li className="hover:text-[#9ad35d] cursor-pointer">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 hover:text-[#9ad35d]"
              >
                {/* <Sprout size={16} /> */}
                About
              </Link>
            </li>

            {/* <li className="hover:text-[#9ad35d] cursor-pointer">
              <Link href="/#about">About</Link>
            </li>

            <li className="hover:text-[#9ad35d] cursor-pointer">
              <Link href="/#how-it-works">How it works</Link>
            </li> */}

            <li className="hover:text-[#9ad35d] cursor-pointer">
              <Link href="/contact" className="hover:text-green-700">
                Contact
              </Link>            </li>



            <li className="hover:text-[#9ad35d] cursor-pointer">


              <Link href="/privacy-policy" className="hover:text-green-700">
                Privacy Policy
              </Link>


            </li>



          </ul>
        </div>

        {/* LEGAL */}
        {/* <div>
          <h3 className="text-xl font-bold uppercase sm:text-2xl">
            Legal
          </h3>

          <ul className="mt-6 space-y-4 text-sm sm:mt-8 sm:text-base">
            <li className="hover:text-[#9ad35d] cursor-pointer">


<Link href="/privacy-policy" className="hover:text-green-700">
            Privacy Policy
          </Link>


            </li>

             

            <li className="hover:text-[#9ad35d] cursor-pointer">
              Terms & Condition
            </li>

            <li className="hover:text-[#9ad35d] cursor-pointer">
              Refund Policy
            </li>

            <li className="hover:text-[#9ad35d] cursor-pointer">
              Cookie Policy
            </li>
          </ul>
        </div> */}

        {/* CONTACT */}
        <div>
          <h3 className="text-xl font-bold uppercase sm:text-2xl">
            Contact
          </h3>

          <div className="mt-6 space-y-4 text-sm sm:mt-8 sm:text-base">
            <p>kawshaldas@gmail.com</p>
            <p>+91 9895776556 </p>
          </div>

          {/* SOCIAL ICONS */}
          {/* <div className="mt-8 flex items-center gap-4 sm:gap-5">

            <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 border-white transition hover:bg-white hover:text-[#004b1f] sm:h-14 sm:w-14">
              <FaFacebookF size={22} />
            </div>

            <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 border-white transition hover:bg-white hover:text-[#004b1f] sm:h-14 sm:w-14">
              <FaInstagram size={22} />
            </div>

            <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 border-white transition hover:bg-white hover:text-[#004b1f] sm:h-14 sm:w-14">
              <FaLinkedinIn size={22} />
            </div>

          </div> */}
        </div>

      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/20 pt-6 text-center text-sm text-white/80">
        Copyright &copy; 2026 ViaFarma. All rights reserved.
      </div>
    </footer>
  );
}
