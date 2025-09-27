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
      name: "Face starter",
      description: "The simplest way to step into the spotlight with ReelFace.",
      monthlyPrice: 19999,
      annualPrice: 199990, // One-time payment
      isOneTime: true,
      features: [
        "📱 5 Reels + 1 collab reel",
        "✂️ Clean, professional edits",
        "🔍 Basic research",
        "📊 Performance insights",
        "reelface Branding Included"
      ],

      cta: "Book now",
      popular: false,
      color: "from-green-500/70 to-green-300/20"
    },
    {
      name: "Reelface",
      description: "Perfect for brands and professionals seeking consistent reel-based content.",
      monthlyPrice: 6999,
      annualPrice: 69990, // One-time payment
      isOneTime: true,
      features: [
        "1 Professional reel shoot",
        "30 days exclusivity",
        "Script, shooting, and editing support",
        "Brand-aligned wardrobe & styling",
        "Strategy call to refine your message"
      ],

      cta: "Book now",
      popular: false,
      color: "from-blue-500/70 to-blue-300/20"
    },
    {
      name: "FaceLift",
      description: "Your first step into the spotlight.",
      monthlyPrice: 29999,
      annualPrice: 299990, // One-time payment
      isOneTime: true,
      features: [
        "📱 8 Reels + 1 collab reel",
        "✂️ Scroll-stopping edits",
        "🔍 Trend research",
        "🎯 Spotlight Boost",
        "reelface Branding Included"
      ],

      cta: "Book now",
      popular: true,
      color: "from-reelred/70 to-reelred/20"
    },
    {
      name: "FaceEmpire",
      description: "Turn your brand into a conversation everyone's having.",
      monthlyPrice: 39999,
      annualPrice: 399990, // One-time payment
      isOneTime: true,
      features: [
        "📱 12 Reels + 1 collab reel",
        "🔄 Edits that keep content in the loop",
        "🔍 Deep trend & audience research",
        "📊 Monthly performance insights",
        "🎯 Visibility Push",
        "reelface Branding Included"
      ],

      cta: "Book now",
      popular: false,
      color: "from-yellow-500/70 to-yellow-300/20"
    }
  ];

  // Additional service plans
  const additionalPlans = [
    {
      name: "Personal Branding Services",
      description: "Comprehensive package for professionals to establish and grow their personal brand",
      monthlyPrice: 99999,
      annualPrice: 1199988, // Monthly subscription
      isMonthly: true,
      features: [
        "Cinematic trailer introducing your expertise",
        "8 short reels tailored to your niche",
        "4 professional photoshoot edits",
        "Interview or podcast shoot",
        "2–3 instant reels cut from long videos",
        "Speaking session opportunities (events/workshops)",
        "Personal website or portfolio design",
        "2–3 micro-influencer collaborations to boost reach"
      ],
      cta: "Contact us",
      color: "from-purple-500/70 to-purple-300/20"
    },
    {
      name: "Face edits",
      description: "Short-form video editing only",
      monthlyPrice: 999,
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
      monthlyPrice: 4999,
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

      {/* Main Pricing Plans */}
      <section id="pricing-plans" className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your ReelFace Package</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select the perfect package to elevate your brand's presence with professional reel content
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  plan.popular ? 'ring-2 ring-reelred transform md:-translate-y-4' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-reelred text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    MOST POPULAR
                  </div>
                )}

                <div className={`bg-gradient-to-br ${plan.color} p-6 text-white`}>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="opacity-90 mb-4">{plan.description}</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">₹{plan.monthlyPrice.toLocaleString()}</span>
                    <span className="ml-2 opacity-80">
                      {plan.isOneTime ? '' : plan.isStarting ? ' starting' : '/month'}
                    </span>
                  </div>
                  {plan.isOneTime && (
                    <p className="text-sm mt-1 opacity-80">
                      One-time payment
                    </p>
                  )}
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
                    to={plan.name === "Enterprise" ? "/contact" : "/contact"}
                    className={`w-full button-primary justify-center ${
                      plan.popular ? 'bg-gradient-to-r from-reelred to-reelblack' : ''
                    }`}
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

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized services to complement your content creation needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {additionalPlans.map((plan, index) => (
              <div
                key={index}
                className="relative bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <div className={`bg-gradient-to-br ${plan.color} p-6 text-white`}>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="opacity-90 mb-4">{plan.description}</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">₹{plan.monthlyPrice.toLocaleString()}</span>
                    <span className="ml-2 opacity-80">
                      {plan.isMonthly ? '/month' : plan.isStarting ? ' starting' : ''}
                    </span>
                  </div>
                  {plan.isMonthly && (
                    <p className="text-sm mt-1 opacity-80">
                      Monthly subscription
                    </p>
                  )}
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
