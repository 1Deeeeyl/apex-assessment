import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo/MainLogo.png';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#aboutUs', label: 'About Us' },
    { href: '#services', label: 'Services' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contactUs', label: 'Contact Us' },
  ];

  return (
    <nav className="relative z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Company Logo" className="h-10 w-auto" />
        </div>

        <div className="hidden md:flex space-x-8">
          {links.map((link, key) => (
            <a
              key={key}
              href={link.href}
              className="text-gray-200 hover:text-orange-500 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-gray-200 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed inset-0 bg-zinc-900 flex flex-col items-center justify-center z-50"
          >
            <button
              className="absolute top-6 right-6 text-gray-200 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>

            <div className="mb-12">
              <img src={logo} alt="Company Logo" className="h-20 w-auto" />
            </div>

            <div className="flex flex-col items-center space-y-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-200 text-2xl hover:text-orange-500 transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
