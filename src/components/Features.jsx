import editorDesktop from '../assets/illustration-editor-desktop.svg';
import editorMobile from '../assets/illustration-editor-mobile.svg';

const Features = () => {
  return (
    <section className="py-24 bg-white relative overflow-x-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-very-dark-blue mb-16">
        Designed for the future
      </h2>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:grid md:grid-cols-[1fr_auto] items-center">
          <div className="order-1 md:order-2 mb-16 md:mb-0 w-full">
            <picture className="block md:-mr-[45%]">
              <source media="(min-width: 768px)" srcSet={editorDesktop} />
              <img
                src={editorMobile}
                alt="Editor illustration"
                className="w-full max-w-lg mx-auto md:translate-x-[15%]"
              />
            </picture>
          </div>
          
          <div className="order-2 md:order-1">
            <div className="space-y-12 text-center md:text-left">
              <div>
                <h3 className="text-2xl font-bold text-very-dark-blue mb-6 whitespace-nowrap">
                  Introducing an extensible editor
                </h3>
                <p className="text-very-dark-grayish-blue leading-relaxed">
                  Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
                  The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
                  videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
                  change the looks of a blog.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-very-dark-blue mb-6 whitespace-nowrap">
                  Robust content management
                </h3>
                <p className="text-very-dark-grayish-blue leading-relaxed">
                  Flexible content management enables users to easily move through posts. Increase the usability of your blog 
                  by adding customized categories, sections, format, or flow. With this functionality, you're in full control.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
