import Container from '@/components/container/Container';
import { Instagram, Facebook, Twitter, Youtube, Linkedin } from 'lucide-react';
import logo from '../../assets/logo/MainLogo.png';


export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#aboutUs', label: 'About Us' },
    { href: '#services', label: 'Services' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contactUs', label: 'Contact Us' },
  ];

  const socials = [
    {
      icon: <Instagram size={24} className="" />,
      href: 'https://instagram.com',
    },
    {
      icon: <Facebook size={24} className="" />,
      href: 'https://facebook.com',
    },
    {
      icon: <Twitter size={24} className="" />,
      href: 'https://twitter.com',
    },
    {
      icon: <Youtube size={24} className="" />,
      href: 'https://youtube.com',
    },
    {
      icon: <Linkedin size={24} className="" />,
      href: 'https://linkedin.com',
    },
  ];

  return (
    <footer className="bg-zinc-900 text-white py-16 px-4 xl:px-0 relative">
      <Container>
        <img src={logo} alt="Company Logo" className="w-30 h-auto mb-10 " />

        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-zinc-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Connect With Us</h3>
            <ul className="flex space-x-4">
              {socials.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.href}
                    className="bg-zinc-800 hover:bg-orange-400 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out cursor-pointer"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h4 className="text-lg font-medium mb-3">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-zinc-800 px-4 py-2 rounded-l text-sm flex-grow focus:outline-none"
                />
                <button className="bg-orange-400 px-4 py-2 rounded-r text-sm font-medium hover:bg-orange-500 transition-all duration-300 ease-in-out cursor-pointer">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-6">
          <p className="text-zinc-400 text-sm text-center mb-4">
            Copyright © {currentYear} Apex Global Inc. All rights reserved.
          </p>
          <p className="text-zinc-500 text-xs text-center max-w-4xl mx-auto">
            Designated trademarks and brands are the property of their
            respective owners. Apex Global Inc. and its products are not
            affiliated or endorsed by such owners. Use of this (website/app)
            constitutes acceptance of Apex Global Inc. Privacy Policy and Terms
            of Use. Copyright © {currentYear} Apex Global Inc. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
