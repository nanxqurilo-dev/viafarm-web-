import Image from "next/image";

const privacyPoints = [
  {
    title: "Information We Collect",
    description:
      "We collect information that you provide directly to us, such as your name, email address, phone number, and account details.",
  },
  {
    title: "How We Use Information",
    description:
      "Your information is used to provide, improve, and personalize our services while ensuring a seamless experience.",
  },
  {
    title: "Cookies & Tracking",
    description:
      "We use cookies and similar technologies to analyze website traffic and improve user experience.",
  },
  {
    title: "Data Security",
    description:
      "We implement industry-standard security measures to protect your personal information.",
  },
  {
    title: "Third-Party Services",
    description:
      "We may share limited information with trusted service providers when necessary to operate our platform.",
  },
  {
    title: "Your Rights",
    description:
      "You have the right to access, update, or request deletion of your personal information.",
  },
  {
    title: "Policy Updates",
    description:
      "This Privacy Policy may be updated periodically. Any changes will be reflected on this page.",
  },
];


const currentDate = new Date().toLocaleDateString("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});




export default function PrivacyPolicy() {
  return (
    <>

      {/* Hero Section */}
      <section className="bg-[#F3F8ED] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-5xl font-bold text-black mb-5">
                Privacy Policy
              </h1>

              <p className="text-gray-600 leading-7 max-w-lg">
                We value your privacy and are committed to protecting your
                personal information and being transparent about how we use it.
              </p>

              {/* <div className="inline-flex items-center gap-2 border border-green-500 text-green-600 bg-white rounded-lg px-4 py-2 mt-6 text-sm font-medium">
                📅 Last Updated May 14, 2026
              </div> */}



<div className="inline-flex items-center gap-2 border border-green-500 text-green-600 bg-white rounded-lg px-4 py-2 mt-6 text-sm font-medium">
  📅 Last Updated {currentDate}
</div>

              
            </div>

            <div className="flex justify-end">
              <Image
                src="/vegetable.png"
                alt="Vegetables"
                width={600}
                height={400}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="border border-green-300 rounded-2xl p-8 md:p-12">
            {privacyPoints.map((item, index) => (
              <div
                key={index}
                className="flex gap-5 mb-10 last:mb-0"
              >
                <div className="text-2xl">👉</div>

                <div>
                  <h3 className="text-xl font-semibold text-black mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-7">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}