
import { useState, useEffect, useRef } from 'react';
import {
  ArrowRight, CheckCircle, ChevronDown, Zap, Shield,
  Globe, Layers, Sparkles, Camera, Film, Mic,
  User, Scissors, FileText, Star, Video
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import LazyImage from '@/components/LazyImage';
import { getOptimizedImageUrl } from '@/utils/imageOptimization';
import HexagonNetwork from '@/components/HexagonNetwork';

// Animated counter component
const AnimatedCounter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercent = Math.min(progress / duration, 1);
      setCount(Math.floor(progressPercent * end));

      if (progressPercent < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [end, duration, isVisible]);

  return <span ref={countRef}>{count}</span>;
};

// Floating element animation
const FloatingElement = ({ children, delay = 0, className = "" }) => {
  return (
    <div
      className={`animate-float ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

const ServicesPage = () => {
  const services = [
    {
      id: "brand-face-reels",
      title: "Exclusive Brand Face for Reels",
      description: "Stand out on social media with a unique brand face designed exclusively for your reels, creating authentic connections with your audience.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000",
      features: [
        "Custom brand personality development",
        "Exclusive talent casting and selection",
        "Brand voice and messaging alignment",
        "Social media optimization strategies",
        "Consistent visual identity across platforms"
      ]
    },
    {
      id: "professional-reel-shoots",
      title: "Professional Reel Shoots",
      description: "High-quality reel production tailored to enhance your online presence and engagement with professional cinematography.",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1000",
      features: [
        "Professional video production equipment",
        "Creative direction and storytelling",
        "Multiple format optimization (Instagram, TikTok, YouTube)",
        "On-location and studio shooting options",
        "Post-production editing and color grading"
      ]
    },
    {
      id: "script-content-strategy",
      title: "Script Planning & Content Strategy",
      description: "Comprehensive script writing and content strategy development to align with your brand goals and audience engagement.",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1000",
      features: [
        "Strategic content planning and calendar",
        "Engaging script writing and storytelling",
        "Audience research and targeting",
        "Brand messaging consistency",
        "Performance tracking and optimization"
      ]
    },
    {
      id: "photoshoots-video-trailers",
      title: "Professional Photoshoots & Video Trailers",
      description: "Creative photoshoots and cinematic video trailers to highlight your brand, products, and services with stunning visuals.",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1000",
      features: [
        "Professional photography and cinematography",
        "Creative concept development",
        "Product and lifestyle photography",
        "Cinematic trailer production",
        "Brand storytelling through visuals"
      ]
    },
    {
      id: "podcast-interview-production",
      title: "Podcast & Interview Production",
      description: "Full-service podcast and interview production to share your voice and expertise with the world through professional audio-visual content.",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=1000",
      features: [
        "Professional audio recording and mixing",
        "Video podcast production",
        "Interview preparation and coaching",
        "Multi-platform distribution strategy",
        "Show notes and content repurposing"
      ]
    },
    {
      id: "personal-branding",
      title: "Personal Branding for Professionals",
      description: "Tailored personal branding strategies to help professionals build a strong online identity and establish thought leadership.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=1000",
      features: [
        "Personal brand strategy development",
        "Professional headshots and portraits",
        "LinkedIn and social media optimization",
        "Thought leadership content creation",
        "Online reputation management"
      ]
    },
    {
      id: "professional-editing",
      title: "Professional Editing Services",
      description: "Expert editing for videos, photos, and audio content to deliver polished and professional results that captivate your audience.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1000",
      features: [
        "Advanced video editing and post-production",
        "Color correction and grading",
        "Audio mixing and sound design",
        "Motion graphics and visual effects",
        "Multi-format delivery optimization"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Our Services - Professional Video Production & Content Creation"
        description="Comprehensive video production and content creation services including brand face for reels, professional shoots, content strategy, and personal branding."
      />
      {/* Services Hero Section */}
      <section className="bg-gradient-to-r from-reelred to-reelblack text-white py-20 md:py-28 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-reelwhite/10 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-reelred/20 blur-3xl animate-pulse-slow animation-delay-1000"></div>
          <div className="absolute top-3/4 left-1/3 w-40 h-40 rounded-full bg-white/10 blur-2xl animate-pulse-slow animation-delay-2000"></div>
        </div>

        {/* Hexagon Network Animation */}
        <div className="absolute top-0 left-0 w-full h-full opacity-15 pointer-events-none">
          <HexagonNetwork width={1200} height={600} nodeCount={30} />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6 animate-pulse-slow">
                <span className="mr-2 bg-white text-reelred p-1 rounded-full">
                  <Sparkles className="h-3 w-3" />
                </span>
                End-to-End Solutions
              </div>

              <h1 className="heading-xl mb-6 relative">
                <span className="relative inline-block">
                  <span className="relative z-10">Our Services</span>
                  <span className="absolute -bottom-2 left-0 w-full h-3 bg-reelred/30 rounded-full -z-10 transform -rotate-1"></span>
                </span>
              </h1>

              <p className="text-xl text-white/90 mb-8 max-w-2xl">
                We offer a comprehensive range of video production and content creation solutions to help businesses tell their stories, engage audiences, and gain competitive advantage in today's digital landscape.
              </p>

              {/* Service category badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { icon: <Sparkles className="h-4 w-4" />, text: "Brand Face" },
                  { icon: <Globe className="h-4 w-4" />, text: "Content Creation" },
                  { icon: <Shield className="h-4 w-4" />, text: "Professional Quality" },
                  { icon: <Zap className="h-4 w-4" />, text: "Fast Delivery" }
                ].map((badge, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:bg-white/20"
                  >
                    <span className="mr-1.5 text-white">{badge.icon}</span>
                    {badge.text}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="button-primary bg-white text-reelred hover:bg-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                >
                  Request a Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="#services-list"
                  className="bg-white/10 hover:bg-white/20 transition-all text-white font-semibold py-3 px-6 rounded-md inline-flex items-center hover:shadow-lg transform hover:-translate-y-1"
                >
                  Explore Services
                  <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
                </Link>
              </div>

              {/* Service stats */}
              <div className="grid grid-cols-3 gap-4 mt-12">
                {[
                  { value: 7, label: "Service Categories", icon: <Layers className="h-5 w-5" /> },
                  { value: 50, label: "Projects Completed", icon: <Sparkles className="h-5 w-5" /> },
                  { value: 10, label: "Industries Served", icon: <Globe className="h-5 w-5" /> }
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center transform transition-all duration-300 hover:bg-white/15"
                  >
                    <div className="flex justify-center mb-1 text-white/80">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold">
                      <AnimatedCounter end={stat.value} />+
                    </div>
                    <p className="text-xs text-white/80">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:block">
              <FloatingElement className="relative z-10">
                <div className="relative">
                  {/* Decorative background shapes */}
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-reelred/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-reelblack/20 rounded-full blur-xl"></div>

                  {/* Service icons grid */}
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 relative z-10 shadow-xl border border-white/10">
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { icon: <Star className="h-8 w-8" />, label: "Brand Face", color: "bg-reelred/20" },
                        { icon: <Camera className="h-8 w-8" />, label: "Shoots", color: "bg-reelblack/20" },
                        { icon: <FileText className="h-8 w-8" />, label: "Scripts", color: "bg-reelgray-600/20" },
                        { icon: <Film className="h-8 w-8" />, label: "Videos", color: "bg-reelblack/20" },
                        { icon: <Mic className="h-8 w-8" />, label: "Podcasts", color: "bg-reelred/20" },
                        { icon: <User className="h-8 w-8" />, label: "Branding", color: "bg-reelgray-600/20" },
                        { icon: <Scissors className="h-8 w-8" />, label: "Editing", color: "bg-reelred/20" },
                        { icon: <Video className="h-8 w-8" />, label: "Production", color: "bg-reelblack/20" },
                        { icon: <Globe className="h-8 w-8" />, label: "Digital", color: "bg-reelgray-600/20" }
                      ].map((item, index) => (
                        <div
                          key={index}
                          className={`${item.color} rounded-xl p-4 flex flex-col items-center justify-center text-white transform transition-all duration-300 hover:scale-105`}
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          {item.icon}
                          <span className="text-xs mt-2 font-medium">{item.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Service highlight */}
                    <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center">
                      <div className="bg-reelred/20 p-3 rounded-full mr-4">
                        <Sparkles className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-lg">End-to-End Solutions</h3>
                        <p className="text-white/80 text-sm">From concept to delivery and beyond</p>
                      </div>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <FloatingElement delay={0.7} className="absolute -top-4 -left-4 bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center z-20">
                    <Camera className="h-6 w-6 text-reelred" />
                  </FloatingElement>

                  <FloatingElement delay={1.5} className="absolute -bottom-4 -right-4 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center z-20">
                    <Film className="h-5 w-5 text-reelblack" />
                  </FloatingElement>
                </div>
              </FloatingElement>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70 animate-bounce">
          <span className="text-sm font-medium mb-2">Scroll to explore</span>
          <ChevronDown className="h-5 w-5" />
        </div>
      </section>

      {/* Services List */}
      <section id="services-list" className="section">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-4">Our Video Production Services</h2>
            <p className="text-gray-600 text-lg">
              From exclusive brand faces for reels to comprehensive content strategies, we provide end-to-end video production solutions tailored to your brand's unique needs.
            </p>
          </div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <h2 className="heading-md mb-6">{service.title}</h2>
                  <p className="text-gray-700 mb-6 text-lg">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-reelred mr-3 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact" className="button-primary">
                    Discuss Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-reelred/20 to-reelblack/20 p-4 rounded-xl">
                    <LazyImage
                      src={getOptimizedImageUrl(service.image, 1200, 85)}
                      alt={service.title}
                      className="rounded-lg shadow-lg w-full h-[300px]"
                      objectFit="object-cover"
                    />
                  </div>
                  {index % 2 === 0 ? (
                    <div className="absolute -z-10 -bottom-5 -right-5 w-full h-full bg-reelred/5 rounded-xl"></div>
                  ) : (
                    <div className="absolute -z-10 -bottom-5 -left-5 w-full h-full bg-reelblack/5 rounded-xl"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-reelred to-reelblack text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Ready to Get Started?</h2>
            <p className="text-lg opacity-90 mb-8">
              Contact us today to discuss how our video production and content creation services can help your business achieve its goals.
            </p>
            <Link to="/contact" className="button-primary bg-white hover:bg-gray-100 text-reelred">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
