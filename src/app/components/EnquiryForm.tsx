"use client";

import { FormEvent, useState } from "react";

type EnquiryFormProps = {
  initialPackageName?: string;
};

export default function EnquiryForm({ initialPackageName }: EnquiryFormProps = {}) {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitted");
  };

  return (
    <section id="enquiry" className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg md:p-8">
      <header className="mb-6 space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">Ready to Plan Your Trip?</h2>
        <p className="text-sm text-gray-600">
          Share your travel preferences and our team will get back to you with a personalized travel plan tailored to your
          requirements.
        </p>
      </header>

      <form className="grid gap-5 md:grid-cols-2" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 md:col-span-2">
          <label className="text-sm font-medium text-gray-700" htmlFor="packageName">
            Package Interested In
          </label>
          <input
            id="packageName"
            name="packageName"
            type="text"
            defaultValue={initialPackageName}
            placeholder="Tell us which tour caught your eye"
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none transition focus:border-[#db1145] focus:ring-2 focus:ring-[#db1145]/20"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700" htmlFor="fullName">
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            placeholder="Enter your full name"
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none transition focus:border-[#db1145] focus:ring-2 focus:ring-[#db1145]/20"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="name@example.com"
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none transition focus:border-[#db1145] focus:ring-2 focus:ring-[#db1145]/20"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700" htmlFor="phone">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="Enter your contact number"
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none transition focus:border-[#db1145] focus:ring-2 focus:ring-[#db1145]/20"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700" htmlFor="travelers">
            Number of Travelers
          </label>
          <input
            id="travelers"
            name="travelers"
            type="number"
            min={1}
            placeholder="2"
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none transition focus:border-[#db1145] focus:ring-2 focus:ring-[#db1145]/20"
          />
        </div>

        <div className="flex flex-col gap-2 md:col-span-2 md:grid md:grid-cols-2 md:gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700" htmlFor="startDate">
              Preferred Travel Date
            </label>
            <input
              id="startDate"
              name="startDate"
              type="date"
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none transition focus:border-[#db1145] focus:ring-2 focus:ring-[#db1145]/20"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700" htmlFor="budget">
              Approximate Budget (per person)
            </label>
            <input
              id="budget"
              name="budget"
              type="text"
              placeholder="e.g. ₹50,000"
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none transition focus:border-[#db1145] focus:ring-2 focus:ring-[#db1145]/20"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 md:col-span-2">
          <label className="text-sm font-medium text-gray-700" htmlFor="message">
            Additional Notes
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us about your ideal itinerary, special requests, or travel goals."
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none transition focus:border-[#db1145] focus:ring-2 focus:ring-[#db1145]/20"
          ></textarea>
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full rounded-lg bg-[#db1145] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#c30f3e]"
          >
            Submit Enquiry
          </button>
        </div>
      </form>

      {status === "submitted" && (
        <p className="mt-4 rounded-lg bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
          Thank you! Our travel experts will reach out soon with a customised itinerary.
        </p>
      )}
    </section>
  );
}

