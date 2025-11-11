"use client";
import React from "react";
import HeaderTop from "@/app/components/HeaderTop";
import MainHeader from "@/app/components/MainHeader";
import Footer from "@/app/components/Footer";
import HolidaySlider from "@/app/components/Holiday/HolidaySlider";
import HolidayTheme from "@/app/components/HolidayTheme";
import HoliMixedGrid from "@/app/components/Holiday/HoliMixedGrid";
import YouTubeTestimonialsSection from "@/app/components/Holiday/YouTubeTestimonialsSection";


export default function holiday() {
  return (
    <>
    <HeaderTop/>
    <MainHeader/>
<HolidaySlider/>
<HolidayTheme/>
<HoliMixedGrid/>
<YouTubeTestimonialsSection/>
    <Footer/>
    </>

  );
}
