import { useState, useEffect, useRef } from 'react';
import {
  ArrowRight, CheckCircle, ChevronDown, Zap, Shield,
  Globe, Users, Sparkles, Camera, Film, Trophy,
  User, Gift, Star, TrendingUp, Target, Heart
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
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
  const howItWorks = [
    {
      step: "1",
      title: "Apply to Become a Face",
      description: "Submit your Instagram handle and follower details.",
      icon: <User className="h-8 w-8" />
    },
    {
      step: "2",
      title: "Get Matched with Brands",
      description: "We connect you with brands that fit your niche — from food and fashion to startups and lifestyle.",
      icon: <Target className="h-8 w-8" />
    },
    {
      step: "3",
      title: "Promote Brand Videos",
      description: "Brands send you their videos and captions — you post them on your feed or stories.",
      icon: <Film className="h-8 w-8" />
    },
    {
      step: "4",
      title: "Earn Rewards & Grow",
      description: "Get rewarded through cash, free products, food, or exclusive brand experiences — depending on the campaign.",
      icon: <Gift className="h-8 w-8" />
    }
  ];

  const benefits = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Regular brand collaborations"
    },
    {
      icon: <Gift className="h-6 w-6" />,
      title: "Free products and exclusive experiences"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Visibility through Reelface creator features"
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Access to the Top 100 Face Partners community"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Growth and exposure as a micro-influencer"
    }
  ];

  const whyBrandsChoose = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "One brand video → Hundreds of real faces promoting it"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Authentic organic reach through real profiles"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Cost-effective alternative to influencer ads"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Builds strong brand trust and visibility"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Become a Face - Join the Reelface Creator Network"
        description="Join the Reelface Creator Network. Real People. Real Reach. Real Impact. Turn your social media influence into opportunity with brand collaborations."
      />
      
      {/* Hero Section */}
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
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6 animate-pulse-slow">
              <span className="mr-2 bg-white text-reelred p-1 rounded-full">
                <Film className="h-3 w-3" />
              </span>
              Join the Movement
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 relative">
              🎬 Become a Face
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 opacity-90">
              Join the Reelface Creator Network
            </h2>

            <p className="text-xl md:text-2xl text-white/90 mb-8 italic">
              "Real People. Real Reach. Real Impact."
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                href="https://forms.gle/zwwrgsCvt92jUtz19"
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary bg-white text-reelred hover:bg-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              >
                Become a Face Partner Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#how-it-works"
                className="bg-white/10 hover:bg-white/20 transition-all text-white font-semibold py-3 px-6 rounded-md inline-flex items-center hover:shadow-lg"
              >
                Learn More
                <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70 animate-bounce">
          <span className="text-sm font-medium mb-2">Scroll to explore</span>
          <ChevronDown className="h-5 w-5" />
        </div>
      </section>

      {/* About the Program */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              💡 About the Program
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p className="text-xl font-semibold text-reelred">
                Reelface is where real creators meet real brands.
              </p>
              <p>
                If you have <strong>500–10K followers</strong>, you already have influence — and we'll help you turn it into opportunity.
              </p>
              <p>
                In this program, you'll help brands grow by posting their videos on your social media.
                You don't need to shoot or edit anything — brands will send you ready-to-post content, and you'll simply share it with your audience.
              </p>
              <p>
                Every post builds your credibility as a creator while helping brands reach new people through authentic, real profiles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ⚙ How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {howItWorks.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="bg-gradient-to-r from-reelred to-reelblack text-white w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  {item.icon}
                </div>
                <div className="bg-reelred text-white w-10 h-10 rounded-full flex items-center justify-center mb-3 mx-auto font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              🌟 What You Get
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start p-6 bg-gradient-to-r from-gray-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="bg-gradient-to-r from-reelred to-reelblack text-white p-3 rounded-full mr-4 shrink-0">
                    {benefit.icon}
                  </div>
                  <p className="text-gray-800 font-medium text-lg pt-2">
                    {benefit.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Brands Choose */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              🏆 Why Brands Choose Reelface
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {whyBrandsChoose.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="bg-gradient-to-r from-reelred to-reelblack text-white p-3 rounded-full mr-4 shrink-0">
                    {item.icon}
                  </div>
                  <p className="text-gray-800 font-medium text-lg pt-2">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-reelred to-reelblack text-white relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-white/10 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-white/10 blur-3xl animate-pulse-slow animation-delay-1000"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              🔴 Join the Movement
            </h2>
            <p className="text-xl mb-4">
              Be the face that helps brands grow.
            </p>
            <p className="text-xl mb-8">
              Be part of the future of crowd-based content marketing.
            </p>
            <p className="text-lg opacity-90 mb-8 italic">
              "Your profile. Your reach. Your influence — powered by Reelface."
            </p>
            <a 
              href="https://forms.gle/zwwrgsCvt92jUtz19"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary bg-white hover:bg-gray-100 text-reelred text-lg px-8 py-4 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              👉 Become a Face Partner Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
