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

export default function Header() {
  return (
    <header className="flex items-center justify-between px-10 py-4 bg-white shadow">

      {/* LOGO */}
      <div className="flex items-center gap-3">

        <Image
          src="/viefarma.png"
          alt="ViaFarma Logo"
          width={60}
          height={60}
        />

        {/* <h1 className="text-2xl font-bold text-green-700">
          ViaFarma
        </h1> */}

      </div>

      {/* NAVBAR */}
      <nav>
        <div className="flex gap-6 text-black font-medium">
          <a href="/" className="hover:text-green-700">
            Home
          </a>

          <a href="/contact" className="hover:text-green-700">
            Contact
          </a>

          <a href="#" className="hover:text-green-700">
            Privacy Policy
          </a>
        </div>
      </nav>

    </header>
  );
}