import { AboutSection } from '@/components/about-section';
import { ContactSection } from '@/components/contact-section';
import { GallerySection } from '@/components/gallery-section';
import { HeroSection } from '@/components/hero-section';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { ServicesSection } from '@/components/services-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { WhySection } from '@/components/why-section';

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <WhySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
