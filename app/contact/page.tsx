import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-[#f8f8f8] min-h-screen">
        

      {/* HERO SECTION */}
      <section className="relative h-48 sm:h-64 lg:h-[350px]">

        <Image
          src="/fruits-banner.png"
          alt="Banner"
          fill
          className="object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">

          {/* <h1 className="text-white text-6xl font-bold px-2=6 tracking-[8px]">
            CONTACT US
          </h1> */}

        </div>
      </section>

      {/* CONTACT BOX */}
      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">

        <div className="mx-auto max-w-5xl rounded-2xl border border-[#9ad35d] bg-[#f8fbf2] p-5 sm:p-8">

          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10">

            {/* LEFT */}
            <div className="space-y-7 sm:space-y-10 lg:space-y-12">

              {/* PHONE */}
              <div className="flex items-center gap-4 sm:gap-6">

                <Phone className="h-6 w-6 shrink-0 text-[#5b9e1b] sm:h-8 sm:w-8" />

                <p className="break-all text-lg font-medium text-black sm:text-2xl lg:text-3xl">
                  +91 9895776556
                </p>
              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-4 sm:gap-6">

                <Mail className="h-6 w-6 shrink-0 text-[#5b9e1b] sm:h-8 sm:w-8" />

                <p className="break-all text-lg font-medium text-black sm:text-2xl lg:text-3xl">
                  kawshaldas@gmail.com
                </p>
              </div>

              {/* LOCATION */}
              <div className="flex items-center gap-4 sm:gap-6">

                <MapPin className="h-6 w-6 shrink-0 text-[#5b9e1b] sm:h-8 sm:w-8" />

                <p className="text-lg font-medium text-black sm:text-2xl lg:text-3xl">
                  xyz
                </p>
              </div>

              {/* TIME */}
              <div className="flex items-center gap-4 sm:gap-6">

                <Clock className="h-6 w-6 shrink-0 text-[#5b9e1b] sm:h-8 sm:w-8" />

                <p className="text-lg font-medium text-black sm:text-2xl lg:text-3xl">
                  xyz
                </p>
              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center md:justify-end">

              <Image
                src="/fruit-basket.png"
                alt="Fruits"
                width={500}
                height={400}
                className="h-auto w-full max-w-sm lg:max-w-md"
              />

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
