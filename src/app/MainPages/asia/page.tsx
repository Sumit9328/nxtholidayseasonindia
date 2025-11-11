import React from 'react'
import HeaderTop from '@/app/components/HeaderTop';
import MainHeader from '@/app/components/MainHeader';
import DestinationSliderAsia from '@/app/components/asia/DestinationSliderAsia';
import DetinationGridAsia from '@/app/components/asia/DetinationGridAsia';
import DestinationAsia from '@/app/components/asia/DestinationAsia';
import InfoSection from '@/app/components/asia/InfoSection';
import VideoSection from '@/app/components/asia/VideoSectionAsia';
import RecomendeSlider from '@/app/components/asia/RecomendeSlider';
import CustomerAsia from '@/app/components/asia/CustomerAsia';
import PartnersSlider from '@/app/components/PartnersSlider';
import Footer from '@/app/components/Footer';


export default function asia() {
  return (
  <>
<HeaderTop/>
<MainHeader/>
<DestinationSliderAsia/>
<InfoSection/>
<DetinationGridAsia/>
<DestinationAsia/>
<VideoSection/>
<RecomendeSlider/>
<CustomerAsia/>
<PartnersSlider/>
<Footer/>
  </>
  );
}
