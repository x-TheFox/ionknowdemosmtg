import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import AuthorityStrip from '@/components/AuthorityStrip';
import FeaturedProjects from '@/components/FeaturedProjects';
import ProcessStack from '@/components/ProcessStack';
import Testimonial from '@/components/Testimonial';
import Services from '@/components/Services';
import About from '@/components/About';
import Awards from '@/components/Awards';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AuthorityStrip />
        <FeaturedProjects />
        <ProcessStack />
        <Testimonial />
        <Services />
        <About />
        <Awards />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
