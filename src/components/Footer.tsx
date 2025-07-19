import React from 'react';
import { Angry as Angel, Phone, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center" src='/logo.png' />
              <div>
                <h3 className="text-xl font-bold">Riolit</h3>
                <p className="text-gray-400">monument workshop</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              For over 15 years, we have been creating lasting memorials from the finest natural materials, 
              preserving memories with dignity and craftsmanship.
            </p>
            <p className="text-gray-400">
              Eternal memory in stone - quality and tradition.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <div>
                <p>+380 (96) 708 18 58</p>
                <p>+380 (96) 741 09 40</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400" />
                <div>
                  <p>кл. Святого Миколаю (перший магазин)</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-yellow-400" />
                <div>
                  <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Granite and Marble Monuments</li>
              <li>Portrait and Inscription Engraving</li>
              <li>Installation and Improvement</li>
              <li>Restoration Services</li>
              <li>3D Project Modeling</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Pantheon Monument Workshop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;