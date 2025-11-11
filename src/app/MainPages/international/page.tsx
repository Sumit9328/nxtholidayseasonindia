"use client";
import React from "react";
import HeaderTop from "@/app/components/HeaderTop";
import MainHeader from "@/app/components/MainHeader";
import Footer from "@/app/components/Footer";
import InternTestimonial from "@/app/components/international/InternTestimonial";
import ExpertGuides from "@/app/components/international/ExpertGuides";
import InternAbout from "@/app/components/international/InternAbout";
import InternPopularDestinations from "@/app/components/international/InternPopularDestinations";
import WhyBookWithUs from "@/app/components/international/WhyBookWithUs";
import InternHeroBanner from "@/app/components/international/InternHeroBanner";



export default function international() {
  return (
    <>
    <HeaderTop/>
    <MainHeader/>
    <InternHeroBanner/>
    <InternAbout/>
    <InternPopularDestinations/>
    <WhyBookWithUs/>
    <ExpertGuides/>
    <InternTestimonial/>
    <Footer/>
    </>

  );
}
