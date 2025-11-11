"use client";
import React from "react";
import HeaderTop from "@/app/components/HeaderTop";
import MainHeader from "@/app/components/MainHeader";
import Footer from "@/app/components/Footer";
import AboutHolidaySeason from "@/app/components/Company/AboutHolidaySeason";
import WhyChooseUs from "@/app/components/Company/WhyChooseUsHoliday";
import HappyGuests from "@/app/components/Company/HappyGuests";
import FacilitiesTestimonials from "@/app/components/Company/FacilitiesTestimonials";
import BestFeaturesSection from "@/app/components/Company/BestFeaturesSection";

export default function Company() {
  return (
    <>
    <HeaderTop/>
    <MainHeader/>
<AboutHolidaySeason/>
<WhyChooseUs/>
<BestFeaturesSection/>
<FacilitiesTestimonials/>
<HappyGuests/>
    <Footer/>
    </>

  );
}
