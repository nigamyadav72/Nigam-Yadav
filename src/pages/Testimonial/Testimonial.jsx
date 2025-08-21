import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Ravi Pandit",
    role: "Java Developer | Colleague",
    message:
      "Nigam is a highly skilled developer! His code is clean, efficient, and his problem-solving skills are top-notch.",
    avatar: "/assets/images/testimonial1.png",
  },
  {
    name: "Ritesh Sahani",
    role: "Django Developer | Colleague",
    message:
      "Working with Nigam was an amazing experience. He brings creativity and efficiency to every project.",
    avatar: "/assets/images/testimonial3.jpg",
  },
  {
    name: "Abishek Gupta",
    role: "Full Stack Developer",
    message:
      "Nigam's expertise in full-stack development helped us ship our product faster and better. Truly reliable!",
    avatar: "/assets/images/testimonial2.jpg",
  },
];

const TestimonialSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    resetAutoplay();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    resetAutoplay();
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    resetAutoplay();
  };

  const resetAutoplay = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <section className="py-20 bg-[#0a0f1f] relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-14">
          What People Say <span className="text-blue-400">About Me</span>
        </h2>

        {/* Slider Container */}
        <div className="relative max-w-3xl mx-auto">
          {/* Testimonial Cards */}
          <div className="overflow-hidden rounded-2xl shadow-xl relative">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-6 py-10"
                >
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-10 flex flex-col items-center text-center shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-28 h-28 rounded-full mb-6 border-4 border-blue-500 object-cover shadow-lg hover:scale-110 transition-transform duration-300"
                    />
                    <p className="text-gray-300 mb-6 font-medium text-lg leading-relaxed italic">
                      “{testimonial.message}”
                    </p>
                    <h3 className="text-white font-bold text-2xl mb-1">{testimonial.name}</h3>
                    <span className="text-blue-400 text-sm tracking-wide">{testimonial.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 border border-white/20 hover:bg-white/20 backdrop-blur-lg rounded-full p-3 text-white transition-all duration-300 shadow-lg hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 border border-white/20 hover:bg-white/20 backdrop-blur-lg rounded-full p-3 text-white transition-all duration-300 shadow-lg hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-blue-500 shadow-[0_0_10px_#3b82f6] scale-125"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
