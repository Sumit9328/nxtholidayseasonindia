"use client";
import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlineLocationMarker, HiPhone } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="text-white">
      {/* Top Red Section */}
      <div className="bg-[#e41e58] text-center py-10">
        <h2 className="text-2xl font-bold tracking-wider mb-2">
          COMPANY INFORMATION
        </h2>
        <div className="w-16 h-[2px] bg-white mx-auto mb-2"></div>
        <p className="text-sm">Get to Know Our Company</p>
      </div>

      {/* Bottom Dark Section */}
      <div className="bg-[#0e0e0e] px-6 md:px-16 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        {/* Address */}
        <div>
          <div className="mb-4">
            <Image
              src="/assets/home/log.png"
              alt="Company Logo"
              width={130}
              height={60}
              className="object-contain"
            />
          </div>
          <p className="text-[#ccc] mb-4 leading-relaxed">
            A-82, Jagatpuri First Floor Nathu Colony <br />
            Chowk Shahdara Delhi 110093
          </p>
          <div className="flex items-center gap-2 mb-2 text-[#ccc]">
            <HiOutlineLocationMarker className="text-[#e41e58]" /> Location
          </div>
          <div className="flex items-center gap-2 mb-2 text-[#ccc]">
            <HiPhone className="text-[#e41e58]" /> (011)-71570598
          </div>
          <div className="flex items-center gap-2 mb-4 text-[#ccc]">
            <MdEmail className="text-[#e41e58]" /> info@holidayseason.co.in
          </div>
          <div className="flex items-center gap-3 text-[#ccc]">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
            <FaPinterestP />
            <FaLinkedinIn />
          </div>
        </div>

        {/* Support & Help */}
        <div>
          <h3 className="text-white font-semibold mb-4">SUPPORT & HELP</h3>
          <ul className="space-y-2 text-[#ccc]">
            <li>Term & Condition</li>
            <li>Cancellation Policy</li>
            <li>Refund Policy</li>
            <li>Privacy Policy</li>
            <li>Pricing Policy</li>
            <li>Sitemap</li>
          </ul>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="text-white font-semibold mb-4">Recent Posts</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/footer/exclusive.avif"
                alt="Exclusive"
                width={50}
                height={50}
                className="rounded"
              />
              <div>
                <p className="text-white font-medium text-sm">Daily Deals</p>
                <p className="text-[#e41e58] text-xs">Upto 20% OFF</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Image
                src="/assets/footer/whsp.gif"
                alt="Whatsapp"
                width={50}
                height={50}
                className="rounded"
              />
              <div>
                <p className="text-white font-medium text-sm">Whatsapp Now</p>
                <p className="text-[#e41e58] text-xs">Chat With Us</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Image
                src="/assets/footer/blogg-unscreen.gif"
                alt="Blog"
                width={50}
                height={50}
                className="rounded"
              />
              <div>
                <p className="text-white font-medium text-sm">Latest Blog</p>
                <p className="text-[#e41e58] text-xs">Sep, 2025</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Image
                src="/assets/footer/achieve.jpg"
                alt="Achievements"
                width={50}
                height={50}
                className="rounded"
              />
              <div>
                <p className="text-white font-medium text-sm">ACHIEVEMENTS</p>
                <p className="text-[#e41e58] text-xs">June 17, 2025</p>
              </div>
            </div>
          </div>
        </div>

        {/* Accredited By */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Holiday Season is Accredited By
          </h3>
          <div className="grid grid-cols-3 gap-3">
            {[
              "f1.jpg",
              "f2.jpg",
              "f3.jpg",
              "f4.jpg",
              "f5.jpg",
              "f6.jpg",
              "f7.jpg",
              "f8.jpg",
              "f9.jpg",
              "f10.jpg",
            ].map((img, i) => (
              <Image
                key={i}
                src={`/assets/footer/${img}`}
                alt={img}
                width={80}
                height={80}
                className="rounded bg-white p-1"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="bg-[#0a0a0a] py-4 text-center text-xs text-gray-400 border-t border-gray-800">
        <p>
          © 2013 ©Holiday Season by <span className="text-[#e41e58]">DMCA.com</span>
        </p>
        <div className="flex justify-center mt-2 gap-2">
          <Image src="/assets/footer/paypal.jpg" alt="paypal" width={40} height={25} />
          <Image src="/assets/footer/mastercard.jpg" alt="mastercard" width={40} height={25} />
          <Image src="/assets/footer/visa.jpg" alt="visa" width={40} height={25} />
        </div>
      </div>
    </footer>
  );
}
