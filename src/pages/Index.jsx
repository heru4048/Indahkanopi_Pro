import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import LocationMap from '../components/LocationMap';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Index(){
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <WhyChooseUs />
        <Testimonials />
        <LocationMap />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
