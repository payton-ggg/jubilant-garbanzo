import React from 'react';
import { MapPin, Phone, Clock, Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team to discuss your monument needs. 
            We're here to help you create a lasting tribute to your loved ones.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-8">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-50 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Номер телефону</h4>
                  <p className="text-gray-600">+380 (96) 708 18 58</p>
                  <p className="text-gray-600">+380 (96) 741 09 40</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-50 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Локація магазину</h4>
                  <p className="text-gray-600">кл. Святого Миколаю (перший магазин)</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-50 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Working Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-50 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Email</h4>
                  <p className="text-gray-600">riolit1402@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;