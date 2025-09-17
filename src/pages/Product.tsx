
import { useState, useEffect, useRef } from 'react';
import { Check, ArrowRight, ChevronDown, Zap, Shield, Database, BarChart, Brain, Code, Server, Cpu, Users, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import LazyImage from '@/components/LazyImage';
import { getOptimizedImageUrl, fallbackImages } from '@/utils/imageOptimization';
import HexagonNetwork from '@/components/HexagonNetwork';
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



const Product = () => {
  const features = [
    {
      title: "Advanced Video Editing Suite",
      description: "Our comprehensive video editing platform provides professional-grade tools for creating stunning visual content with ease.",
      benefits: [
        "Multi-track timeline editing",
        "Real-time preview and rendering",
        "Professional color grading tools",
        "Advanced audio mixing capabilities"
      ]
    },
    {
      title: "Content Creation Tools",
      description: "Powerful content creation capabilities that help you produce engaging videos, animations, and multimedia content.",
      benefits: [
        "Motion graphics and animations",
        "Template library and customization",
        "Brand asset management",
        "Social media format optimization"
      ]
    },
    {
      title: "Collaborative Workflow",
      description: "Streamlined collaboration features that enable teams to work together efficiently on video projects from anywhere.",
      benefits: [
        "Real-time collaboration",
        "Version control and history",
        "Team review and approval",
        "Project management integration"
      ]
    },
    {
      title: "Distribution & Analytics",
      description: "Comprehensive distribution tools and analytics that help you reach your audience and measure content performance.",
      benefits: [
        "Multi-platform publishing",
        "Performance analytics and insights",
        "Audience engagement tracking",
        "Content optimization recommendations"
      ]
    }
  ];

  const useCases = [
    {
      industry: "Marketing & Advertising",
      applications: [
        "Brand storytelling and commercials",
        "Social media content creation",
        "Product demonstration videos",
        "Campaign performance tracking"
      ]
    },
    {
      industry: "Entertainment & Media",
      applications: [
        "Film and TV production",
        "Music video creation",
        "Documentary filmmaking",
        "Live event streaming"
      ]
    },
    {
      industry: "Corporate Communications",
      applications: [
        "Training and educational videos",
        "Internal communications",
        "Investor relations content",
        "Company culture videos"
      ]
    },
    {
      industry: "E-commerce & Retail",
      applications: [
        "Product showcase videos",
        "Customer testimonials",
        "How-to and tutorial content",
        "Brand awareness campaigns"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Our Video Production Platform - ReelFace"
        description="A comprehensive video production and content creation platform that transforms your ideas into compelling visual stories through advanced editing tools, automation, and creative insights."
      />
      {/* Product Hero Section */}
      <section className="bg-gradient-to-br from-reelred-500 to-reelblack-800 text-white py-20 md:py-28 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-reelwhite/20 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-reelred-400/20 blur-3xl animate-pulse-slow animation-delay-1000"></div>
          <div className="absolute top-3/4 left-1/3 w-40 h-40 rounded-full bg-reelgray-300/20 blur-2xl animate-pulse-slow animation-delay-2000"></div>
        </div>

        {/* Hexagon network background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <HexagonNetwork width={1200} height={600} nodeCount={30} />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6 animate-pulse-slow">
                <span className="mr-2 bg-reelred text-white p-1 rounded-full">
                  <Zap className="h-3 w-3" />
                </span>
                Next-Generation Video Production Technology
              </div>

              <h1 className="heading-xl mb-6 relative">
                <span className="relative inline-block">
                  <span className="relative z-10">Our Video Production Platform</span>
                  <span className="absolute -bottom-2 left-0 w-full h-3 bg-reelred/30 rounded-full -z-10 transform -rotate-1"></span>
                </span>
              </h1>

              <p className="text-xl text-gray-200 mb-8 max-w-xl">
                A comprehensive video production and content creation platform that transforms your ideas into compelling visual stories through advanced editing tools, automation, and creative insights.
              </p>

              {/* Feature badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { icon: <Brain className="h-4 w-4" />, text: "Creative-Powered" },
                  { icon: <Shield className="h-4 w-4" />, text: "Professional" },
                  { icon: <Database className="h-4 w-4" />, text: "Scalable" }
                ].map((badge, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:bg-white/20"
                  >
                    <span className="mr-1.5 text-reelred">{badge.icon}</span>
                    {badge.text}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="button-primary bg-white hover:bg-gray-100 text-reelred transform transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                >
                  Request a Demo
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="#features"
                  className="bg-white/10 hover:bg-white/20 transition-all text-white font-semibold py-3 px-6 rounded-md inline-flex items-center hover:shadow-lg transform hover:-translate-y-1"
                >
                  Explore Features
                  <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
                </a>
              </div>
            </div>

            <div className="relative">
              <FloatingElement
                className="relative z-10"
                animationType="float"
                duration={6}
              >
                <div className="bg-gradient-to-br from-reelred/20 to-reelblack/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 relative z-10 shadow-xl border border-white/10 transform transition-all duration-500 hover:shadow-2xl">
                  <div className="relative rounded-lg overflow-hidden bg-reelblack/30 shadow-2xl border border-white/10">
                    <LazyImage
                      src={getOptimizedImageUrl("https://images.unsplash.com/photo-1531297484001-80022131f5a1", 1200, 85)}
                      alt="AI Platform Dashboard"
                      className="w-full h-full transition-transform duration-700 hover:scale-105"
                      aspectRatio="aspect-[16/9]"
                      fallbackSrc={fallbackImages.product}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-reelblack/70 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <h3 className="font-bold text-xl">Video Production Dashboard</h3>
                        <p className="opacity-90">Real-time editing and collaboration</p>
                      </div>
                    </div>
                  </div>

                  {/* Small preview images */}
                  <div className="grid grid-cols-3 gap-3 mt-4">
                    <div className="aspect-square rounded-lg overflow-hidden">
                      <LazyImage
                        src={getOptimizedImageUrl("https://images.unsplash.com/photo-1551288049-bebda4e38f71", 400, 85)}
                        alt="Data visualization"
                        className="w-full h-full object-cover"
                        fallbackSrc={fallbackImages.product}
                      />
                    </div>
                    <div className="aspect-square rounded-lg overflow-hidden">
                      <LazyImage
                        src={getOptimizedImageUrl("https://images.unsplash.com/photo-1551434678-e076c223a692", 400, 85)}
                        alt="AI development"
                        className="w-full h-full object-cover"
                        fallbackSrc={fallbackImages.product}
                      />
                    </div>
                    <div className="aspect-square rounded-lg overflow-hidden">
                      <LazyImage
                        src={getOptimizedImageUrl("https://images.unsplash.com/photo-1581092160607-ee22731c9c78", 400, 85)}
                        alt="Machine learning"
                        className="w-full h-full object-cover"
                        fallbackSrc={fallbackImages.product}
                      />
                    </div>
                  </div>

                  {/* Floating tech icons */}
                  <FloatingElement
                    delay={0.7}
                    className="absolute -top-6 -right-6 bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center z-20"
                    animationType="bounce-vertical"
                    duration={4}
                  >
                    <Brain className="h-6 w-6 text-reelred" />
                  </FloatingElement>

                  <FloatingElement
                    delay={1.5}
                    className="absolute -bottom-4 -left-4 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center z-20"
                    animationType="bounce-vertical"
                    duration={5}
                  >
                    <Cpu className="h-5 w-5 text-reelblack" />
                  </FloatingElement>

                  <FloatingElement
                    delay={1.0}
                    className="absolute -bottom-6 -right-6 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center z-20"
                    animationType="bounce-vertical"
                    duration={4.5}
                  >
                    <Code className="h-5 w-5 text-reelred" />
                  </FloatingElement>
                </div>
              </FloatingElement>

              {/* Animated decorative elements */}
              <div className="absolute -z-10 top-1/3 right-0 translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-reelred/30 blur-3xl animate-pulse-slow"></div>
              <div className="absolute -z-10 bottom-0 left-1/4 w-48 h-48 rounded-full bg-reelblack/40 blur-3xl animate-pulse-slow animation-delay-1000"></div>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 relative z-10">
            {[
              { value: 98, label: "Accuracy Rate", suffix: "%" },
              { value: 10, label: "Times Faster", suffix: "x" },
              { value: 500, label: "TB Data Processed", suffix: "+" },
              { value: 24, label: "Hour Support", suffix: "/7" }
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center transform transition-all duration-300 hover:scale-105 hover:bg-white/15"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-1 flex justify-center">
                  <AnimatedCounter end={stat.value} />
                  <span>{stat.suffix}</span>
                </div>
                <p className="text-gray-300 text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
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

      {/* Key Features Section */}
      <section id="features" className="section relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-reelred/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-reelblack/5 blur-3xl"></div>

        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-reelred/10 text-reelred text-sm font-medium mb-4">
              <Zap className="h-4 w-4 mr-2" />
              Powerful Capabilities
            </div>
            <h2 className="heading-lg mb-4">Key Platform Features</h2>
            <p className="text-gray-600 text-lg">
              Our video production platform combines cutting-edge technology with intuitive design to deliver powerful capabilities that transform your content creation process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {features.map((feature, index) => (
              <FloatingElement
                key={index}
                animationType="slide-up"
                delay={index * 0.2}
                hoverEffect={true}
              >
                <div
                  className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-reelred/10 flex items-center justify-center mr-4">
                      {index === 0 && <BarChart className="h-6 w-6 text-reelred" />}
                      {index === 1 && <Brain className="h-6 w-6 text-reelred" />}
                      {index === 2 && <Cpu className="h-6 w-6 text-reelred" />}
                      {index === 3 && <Server className="h-6 w-6 text-reelred" />}
                    </div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                  </div>

                  <p className="text-gray-600 mb-6">{feature.description}</p>

                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex items-start group"
                      >
                        <FloatingElement
                          delay={index * 0.2 + idx * 0.1}
                          animationType="fade"
                          className="flex items-start"
                        >
                          <span className="bg-reelred/10 p-1 rounded-full mr-3 shrink-0 mt-0.5 group-hover:bg-reelred/20 transition-colors">
                            <Check className="h-4 w-4 text-reelred" />
                          </span>
                          <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{benefit}</span>
                        </FloatingElement>
                      </li>
                    ))}
                  </ul>
                </div>
              </FloatingElement>
            ))}
          </div>

          {/* Additional feature highlight */}
          <div className="mt-20 bg-gradient-to-r from-reelred/10 to-reelblack/10 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Professional-Grade Security</h3>
                <p className="text-gray-700 mb-6">
                  Our platform is built with security at its core, ensuring your content and data are protected at every level with industry-leading encryption, access controls, and compliance features.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "End-to-end encryption for all content",
                    "Role-based access control",
                    "Compliance with industry standards",
                    "Regular security audits and monitoring"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <Shield className="h-5 w-5 text-reelred mr-3 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-reelred font-semibold hover:text-reelblack transition-colors group"
                >
                  Learn more about our security features
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="relative">
                <FloatingElement
                  animationType="float"
                  duration={5}
                >
                  <div className="bg-white rounded-xl shadow-lg p-6 relative">
                    <LazyImage
                      src={getOptimizedImageUrl("https://images.unsplash.com/photo-1563986768609-322da13575f3", 800, 85)}
                      alt="Enterprise Security"
                      className="rounded-lg"
                      aspectRatio="aspect-[4/3]"
                      fallbackSrc={fallbackImages.service}
                    />

                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <div className="bg-reelred/10 p-3 rounded-lg flex items-center">
                        <Lock className="h-5 w-5 text-reelred mr-2" />
                        <span className="text-sm font-medium">End-to-end encryption</span>
                      </div>
                      <div className="bg-reelblack/10 p-3 rounded-lg flex items-center">
                        <Shield className="h-5 w-5 text-reelblack mr-2" />
                        <span className="text-sm font-medium">Industry Compliant</span>
                      </div>
                    </div>

                    <div className="absolute -bottom-4 -right-4 bg-reelred text-white p-4 rounded-lg shadow-lg">
                      <Shield className="h-8 w-8" />
                    </div>
                  </div>
                </FloatingElement>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-reelred/5 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-reelblack/5 blur-3xl animate-pulse-slow animation-delay-1000"></div>

        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-reelred/10 text-reelred text-sm font-medium mb-4">
              <Code className="h-4 w-4 mr-2" />
              Implementation Process
            </div>
            <h2 className="heading-lg mb-4">How Our Video Platform Works</h2>
            <p className="text-gray-600 text-lg">
              Our platform is designed to integrate seamlessly with your existing workflows, providing a smooth transition to professional video production operations.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Timeline */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-reelred via-reelblack to-reelgray-400"></div>

            <div className="space-y-16">
              {[
                {
                  step: "Step 1: Consultation & Analysis",
                  description: "We work with you to understand your business goals, challenges, and data environment to create a tailored implementation plan.",
                  icon: <Users className="h-8 w-8 text-white" />,
                  color: "from-reelred to-reelred-dark",
                  details: [
                    "Business needs assessment",
                    "Data environment evaluation",
                    "Goal setting and KPI definition",
                    "Implementation roadmap creation"
                  ]
                },
                {
                  step: "Step 2: Custom Configuration",
                  description: "Our team configures the platform to address your specific needs and integrates it with your existing systems and data sources.",
                  icon: <Code className="h-8 w-8 text-white" />,
                  color: "from-reelblack to-reelblack-dark",
                  details: [
                    "Platform customization",
                    "API and system integration",
                    "Data pipeline setup",
                    "Custom model training"
                  ]
                },
                {
                  step: "Step 3: Implementation",
                  description: "We deploy the solution in your environment and provide comprehensive training for your team to ensure successful adoption.",
                  icon: <Server className="h-8 w-8 text-white" />,
                  color: "from-reelgray-600 to-reelgray-800",
                  details: [
                    "Phased deployment approach",
                    "User training and documentation",
                    "Initial performance testing",
                    "Feedback collection and adjustments"
                  ]
                },
                {
                  step: "Step 4: Ongoing Support",
                  description: "We provide continuous support, updates, and optimization to ensure your AI platform delivers maximum value over time.",
                  icon: <Zap className="h-8 w-8 text-white" />,
                  color: "from-reelred-600 to-reelred-800",
                  details: [
                    "24/7 technical support",
                    "Regular performance reviews",
                    "Model retraining and updates",
                    "Continuous improvement recommendations"
                  ]
                }
              ].map((item, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot with icon */}
                  <FloatingElement
                    className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-r items-center justify-center shadow-lg z-10"
                    animationType="pulse"
                    delay={index * 0.5}
                  >
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                      {item.icon}
                    </div>
                  </FloatingElement>

                  <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="md:w-1/2 md:pr-12">
                      <FloatingElement
                        animationType="slide-up"
                        delay={index * 0.3}
                        hoverEffect={true}
                      >
                        <div
                          className={`bg-white p-8 rounded-xl shadow-md border border-gray-100 ${index % 2 !== 0 ? 'md:ml-12' : 'md:mr-12'} transition-all duration-500`}
                        >
                          <div className="md:hidden flex items-center mb-4">
                            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mr-3`}>
                              {item.icon}
                            </div>
                            <h3 className="font-bold text-xl text-gray-900">{item.step}</h3>
                          </div>

                          <h3 className="hidden md:block font-bold text-xl mb-3 text-gray-900">{item.step}</h3>
                          <p className="text-gray-700 mb-6">{item.description}</p>

                          <div className="bg-gray-50 rounded-lg p-4">
                            <h4 className="font-medium text-gray-900 mb-3">Key Activities:</h4>
                            <ul className="space-y-2">
                              {item.details.map((detail, idx) => (
                                <FloatingElement
                                  key={idx}
                                  animationType="fade"
                                  delay={index * 0.3 + idx * 0.1 + 0.5}
                                >
                                  <li className="flex items-start">
                                    <Check className="h-5 w-5 text-reelred mr-2 shrink-0 mt-0.5" />
                                    <span className="text-gray-700">{detail}</span>
                                  </li>
                                </FloatingElement>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </FloatingElement>
                    </div>

                    <div className="md:w-1/2 hidden md:block"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA box */}
          <div className="mt-20 max-w-3xl mx-auto text-center bg-white rounded-xl shadow-md border border-gray-100 p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6">
              Our team of experts is ready to guide you through the implementation process and help you unlock the full potential of our AI platform.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-reelred to-reelblack text-white font-semibold py-3 px-8 rounded-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="section relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <HexagonNetwork width={1200} height={600} nodeCount={20} />
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-reelred/10 text-reelred text-sm font-medium mb-4">
              <Zap className="h-4 w-4 mr-2" />
              Versatile Solutions
            </div>
            <h2 className="heading-lg mb-4">Industry Applications</h2>
            <p className="text-gray-600 text-lg">
              Our video production platform delivers transformative value across multiple industries and use cases, helping organizations create compelling content and unlock new creative opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <FloatingElement
                key={index}
                animationType="slide-up"
                delay={index * 0.2}
                hoverEffect={true}
              >
                <div
                  className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-all duration-300 h-full flex flex-col"
                >
                  <div className="relative mb-6">
                    <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br from-reelred/20 to-reelblack/20 rounded-full blur-xl"></div>
                    <div className="relative z-10 bg-gradient-to-r from-reelred to-reelblack w-14 h-14 rounded-full flex items-center justify-center text-white mb-4">
                      <span className="font-bold text-lg">{index + 1}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-gray-900">{useCase.industry}</h3>

                  <ul className="space-y-3 flex-grow">
                    {useCase.applications.map((app, idx) => (
                      <FloatingElement
                        key={idx}
                        animationType="fade"
                        delay={index * 0.2 + idx * 0.1 + 0.3}
                      >
                        <li
                          className="flex items-start group transition-all duration-300 p-2 hover:bg-gray-50 rounded-lg"
                        >
                          <span className="bg-reelred/10 p-1 rounded-full mr-2 shrink-0 mt-0.5 group-hover:bg-reelred/20 transition-colors">
                            <Check className="h-4 w-4 text-reelred" />
                          </span>
                          <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{app}</span>
                        </li>
                      </FloatingElement>
                    ))}
                  </ul>

                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <Link
                      to={`/contact?industry=${useCase.industry.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center text-reelred font-medium hover:text-reelblack transition-colors group"
                    >
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </FloatingElement>
            ))}
          </div>

          {/* Additional industry highlight */}
          <div className="mt-20 bg-gradient-to-r from-reelred/5 to-reelblack/5 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Custom Solutions for Every Industry</h3>
                <p className="text-gray-700 mb-6">
                  Beyond the industries highlighted above, our video production platform can be tailored to meet the specific needs of virtually any sector. Our team of experts works closely with you to understand your unique challenges and develop custom video solutions that drive real business value.
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  {[
                    {
                      title: "Education",
                      description: "Personalized learning experiences and administrative automation"
                    },
                    {
                      title: "Energy",
                      description: "Predictive maintenance and energy consumption optimization"
                    },
                    {
                      title: "Agriculture",
                      description: "Crop yield prediction and resource management"
                    },
                    {
                      title: "Transportation",
                      description: "Route optimization and predictive maintenance"
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-reelred to-reelblack text-white font-semibold py-3 px-6 rounded-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  Discuss Your Industry Needs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>

              <div className="md:col-span-2 relative">
                <FloatingElement
                  animationType="float"
                  duration={6}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-reelred/20 to-reelblack/20 rounded-xl transform rotate-3"></div>
                    <div className="relative bg-white rounded-xl shadow-lg p-6 transform -rotate-3">
                      <LazyImage
                        src={getOptimizedImageUrl("https://images.unsplash.com/photo-1551434678-e076c223a692", 800, 85)}
                        alt="Custom Industry Solutions"
                        className="rounded-lg mb-4"
                        aspectRatio="aspect-[4/3]"
                        fallbackSrc={fallbackImages.service}
                      />

                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <div className="bg-reelred/10 p-2 rounded-lg flex items-center">
                          <Brain className="h-4 w-4 text-reelred mr-2" />
                          <span className="text-xs font-medium">Creative-Powered</span>
                        </div>
                        <div className="bg-reelblack/10 p-2 rounded-lg flex items-center">
                          <Server className="h-4 w-4 text-reelblack mr-2" />
                          <span className="text-xs font-medium">Scalable</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-bold text-gray-900">Custom Solutions</h4>
                          <p className="text-gray-600 text-sm">Tailored to your needs</p>
                        </div>
                        <FloatingElement
                          animationType="pulse"
                          className="bg-reelred text-white p-2 rounded-full"
                        >
                          <Zap className="h-6 w-6" />
                        </FloatingElement>
                      </div>
                    </div>
                  </div>
                </FloatingElement>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-reelred to-reelblack text-white relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <HexagonNetwork width={1200} height={400} nodeCount={40} />
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6 animate-pulse-slow">
              <span className="mr-2 bg-white text-reelred p-1 rounded-full">
                <Zap className="h-3 w-3" />
              </span>
              Limited Time Offer
            </div>

            <h2 className="heading-lg mb-6">Ready to Transform Your Content?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Contact us today to schedule a demo and discover how our video production platform can drive creativity and engagement for your brand.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 max-w-2xl mx-auto">
              <div className="grid sm:grid-cols-3 gap-4 text-center">
                {[
                  { value: "30", label: "Day Free Trial" },
                  { value: "24/7", label: "Expert Support" },
                  { value: "100%", label: "Satisfaction Guarantee" }
                ].map((item, index) => (
                  <div key={index} className="p-4">
                    <div className="text-2xl font-bold mb-1">{item.value}</div>
                    <p className="text-sm opacity-80">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <FloatingElement
                animationType="slide-up"
                delay={0.3}
                hoverEffect={true}
              >
                <Link
                  to="/contact"
                  className="bg-white text-reelred font-semibold py-3 px-8 rounded-md hover:bg-gray-100 transition-all duration-300 group"
                >
                  Request a Demo
                  <ArrowRight className="ml-2 h-5 w-5 inline group-hover:translate-x-1 transition-transform" />
                </Link>
              </FloatingElement>

              <FloatingElement
                animationType="slide-up"
                delay={0.5}
                hoverEffect={true}
              >
                <Link
                  to="/services"
                  className="bg-transparent border border-white text-white font-semibold py-3 px-8 rounded-md hover:bg-white/10 transition-all duration-300"
                >
                  Explore Our Services
                </Link>
              </FloatingElement>
            </div>

            <div className="mt-12 flex flex-wrap justify-center items-center gap-8">
              <div className="text-sm opacity-80">Trusted by industry leaders:</div>
              <div className="flex flex-wrap justify-center gap-8">
                {[
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_logo.svg/1280px-Microsoft_logo.svg.png",
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1280px-IBM_logo.svg.png",
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png",
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png"
                ].map((logo, index) => (
                  <img
                    key={index}
                    src={logo}
                    alt="Partner logo"
                    className="h-6 opacity-70 grayscale"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
