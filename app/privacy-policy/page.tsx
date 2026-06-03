// import Image from "next/image";

// const privacyPoints = [
//   {
//     title: "Information We Collect",
//     description:
//       "We collect information that you provide directly to us, such as your name, email address, phone number, and account details.",
//   },
//   {
//     title: "How We Use Information",
//     description:
//       "Your information is used to provide, improve, and personalize our services while ensuring a seamless experience.",
//   },
//   {
//     title: "Cookies & Tracking",
//     description:
//       "We use cookies and similar technologies to analyze website traffic and improve user experience.",
//   },
//   {
//     title: "Data Security",
//     description:
//       "We implement industry-standard security measures to protect your personal information.",
//   },
//   {
//     title: "Third-Party Services",
//     description:
//       "We may share limited information with trusted service providers when necessary to operate our platform.",
//   },
//   {
//     title: "Your Rights",
//     description:
//       "You have the right to access, update, or request deletion of your personal information.",
//   },
//   {
//     title: "Policy Updates",
//     description:
//       "This Privacy Policy may be updated periodically. Any changes will be reflected on this page.",
//   },
// ];

// const currentDate = new Date().toLocaleDateString("en-US", {
//   month: "long",
//   day: "numeric",
//   year: "numeric",
// });

// export default function PrivacyPolicy() {
//   return (
//     <>
//       <section className="bg-[#F3F8ED] py-12 sm:py-16">
//         <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
//           <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-10">
//             <div>
//               <h1 className="mb-5 text-4xl font-bold text-black sm:text-5xl">
//                 Privacy Policy
//               </h1>

//               <p className="max-w-lg leading-7 text-gray-600">
//                 We value your privacy and are committed to protecting your
//                 personal information and being transparent about how we use it.
//               </p>

//               <div className="mt-6 inline-flex items-center rounded-lg border border-green-500 bg-white px-4 py-2 text-sm font-medium text-green-600">
//                 Last Updated {currentDate}
//               </div>
//             </div>

//             <div className="flex justify-center md:justify-end">
//               <Image
//                 src="/vegetable.png"
//                 alt="Vegetables"
//                 width={600}
//                 height={400}
//                 className="h-auto w-full max-w-sm object-contain md:max-w-lg"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="bg-white py-12 sm:py-16">
//         <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
//           <div className="rounded-2xl border border-green-300 p-5 sm:p-8 md:p-12">
//             {privacyPoints.map((item) => (
//               <div
//                 key={item.title}
//                 className="mb-8 flex gap-3 last:mb-0 sm:mb-10 sm:gap-5"
//               >
//                 <div className="text-xl text-green-600 sm:text-2xl">
//                   &bull;
//                 </div>

//                 <div>
//                   <h3 className="mb-3 text-xl font-semibold text-black">
//                     {item.title}
//                   </h3>

//                   <p className="leading-7 text-gray-600">{item.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }











import Image from "next/image";
import Homepageimage from "../../public/vegetable-removebg-preview (1).webp"


