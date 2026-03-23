import { useScrollFade } from '@/hooks/useScrollFade';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyBottomBar from '@/components/StickyBottomBar';
import WhatsAppButton from '@/components/WhatsAppButton';
import HeroSection from '@/components/home/HeroSection';
import YourTripSection from '@/components/home/YourTripSection';
import DestinationsSplit from '@/components/home/DestinationsSplit';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import TripTypeCards from '@/components/home/TripTypeCards';
import WhyBookSection from '@/components/home/WhyBookSection';
import DarkCtaBand from '@/components/home/DarkCtaBand';
import GetInspired from '@/components/home/GetInspired';
import PressBar from '@/components/home/PressBar';

export default function Index() {
  useScrollFade();

  return (
    <div style={{ paddingBottom: 60 }}>
      <Navbar />
      <HeroSection />
      <YourTripSection />
      <DestinationsSplit />
      <TestimonialsSection />
      <TripTypeCards />
      <WhyBookSection />
      <DarkCtaBand />
      <GetInspired />
      <PressBar />
      <Footer />
      <StickyBottomBar />
      <WhatsAppButton />
    </div>
  );
}
