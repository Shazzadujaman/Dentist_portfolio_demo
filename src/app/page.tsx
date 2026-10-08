import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyMe from "@/components/WhyMe";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import LocationMap from "@/components/LocationMap";
import CaseStudy from "@/components/CaseStudy";
import FAQ from "@/components/FAQ";
import Articles from "@/components/Articles";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyMe />
        <Services />
        <Testimonials />
        <ContactSection />
        <LocationMap />
        <CaseStudy />
        <FAQ />
        <Articles />
        <CTABanner />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
