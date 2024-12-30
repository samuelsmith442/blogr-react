const Hero = () => {
  return (
    <div className="container mx-auto px-6 py-24 text-center text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        A modern publishing platform
      </h1>
      <p className="text-lg md:text-xl mb-12">
        Grow your audience and build your online brand
      </p>
      <div className="flex justify-center space-x-4">
        <button className="btn-primary">Start for Free</button>
        <button className="btn-secondary">Learn More</button>
      </div>
    </div>
  );
};

export default Hero;
