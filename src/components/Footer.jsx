import logo from '../assets/logo.svg';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Product',
      links: ['Overview', 'Pricing', 'Marketplace', 'Features', 'Integrations']
    },
    {
      title: 'Company',
      links: ['About', 'Team', 'Blog', 'Careers']
    },
    {
      title: 'Connect',
      links: ['Contact', 'Newsletter', 'LinkedIn']
    }
  ];

  return (
    <footer className="bg-very-dark-black-blue text-grayish-blue rounded-tr-[100px] py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <img src={logo} alt="Blogr" className="h-8" />
          </div>
          
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-medium mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center text-sm">
          <p>
            Challenge by{' '}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-light-red transition-colors duration-200"
            >
              Frontend Mentor
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
