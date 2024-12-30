import phones from '../assets/illustration-phones.svg';
import circles from '../assets/bg-pattern-circles.svg';

const Infrastructure = () => {
  return (
    <section className="relative bg-gradient-very-dark-gray bg-white py-24 rounded-tr-[100px] rounded-bl-[100px] mt-24 mb-24">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <img
          src={circles}
          alt=""
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      
      <div className="container mx-auto px-6">
        <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
          <div className="relative -mt-48 mb-12 md:mb-0">
            <img
              src={phones}
              alt="Phones illustration"
              className="w-full max-w-lg mx-auto"
            />
          </div>
          
          <div className="text-white relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              State of the Art Infrastructure
            </h2>
            <p className="text-grayish-blue leading-relaxed">
              With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
              This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
