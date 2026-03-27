import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import MenuSection from '@/components/landing/MenuSection';
import ChefSection from '@/components/landing/ChefSection';
import GallerySection from '@/components/landing/GallerySection';
import ContactSection from '@/components/landing/ContactSection';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      <HeroSection />
      <MenuSection />
      <ChefSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
}