import React from "react";

export default function BhutanItineraryPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-5 md:px-20">
      
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Bhutan Itinerary</h1>
        <p className="text-green-600 font-semibold mt-2">GUARANTEED FIXED DEPARTURE</p>
      </div>

      {/* About Section */}
      <section className="bg-white p-6 rounded-xl shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-3">About The Trip</h2>
        <p className="text-gray-600">
          Marvel at the beauty of Bhutan with this travel package that takes you through its most enchanting destinations including
          Thimphu, Punakha, and Paro. Explore monasteries, scenic valleys, ancient architecture, and culture-rich locations.
        </p>
      </section>

      {/* Trip Info Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-semibold text-lg">Meals</h3>
          <p className="text-gray-600">Breakfast & Dinner</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-semibold text-lg">Max Group Size</h3>
          <p className="text-gray-600">10 People</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-semibold text-lg">Duration</h3>
          <p className="text-gray-600">8 Days / 7 Nights</p>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-white p-6 rounded-xl shadow mb-6">
        <h2 className="text-2xl font-semibold mb-3">Highlights</h2>
        <ul className="list-disc ml-5 text-gray-600 space-y-2">
          <li>Accommodation in all places</li>
          <li>Daily Breakfast & Dinner</li>
          <li>Thimphu, Punakha & Paro Sightseeing</li>
          <li>Excursion to Taktshang (Tiger’s Nest)</li>
          <li>All Permit Fees & Hotel Taxes Included</li>
        </ul>
      </section>

      {/* Accommodation */}
      <section className="bg-white p-6 rounded-xl shadow mb-6">
        <h2 className="text-2xl font-semibold mb-3">Accommodation</h2>

        {[
          { place: "Phuentsholing", hotel:"Hotel Bhutan Ga Me Ga", nights:1 },
          { place: "Thimphu", hotel:"Hotel Dralha", nights:2 },
          { place: "Punakha", hotel:"Punakha Residency", nights:1 },
          { place: "Paro", hotel:"Udumwara Resort", nights:2 },
          { place: "Phuentsholing", hotel:"Hotel Bhutan Ga Me Ga", nights:1 },
        ].map((item, i) => (
          <div key={i} className="border-b py-3">
            <h3 className="font-semibold">{item.hotel} or Similar</h3>
            <p className="text-gray-500">{item.nights} Night in {item.place}</p>
            <p className="text-sm">Room: Standard Double | Meals: Breakfast & Dinner</p>
          </div>
        ))}
      </section>

      {/* Included / Excluded */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <section className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-3">Included In Price</h2>
          <ul className="list-disc ml-5 text-gray-600 space-y-2">
            <li>IXB/NJP ⇄ Phuentsholing Transfers</li>
            <li>Thimphu, Punakha, Paro Sightseeing</li>
            <li>All Inner Line Permits</li>
            <li>Tiger’s Nest Hike</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-3">Exclusions</h2>
          <ul className="list-disc ml-5 text-gray-600 space-y-2">
            <li>Air/Train Fare</li>
            <li>Personal Expenses</li>
            <li>Travel Insurance</li>
            <li>Room Heater Charges</li>
            <li>Anything not in inclusions</li>
          </ul>
        </section>
      </div>

      {/* Day Wise Itinerary */}
      <section className="bg-white p-6 rounded-xl shadow mb-6">
        <h2 className="text-2xl font-semibold mb-4">Day-wise Itinerary</h2>

        {[
          { day:"Day 1", desc:"NJP/IXB to Phuentsholing – Check in and overnight stay." },
          { day:"Day 2", desc:"Transfer to Thimphu via river confluence, overnight stay." },
          { day:"Day 3", desc:"Thimphu sightseeing including Buddha Point, Dzong, Museums." },
          { day:"Day 4", desc:"Transfer to Punakha via Dochula Pass, Dzong & Bridge visit." },
          { day:"Day 5", desc:"Drive to Paro and explore Dzongs & local attractions." },
          { day:"Day 6", desc:"Tiger Nest Monastery hike, Bhutan’s iconic landmark." },
          { day:"Day 7", desc:"Chele-La Pass day trip & back to Phuentsholing." },
          { day:"Day 8", desc:"Phuentsholing to IXB/NJP drop with immigration exit." },
        ].map((item, i) => (
          <div key={i} className="border-l-4 border-green-500 pl-4 mb-5">
            <h3 className="text-lg font-semibold">{item.day}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}

      </section>

      {/* Terms */}
      <section className="bg-white p-6 rounded-xl shadow mb-6">
        <h2 className="text-xl font-semibold mb-3">Terms & Conditions</h2>
        <ul className="list-disc ml-5 text-gray-600">
          <li>30+ Days before arrival: 25% deduction</li>
          <li>29-15 Days: 50% deduction</li>
          <li>14-0 Days: 100% deduction</li>
          <li>Valid ID required (Passport/Driving License/Voter ID)</li>
          <li>PAN/Aadhar not accepted</li>
        </ul>
      </section>

      {/* CTA Button */}
      <div className="text-center mt-6">
        <a
          href="/contact"
          className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700"
        >
          Enquiry Now
        </a>
      </div>

    </div>
  );
}
