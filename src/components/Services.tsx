import React, { useState } from 'react';
import { Hammer, PenTool, Truck, Wrench, Cuboid as Cube, ArrowRight, Check, Star } from 'lucide-react';

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: <Hammer className="w-10 h-10 text-yellow-600" />,
      title: 'Granite and Marble Monuments',
      shortDesc: 'Premium stone monuments crafted with precision',
      fullDesc: 'Custom monuments crafted from the finest granite and marble, sourced from premium quarries worldwide. Each piece is carefully selected for its durability, beauty, and unique characteristics to create a lasting tribute.',
      features: [
        'Premium granite and marble selection',
        'Custom sizing and shapes available',
        'Weather-resistant finishes',
        'Color matching services',
        'Lifetime structural warranty'
      ],
      image: 'https://images.pexels.com/photos/4223444/pexels-photo-4223444.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'Starting from $2,500'
    },
    {
      icon: <PenTool className="w-10 h-10 text-yellow-600" />,
      title: 'Portrait and Inscription Engraving',
      shortDesc: 'Detailed engraving with lasting clarity',
      fullDesc: 'Professional engraving services using advanced laser and traditional hand-carving techniques. We create beautiful portraits and meaningful inscriptions that maintain their clarity and beauty for generations.',
      features: [
        'High-resolution portrait engraving',
        'Multiple language inscriptions',
        'Custom fonts and designs',
        'Photo restoration services',
        'Precision depth control'
      ],
      image: 'https://images.pexels.com/photos/6646892/pexels-photo-6646892.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'Starting from $800'
    },
    {
      icon: <Truck className="w-10 h-10 text-yellow-600" />,
      title: 'Installation and Improvement',
      shortDesc: 'Complete site preparation and installation',
      fullDesc: 'Comprehensive installation services including site preparation, foundation work, and landscape improvement. Our experienced team ensures proper placement and creates a peaceful, dignified memorial space.',
      features: [
        'Professional site assessment',
        'Foundation preparation',
        'Precision monument placement',
        'Landscape enhancement',
        'Drainage and maintenance setup'
      ],
      image: 'https://images.pexels.com/photos/4223435/pexels-photo-4223435.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'Starting from $1,200'
    },
    {
      icon: <Wrench className="w-10 h-10 text-yellow-600" />,
      title: 'Restoration Services',
      shortDesc: 'Bringing old monuments back to life',
      fullDesc: 'Expert restoration of weathered or damaged monuments, preserving their historical significance while restoring their original beauty. We use specialized techniques to repair, clean, and protect existing memorials.',
      features: [
        'Damage assessment and repair',
        'Professional cleaning services',
        'Inscription re-carving',
        'Structural reinforcement',
        'Protective coating application'
      ],
      image: 'https://images.pexels.com/photos/4223439/pexels-photo-4223439.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'Starting from $600'
    },
    {
      icon: <Cube className="w-10 h-10 text-yellow-600" />,
      title: '3D Project Modeling',
      shortDesc: 'Visualize your monument before creation',
      fullDesc: 'Advanced 3D visualization services that allow you to see your monument design in detail before production begins. Make informed decisions about materials, sizing, and design elements with photorealistic renderings.',
      features: [
        'Photorealistic 3D renderings',
        'Multiple angle views',
        'Material and color options',
        'Size and proportion analysis',
        'Unlimited design revisions'
      ],
      image: 'https://images.pexels.com/photos/4223440/pexels-photo-4223440.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'Starting from $300'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-yellow-50 to-transparent rounded-full translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-gray-100 to-transparent rounded-full -translate-x-32 translate-y-32"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
              Our Services
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8 leading-tight">
            Comprehensive <span className="text-yellow-600">Monument</span> Solutions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From initial design consultation to final installation and beyond, we provide complete monument services 
            with meticulous attention to detail and unwavering commitment to quality craftsmanship.
          </p>
        </div>

        {/* Services navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveService(index)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-full transition-all duration-300 ${
                activeService === index
                  ? 'bg-yellow-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 shadow-md'
              }`}
            >
              <div className={`w-8 h-8 flex items-center justify-center ${
                activeService === index ? 'text-white' : 'text-yellow-600'
              }`}>
                {service.icon}
              </div>
              <span className="font-medium hidden sm:block">{service.title}</span>
            </button>
          ))}
        </div>

        {/* Active service details */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Service image */}
            <div className="relative h-96 lg:h-auto">
              <img
                src={services[activeService].image}
                alt={services[activeService].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm font-medium">Premium Service</span>
                </div>
                <p className="text-2xl font-bold">{services[activeService].title}</p>
              </div>
            </div>

            {/* Service content */}
            <div className="p-8 lg:p-12">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-yellow-100 rounded-2xl w-16 h-16 flex items-center justify-center">
                  {services[activeService].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{services[activeService].title}</h3>
                  <p className="text-yellow-600 font-medium">{services[activeService].shortDesc}</p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                {services[activeService].fullDesc}
              </p>

              {/* Features list */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">What's Included:</h4>
                <div className="space-y-3">
                  {services[activeService].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="bg-green-100 rounded-full p-1">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing and CTA */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Pricing</p>
                  <p className="text-2xl font-bold text-yellow-600">{services[activeService].price}</p>
                </div>
                <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <span>Get Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Service grid overview */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:from-yellow-100 group-hover:to-yellow-200 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{service.shortDesc}</p>
              <button 
                onClick={() => setActiveService(index)}
                className="text-yellow-600 hover:text-yellow-700 font-medium flex items-center space-x-2 transition-colors duration-200"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Our Services</h3>
            <p className="text-gray-600">Trusted by families across the region for our commitment to excellence</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Premium Materials</h4>
              <p className="text-gray-600 text-sm">Only the finest granite and marble from trusted sources</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-yellow-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Quality Guarantee</h4>
              <p className="text-gray-600 text-sm">Comprehensive warranty on all our work and materials</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Hammer className="w-8 h-8 text-yellow-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Expert Craftsmanship</h4>
              <p className="text-gray-600 text-sm">Master artisans with decades of experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;