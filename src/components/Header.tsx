import React, { useState, useEffect } from 'react';
import { Menu, X, Angry as Angel } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
              <img src="/logo-removebg.png" alt="Pantheon" className="w-12 h-12 rounded-full flex items-center justify-center" />
            <div>
              <h1 className="text-xl font-bold text-gray-800">Riolit</h1>
              <p className="text-sm text-gray-600">monument workshop</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            {['about', 'services', 'gallery', 'process', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => smoothScroll(item)}
                className="text-gray-700 hover:text-yellow-600 transition-colors duration-200 capitalize font-medium"
              >
                {item}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-yellow-600 transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="py-4 space-y-2">
              {['about', 'services', 'gallery', 'process', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => smoothScroll(item)}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:text-yellow-600 hover:bg-gray-50 transition-colors duration-200 capitalize"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;