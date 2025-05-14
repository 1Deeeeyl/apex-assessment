import Services from '@/sections/services/Services';
import AboutUs from './sections/aboutUs/AboutUs';
import Hero from './sections/hero/Hero';
import Footer from './sections/footer/Footer';
import ContactUs from './sections/contactUs/ContactUs';
import Nav from './sections/nav/Nav';

function App() {
  return (
    <>
    <Nav/>
      <Hero />
      <AboutUs />

      <Services />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
