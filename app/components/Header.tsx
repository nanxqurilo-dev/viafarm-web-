// // components/Header.tsx

// export default function Header() {
//   return (
//     <header className="flex items-center justify-between px-10 py-4 bg-white  shadow">
//       <h1 className="text-2xl font-bold text-green-700">
//         ViaFarma
//       </h1>

//       <nav className="flex gap-6">
       
//        <div className="flex gap-6 text-black font-medium hover:text-green-700">
//         <a href="#">Home</a>
//         <a href="#">Contact</a>
//         <a href="#">Privacy Policy</a>
//         </div>
//       </nav>
//     </header>
//   );
// }





import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-4 sm:flex-row sm:justify-between sm:px-6 lg:px-10">

      {/* LOGO */}
      <div className="flex items-center gap-3">

        <Image
          src="/viefarma.png"
          alt="ViaFarma Logo"
          width={60}
          height={60}
          className="h-12 w-12 sm:h-15 sm:w-15"
        />

        {/* <h1 className="text-2xl font-bold text-green-700">
          ViaFarma
        </h1> */}

      </div>

      {/* NAVBAR */}
      <nav aria-label="Main navigation" className="w-full sm:w-auto">
        <div className="flex items-center justify-center gap-4 text-sm font-medium text-black sm:gap-6 sm:text-base">
          <Link href="/" className="hover:text-green-700">
            Home
          </Link>

          <Link href="/contact" className="hover:text-green-700">
            Contact
          </Link>

          <Link href="/privacy-policy" className="hover:text-green-700">
            Privacy Policy
          </Link>
        </div>
      </nav>

      </div>
    </header>
  );
}
