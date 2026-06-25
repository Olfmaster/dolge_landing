import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import CustomerLogos from "@/components/sections/CustomerLogos";
import Challenges from "@/components/sections/Challenges";
import Solution from "@/components/sections/Solution";
import Solutions from "@/components/sections/Solutions";
import Comparison from "@/components/sections/Comparison";
import Testimonial from "@/components/sections/Testimonial";
import RiskSection from "@/components/sections/RiskSection";
import Portfolio from "@/components/sections/Portfolio";
import Booklet from "@/components/sections/Booklet";
import Footer from "@/components/sections/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <CustomerLogos />
        <Challenges />
        <Solution />
        <Solutions />
        <Comparison />
        <Testimonial />
        <RiskSection />
        <Portfolio />
        <Booklet />
      </main>
      <Footer />
      <ScrollAnimations />
    </>
  );
}
