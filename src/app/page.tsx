// import Image from "next/image";
import HeaderTop from "../app/components/HeaderTop";
import MainHeader from "../app/components/MainHeader";
import HeroBanner from "./components/HeroBanner";
import IndiaPackages from "./components/IndiaPackages";
import AsiaPackages from "./components/AsiaPackages";
import InternationalTrip from "./components/InternationalTrip";
import HolidayTheme from "./components/HolidayTheme";
import TestimonialSlider from "./components/TestimonialSlider";
import PartnersSlider from "./components/PartnersSlider";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <>
   <HeaderTop/>
   <MainHeader/>
<HeroBanner/>
<IndiaPackages/>
<AsiaPackages/>
<InternationalTrip/>
<HolidayTheme/>
<TestimonialSlider/>
<PartnersSlider/>
<Footer/>
   </>
  );
}
