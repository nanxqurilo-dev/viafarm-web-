import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#004b1f] text-white px-12 py-16">

      <div className="grid grid-cols-4 gap-16">

        {/* LOGO SECTION */}
        <div>

          {/* LOGO */}
          <div className="w-28 h-28 bg-white flex items-center justify-center">
            <Image
              src="/viefarma.png"
              alt="Logo"
              width={80}
              height={80}
            />
          </div>

          {/* TEXT */}
          <p className="mt-6 text-md leading-9 tracking-widest max-w-[260px]">
            Connecting local vendors with everyday customer
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-2xl font-bold uppercase">
            Quick Links
          </h3>

          <ul className="mt-8 space-y-4 text-md">
            <li className="hover:text-[#9ad35d] cursor-pointer">
                <Link href="/" className="hover:text-green-700">
            Home
          </Link>
            </li>

            <li className="hover:text-[#9ad35d] cursor-pointer">
              About
            </li>

            <li className="hover:text-[#9ad35d] cursor-pointer">
              How it works
            </li>

            <li className="hover:text-[#9ad35d] cursor-pointer">
 <Link href="/contact" className="hover:text-green-700">
            Contact
          </Link>            </li>
          </ul>
        </div>

        {/* LEGAL */}
        <div>
          <h3 className="text-2xl font-bold uppercase">
            Legal
          </h3>

          <ul className="mt-8 space-y-4 text-md">
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
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-2xl font-bold uppercase">
            Contact
          </h3>

          <div className="mt-8 space-y-4 text-md">
            <p>xyz@gmail.com</p>
            <p>+91 2344555555</p>
          </div>

          {/* SOCIAL ICONS */}
       <div className="flex items-center gap-5 mt-8">

  {/* FACEBOOK */}
  <div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#004b1f] transition">
    <FaFacebookF size={22} />
  </div>

  {/* INSTAGRAM */}
  <div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#004b1f] transition">
    <FaInstagram size={22} />
  </div>

  {/* LINKEDIN */}
  <div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#004b1f] transition">
    <FaLinkedinIn size={22} />
  </div>

</div>
        </div>

      </div>
    </footer>
  );
}