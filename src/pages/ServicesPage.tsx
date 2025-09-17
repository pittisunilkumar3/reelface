
import { useState, useEffect, useRef } from 'react';
import {
  ArrowRight, CheckCircle, ChevronDown, Zap, Shield, Database,
  BarChart, Brain, Code, Server, Cpu, Users, Globe, Layers,
  Cloud, Lock, LineChart, Sparkles
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
      id: "ai-development",
      title: "Custom AI Development",
      description: "Tailored artificial intelligence solutions designed specifically for your business needs.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000",
      features: [
        "Personalized AI strategy and roadmap",
        "Custom algorithm development",
        "Business process automation",
        "Intelligent data processing solutions",
        "Continuous improvement and optimization"
      ]
    },
    {
      id: "machine-learning",
      title: "Machine Learning Implementation",
      description: "Advanced machine learning models to extract insights and improve decision-making.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1000",
      features: [
        "Predictive analytics models",
        "Pattern recognition systems",
        "Recommendation engines",
        "Anomaly detection solutions",
        "Model training and validation"
      ]
    },
    {
      id: "cloud-services",
      title: "Cloud Computing Solutions",
      description: "Scalable and secure cloud infrastructure to power your digital transformation.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1000",
      features: [
        "Cloud migration strategy",
        "Multi-cloud architecture design",
        "Serverless application development",
        "Cloud cost optimization",
        "24/7 cloud infrastructure monitoring"
      ]
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity Services",
      description: "Comprehensive security solutions to protect your digital assets and sensitive data.",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=1000",
      features: [
        "Security vulnerability assessment",
        "Penetration testing",
        "Security architecture design",
        "Incident response planning",
        "Security awareness training"
      ]
    },
    {
      id: "data-analytics",
      title: "Data Analytics & Insights",
      description: "Transform your raw data into actionable business intelligence.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
      features: [
        "Data extraction and cleansing",
        "Advanced analytics dashboards",
        "Business intelligence reporting",
        "Trend analysis and forecasting",
        "Custom data visualization"
      ]
    },
    {
      id: "web-development",
      title: "Web Application Development",
      description: "Custom web applications that deliver exceptional user experiences and business value.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1000",
      features: [
        "Responsive web design",
        "Progressive web applications (PWAs)",
        "E-commerce solutions",
        "Content management systems",
        "API development and integration"
      ]
    },
    {
      id: "mobile-development",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android devices.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000",
      features: [
        "Native iOS and Android development",
        "Cross-platform solutions (React Native, Flutter)",
        "Mobile UI/UX design",
        "App store optimization",
        "Mobile app maintenance and support"
      ]
    },
    {
      id: "ai-integration",
      title: "AI Integration Services",
      description: "Seamlessly integrate AI capabilities with your existing systems and workflows.",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80&w=1000",
      features: [
        "Legacy system integration",
        "API development and management",
        "Workflow automation",
        "Cross-platform compatibility",
        "Technical support and maintenance"
      ]
    },
    {
      id: "devops",
      title: "DevOps & CI/CD",
      description: "Streamline your development process with automated workflows and continuous integration.",
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=1000",
      features: [
        "CI/CD pipeline implementation",
        "Infrastructure as Code (IaC)",
        "Container orchestration (Kubernetes)",
        "Microservices architecture",
        "Performance monitoring and optimization"
      ]
    },
    {
      id: "data-management",
      title: "Data Management",
      description: "Comprehensive data architecture and management solutions to support your IT initiatives.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000",
      features: [
        "Data architecture design",
        "Database optimization",
        "Data governance frameworks",
        "Data quality management",
        "Scalable storage solutions"
      ]
    },
    {
      id: "it-consulting",
      title: "IT Strategy & Consulting",
      description: "Expert guidance to align your technology investments with your business objectives.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000",
      features: [
        "IT roadmap development",
        "Technology stack assessment",
        "Digital transformation strategy",
        "IT cost optimization",
        "Vendor selection and management"
      ]
    },
    {
      id: "ai-security",
      title: "AI Security & Compliance",
      description: "Ensure your AI implementations meet the highest standards of security and regulatory compliance.",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=1000",
      features: [
        "Security risk assessment",
        "Privacy protection measures",
        "Regulatory compliance frameworks",
        "Ethical AI implementation",
        "Ongoing security monitoring"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Our Services - ReelFace"
        description="We offer a comprehensive range of video production solutions to help businesses create compelling content and gain competitive advantage."
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
                  { icon: <Brain className="h-4 w-4" />, text: "AI & ML" },
                  { icon: <Cloud className="h-4 w-4" />, text: "Cloud Computing" },
                  { icon: <Lock className="h-4 w-4" />, text: "Cybersecurity" },
                  { icon: <LineChart className="h-4 w-4" />, text: "Data Analytics" }
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
                  { value: 12, label: "Service Categories", icon: <Layers className="h-5 w-5" /> },
                  { value: 50, label: "Specialized Solutions", icon: <Zap className="h-5 w-5" /> },
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
                        { icon: <Brain className="h-8 w-8" />, label: "Video", color: "bg-reelred/20" },
                        { icon: <Cloud className="h-8 w-8" />, label: "Cloud", color: "bg-reelblack/20" },
                        { icon: <Lock className="h-8 w-8" />, label: "Security", color: "bg-reelgray-600/20" },
                        { icon: <Code className="h-8 w-8" />, label: "Edit", color: "bg-reelblack/20" },
                        { icon: <Database className="h-8 w-8" />, label: "Media", color: "bg-reelred/20" },
                        { icon: <Server className="h-8 w-8" />, label: "Stream", color: "bg-reelgray-600/20" },
                        { icon: <LineChart className="h-8 w-8" />, label: "Analytics", color: "bg-reelred/20" },
                        { icon: <Cpu className="h-8 w-8" />, label: "AI", color: "bg-reelblack/20" },
                        { icon: <Globe className="h-8 w-8" />, label: "Web", color: "bg-reelgray-600/20" }
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
                        <Zap className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-lg">End-to-End Solutions</h3>
                        <p className="text-white/80 text-sm">From strategy to implementation and support</p>
                      </div>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <FloatingElement delay={0.7} className="absolute -top-4 -left-4 bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center z-20">
                    <Brain className="h-6 w-6 text-reelred" />
                  </FloatingElement>

                  <FloatingElement delay={1.5} className="absolute -bottom-4 -right-4 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center z-20">
                    <Shield className="h-5 w-5 text-reelblack" />
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
            <h2 className="heading-lg mb-4">How We Can Help</h2>
            <p className="text-gray-600 text-lg">
              From custom development to integration and security, we provide end-to-end AI services tailored to your needs.
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
