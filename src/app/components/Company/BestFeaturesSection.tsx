"use client";
import Image from "next/image";

export default function BestFeaturesSection() {
  return (
    <section className="w-full bg-white py-10 px-4 md:px-12">
      {/* ===== TOP SECTION ===== */}
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h6 className="text-[#b30c32] text-[20px] font-semibold flex items-center gap-2">
            <span>What we give</span> <span>📨</span>
          </h6>
          <h2 className="text-2xl md:text-3xl font-bold mt-2">
            BEST FEATURES FOR YOU
          </h2>
          <p className="text-gray-600 mt-2 max-w-3xl">
            We go beyond just planning trips—we design experiences that feel
            effortless, exciting, and unforgettable. From handpicked stays and
            authentic local encounters to seamless logistics and 24/7 support,
            every detail is tailored to you. Expect award-winning expertise,
            transparent pricing, and journeys that inspire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#f7f5f7] p-6 rounded-lg shadow-sm border hover:shadow-md transition">
            <div className="text-[#b30c32] mb-3 text-2xl">🧭</div>
            <h4 className="font-semibold text-lg mb-2">Lots of choices</h4>
            <p className="text-gray-600 text-sm">
              Whether you dream of exploring Europe’s grand capitals, Asia’s
              hidden gems, or India’s cultural heartlands, we offer a world of
              possibilities. Choose from ready-to-go itineraries, mix-and-match
              experiences, or fully customized journeys—each crafted to match
              your style, pace, and budget.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#f7f5f7] p-6 rounded-lg shadow-sm border hover:shadow-md transition">
            <div className="text-[#b30c32] mb-3 text-2xl">🧑‍✈️</div>
            <h4 className="font-semibold text-lg mb-2">Best Tour Guides</h4>
            <p className="text-gray-600 text-sm">
              Travel with experts who know every hidden corner, local story, and
              must-see view. Our guides aren’t just knowledgeable—they’re
              passionate, friendly, and dedicated to making your journey safe,
              smooth, and unforgettable.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#f7f5f7] p-6 rounded-lg shadow-sm border hover:shadow-md transition">
            <div className="text-[#b30c32] mb-3 text-2xl">💼</div>
            <h4 className="font-semibold text-lg mb-2">Easy Bookings</h4>
            <p className="text-gray-600 text-sm">
              Plan your dream trip in just a few clicks. Our simple, hassle-free
              booking process offers quick confirmations, secure payments, and
              even flexible EMI options—making travel more affordable than ever.
              Enjoy complete peace of mind while you focus on the excitement of
              your upcoming journey.
            </p>
          </div>
        </div>
      </div>

      {/* ===== BOTTOM SECTION ===== */}
      <div className="max-w-7xl mx-auto mt-12 bg-[#f9f9f9] rounded-lg p-6 md:p-10 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h6 className="text-[#b30c32] text-[22px] font-semibold">Destination EXPERT</h6>
          <h3 className="text-2xl md:text-[35px] font-bold mt-2 leading-snug">
            RECOGNIZED FOR EXCELLENCE – MS. SHALINI BEJWAL RECEIVES SATTE
            TOURISM AWARD!
          </h3>
          <p className="text-[#004C97] text-3xl font-bold mt-2">2025</p>
          <button className="btn btn-danger mt-4 px-4 py-2 rounded-full text-white">
            Learn More
          </button>
        </div>

        <div className="flex justify-center md:justify-end">
          <Image
            src="/assets/holiday/award.png"
            alt="Award Ceremony"
            width={450}
            height={300}
            className="rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
