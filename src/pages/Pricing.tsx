import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Check, ArrowRight, HelpCircle, ChevronDown,
  CreditCard, DollarSign, Percent, Clock,
  Shield, Zap, Star, Award, Users
} from 'lucide-react';
import SEO from '@/components/SEO';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import FloatingLogo from '@/components/FloatingLogo';
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

const Pricing = () => {

  const pricingPlans = [
    {
      name: "Reelface",
      description: "Your Brand. Your Story. Our Face to the World.",
      monthlyPrice: 9999,
      annualPrice: 69990, // One-time payment
      isOneTime: true,
      features: [
        "1 professional brand Ad shoot",
        "collab accepted (Optional)",
        "Script, shooting, and editing support",
        "Brand-aligned wardrobe & styling",
        "Strategy call to refine your message",
        "Branding promotion"
      ],

      cta: "Book now",
      popular: false,
      color: "from-blue-500/70 to-blue-300/20"
    },

    
    {
      name: "Credit Face",
      description: "Perfect for brands and professionals seeking consistent reel-based content.",
      monthlyPrice: 3999,
      annualPrice: 299990, // One-time payment
      isOneTime: true,
      features: [
        "Your face",
        "Personalized Branding",
        "Content Research",
        "Content Strategy",
        "Script Writing",
        "Video Production",
        "Video Editing",
        "Graphic Designing",
        "Template Creation",
        "Reel Optimization",
        "Thumbnail Design",
        "Voiceovers & Subtitles",
        "SEO for Content",
        "Platform Strategy",
        "Campaign Planning",
        "Audience Engagement",
        "Analytics & Reporting",
        "Trend Monitoring",
        "Brand Storytelling",
        "Account Manager"
      ],

      cta: "Book now",
      popular: true,
      color: "from-reelred/70 to-reelred/20"
    },
    {
      name: "Crowd Face",
      description: "Turn your brand into a conversation everyone's having.",
      monthlyPrice: null,
      annualPrice: null,
      isContactUs: true,
      features: [
        "Your face. Multiple accounts",
        "One brand",
        "Personalized Branding",
        "Content Research",
        "Content Strategy",
        "Script Writing",
        "Video Production",
        "Video Editing",
        "Graphic Designing",
        "Template Creation",
        "Reel Optimization",
        "Thumbnail Design",
        "Voiceovers & Subtitles",
        "SEO for Content",
        "Platform Strategy",
        "Campaign Planning",
        "Audience Engagement",
        "Analytics & Reporting",
        "Trend Monitoring",
        "Brand Storytelling",
        "Account Manager",
        "Dedicated Team"
      ],

      cta: "Contact us",
      popular: false,
      color: "from-yellow-500/70 to-yellow-300/20"
    }
  ];

  // Additional service plans
  const additionalPlans = [
    {
      name: "Face edits",
      description: "Short-form video editing only",
      monthlyPrice: 699,
      annualPrice: 9990, // One-time payment
      isOneTime: true,
      features: [
        "📱 Short-form video editing only",
        "👥 For brands, individuals & professionals",
        "⭐ Engaging, high-quality edits"
      ],
      cta: "Book now",
      color: "from-blue-500/70 to-blue-300/20"
    },
    {
      name: "Video Production",
      description: "Professional video production services",
      monthlyPrice: 1999,
      annualPrice: 49990, // Starting price
      isStarting: true,
      features: [
        "📹 Everyday Moments",
        "🎉 Event Highlights",
        "📖 Brand Story Shoot",
        "💒 Wedding Memories"
      ],
      cta: "Contact us",
      color: "from-gray-500/70 to-gray-300/20"
    }
  ];



  return (
    <div className="min-h-screen">
      <SEO
        title="Pricing - ReelFace"
        description="Professional reel content packages and video production services. From Face starter to Personal Branding - find the perfect package for your brand."
      />

      {/* Pricing Hero Section */}
      <section className="bg-gradient-to-r from-reelred-500 to-reelblack-800 text-white py-20 md:py-28 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-reelwhite/20 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-reelred-400/30 blur-3xl animate-pulse-slow animation-delay-1000"></div>
          <div className="absolute top-3/4 left-1/3 w-40 h-40 rounded-full bg-white/10 blur-2xl animate-pulse-slow animation-delay-2000"></div>
        </div>

        {/* Hexagon Network Animation */}
        <div className="absolute top-0 left-0 w-full h-full opacity-15 pointer-events-none">
          <HexagonNetwork width={1200} height={600} nodeCount={30} />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:col-span-2 text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6 animate-pulse-slow">
                <span className="mr-2 bg-white text-reelred p-1 rounded-full">
                  <Star className="h-3 w-3" />
                </span>
                Professional Reel Content Packages
              </div>

              <h1 className="heading-xl mb-6 relative">
                <span className="relative inline-block">
                  <span className="relative z-10">Simple, Transparent Pricing</span>
                  <span className="absolute -bottom-2 left-0 w-full h-3 bg-reelred/30 rounded-full -z-10 transform -rotate-1"></span>
                </span>
              </h1>

              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                From starter packages to comprehensive personal branding solutions. Find the perfect ReelFace package to elevate your brand's presence.
              </p>


              <div className="flex justify-center">
                <Link
                  to="#pricing-plans"
                  className="bg-white text-reelred hover:bg-gray-100 font-semibold py-3 px-6 rounded-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg group inline-flex items-center"
                >
                  View Pricing Plans
                  <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
                </Link>
              </div>
            </div>
          </div>

          {/* Pricing highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { icon: <Users className="h-6 w-6" />, title: "50+", subtitle: "Happy Customers" },
              { icon: <Star className="h-6 w-6" />, title: "4.9/5", subtitle: "Customer Rating" },
              { icon: <Award className="h-6 w-6" />, title: "99.9%", subtitle: "Uptime Guarantee" },
              { icon: <Zap className="h-6 w-6" />, title: "24/7", subtitle: "Customer Support" }
            ].map((item, index) => (
              <FloatingElement
                key={index}
                delay={index * 0.2}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"
              >
                <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.subtitle}</p>
              </FloatingElement>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70 animate-bounce">
          <span className="text-sm font-medium mb-2">Scroll to explore</span>
          <ChevronDown className="h-5 w-5" />
        </div>
      </section>

      {/* Main Pricing Plans - Redesigned */}
      <section id="pricing-plans" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-reelred/20 to-reelblack/20 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl animate-pulse-slow animation-delay-1000"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <FloatingElement delay={0.1}>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-reelred/10 to-reelblack/10 text-reelred text-sm font-medium mb-6">
                <Star className="h-4 w-4 mr-2" />
                Premium Packages
              </div>
            </FloatingElement>
            <FloatingElement delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-reelred to-reelblack bg-clip-text text-transparent mb-6">
                Choose Your ReelFace Experience
              </h2>
            </FloatingElement>
            <FloatingElement delay={0.3}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Transform your brand with our exclusive reel packages. From starter solutions to comprehensive brand transformations.
              </p>
            </FloatingElement>
          </div>

          {/* Enhanced Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto justify-items-center">
            {pricingPlans.map((plan, index) => (
              <FloatingElement key={index} delay={0.4 + index * 0.1}>
                <div
                  className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col w-full max-w-sm ${
                    plan.popular ? 'ring-2 ring-reelred scale-105 lg:scale-110' : ''
                  } border border-white/20`}
                >
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="bg-gradient-to-r from-reelred to-reelblack text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg animate-pulse">
                        ⭐ MOST POPULAR
                      </div>
                    </div>
                  )}

                  {/* Header with gradient */}
                  <div className={`relative bg-gradient-to-br ${plan.color} p-6 text-white overflow-hidden`}>
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 -translate-y-16 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white/5 translate-y-12 -translate-x-12"></div>

                    <div className="relative z-10">
                      <h3 className="text-xl font-bold mb-3 group-hover:scale-105 transition-transform duration-300">{plan.name}</h3>
                      <p className="opacity-90 mb-4 text-sm leading-relaxed min-h-[3rem]">{plan.description}</p>

                      {/* Price with animation */}
                      <div className="flex items-baseline mb-2">
                        {plan.isContactUs ? (
                          <span className="text-3xl font-black group-hover:scale-110 transition-transform duration-300">
                          Growth Pack
                          </span>
                        ) : (
                          <span className="text-4xl font-black group-hover:scale-110 transition-transform duration-300">
                            ₹{plan.monthlyPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                      {plan.isOneTime && (
                        <p className="text-sm opacity-80 bg-white/20 rounded-full px-3 py-1 inline-block">
                          {plan.name === "Credit Face" ? "1 credit equal to one short vedio" : "My face ad for your brand"}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative p-6 flex-grow flex flex-col">
                    <div className="mb-6 flex-grow">
                      <h4 className="font-bold text-gray-900 mb-4 text-base">What's included:</h4>
                      <ul className="space-y-3">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start group/item">
                            <div className="bg-gradient-to-r from-reelred to-reelblack p-1 rounded-full mr-3 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300">
                              <Check className="h-3 w-3 text-white" />
                            </div>
                            <span className="text-gray-700 text-sm leading-relaxed group-hover/item:text-gray-900 transition-colors duration-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <Link
                      to="/contact"
                      className={`w-full group/btn relative overflow-hidden rounded-xl py-3 px-6 font-semibold text-center transition-all duration-300 transform hover:scale-105 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-reelred to-reelblack text-white shadow-lg hover:shadow-xl'
                          : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 hover:from-reelred hover:to-reelblack hover:text-white'
                      } flex items-center justify-center mt-auto`}
                    >
                      <span className="relative z-10 flex items-center">
                        {plan.cta}
                        <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </span>
                      {/* Button hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-reelred/20 to-reelblack/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    </Link>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-reelred/5 to-reelblack/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </FloatingElement>
            ))}
          </div>

          {/* Trust indicators */}
          <div className="mt-16 text-center">
            <FloatingElement delay={0.8}>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                <div className="flex items-center text-sm text-gray-600">
                  <Shield className="h-4 w-4 mr-2 text-green-500" />
                  Secure Payment
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Award className="h-4 w-4 mr-2 text-blue-500" />
                  Quality Guaranteed
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="h-4 w-4 mr-2 text-purple-500" />
                  50+ Happy Clients
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Zap className="h-4 w-4 mr-2 text-yellow-500" />
                  Fast Delivery
                </div>
              </div>
            </FloatingElement>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized services to complement your content creation needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto justify-items-center">
            {additionalPlans.map((plan, index) => (
              <div
                key={index}
                className="relative bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl w-full max-w-sm"
              >
                <div className={`bg-gradient-to-br ${plan.color} p-6 text-white`}>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="opacity-90 mb-4">{plan.description}</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">₹{plan.monthlyPrice.toLocaleString()}</span>
                    
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-4">What's included:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="h-5 w-5 text-reelred mr-3 shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={plan.cta === "Contact us" ? "/contact" : "/contact"}
                    className="w-full button-primary justify-center"
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="section bg-gradient-to-r from-reelred to-reelblack text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Ready to Get Started?</h2>
            <p className="text-lg opacity-90 mb-8">
              Contact us today to discuss your video production needs or start your free trial.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="button-primary bg-white hover:bg-gray-100 text-reelred">
                Contact Sales
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/contact" className="button-secondary border-white text-white hover:bg-white/10">
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Pricing;
