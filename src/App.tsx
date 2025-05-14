import Services from '@/sections/services/Services';
import AboutUs from './sections/aboutUs/AboutUs';
import Hero from './sections/hero/Hero';
import Footer from './sections/footer/Footer';
import ContactUs from './sections/contactUs/ContactUs';
import Nav from './sections/nav/Nav';
import Testimonials from '@/sections/testimonials/Testimonials'

function App() {
  return (
    <>
    <Nav/>
      <Hero />
      <AboutUs />

      <Services />
      <Testimonials/>
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
