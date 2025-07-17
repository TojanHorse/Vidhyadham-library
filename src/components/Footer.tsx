import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="text-blue-400 mt-1 flex-shrink-0" size={16} />
                <p className="text-sm text-gray-300 leading-relaxed">
                   2nd Floor above Doon Sainik School Prep Academy,<br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>near RIMC, O.N.G.C Chowk road,<br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>Garhi Cantt, Dehradun, Uttarakhand 248003
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="text-blue-400 mt-1 flex-shrink-0" size={16} />
                <div className="text-sm text-gray-300">
                  <a href="tel:+918077360681" className="block hover:text-blue-400 transition-colors">+91 8077360681</a>
                  <a href="tel:+918126466832" className="block hover:text-blue-400 transition-colors">+91 8126466832</a>
                  <a href="tel:+919759115665" className="block hover:text-blue-400 transition-colors">+91 9759115665</a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="text-blue-400 mt-1 flex-shrink-0" size={16} />
                <a href="mailto:vidhyadhamlibrary@gmail.com" className="text-sm text-gray-300 hover:text-blue-400 transition-colors break-all">
                  vidhyadhamlibrary@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 text-white">Operating Hours</h3>
            <div className="flex items-start space-x-3">
              <Clock className="text-blue-400 mt-1 flex-shrink-0" size={16} />
              <div className="text-sm text-gray-300">
                <p className="font-medium text-green-400 mb-1">24/7 Open</p>
                <p className="mb-1">No weekly off</p>
                <p>Always here for your studies</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-2">
              <Link to="/about" className="text-sm text-gray-300 hover:text-blue-400 transition-colors py-1">About Us</Link>
              <Link to="/why-choose-us" className="text-sm text-gray-300 hover:text-blue-400 transition-colors py-1">Why Choose Us</Link>
              <Link to="/how-to-visit" className="text-sm text-gray-300 hover:text-blue-400 transition-colors py-1">How to Visit</Link>
              <Link to="/contact" className="text-sm text-gray-300 hover:text-blue-400 transition-colors py-1">Contact Us</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
            © 2025 VidhyaDham Library. All rights reserved. | Designed for Excellence in Education
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;