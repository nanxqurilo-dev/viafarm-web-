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
      <section className="bg-[#F3F8ED] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-10">
            <div>
              <h1 className="mb-5 text-4xl font-bold text-black sm:text-5xl">
                Privacy Policy
              </h1>

              <p className="max-w-lg leading-7 text-gray-600">
                We value your privacy and are committed to protecting your
                personal information and being transparent about how we use it.
              </p>

              <div className="mt-6 inline-flex items-center rounded-lg border border-green-500 bg-white px-4 py-2 text-sm font-medium text-green-600">
                Last Updated {currentDate}
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <Image
                src="/vegetable.png"
                alt="Vegetables"
                width={600}
                height={400}
                className="h-auto w-full max-w-sm object-contain md:max-w-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="rounded-2xl border border-green-300 p-5 sm:p-8 md:p-12">
            {privacyPoints.map((item) => (
              <div
                key={item.title}
                className="mb-8 flex gap-3 last:mb-0 sm:mb-10 sm:gap-5"
              >
                <div className="text-xl text-green-600 sm:text-2xl">
                  &bull;
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold text-black">
                    {item.title}
                  </h3>

                  <p className="leading-7 text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
