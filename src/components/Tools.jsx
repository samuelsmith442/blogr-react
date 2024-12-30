import laptopDesktop from '../assets/illustration-laptop-desktop.svg';
import laptopMobile from '../assets/illustration-laptop-mobile.svg';

const Tools = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
          <div className="mb-12 md:mb-0">
            <picture>
              <source media="(min-width: 768px)" srcSet={laptopDesktop} />
              <img
                src={laptopMobile}
                alt="Laptop illustration"
                className="w-full"
              />
            </picture>
          </div>
          
          <div>
            <div className="space-y-12 md:space-y-12 text-center md:text-left">
              <div>
                <h3 className="text-2xl font-bold text-very-dark-blue mb-6 whitespace-nowrap">
                  Free, open, simple
                </h3>
                <p className="text-very-dark-grayish-blue leading-relaxed">
                  Blogr is a free and open source application backed by a large community of helpful developers. It supports 
                  features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
                  and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-very-dark-blue mb-6 whitespace-nowrap">
                  Powerful tooling
                </h3>
                <p className="text-very-dark-grayish-blue leading-relaxed">
                  Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                  capable of producing even the most complicated sites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
