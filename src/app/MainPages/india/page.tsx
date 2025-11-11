import React from "react";
import HeroBannerind from "@/app/components/indiatravel/HeroBannerind";
import IndiaToursPage from "@/app/components/indiatravel/IndiaToursPage";
import IndiaCallPackages from "@/app/components/indiatravel/IndiaCallPackages";
import HeaderTop from "@/app/components/HeaderTop";
import MainHeader from "@/app/components/MainHeader";
import PartnersSlider from "@/app/components/PartnersSlider";
import Footer from "@/app/components/Footer";
import IndiaPackage from "@/app/components/indiatravel/IndiaPackage";
import TopDestination from "@/app/components/indiatravel/TopDestination";
import OurTopDestinations from "@/app/components/indiatravel/OurTopDestinations";

export default function India() {
  return (
  <>
  <HeaderTop/>
  <MainHeader/>
  <HeroBannerind/>
  <IndiaToursPage/>
  <IndiaCallPackages/>
  <IndiaPackage/>
  <TopDestination/>
  <OurTopDestinations/>
  <PartnersSlider/>
  <Footer/>
  </>
  );
}
