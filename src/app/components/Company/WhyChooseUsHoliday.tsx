import Image from "next/image"

export default function WhyChooseUs() {
  return (
    <section className="py-12 bg-[#f7f2f2]">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-4 text-red-500">Why Choose Holiday Season India</h2>

          <h3 className="text-[45px] text-[#4a4444] font-bold mb-4 leading-[55px]">Experience The Life You Always Wanted</h3>

          <ol className="list-decimal text-[#4a4444] pl-5 space-y-3">
            <li><strong>Choose & Share</strong> – Pick your dream destinations, share your travel dates and preferences, and complete our simple Travel Request Form. Your journey begins here.</li>
            <li><strong>Perfect Your Plan</strong> – Our expert Travel Consultants will work with you to craft a fully personalized itinerary—tailored to your style, interests, and budget. And yes, it’s absolutely free..</li>
            <li><strong>Travel Beyond Expectations</strong> – Pack your bags for the best itinerary, the best trip, and unforgettable experiences—all planned to perfection</li>
          </ol>

          <div className="flex gap-6 mt-6 text-[#4a4444]">
            <div className="text-center bg-white p-4 rounded-[10px]">
              <p className="text-3xl font-bold">15+</p>
              <p className="text-sm">Years Experience</p>
            </div>
            <div className="text-center bg-white p-4 rounded-[10px]">
              <p className="text-3xl font-bold">250+</p>
              <p className="text-sm">Happy Customers</p>
            </div>
            <div className="text-center bg-white p-4 rounded-[10px]">
              <p className="text-3xl font-bold">3k+</p>
              <p className="text-sm">Destination Collaboration</p>
            </div>
          </div>
        </div>

        <div className="flex-1">
<Image
  src="/assets/holiday/tripad.png"
  alt="Certificate"
  width={600}
  height={450} // asli height badhayi
  className="w-[600px] h-[450px] mx-auto rounded-full"
/>



        </div>
      </div>
    </section>
  )
}