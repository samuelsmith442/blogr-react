import { useState } from 'react';
import logo from '../assets/logo.svg';
import iconHamburger from '../assets/icon-hamburger.svg';
import iconClose from '../assets/icon-close.svg';
import iconArrowLight from '../assets/icon-arrow-light.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    {
      title: 'Product',
      items: ['Overview', 'Pricing', 'Marketplace', 'Features', 'Integrations']
    },
    {
      title: 'Company',
      items: ['About', 'Team', 'Blog', 'Careers']
    },
    {
      title: 'Connect',
      items: ['Contact', 'Newsletter', 'LinkedIn']
    }
  ];

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav className="container mx-auto px-6 py-12">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-12">
          <img src={logo} alt="Blogr" className="h-8" />
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <div key={item.title} className="relative group">
                <button
                  className="nav-link flex items-center space-x-2"
                  onClick={() => toggleDropdown(index)}
                >
                  <span>{item.title}</span>
                  <img
                    src={iconArrowLight}
                    alt=""
                    className={`transition-transform duration-200 ${
                      activeDropdown === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {activeDropdown === index && (
                  <div className="absolute top-full left-0 mt-4 bg-white rounded-lg shadow-xl py-4 px-6 min-w-[150px]">
                    {item.items.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block py-2 text-very-dark-grayish-blue hover:text-very-dark-blue transition-colors duration-200"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <button className="nav-link">Login</button>
          <button className="btn-primary">Sign Up</button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img src={isMenuOpen ? iconClose : iconHamburger} alt="Menu" />
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-6 bg-white rounded-lg shadow-xl p-6">
          {navItems.map((item, index) => (
            <div key={item.title} className="py-4">
              <button
                className="flex items-center justify-center space-x-2 w-full text-very-dark-blue font-medium"
                onClick={() => toggleDropdown(index)}
              >
                <span>{item.title}</span>
                <img
                  src={iconArrowLight}
                  alt=""
                  className={`transition-transform duration-200 ${
                    activeDropdown === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {activeDropdown === index && (
                <div className="mt-4 bg-gray-100 rounded-lg p-4">
                  {item.items.map((subItem) => (
                    <a
                      key={subItem}
                      href="#"
                      className="block py-2 text-center text-very-dark-grayish-blue hover:text-very-dark-blue transition-colors duration-200"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          <div className="border-t pt-4 mt-4">
            <div className="flex flex-col items-center space-y-4">
              <button className="text-very-dark-blue font-medium">Login</button>
              <button className="btn-primary w-full text-center">Sign Up</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
