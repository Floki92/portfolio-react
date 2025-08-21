import React, { useState, useEffect } from 'react';

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Product Manager at TechCorp",
      image: "./images/alex.jpg",
      content: "Saad is an exceptional front-end developer who consistently delivers high-quality work. His attention to detail and ability to transform designs into pixel-perfect websites is remarkable.",
      rating: 5,
      company: "TechCorp",
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "UI/UX Designer",
      image: "./images/sarah.jpg",
      content: "Working with Saad was a fantastic experience. His understanding of modern web technologies and commitment to creating seamless user experiences made our project a huge success.",
      rating: 5,
      company: "DesignHub",
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Startup Founder",
      image: "./images/michael.jpg",
      content: "Saad took our startup's vision and turned it into reality. His technical expertise and problem-solving skills were invaluable. I highly recommend him for any web development project.",
      rating: 5,
      company: "InnovateTech",
    },
    {
      id: 4,
      name: "Emily Davis",
      role: "Marketing Specialist",
      image: "./images/emily.jpg",
      content: "Saad's attention to detail and ability to create visually appealing websites are second to none. He worked closely with us to understand our brand and deliver a website that exceeded our expectations.",
      rating: 5,
      company: "BrandX",
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Generate star rating
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-600'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="w-full py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Client Testimonials
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what others have to say about working with me.
          </p>

          {/* Testimonials Carousel */}
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="relative">
                          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500/30">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-200">{testimonial.name}</h3>
                          <p className="text-sm text-gray-400">{testimonial.role}</p>
                        </div>
                      </div>
                      
                      <div className="flex mb-4">
                        {renderStars(testimonial.rating)}
                      </div>

                      <blockquote className="text-gray-300 leading-relaxed">
                        "{testimonial.content}"
                      </blockquote>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 
                    ${index === activeIndex 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 w-6' 
                      : 'bg-gray-600 hover:bg-gray-500'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
