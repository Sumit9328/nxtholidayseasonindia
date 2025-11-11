"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaBars,
  FaTimes,
  FaChevronRight,
  FaChevronDown,
} from "react-icons/fa";
import Image from "next/image";

export default function MainHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md w-full z-50 top-0 sticky">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-0">
        {/* ==== Logo ==== */}
        <div className="flex items-center gap-0">
          <Image
            src="/assets/home/HolidaySeason.png"
            alt="Holiday Season India"
            width={180}
            height={48}
            className=""
          />
        </div>

        {/* ==== Desktop Nav ==== */}
        <nav className="hidden md:flex items-center gap-8 relative">
          <a href="/" className="hover:text-[#db1145] text-[14px] uppercase text-black">
            Home
          </a>



          {/* ==== India Travel Dropdown (Already Done) ==== */}
          <div className="relative group">
            <Link href="/MainPages/india">
              <span className="flex items-center gap-2 py-4 uppercase hover:text-[#db1145] text-[14px] cursor-pointer">
                <Image
                  src="/assets/home/diamond.png" // 👈 apni image ka path yahan lagao
                  alt="Diamond Icon"
                  width={16} // icon size adjust yahan se
                  height={16}
                  className="w-4 h-4"
                />

                {/* Text + Down icon */}
                <span className="flex items-center gap-1 text-black">
                  India Travel
                  <FaChevronDown className="text-xs mt-1" />
                </span>
              </span>
            </Link>


            {/* Level 1 Dropdown */}
            <div className="absolute top-[48px] left-0 mt-1 hidden border border-[#bdbfc1] group-hover:block bg-white shadow-lg py-0 w-46 z-50">
              {/* North India */}
              <div className="relative group/item border-b border-gray-200 last:border-b-0">
                <a
                  href="#"
                  className="flex justify-between items-center px-4 py-2 hover:bg-[#f9e3ec] text-black"
                >
                  North India <FaChevronRight className="text-xs" />
                </a>
                {/* Submenu */}
                <div className="absolute left-full top-0 ml-1 hidden group-hover/item:block bg-white shadow-md border border-[#bdbfc1] py-0 w-48 z-50">
                  <a
                    href="#"
                    className="block px-4 py-2 border-b border-gray-200 hover:bg-[#f9e3ec] text-black text-black"
                  >
                    Rajasthan Tour
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 border-b border-gray-200 hover:bg-[#f9e3ec] text-black text-black"
                  >
                    Delhi Agra Jaipur
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 border-b border-gray-200 hover:bg-[#f9e3ec] text-black text-black"
                  >
                    Jammu & Kashmir
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 border-b border-gray-200 hover:bg-[#f9e3ec] text-black text-black"
                  >
                    Leh Ladakh Tour
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 border-b border-gray-200 hover:bg-[#f9e3ec] text-black text-black"
                  >
                    Manali Tour Packages
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 border-b border-gray-200 hover:bg-[#f9e3ec] text-black text-black"
                  >
                    Shimla Tour Packages
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 border-b border-gray-200 hover:bg-[#f9e3ec] text-black text-black"
                  >
                    Dharamshala Dalhousie
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-[#f9e3ec] text-black">
                    Uttarakhand Tour
                  </a>
                </div>

              </div>

              {/* South India */}
              <div className="relative group/item border-b border-gray-200 last:border-b-0">
                <a
                  href="#"
                  className="flex justify-between items-center px-4 py-2 hover:bg-[#f9e3ec] text-black"
                >
                  South India <FaChevronRight className="text-xs" />
                </a>

                <div className="absolute left-full top-0 ml-1 hidden group-hover/item:block bg-white shadow-md border border-[#bdbfc1] w-52 z-50">
                  <a
                    href="#"
                    className="block px-4 py-2 border-b border-gray-200 hover:bg-[#f9e3ec] text-black text-black"
                  >
                    Kerala Tour Packages
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 border-b border-gray-200 hover:bg-[#f9e3ec] text-black text-black"
                  >
                    Ooty Coorg Mysore
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 border-b border-gray-200 hover:bg-[#f9e3ec] text-black text-black"
                  >
                    Tamil Nadu
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 border-b border-gray-200 hover:bg-[#f9e3ec] text-black text-black"
                  >
                    Hyderabad Tourism
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 border-b border-gray-200 hover:bg-[#f9e3ec] text-black text-black"
                  >
                    Karnataka Tourism
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-[#f9e3ec] text-black">
                    Bangalore
                  </a>
                </div>
              </div>


              {/* West India */}
              <div className="relative group/item border-b border-gray-200 last:border-b-0">
                <a
                  href="#"
                  className="flex justify-between items-center px-4 py-2 hover:bg-[#f9e3ec] text-black"
                >
                  West India <FaChevronRight className="text-xs" />
                </a>

                <div className="absolute left-full top-0 ml-1 hidden group-hover/item:block bg-white shadow-md border border-[#bdbfc1] w-52 z-50">
                  <a
                    href="#"
                    className="block px-4 py-2 border-b border-gray-200 hover:bg-[#f9e3ec] text-black text-black"
                  >
                    Goa Tour Packages
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 border-b border-gray-200 hover:bg-[#f9e3ec] text-black text-black"
                  >
                    Mumbai Tourism
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 border-b border-gray-200 hover:bg-[#f9e3ec] text-black text-black"
                  >
                    Gujarat Tourism
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 border-b border-gray-200 hover:bg-[#f9e3ec] text-black text-black"
                  >
                    Maharashtra Tourism
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-[#f9e3ec] text-black">
                    Pune Tourism
                  </a>
                </div>
              </div>


              {/* East India */}
              <div className="relative group/item border-b border-gray-200 last:border-b-0">
                <a
                  href="#"
                  className="flex justify-between items-center px-4 py-2 hover:bg-[#f9e3ec] text-black"
                >
                  East India <FaChevronRight className="text-xs" />
                </a>

                <div className="absolute left-full top-0 ml-1 hidden group-hover/item:block bg-white shadow-md border border-[#bdbfc1] w-52 z-50">
                  <a
                    href="#"
                    className="block px-4 py-2 border-b border-gray-200 hover:bg-[#f9e3ec] text-black text-black"
                  >
                    Darjeeling Tour
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 border-b border-gray-200 hover:bg-[#f9e3ec] text-black text-black"
                  >
                    Gangtok Tourism
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 border-b border-gray-200 hover:bg-[#f9e3ec] text-black text-black"
                  >
                    West Bengal
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 border-b border-gray-200 hover:bg-[#f9e3ec] text-black text-black"
                  >
                    Kolkata Tourism
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-[#f9e3ec] text-black">
                    Seven Sisters of India
                  </a>
                </div>
              </div>


              <a
                href="#"
                className="block px-4 py-2 border-b border-gray-200 hover:bg-[#f9e3ec] text-black text-black"
              >
                Thailand
              </a>
              <a
                href="#"
                className="block px-4 py-2 border-b border-gray-200 hover:bg-[#f9e3ec] text-black text-black"
              >
                Thailand
              </a>
            </div>
          </div>

          {/* ==== Asia Trips Dropdown ==== */}
          <div className="relative group">
            <Link href='/MainPages/asia'>

              <span className="flex items-center gap-1 text-black py-4 uppercase hover:text-[#db1145] text-[14px]">
                Asia Trips <FaChevronDown className="text-xs mt-1" />
              </span>
            </Link>
            <div className="absolute top-[52px] left-0 hidden group-hover:block bg-white shadow-lg border border-[#bdbfc1] w-48 py-1 z-50">
              <a
                href="#"
                className="block px-4 py-2 border-b border-gray-200 hover:bg-[#f9e3ec] text-black text-black"
              >
                Nepal
              </a>
              <a
                href="#"
                className="block px-4 py-2 border-b border-gray-200 hover:bg-[#f9e3ec] text-black text-black"
              >
                Bhutan
              </a>
              <a
                href="#"
                className="block px-4 py-2 border-b border-gray-200 hover:bg-[#f9e3ec] text-black text-black"
              >
                Tibbet
              </a>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-[#f9e3ec] text-black"
              >
                Sri Lanka
              </a>
            </div>
          </div>

          {/* ==== International Trips Dropdown (with submenus) ==== */}
          <div className="relative group">
            <Link href="/MainPages/international">
              <span className="flex items-center gap-1 text-black py-4 uppercase hover:text-[#db1145] text-[14px] cursor-pointer">
                International Trip <FaChevronDown className="text-xs mt-1" />
              </span>
            </Link>
            <div className="absolute top-[48px] left-0 mt-1 hidden border border-[#bdbfc1] group-hover:block bg-white shadow-lg py-0 w-46 z-50">
              {/* Europe */}
              <div className="relative group/item border-b border-gray-200 last:border-b-0">
                <a
                  href="#"
                  className="flex justify-between items-center px-4 py-2 hover:bg-[#f9e3ec] text-black"
                >
                  European Panorama <FaChevronRight className="text-xs" />
                </a>
                <div className="absolute left-full top-0 ml-1 hidden group-hover/item:block bg-white shadow-md border border-[#bdbfc1] py-0 w-46 z-50">
                  <a
                    href="#"
                    className="block px-4 py-2 border-b border-gray-200 hover:bg-[#f9e3ec] text-black text-black"
                  >
                    Wonders of UK and Scotland

                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 border-b border-gray-200 hover:bg-[#f9e3ec] text-black text-black"
                  >
                    European Honeymoon Special

                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-[#f9e3ec] text-black">
                    Western Europe Wonders
                  </a>

                  <a href="#" className="block px-4 py-2 hover:bg-[#f9e3ec] text-black">
                    Eastern Europe Discovery

                  </a>

                  <a href="#" className="block px-4 py-2 hover:bg-[#f9e3ec] text-black">
                    Mediterranean Magic

                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-[#f9e3ec] text-black">
                    Balkan Explorer

                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-[#f9e3ec] text-black">
                    Central Europe Charm

                  </a>

                  <a href="#" className="block px-4 py-2 hover:bg-[#f9e3ec] text-black">
                    Scandinavian Splendo





                  </a>
                </div>
              </div>

              {/* Middle East */}
              <div className="relative group/item">
                <a
                  href="#"
                  className="flex justify-between items-center px-4 py-2 hover:bg-[#f9e3ec] text-black"
                >
                  Popular Asia Tours <FaChevronRight className="text-xs" />
                </a>
                <div className="absolute left-full top-0 ml-1 hidden group-hover/item:block bg-white shadow-md border border-[#bdbfc1] py-0 w-46 z-50">
                  <a
                    href="#"
                    className="block px-4 py-2 border-b border-gray-200 hover:bg-[#f9e3ec] text-black text-black"
                  >

                    Magical Maldives

                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 border-b border-gray-200 hover:bg-[#f9e3ec] text-black text-black"
                  >
                    Dubai Luxury Experience

                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-[#f9e3ec] text-black">
                    Enchanting Azerbaijan Baku

                  </a>

                  <a href="#" className="block px-4 py-2 hover:bg-[#f9e3ec] text-black">
                    Timeless Thailand

                  </a>

                  <a href="#" className="block px-4 py-2 hover:bg-[#f9e3ec] text-black">
                    Vietnam Vibes
                  </a>

                  <a href="#" className="block px-4 py-2 hover:bg-[#f9e3ec] text-black">

                    Singapore Malaysia
                  </a>
                </div>
              </div>


              <div className="relative group/item">
                <a
                  href="#"
                  className="flex justify-between items-center px-4 py-2 hover:bg-[#f9e3ec] text-black"
                >
                  Country-Specific <FaChevronRight className="text-xs" />
                </a>
                <div className="absolute left-full top-0 ml-1 hidden group-hover/item:block bg-white shadow-md border border-[#bdbfc1] py-0 w-46 z-50">
                  <a
                    href="#"
                    className="block px-4 py-2 border-b border-gray-200 hover:bg-[#f9e3ec] text-black text-black"
                  >
                    Magical Cambodia Trip

                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 border-b border-gray-200 hover:bg-[#f9e3ec] text-black text-black"
                  >
                    Kenya Safari Trip

                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-[#f9e3ec] text-black">
                    Indonesia Bali Bliss

                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-[#f9e3ec] text-black">
                    Captivating China

                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-[#f9e3ec] text-black">

                    Hong Kong Trip (China SAR)

                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-[#f9e3ec] text-black">

                    Macau (China SAR)

                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-[#f9e3ec] text-black">

                    Flavors of Georgia

                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-[#f9e3ec] text-black">

                    Essence of Japan
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-[#f9e3ec] text-black">

                    Wonders of Turkey
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ==== Holiday Theme Dropdown ==== */}
          <div className="relative group">
            <Link href="/MainPages/holiday">
              <span className="flex items-center gap-1 text-black py-4 uppercase hover:text-[#db1145] text-[14px] cursor-pointer">
                Holiday Theme <FaChevronDown className="text-xs mt-1" />
              </span>
            </Link>

            {/* Dropdown Menu */}
            <div className="absolute top-[52px] left-0 hidden group-hover:block bg-white shadow-lg border border-[#bdbfc1] w-56 py-0 z-50 max-h-64 overflow-y-auto">
              <a href="#" className="block border-b border-gray-200 px-4 py-2 hover:bg-[#f9e3ec] text-black">
                Honeymoon Gateways
              </a>
              <a href="#" className="block border-b border-gray-200 px-4 py-2 hover:bg-[#f9e3ec] text-black">
                Adventure & Wildlife
              </a>
              <a href="#" className="block border-b border-gray-200 px-4 py-2 hover:bg-[#f9e3ec] text-black">
                Sea, Sun & Sand
              </a>
              <a href="#" className="block border-b border-gray-200 px-4 py-2 hover:bg-[#f9e3ec] text-black">
                Heritage & Culture
              </a>
              <a href="#" className="block border-b border-gray-200 px-4 py-2 hover:bg-[#f9e3ec] text-black">
                Forts & Palaces
              </a>
              <a href="#" className="block border-b border-gray-200 px-4 py-2 hover:bg-[#f9e3ec] text-black">
                Festivals Tours of Asia
              </a>
              <a href="#" className="block border-b border-gray-200 px-4 py-2 hover:bg-[#f9e3ec] text-black">
                Ayurveda & Spa
              </a>
              <a href="#" className="block border-b border-gray-200 px-4 py-2 hover:bg-[#f9e3ec] text-black">
                Luxury Trains In India
              </a>
              <a href="#" className="block border-b border-gray-200 px-4 py-2 hover:bg-[#f9e3ec] text-black">
                Pilgrimage Tour
              </a>
              <a href="#" className="block border-b border-gray-200 px-4 py-2 hover:bg-[#f9e3ec] text-black">
                First Timer India
              </a>
              <a href="#" className="block border-b border-gray-200 px-4 py-2 hover:bg-[#f9e3ec] text-black">
                Famous Hill Stations
              </a>
              <a href="#" className="block border-b border-gray-200 px-4 py-2 hover:bg-[#f9e3ec] text-black">
                Same Day India Tour
              </a>
              <a href="#" className="block border-b border-gray-200 px-4 py-2 hover:bg-[#f9e3ec] text-black">
                Fixed Departure Tour
              </a>
              <a href="#" className="block border-b border-gray-200 px-4 py-2 hover:bg-[#f9e3ec] text-black">
                Buddhist Heritage Tour
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-[#f9e3ec] text-black">
                Asia Food Trail
              </a>
            </div>
          </div>


          {/* ==== Company Dropdown ==== */}
          <div className="relative group">
            <Link href="/MainPages/Company">
              <span className="flex items-center gap-1 text-black py-4 uppercase hover:text-[#db1145] text-[14px] cursor-pointer">
                Company <FaChevronDown className="text-xs mt-1" />
              </span>
            </Link>
            <div className="absolute top-[52px] left-0 hidden group-hover:block bg-white shadow-lg border border-[#bdbfc1] w-48 py-0 z-50">
              <a href="#" className="block border-b border-gray-200 px-4 py-2 hover:bg-[#f9e3ec] text-black">About Us
              </a>
              <a href="#" className="block border-b border-gray-200 px-4 py-2 hover:bg-[#f9e3ec] text-black">Happy Moment HSI</a>
              <a href="#" className="block border-b border-gray-200 px-4 py-2 hover:bg-[#f9e3ec] text-black">Why Choose Us</a>
              <a href="#" className="block border-b border-gray-200 px-4 py-2 hover:bg-[#f9e3ec] text-black">Advertise with us</a>
              <a href="#" className="block border-b border-gray-200 px-4 py-2 hover:bg-[#f9e3ec] text-black">Jobs</a>
              <a href="#" className="block border-b border-gray-200 px-4 py-2 hover:bg-[#f9e3ec] text-black">Travel Support</a>

              <a href="#" className="block border-b border-gray-200 px-4 py-2 hover:bg-[#f9e3ec] text-black">Contact Us</a>
              <a href="#" className="block px-4 py-2 hover:bg-[#f9e3ec] text-black">Career</a>
            </div>
          </div>

          <a href="#" className="hover:text-[#db1145] text-[14px] uppercase text-black">
            Payment
          </a>
        </nav>

        {/* ==== Mobile Menu Toggle ==== */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-[#db1145]"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* ==== Mobile Menu ==== */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col items-center py-4 space-y-3">
            <a href="#" className="hover:text-[#db1145] text-[14px] uppercase text-black">
              Home
            </a>
            <a href="#" className="hover:text-[#db1145] text-[14px] uppercase text-black">
              Asia Trips
            </a>
            <a href="#" className="hover:text-[#db1145] text-[14px] uppercase text-black">
              India Travel
            </a>
            <a href="#" className="hover:text-[#db1145] text-[14px] uppercase text-black">
              International Trips
            </a>
            <a href="#" className="hover:text-[#db1145] text-[14px] uppercase text-black">
              Holiday Theme
            </a>
            <a href="#" className="hover:text-[#db1145] text-[14px] uppercase text-black">
              Company
            </a>
            <a href="#" className="hover:text-[#db1145] text-[14px] uppercase text-black">
              Payment
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
