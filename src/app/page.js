import {
  Header,
  Hero,
  Features,
  HowItWorks,
  Benefits,
  CTA,
  Footer
} from '@/components';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FEFDFA]">
      <Header />
      <main id="main-content">
        <Hero />
        <Features />
        <HowItWorks />
        <Benefits />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
