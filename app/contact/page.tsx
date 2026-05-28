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
      <section className="relative h-[350px]">

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
      <section className="px-10 py-20">

        <div className="max-w-5xl mx-auto border border-[#9ad35d] rounded-2xl bg-[#f8fbf2] p-8">

          <div className="grid grid-cols-2 items-center gap-10">

            {/* LEFT */}
            <div className="space-y-12">

              {/* PHONE */}
              <div className="flex items-center gap-6">

                <Phone className="text-[#5b9e1b] w-8 h-8" />

                <p className="text-3xl text-black font-medium">
                  +91 2232435345
                </p>
              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-6">

                <Mail className="text-[#5b9e1b] w-8 h-8" />

                <p className="text-3xl text-black font-medium">
                  xyz@gmail.com
                </p>
              </div>

              {/* LOCATION */}
              <div className="flex items-center gap-6">

                <MapPin className="text-[#5b9e1b] w-8 h-8" />

                <p className="text-3xl text-black font-medium">
                  xyz
                </p>
              </div>

              {/* TIME */}
              <div className="flex items-center gap-6">

                <Clock className="text-[#5b9e1b] w-8 h-8" />

                <p className="text-3xl text-black font-medium">
                  xyz
                </p>
              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center">

              <Image
                src="/fruit-basket.png"
                alt="Fruits"
                width={500}
                height={400}
              />

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}