const currentDate = new Date().toLocaleDateString("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

export default function PrivacyPolicy() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#F3F8ED] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-10">
            <div>
              <h1 className="mb-5 text-4xl font-bold text-black sm:text-5xl">
                Privacy Policy
              </h1>

              <p className="max-w-lg leading-7 text-gray-600">
                By using ViaFarm, you agree to the collection and use of
                information in accordance with this Privacy Policy. We value
                your privacy and are committed to protecting your personal
                information.
              </p>

              <div className="mt-6 inline-flex items-center rounded-lg border border-green-500 bg-white px-4 py-2 text-sm font-medium text-green-600">
                Last Updated {currentDate}
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <Image
                src={Homepageimage}
                alt="Vegetables"
                width={600}
                height={400}
                className="h-auto w-full max-w-sm object-contain md:max-w-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="rounded-3xl border border-green-200 bg-white p-6 shadow-sm sm:p-10 lg:p-14">
            <div className="space-y-10 text-gray-700 leading-8">
              
              {/* Section 1 */}
              <div>
                <h2 className="mb-4 text-2xl font-bold text-black">
                  1. Information We Collect
                </h2>

                <p>
                  We collect limited personal data only as necessary to operate
                  the Platform:
                </p>

                <ul className="mt-4 list-disc space-y-3 pl-6">
                  <li>
                    <strong>Account Information:</strong> When you register
                    (as a customer or farmer), we collect your name, phone
                    number, email address (optional), and delivery
                    address/location.
                  </li>

                  <li>
                    <strong>Order Information:</strong> Details of products you
                    purchase or list, transaction amounts, and delivery
                    preferences.
                  </li>

                  <li>
                    <strong>Usage Data:</strong> App interactions, pages
                    visited, and crash reports collected anonymously to improve
                    performance.
                  </li>

                  <li>
                    <strong>Device Information:</strong> IP address, device ID,
                    operating system, and browser type for security and
                    debugging.
                  </li>
                </ul>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="mb-4 text-2xl font-bold text-black">
                  2. How We Use Your Information
                </h2>

                <p>We use your information only for:</p>

                <ul className="mt-4 list-disc space-y-3 pl-6">
                  <li>Creating and managing your account.</li>
                  <li>
                    Processing orders and facilitating communication between
                    customers and farmers.
                  </li>
                  <li>
                    Sending order confirmations, delivery updates, and support
                    messages.
                  </li>
                  <li>
                    Improving the platform (fixing bugs and analyzing usage
                    trends).
                  </li>
                  <li>
                    Enforcing our Terms & Conditions and preventing fraud.
                  </li>
                </ul>

                <p className="mt-4 font-medium text-green-700">
                  We do not use your data for advertising, profiling, or
                  automated decision-making.
                </p>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="mb-4 text-2xl font-bold text-black">
                  3. Sharing of Information
                </h2>

                <p>
                  ViaFarm does not sell, rent, or trade your personal data to
                  third parties. We share data only in limited circumstances:
                </p>

                <ul className="mt-4 list-disc space-y-3 pl-6">
                  <li>
                    <strong>With Farmers:</strong> When you place an order, the
                    relevant farmer receives your name, phone number, and
                    delivery address solely to fulfill the order.
                  </li>

                  <li>
                    <strong>Service Providers:</strong> Third-party tools like
                    hosting, analytics (e.g., Firebase), or payment gateways
                    may process limited information.
                  </li>

                  <li>
                    <strong>Legal Obligations:</strong> If required by law,
                    court order, or government regulations.
                  </li>

                  <li>
                    <strong>Business Transfers:</strong> In the event of a
                    merger or acquisition, your data may be transferred with
                    prior notice.
                  </li>
                </ul>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="mb-4 text-2xl font-bold text-black">
                  4. Data Retention
                </h2>

                <ul className="list-disc space-y-3 pl-6">
                  <li>
                    <strong>Customer Data:</strong> Retained while your account
                    is active. Deleted within 30 days after account deletion,
                    except legally required records (up to 7 years).
                  </li>

                  <li>
                    <strong>Farmer Data:</strong> Retained during seller
                    agreements and tax/legal compliance periods.
                  </li>

                  <li>
                    <strong>Usage Logs:</strong> Aggregated and anonymized
                    after 12 months.
                  </li>
                </ul>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="mb-4 text-2xl font-bold text-black">
                  5. Your Rights (GDPR / CCPA / Similar Laws)
                </h2>

                <p>Depending on your location, you may have the right to:</p>

                <ul className="mt-4 list-disc space-y-3 pl-6">
                  <li>Access, correct, or delete your personal data.</li>
                  <li>Withdraw consent for optional data processing.</li>
                  <li>Request data portability.</li>
                  <li>
                    Lodge a complaint with a supervisory authority.
                  </li>
                </ul>

                <p className="mt-4">
                  To exercise these rights, contact us at:
                </p>

                <p className="mt-2 font-semibold text-green-700">
                 kawshaldas@gmail.com  
                 </p>

                <p>
                  We will respond to your request within 30 days.
                </p>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="mb-4 text-2xl font-bold text-black">
                  6. Security
                </h2>

                <p>
                  We implement reasonable technical and organizational
                  safeguards including encryption, access controls, and regular
                  updates to protect your data.
                </p>

                <p className="mt-4">
                  However, no transmission method over the Internet is 100%
                  secure and you use the platform at your own risk.
                </p>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="mb-4 text-2xl font-bold text-black">
                  7. Children's Privacy
                </h2>

                <p>
                  ViaFarm is not intended for users under the age of 13. We do
                  not knowingly collect personal data from children.
                </p>

                <p className="mt-4">
                  If you believe a child has provided information, please
                  contact us for deletion.
                </p>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="mb-4 text-2xl font-bold text-black">
                  8. Donations
                </h2>

                <p>
                  Donations are voluntary and processed through third-party
                  payment gateways.
                </p>

                <p className="mt-4">
                  We collect only donation amount and timestamp. No recurring
                  billing or financial information is stored by ViaFarm.
                </p>
              </div>

              {/* Section 9 */}
              <div>
                <h2 className="mb-4 text-2xl font-bold text-black">
                  9. Changes to This Privacy Policy
                </h2>

                <p>
                  We may update this Privacy Policy occasionally.
                </p>

                <p className="mt-4">
                  Material changes will be communicated via app notification or
                  email. Continued use of ViaFarm means you accept the revised
                  policy.
                </p>
              </div>

              {/* Section 10 */}
              <div>
                <h2 className="mb-4 text-2xl font-bold text-black">
                  10. Contact Us
                </h2>

                <p>
                  For privacy-related questions, complaints, or requests:
                </p>

                <div className="mt-4 rounded-2xl bg-[#F3F8ED] p-5">
                  <p className="font-semibold text-black">
                    ViaFarm Support
                  </p>

                  <p>Email: kawshaldas@gmail.com</p>

                  <p>
                    Address: [Your physical address if required by law]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

