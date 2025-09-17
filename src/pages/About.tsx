
import { useEffect, useState, useRef } from 'react';
import TeamMember from '@/components/TeamMember';
import {
  CheckCircle, Users, Award, Target, Heart, ChevronDown, ArrowRight, Star, Zap, Globe,
  Briefcase, Calendar, Lightbulb, Rocket, Trophy, Code, Server, Database, Brain, Shield,
  Cpu, MessageSquare, Clock, MapPin, Coffee, Smile, Leaf, Gift, Layers, BadgeCheck,
  Bookmark, Codesandbox, Hexagon, GitBranch, Gitlab, Github, Figma, Framer, Chrome,
  Slack, Trello, Linkedin, Twitter, Facebook, Instagram, Youtube, DollarSign, Headphones
} from 'lucide-react';
import SEO from '@/components/SEO';
import FloatingLogo from '@/components/FloatingLogo';
import HexagonNetwork from '@/components/HexagonNetwork';
import LazyImage from '@/components/LazyImage';
import { getOptimizedImageUrl, fallbackImages } from '@/utils/imageOptimization';
import { Link } from 'react-router-dom';
import FloatingElement from '@/components/FloatingElement';

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

// Using the imported FloatingElement component instead of this local definition

const About = () => {
  const teamMembers = [
    {
      name: "David Chen",
      title: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=500",
      bio: "Former AI research lead with 15+ years of experience in enterprise AI solutions. David founded Cyberdetox with a vision to make AI accessible to businesses of all sizes.",
      expertise: ["AI Strategy", "Business Development", "Enterprise Solutions"],
      location: "San Francisco, CA",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "david@cyberdetox.ai"
    },
    {
      name: "Sarah Johnson",
      title: "CTO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=500",
      bio: "PhD in Machine Learning with expertise in natural language processing and computer vision. Sarah leads our technical team and research initiatives.",
      expertise: ["Machine Learning", "NLP", "Computer Vision"],
      location: "Boston, MA",
      linkedin: "https://linkedin.com",
      email: "sarah@cyberdetox.ai"
    },
    {
      name: "Michael Rodriguez",
      title: "Head of Product",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=500",
      bio: "Product strategist focused on creating intuitive AI interfaces for enterprise users. Michael ensures our solutions deliver exceptional user experiences.",
      expertise: ["Product Strategy", "UX Design", "Market Research"],
      location: "Austin, TX",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "michael@cyberdetox.ai"
    },
    {
      name: "Priya Patel",
      title: "Lead Data Scientist",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=500",
      bio: "Specialized in developing custom ML models for diverse industry applications. Priya brings deep expertise in transforming data into actionable insights.",
      expertise: ["Predictive Analytics", "Deep Learning", "Data Visualization"],
      location: "Seattle, WA",
      linkedin: "https://linkedin.com",
      email: "priya@cyberdetox.ai"
    },
    {
      name: "James Wilson",
      title: "VP of Engineering",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500",
      bio: "Experienced engineering leader with a background in scalable cloud infrastructure and AI systems deployment.",
      expertise: ["Cloud Architecture", "DevOps", "System Design"],
      location: "Chicago, IL",
      linkedin: "https://linkedin.com",
      email: "james@cyberdetox.ai"
    },
    {
      name: "Elena Gonzalez",
      title: "Head of AI Ethics",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=500",
      bio: "Former academic researcher specializing in ethical AI development and responsible innovation practices.",
      expertise: ["AI Ethics", "Responsible AI", "Policy Development"],
      location: "Washington, DC",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "elena@cyberdetox.ai"
    },
    {
      name: "Robert Kim",
      title: "Chief Business Officer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=500",
      bio: "Strategic business leader with experience scaling AI companies and developing enterprise partnerships.",
      expertise: ["Business Strategy", "Partnerships", "Go-to-Market"],
      location: "New York, NY",
      linkedin: "https://linkedin.com",
      email: "robert@cyberdetox.ai"
    },
    {
      name: "Aisha Rahman",
      title: "Head of Customer Success",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?auto=format&fit=crop&q=80&w=500",
      bio: "Customer-focused leader ensuring our clients achieve maximum value from our AI solutions.",
      expertise: ["Customer Experience", "Solution Implementation", "Training"],
      location: "Toronto, Canada",
      linkedin: "https://linkedin.com",
      email: "aisha@cyberdetox.ai"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="About Us - ReelFace"
        description="We're a team of video production specialists on a mission to make professional video content creation accessible and valuable for businesses of all sizes."
      />
      {/* About Hero Section */}
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

        {/* Background floating logo */}
        <div className="absolute top-1/2 right-0 transform translate-x-1/3 -translate-y-1/2 opacity-20 z-0 hidden lg:block animate-float">
          <FloatingLogo size={400} />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <FloatingElement
                animationType="fade"
                duration={1}
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6">
                  <span className="mr-2 bg-white text-reelred p-1 rounded-full">
                    <Star className="h-3 w-3" />
                  </span>
                  Creating Since 2015
                </div>
              </FloatingElement>

              <FloatingElement
                animationType="slide-up"
                duration={1}
                delay={0.2}
              >
                <h1 className="heading-xl mb-6 relative">
                  <span className="relative inline-block">
                    <span className="relative z-10">About Us</span>
                    <span className="absolute -bottom-2 left-0 w-full h-3 bg-reelred/30 rounded-full -z-10 transform -rotate-1"></span>
                  </span>
                </h1>
              </FloatingElement>

              <FloatingElement
                animationType="slide-up"
                duration={1}
                delay={0.4}
              >
                <p className="text-xl text-white/90 mb-8 max-w-2xl">
                  We're a team of AI specialists on a mission to make artificial intelligence
                  accessible and valuable for enterprises of all sizes, driving innovation and growth.
                  With our expertise and passion, we're transforming how businesses leverage AI technology.
                </p>
              </FloatingElement>

              {/* Feature badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { icon: <Users className="h-4 w-4" />, text: "Expert Team" },
                  { icon: <Target className="h-4 w-4" />, text: "Clear Mission" },
                  { icon: <Heart className="h-4 w-4" />, text: "Passionate" },
                  { icon: <Rocket className="h-4 w-4" />, text: "Innovative" },
                  { icon: <Shield className="h-4 w-4" />, text: "Trustworthy" }
                ].map((badge, index) => (
                  <FloatingElement
                    key={index}
                    animationType="fade"
                    delay={0.6 + index * 0.1}
                    hoverEffect={true}
                  >
                    <div
                      className="inline-flex items-center bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300"
                    >
                      <span className="mr-1.5 text-white">{badge.icon}</span>
                      {badge.text}
                    </div>
                  </FloatingElement>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <FloatingElement
                  animationType="slide-up"
                  delay={0.8}
                  hoverEffect={true}
                >
                  <Link
                    to="#our-story"
                    className="bg-white text-reelred hover:bg-gray-100 font-semibold py-3 px-6 rounded-md transition-all duration-300 group inline-flex items-center"
                  >
                    Our Story
                    <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                  </Link>
                </FloatingElement>

                <FloatingElement
                  animationType="slide-up"
                  delay={1}
                  hoverEffect={true}
                >
                  <Link
                    to="/contact"
                    className="bg-white/10 hover:bg-white/20 transition-all text-white font-semibold py-3 px-6 rounded-md inline-flex items-center"
                  >
                    Contact Us
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </FloatingElement>
              </div>

              {/* Company stats */}
              <div className="grid grid-cols-3 gap-4 mt-12">
                {[
                  { value: 8, label: "Years Experience", icon: <Award className="h-5 w-5" /> },
                  { value: 200, label: "Projects Completed", icon: <CheckCircle className="h-5 w-5" /> },
                  { value: 15, label: "Countries Served", icon: <Globe className="h-5 w-5" /> },
                  { value: 50, label: "Team Members", icon: <Users className="h-5 w-5" /> },
                  { value: 24, label: "Hour Support", icon: <Clock className="h-5 w-5" /> },
                  { value: 98, label: "Client Satisfaction", icon: <Heart className="h-5 w-5" />, suffix: "%" }
                ].map((stat, index) => (
                  <FloatingElement
                    key={index}
                    animationType="fade"
                    delay={1.2 + index * 0.1}
                    className={index > 2 ? "hidden lg:block" : ""}
                  >
                    <div
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center transition-all duration-300 hover:bg-white/15 h-full"
                    >
                      <div className="flex justify-center mb-1 text-white/80">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold">
                        <AnimatedCounter end={stat.value} />{stat.suffix || "+"}
                      </div>
                      <p className="text-xs text-white/80">{stat.label}</p>
                    </div>
                  </FloatingElement>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:block">
              <FloatingElement
                className="relative z-10"
                animationType="float"
                duration={6}
              >
                <div className="relative">
                  {/* Decorative background shapes */}
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-cyberpink/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyberpurple/20 rounded-full blur-xl"></div>

                  {/* Main image */}
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 relative z-10 shadow-xl border border-white/10">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-4">
                        <FloatingElement
                          animationType="slide-up"
                          delay={0.3}
                        >
                          <div className="rounded-lg overflow-hidden bg-cyberpink/10 aspect-[4/3]">
                            <LazyImage
                              src={getOptimizedImageUrl("https://images.unsplash.com/photo-1522202176988-66273c2fd55f", 600, 85)}
                              alt="Team collaboration"
                              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                              fallbackSrc={fallbackImages.team}
                            />
                          </div>
                        </FloatingElement>

                        <FloatingElement
                          animationType="slide-up"
                          delay={0.5}
                        >
                          <div className="rounded-lg overflow-hidden bg-cyberpurple/10 aspect-[4/3]">
                            <LazyImage
                              src={getOptimizedImageUrl("https://images.unsplash.com/photo-1552664730-d307ca884978", 600, 85)}
                              alt="Business meeting"
                              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                              fallbackSrc={fallbackImages.team}
                            />
                          </div>
                        </FloatingElement>
                      </div>

                      <div className="space-y-4">
                        <FloatingElement
                          animationType="slide-up"
                          delay={0.4}
                        >
                          <div className="rounded-lg overflow-hidden bg-cyberpurple/10 aspect-square">
                            <LazyImage
                              src={getOptimizedImageUrl("https://images.unsplash.com/photo-1519389950473-47ba0277781c", 600, 85)}
                              alt="Team working"
                              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                              fallbackSrc={fallbackImages.team}
                            />
                          </div>
                        </FloatingElement>

                        <FloatingElement
                          animationType="slide-up"
                          delay={0.6}
                        >
                          <div className="rounded-lg overflow-hidden bg-cyberorange/10 aspect-[4/3]">
                            <LazyImage
                              src={getOptimizedImageUrl("https://images.unsplash.com/photo-1600880292203-757bb62b4baf", 600, 85)}
                              alt="AI technology"
                              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                              fallbackSrc={fallbackImages.product}
                            />
                          </div>
                        </FloatingElement>
                      </div>
                    </div>

                    {/* Quote overlay */}
                    <FloatingElement
                      animationType="slide-up"
                      delay={0.8}
                      className="absolute -bottom-6 -right-6 max-w-xs"
                    >
                      <div className="bg-white rounded-xl shadow-lg p-4">
                        <p className="text-sm text-gray-700 italic">
                          "Our mission is to bridge the gap between cutting-edge AI research and practical business applications, creating value for organizations worldwide."
                        </p>
                        <div className="flex items-center mt-2">
                          <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                            <LazyImage
                              src={getOptimizedImageUrl("https://images.unsplash.com/photo-1560250097-0b93528c311a", 100, 90)}
                              alt="CEO"
                              className="w-full h-full object-cover"
                              fallbackSrc={fallbackImages.team}
                            />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-gray-900">David Chen</p>
                            <p className="text-xs text-gray-500">CEO & Founder</p>
                          </div>
                        </div>
                      </div>
                    </FloatingElement>
                  </div>

                  {/* Floating elements */}
                  <FloatingElement
                    delay={0.7}
                    className="absolute -top-4 -left-4 bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center z-20"
                    animationType="bounce-vertical"
                    duration={4}
                  >
                    <Zap className="h-6 w-6 text-cyberpink" />
                  </FloatingElement>

                  <FloatingElement
                    delay={1.5}
                    className="absolute -bottom-4 -left-8 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center z-20"
                    animationType="bounce-vertical"
                    duration={5}
                  >
                    <Award className="h-5 w-5 text-cyberpurple" />
                  </FloatingElement>

                  <FloatingElement
                    delay={1.0}
                    className="absolute -bottom-6 -right-16 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center z-20"
                    animationType="bounce-vertical"
                    duration={4.5}
                  >
                    <Brain className="h-5 w-5 text-cyberorange" />
                  </FloatingElement>
                </div>
              </FloatingElement>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <FloatingElement
          animationType="bounce-vertical"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70"
        >
          <span className="text-sm font-medium mb-2">Scroll to explore</span>
          <ChevronDown className="h-5 w-5" />
        </FloatingElement>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="section relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-cyberpink/5 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-cyberpurple/5 blur-3xl animate-pulse-slow animation-delay-1000"></div>

        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <FloatingElement
              animationType="fade"
              duration={1}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyberpink/10 text-cyberpink text-sm font-medium mb-4">
                <Calendar className="h-4 w-4 mr-2" />
                Our Journey Since 2015
              </div>
            </FloatingElement>

            <FloatingElement
              animationType="slide-up"
              delay={0.2}
            >
              <h2 className="heading-lg mb-4">Our Story</h2>
            </FloatingElement>

            <FloatingElement
              animationType="slide-up"
              delay={0.3}
            >
              <p className="text-gray-600 text-lg">
                From a small startup to an industry leader in AI solutions
              </p>
            </FloatingElement>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <FloatingElement
                animationType="slide-up"
                delay={0.4}
              >
                <p className="text-gray-700 mb-4">
                  Founded in 2015, Cyberdetox began with a simple vision: to bridge the gap between cutting-edge AI research and practical business applications. Our founders recognized that while AI technology was advancing rapidly, many businesses struggled to implement it effectively.
                </p>
              </FloatingElement>

              <FloatingElement
                animationType="slide-up"
                delay={0.5}
              >
                <p className="text-gray-700 mb-4">
                  We started by developing custom AI solutions for enterprise clients across industries, gaining valuable insights into the challenges and opportunities of AI implementation in real-world settings. Our early successes with Fortune 500 companies helped us refine our approach and build our reputation.
                </p>
              </FloatingElement>

              <FloatingElement
                animationType="slide-up"
                delay={0.6}
              >
                <p className="text-gray-700 mb-6">
                  This experience led to the creation of our proprietary AI platform in 2018, designed to make advanced AI capabilities accessible and valuable for businesses of all sizes. Today, we're proud to serve clients worldwide, helping them leverage the power of artificial intelligence to drive innovation and growth.
                </p>
              </FloatingElement>

              {/* Timeline */}
              <FloatingElement
                animationType="fade"
                delay={0.8}
              >
                <div className="flex justify-between items-center mt-8 relative">
                  <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-cyberpink to-cyberpurple transform -translate-y-1/2 rounded-full"></div>

                  {[2015, 2017, 2019, 2021, 2023].map((year, index) => (
                    <FloatingElement
                      key={index}
                      animationType="scale"
                      delay={0.8 + index * 0.1}
                      className="relative z-10"
                    >
                      <div className="flex flex-col items-center">
                        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-cyberpink to-cyberpurple mb-2"></div>
                        <span className="text-sm font-bold">{year}</span>
                      </div>
                    </FloatingElement>
                  ))}
                </div>
              </FloatingElement>
            </div>

            <div className="relative">
              <FloatingElement
                animationType="float"
                duration={5}
              >
                <div className="relative">
                  <LazyImage
                    src={getOptimizedImageUrl("https://images.unsplash.com/photo-1519389950473-47ba0277781c", 1000, 85)}
                    alt="Team collaboration"
                    className="rounded-xl shadow-lg"
                    fallbackSrc={fallbackImages.team}
                  />
                  <div className="absolute -z-10 -bottom-5 -right-5 w-full h-full bg-cyberpink/10 rounded-xl"></div>

                  {/* Milestone cards */}
                  <FloatingElement
                    animationType="slide-up"
                    delay={0.7}
                    className="absolute -bottom-10 -left-10 max-w-[200px]"
                  >
                    <div className="bg-white rounded-lg shadow-lg p-4">
                      <div className="flex items-center mb-2">
                        <Rocket className="h-5 w-5 text-cyberpink mr-2" />
                        <h4 className="font-bold text-sm">2015</h4>
                      </div>
                      <p className="text-xs text-gray-600">Company founded with 5 team members</p>
                    </div>
                  </FloatingElement>

                  <FloatingElement
                    animationType="slide-up"
                    delay={0.9}
                    className="absolute -top-8 -right-8 max-w-[200px]"
                  >
                    <div className="bg-white rounded-lg shadow-lg p-4">
                      <div className="flex items-center mb-2">
                        <Trophy className="h-5 w-5 text-cyberpurple mr-2" />
                        <h4 className="font-bold text-sm">2023</h4>
                      </div>
                      <p className="text-xs text-gray-600">Recognized as industry leader with 50+ team members</p>
                    </div>
                  </FloatingElement>
                </div>
              </FloatingElement>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <HexagonNetwork width={1200} height={600} nodeCount={20} />
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FloatingElement
              animationType="fade"
              duration={1}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyberpurple/10 text-cyberpurple text-sm font-medium mb-4">
                <Target className="h-4 w-4 mr-2" />
                What Drives Us
              </div>
            </FloatingElement>

            <FloatingElement
              animationType="slide-up"
              delay={0.2}
            >
              <h2 className="heading-lg mb-4">Our Mission & Values</h2>
            </FloatingElement>

            <FloatingElement
              animationType="slide-up"
              delay={0.3}
            >
              <p className="text-gray-600 text-lg">
                We're guided by a clear mission and strong core values that shape everything we do, from product development to client relationships.
              </p>
            </FloatingElement>
          </div>

          <div className="mb-16">
            <FloatingElement
              animationType="slide-up"
              delay={0.4}
            >
              <div className="bg-gradient-to-r from-cyberpink/5 to-cyberpurple/5 p-8 rounded-xl shadow-sm border border-gray-100 text-center max-w-3xl mx-auto relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyberpink/10 rounded-full blur-xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyberpurple/10 rounded-full blur-xl translate-y-1/2 -translate-x-1/2"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-lg text-gray-700">
                    To empower organizations with accessible, ethical AI solutions that solve real business challenges and drive meaningful innovation while ensuring responsible technology adoption.
                  </p>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="text-lg font-semibold mb-3">Our Vision</h4>
                    <p className="text-gray-700">
                      A world where AI technology enhances human potential, creates sustainable business value, and contributes positively to society.
                    </p>
                  </div>
                </div>
              </div>
            </FloatingElement>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                value: "Innovation",
                description: "We continuously push boundaries to develop cutting-edge AI solutions that address evolving business challenges.",
                icon: <Lightbulb className="h-6 w-6 text-cyberpink" />
              },
              {
                value: "Excellence",
                description: "We maintain the highest standards in our technology, service, and operations, delivering quality in everything we do.",
                icon: <Trophy className="h-6 w-6 text-cyberpink" />
              },
              {
                value: "Integrity",
                description: "We practice ethical AI development and transparent business practices, building trust with our clients and partners.",
                icon: <Shield className="h-6 w-6 text-cyberpink" />
              },
              {
                value: "Collaboration",
                description: "We work closely with our clients to ensure their success, forming partnerships rather than just vendor relationships.",
                icon: <Users className="h-6 w-6 text-cyberpink" />
              },
              {
                value: "Accessibility",
                description: "We make advanced AI technology accessible and valuable for businesses of all sizes, democratizing access to powerful tools.",
                icon: <Globe className="h-6 w-6 text-cyberpink" />
              },
              {
                value: "Impact",
                description: "We measure our success by the positive impact we create for our clients, their customers, and the broader community.",
                icon: <Zap className="h-6 w-6 text-cyberpink" />
              }
            ].map((item, index) => (
              <FloatingElement
                key={index}
                animationType="slide-up"
                delay={0.5 + index * 0.1}
                hoverEffect={true}
              >
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full transition-all duration-300 hover:shadow-md">
                  <div className="flex items-start">
                    <div className="bg-cyberpink/10 p-2 rounded-full mr-3 shrink-0 mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.value}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              </FloatingElement>
            ))}
          </div>

          {/* Additional content - Approach */}
          <div className="mt-20 bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <FloatingElement
                animationType="slide-up"
                delay={1.2}
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
                  <p className="text-gray-700 mb-6">
                    We believe in a human-centered approach to AI development, focusing on creating solutions that augment human capabilities rather than replace them. Our methodology combines technical excellence with deep business understanding.
                  </p>

                  <ul className="space-y-3">
                    {[
                      "Collaborative discovery process to understand your unique challenges",
                      "Iterative development with continuous feedback and refinement",
                      "Transparent communication throughout the project lifecycle",
                      "Comprehensive training and support for successful adoption",
                      "Ongoing optimization to ensure long-term value"
                    ].map((item, idx) => (
                      <FloatingElement
                        key={idx}
                        animationType="fade"
                        delay={1.3 + idx * 0.1}
                      >
                        <li className="flex items-start">
                          <CheckCircle className="text-cyberpink h-5 w-5 mr-3 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      </FloatingElement>
                    ))}
                  </ul>
                </div>
              </FloatingElement>

              <FloatingElement
                animationType="float"
                duration={5}
                delay={1.4}
              >
                <div className="relative">
                  <LazyImage
                    src={getOptimizedImageUrl("https://images.unsplash.com/photo-1552664730-d307ca884978", 800, 85)}
                    alt="Team collaboration"
                    className="rounded-xl shadow-lg"
                    fallbackSrc={fallbackImages.team}
                  />
                  <div className="absolute -z-10 -bottom-4 -left-4 w-full h-full bg-cyberpurple/10 rounded-xl"></div>
                </div>
              </FloatingElement>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-cyberpink/5 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-cyberpurple/5 blur-3xl animate-pulse-slow animation-delay-1000"></div>

        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FloatingElement
              animationType="fade"
              duration={1}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyberorange/10 text-cyberorange text-sm font-medium mb-4">
                <Users className="h-4 w-4 mr-2" />
                The People Behind Our Success
              </div>
            </FloatingElement>

            <FloatingElement
              animationType="slide-up"
              delay={0.2}
            >
              <h2 className="heading-lg mb-4">Meet Our Leadership Team</h2>
            </FloatingElement>

            <FloatingElement
              animationType="slide-up"
              delay={0.3}
            >
              <p className="text-gray-600 text-lg">
                Our talented team combines expertise in AI research, software engineering, and business strategy to deliver exceptional solutions for our clients.
              </p>
            </FloatingElement>
          </div>

          {/* Leadership team */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {teamMembers.slice(0, 4).map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                title={member.title}
                image={member.image}
                bio={member.bio}
                expertise={member.expertise}
                location={member.location}
                linkedin={member.linkedin}
                twitter={member.twitter}
                email={member.email}
              />
            ))}
          </div>

          {/* Department leads */}
          <div className="mt-20">
            <FloatingElement
              animationType="slide-up"
              delay={0.4}
            >
              <h3 className="text-2xl font-bold mb-8 text-center">Department Leaders</h3>
            </FloatingElement>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.slice(4).map((member, index) => (
                <TeamMember
                  key={index}
                  name={member.name}
                  title={member.title}
                  image={member.image}
                  bio={member.bio}
                  expertise={member.expertise}
                  location={member.location}
                  linkedin={member.linkedin}
                  twitter={member.twitter}
                  email={member.email}
                />
              ))}
            </div>
          </div>

          {/* Join our team CTA */}
          <div className="mt-20 bg-gradient-to-r from-cyberpink/10 to-cyberpurple/10 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3">
                <FloatingElement
                  animationType="slide-up"
                  delay={0.5}
                >
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Join Our Growing Team</h3>
                </FloatingElement>

                <FloatingElement
                  animationType="slide-up"
                  delay={0.6}
                >
                  <p className="text-gray-700 mb-6">
                    We're always looking for talented individuals who are passionate about AI and technology. Join us in our mission to make artificial intelligence accessible and valuable for businesses worldwide.
                  </p>
                </FloatingElement>

                <FloatingElement
                  animationType="slide-up"
                  delay={0.7}
                >
                  <div className="grid sm:grid-cols-2 gap-6 mb-8">
                    {[
                      {
                        title: "Collaborative Culture",
                        description: "Work with talented professionals in a supportive environment"
                      },
                      {
                        title: "Cutting-Edge Technology",
                        description: "Access to the latest tools and technologies in AI development"
                      },
                      {
                        title: "Growth Opportunities",
                        description: "Continuous learning and career advancement paths"
                      },
                      {
                        title: "Meaningful Impact",
                        description: "Create solutions that make a difference for businesses"
                      }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </FloatingElement>

                <FloatingElement
                  animationType="slide-up"
                  delay={0.8}
                  hoverEffect={true}
                >
                  <Link
                    to="/careers"
                    className="inline-flex items-center bg-gradient-to-r from-cyberpink to-cyberpurple text-white font-semibold py-3 px-6 rounded-md transition-all duration-300"
                  >
                    View Open Positions
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </FloatingElement>
              </div>

              <div className="md:col-span-2 relative">
                <FloatingElement
                  animationType="float"
                  duration={6}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyberpink/20 to-cyberpurple/20 rounded-xl transform rotate-3"></div>
                    <div className="relative bg-white rounded-xl shadow-lg p-6 transform -rotate-3">
                      <LazyImage
                        src={getOptimizedImageUrl("https://images.unsplash.com/photo-1522202176988-66273c2fd55f", 800, 85)}
                        alt="Team collaboration"
                        className="rounded-lg mb-4"
                        aspectRatio="aspect-[4/3]"
                        fallbackSrc={fallbackImages.team}
                      />
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-bold text-gray-900">Join Our Team</h4>
                          <p className="text-gray-600 text-sm">Be part of our journey</p>
                        </div>
                        <div className="bg-cyberpink text-white p-2 rounded-full">
                          <Users className="h-6 w-6" />
                        </div>
                      </div>
                    </div>
                  </div>
                </FloatingElement>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
