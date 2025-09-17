
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import LazyImage from '@/components/LazyImage';
import { getOptimizedImageUrl } from '@/utils/imageOptimization';

const testimonials = [
  {
    quote: "Implementing their AI solution transformed our data analytics capabilities. We've seen a 40% increase in operational efficiency within the first quarter.",
    name: "Sarah Johnson",
    title: "CTO, TechForward Inc.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "The team's expertise in AI development is unmatched. They understood our unique challenges and delivered a solution that exceeded our expectations.",
    name: "Michael Chen",
    title: "Innovation Director, Global Enterprise",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "Their proprietary AI platform seamlessly integrated with our existing systems, providing immediate value and insights we hadn't been able to access before.",
    name: "Priya Patel",
    title: "Head of Data Science, InnovateCorp",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 8000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="section bg-gradient-to-r from-cyberpink to-cyberpurple text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">What Our Clients Say</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg">
            <Quote className="text-cyberorange/70 h-12 w-12 mb-6" />

            <blockquote className="mb-8">
              <p className="text-xl md:text-2xl leading-relaxed mb-6">
                "{currentTestimonial.quote}"
              </p>
              <div className="flex items-center">
                <div className="mr-4 bg-white/10 p-1 rounded-full">
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    <img
                      src={getOptimizedImageUrl(currentTestimonial.image, 100, 90)}
                      alt={currentTestimonial.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div>
                  <cite className="font-medium text-lg not-italic block">
                    {currentTestimonial.name}
                  </cite>
                  <span className="text-white/80">
                    {currentTestimonial.title}
                  </span>
                </div>
              </div>
            </blockquote>

            <div className="flex justify-between items-center">
              <button
                onClick={goToPrevious}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                    className={`h-3 w-3 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-white scale-110'
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={goToNext}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
