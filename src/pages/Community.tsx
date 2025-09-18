import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ChevronDown, Users, Heart, Star,
  Sparkles, Award, Rocket, Globe, MessageCircle,
  Calendar, Shield, Zap, Camera, Film, Mic,
  User, Coffee, BookOpen, Gift
} from 'lucide-react';
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

// Typing animation component
const TypingAnimation = ({ texts, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000 }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex];

      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="text-gradient bg-gradient-to-r from-reelred to-reelblack">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const Community = () => {
  const communityFeatures = [
    {
      id: 'exclusive-content',
      title: 'Exclusive Content Access',
      description: 'Get early access to our latest video content, behind-the-scenes footage, and exclusive tutorials.',
      icon: Star,
      benefits: [
        'Early access to new video releases',
        'Behind-the-scenes content and bloopers',
        'Exclusive tutorials and tips',
        'Member-only live streams',
        'Priority access to new features'
      ]
    },
    {
      id: 'networking-events',
      title: 'Networking & Events',
      description: 'Connect with fellow creators, attend virtual meetups, and participate in collaborative projects.',
      icon: Users,
      benefits: [
        'Monthly virtual meetups and workshops',
        'Collaborative project opportunities',
        'Networking with industry professionals',
        'Guest speaker sessions',
        'Community challenges and contests'
      ]
    },
    {
      id: 'learning-resources',
      title: 'Learning Resources',
      description: 'Access comprehensive learning materials, tutorials, and courses to enhance your video creation skills.',
      icon: BookOpen,
      benefits: [
        'Video production masterclasses',
        'Equipment and software tutorials',
        'Industry best practices guides',
        'Downloadable templates and assets',
        'One-on-one mentorship opportunities'
      ]
    },
    {
      id: 'feedback-support',
      title: 'Feedback & Support',
      description: 'Get constructive feedback on your work and receive support from our community of creators.',
      icon: MessageCircle,
      benefits: [
        'Peer review and feedback sessions',
        'Expert critiques and suggestions',
        '24/7 community support forum',
        'Direct access to our production team',
        'Troubleshooting and technical help'
      ]
    },
    {
      id: 'exclusive-perks',
      title: 'Member Perks & Rewards',
      description: 'Enjoy exclusive discounts, early access to services, and special rewards for active community members.',
      icon: Gift,
      benefits: [
        'Discounts on our video production services',
        'Free monthly content creation tools',
        'Priority booking for shoots and consultations',
        'Exclusive merchandise and swag',
        'Recognition and featured member spotlights'
      ]
    }
  ];

  const communityValues = [
    {
      title: 'Creativity First',
      description: 'We celebrate and nurture creative expression in all its forms, encouraging members to push boundaries.',
      icon: '🎨'
    },
    {
      title: 'Collaborative Spirit',
      description: 'Together we achieve more. Our community thrives on collaboration, support, and shared knowledge.',
      icon: '🤝'
    },
    {
      title: 'Continuous Learning',
      description: 'We believe in lifelong learning and provide resources to help members grow their skills and expertise.',
      icon: '📚'
    },
    {
      title: 'Inclusive Environment',
      description: 'Our community welcomes creators from all backgrounds, skill levels, and creative disciplines.',
      icon: '🌍'
    },
    {
      title: 'Quality Content',
      description: 'We maintain high standards for content quality while supporting members in achieving their best work.',
      icon: '⭐'
    },
    {
      title: 'Innovation Focus',
      description: 'We embrace new technologies, techniques, and trends to stay at the forefront of video production.',
      icon: '🚀'
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Community - Join Our Creator Network"
        description="Join our vibrant community of video creators, content producers, and storytellers. Access exclusive content, networking events, and learning resources."
      />

      {/* Community Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 via-purple-600 to-green-600 text-white py-20 md:py-28 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-yellow-400/20 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-green-400/30 blur-3xl animate-pulse-slow animation-delay-1000"></div>
          <div className="absolute top-3/4 left-1/3 w-40 h-40 rounded-full bg-purple-400/20 blur-2xl animate-pulse-slow animation-delay-2000"></div>
          <div className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full bg-orange-400/25 blur-2xl animate-pulse-slow animation-delay-3000"></div>
        </div>

        {/* Community circles pattern instead of hexagons */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full border-2 border-white animate-ping animation-delay-500"></div>
          <div className="absolute top-32 right-20 w-16 h-16 rounded-full border-2 border-yellow-300 animate-ping animation-delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full border-2 border-green-300 animate-ping animation-delay-1500"></div>
          <div className="absolute bottom-32 right-1/3 w-12 h-12 rounded-full border-2 border-purple-300 animate-ping animation-delay-2000"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm text-sm font-medium mb-6 animate-bounce">
                <span className="mr-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white p-1 rounded-full">
                  <Heart className="h-3 w-3" />
                </span>
                🌟 Join Our Creative Family
              </div>

              <h1 className="heading-xl mb-6 relative">
                <span className="relative">
                  Connect with <TypingAnimation texts={["Creators", "Storytellers", "Innovators", "Visionaries", "Artists"]} />
                </span>
              </h1>

              <p className="text-xl text-white/90 mb-8 max-w-2xl">
                Join our vibrant community of video creators, content producers, and storytellers. Access exclusive resources, connect with like-minded individuals, and grow your creative skills together.
              </p>

              {/* Community category badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { icon: <Camera className="h-4 w-4" />, text: "🎬 Video Creators", color: "bg-gradient-to-r from-orange-400/20 to-yellow-400/20 border border-orange-300/30" },
                  { icon: <Users className="h-4 w-4" />, text: "🤝 Networking", color: "bg-gradient-to-r from-green-400/20 to-emerald-400/20 border border-green-300/30" },
                  { icon: <BookOpen className="h-4 w-4" />, text: "📚 Learning", color: "bg-gradient-to-r from-purple-400/20 to-indigo-400/20 border border-purple-300/30" },
                  { icon: <Heart className="h-4 w-4" />, text: "💝 Support", color: "bg-gradient-to-r from-pink-400/20 to-rose-400/20 border border-pink-300/30" }
                ].map((badge, index) => (
                  <div
                    key={index}
                    className={`inline-flex items-center ${badge.color} backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium transform transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                  >
                    <span className="mr-2 text-white">{badge.icon}</span>
                    <span className="text-white font-semibold">{badge.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="#join-community"
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl group flex items-center"
                >
                  🚀 Join Our Community
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="#community-features"
                  className="bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/20 transition-all text-white font-semibold py-4 px-8 rounded-full inline-flex items-center hover:shadow-lg transform hover:-translate-y-1"
                >
                  ✨ Explore Features
                  <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
                </Link>
              </div>

              {/* Community stats */}
              <div className="grid grid-cols-3 gap-4 mt-12">
                {[
                  { value: 500, label: "Active Members", icon: <Users className="h-5 w-5" /> },
                  { value: 25, label: "Countries", icon: <Globe className="h-5 w-5" /> },
                  { value: 100, label: "Monthly Events", icon: <Calendar className="h-5 w-5" /> }
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
              <div className="relative">
                {/* Decorative background shapes */}
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-reelred/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-reelblack/20 rounded-full blur-xl"></div>

                {/* Main image */}
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 relative z-10 shadow-xl border border-white/10">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div className="rounded-lg overflow-hidden bg-reelred/10 aspect-[4/3]">
                        <LazyImage
                          src={getOptimizedImageUrl("https://images.unsplash.com/photo-1522071820081-009f0129c71c", 600, 85)}
                          alt="Community collaboration"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="rounded-lg overflow-hidden bg-reelblack/10 aspect-[4/3]">
                        <LazyImage
                          src={getOptimizedImageUrl("https://images.unsplash.com/photo-1600880292203-757bb62b4baf", 600, 85)}
                          alt="Creative workspace"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="rounded-lg overflow-hidden bg-reelred/10 aspect-square">
                      <LazyImage
                        src={getOptimizedImageUrl("https://images.unsplash.com/photo-1543269865-cbf427effbad", 600, 85)}
                        alt="Community meetup"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Community highlight */}
                  <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center">
                    <div className="bg-reelred/20 p-3 rounded-full mr-4">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg">Supportive Community</h3>
                      <p className="text-white/80 text-sm">Where creators help creators succeed</p>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -left-4 bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center z-20 animate-float">
                  <Camera className="h-6 w-6 text-reelred" />
                </div>

                <div className="absolute -bottom-4 -right-4 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center z-20 animate-float animation-delay-1000">
                  <Users className="h-5 w-5 text-reelblack" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70 animate-bounce">
          <span className="text-sm font-medium mb-2">Scroll to explore</span>
          <ChevronDown className="h-5 w-5" />
        </div>
      </section>

      {/* Community Features Section - Card Grid Layout */}
      <section id="community-features" className="section bg-gradient-to-br from-orange-50 via-purple-50 to-green-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              🌟 Community Features
            </h2>
            <p className="text-gray-700 text-xl leading-relaxed">
              Discover the amazing benefits and exclusive features that make our community special. Connect, learn, and grow with fellow creators!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {communityFeatures.map((feature, index) => (
              <div
                key={feature.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-transparent hover:border-gradient-to-r hover:from-orange-200 hover:to-purple-200 transform hover:-translate-y-2"
              >
                {/* Feature Image */}
                <div className="relative h-48 overflow-hidden">
                  <LazyImage
                    src={getOptimizedImageUrl(`https://images.unsplash.com/photo-${
                      index === 0 ? '1611162617474-5b21e879e113' :
                      index === 1 ? '1522071820081-009f0129c71c' :
                      index === 2 ? '1513475382585-d06e58bcb0e0' :
                      index === 3 ? '1600880292203-757bb62b4baf' :
                      '1543269865-cbf427effbad'
                    }?auto=format&fit=crop&q=80&w=1000`, 800, 85)}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full">
                    <feature.icon className={`h-6 w-6 ${
                      index === 0 ? 'text-yellow-600' :
                      index === 1 ? 'text-green-600' :
                      index === 2 ? 'text-purple-600' :
                      index === 3 ? 'text-blue-600' :
                      'text-pink-600'
                    }`} />
                  </div>
                </div>

                {/* Feature Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-purple-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Benefits List */}
                  <div className="space-y-2 mb-6">
                    {feature.benefits.slice(0, 3).map((benefit, idx) => (
                      <div key={idx} className="flex items-start text-sm">
                        <div className={`w-2 h-2 rounded-full mt-2 mr-3 ${
                          index === 0 ? 'bg-yellow-400' :
                          index === 1 ? 'bg-green-400' :
                          index === 2 ? 'bg-purple-400' :
                          index === 3 ? 'bg-blue-400' :
                          'bg-pink-400'
                        }`}></div>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                    {feature.benefits.length > 3 && (
                      <div className="text-sm text-gray-500 italic">
                        +{feature.benefits.length - 3} more benefits...
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <Link
                    to="/contact"
                    className={`inline-flex items-center px-4 py-2 rounded-full text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg transform hover:scale-105 ${
                      index === 0 ? 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600' :
                      index === 1 ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600' :
                      index === 2 ? 'bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600' :
                      index === 3 ? 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600' :
                      'bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600'
                    }`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Values Section */}
      <section className="section bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #f97316 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 50%),
                             radial-gradient(circle at 50% 50%, #10b981 0%, transparent 50%)`
          }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              💝 Our Community Values
            </h2>
            <p className="text-gray-700 text-xl leading-relaxed">
              These core principles shape our community culture and create a welcoming space where every member can thrive and grow together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communityValues.map((value, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-transparent hover:border-white ${
                  index === 0 ? 'from-orange-400/20 to-yellow-400/20 hover:from-orange-400/30 hover:to-yellow-400/30' :
                  index === 1 ? 'from-green-400/20 to-emerald-400/20 hover:from-green-400/30 hover:to-emerald-400/30' :
                  index === 2 ? 'from-purple-400/20 to-indigo-400/20 hover:from-purple-400/30 hover:to-indigo-400/30' :
                  index === 3 ? 'from-blue-400/20 to-cyan-400/20 hover:from-blue-400/30 hover:to-cyan-400/30' :
                  index === 4 ? 'from-pink-400/20 to-rose-400/20 hover:from-pink-400/30 hover:to-rose-400/30' :
                  'from-indigo-400/20 to-purple-400/20 hover:from-indigo-400/30 hover:to-purple-400/30'
                }`}
              >
                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-16 h-16 rounded-bl-2xl ${
                  index === 0 ? 'bg-gradient-to-br from-orange-400 to-yellow-400' :
                  index === 1 ? 'bg-gradient-to-br from-green-400 to-emerald-400' :
                  index === 2 ? 'bg-gradient-to-br from-purple-400 to-indigo-400' :
                  index === 3 ? 'bg-gradient-to-br from-blue-400 to-cyan-400' :
                  index === 4 ? 'bg-gradient-to-br from-pink-400 to-rose-400' :
                  'bg-gradient-to-br from-indigo-400 to-purple-400'
                } opacity-20 group-hover:opacity-40 transition-opacity`}></div>

                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                  {value.description}
                </p>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join Section */}
      <section id="join-community" className="section bg-gradient-to-br from-orange-50 via-purple-50 to-green-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              🚀 Ready to Join Us?
            </h2>
            <p className="text-gray-700 text-xl max-w-3xl mx-auto leading-relaxed">
              Becoming part of our creative family is simple and completely free! Follow these easy steps to start your community journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                step: '1',
                title: '🎯 Sign Up',
                description: 'Create your free account and complete your creative profile to let others know about your interests and skills.',
                icon: '👋',
                color: 'from-orange-400 to-yellow-400'
              },
              {
                step: '2',
                title: '💬 Introduce Yourself',
                description: 'Share your story, creative journey, and what you hope to achieve in our welcoming community space.',
                icon: '🌟',
                color: 'from-purple-400 to-indigo-400'
              },
              {
                step: '3',
                title: '🤝 Start Connecting',
                description: 'Join discussions, attend virtual events, collaborate on projects, and build meaningful relationships.',
                icon: '🎉',
                color: 'from-green-400 to-emerald-400'
              }
            ].map((item, index) => (
              <div key={index} className="group relative">
                {/* Connection line */}
                {index < 2 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400 z-10"></div>
                )}

                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:border-gray-100">
                  {/* Step number */}
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto group-hover:scale-110 transition-transform`}>
                    {item.step}
                  </div>

                  {/* Icon */}
                  <div className="text-4xl text-center mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-center mb-4 text-gray-800 group-hover:text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Ready to Get Started? 🎊</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of creators who are already part of our amazing community. It's completely free and takes less than 2 minutes!
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-orange-500 via-purple-500 to-green-500 hover:from-orange-600 hover:via-purple-600 hover:to-green-600 text-white font-bold py-4 px-8 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              🌟 Join Our Community - It's Free!
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section bg-gradient-to-br from-orange-600 via-purple-600 to-green-600 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white/10 blur-2xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-yellow-400/20 blur-2xl animate-pulse-slow animation-delay-1000"></div>
          <div className="absolute top-3/4 left-1/2 w-24 h-24 rounded-full bg-white/15 blur-xl animate-pulse-slow animation-delay-2000"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6 animate-bounce">🎉</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Creative Journey Starts Here!
            </h2>
            <p className="text-xl opacity-95 mb-8 leading-relaxed max-w-3xl mx-auto">
              Join our vibrant community of creators, storytellers, and innovators. Connect with like-minded individuals, access exclusive resources, and grow your skills in a supportive, inspiring environment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link
                to="/contact"
                className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-4 px-8 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center"
              >
                🚀 Start Your Journey Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <div className="text-white/80 text-sm">
                ✨ 100% Free • No Credit Card Required • Join in 2 Minutes
              </div>
            </div>

            {/* Community stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">500+</div>
                <div className="text-white/80 text-sm">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">25+</div>
                <div className="text-white/80 text-sm">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">100+</div>
                <div className="text-white/80 text-sm">Monthly Events</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
