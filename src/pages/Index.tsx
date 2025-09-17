
import { useEffect, useState, useRef } from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ProductShowcase from '@/components/ProductShowcase';
import Testimonials from '@/components/Testimonials';
import SEO from '@/components/SEO';
import {
  ArrowRight, Code, Layers, Zap, Clock, Users, Award, ChevronRight, Calendar, Eye,
  Shield, Brain, Database, LineChart, BarChart, Cpu, Server, Globe, CheckCircle, Sparkles,
  Mail, Phone, Building, Briefcase, GraduationCap, Target, MessageSquare, HelpCircle,
  PlusCircle, MinusCircle, Star, Heart, Lightbulb, Rocket, Headphones, ShoppingBag
} from 'lucide-react';
import { Link } from 'react-router-dom';
import HexagonNetwork from '@/components/HexagonNetwork';
import LazyImage from '@/components/LazyImage';
import { getOptimizedImageUrl } from '@/utils/imageOptimization';
import FloatingElement from '@/components/FloatingElement';

// Animation utility for counting up numbers
const CountUp = ({ end, duration = 2000 }) => {
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

  return <span ref={countRef}>{count}+</span>;
};

const Index = () => {
  // For technologies section
  const [activeTab, setActiveTab] = useState(0);
  const techCategories = [
    { name: "AI & ML", icon: <Zap className="h-5 w-5" /> },
    { name: "Web Development", icon: <Code className="h-5 w-5" /> },
    { name: "Cloud & DevOps", icon: <Layers className="h-5 w-5" /> }
  ];

  const techStacks = [
    // AI & ML
    [
      { name: "TensorFlow", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1200px-Tensorflow_logo.svg.png" },
      { name: "PyTorch", logo: "https://pytorch.org/assets/images/pytorch-logo.png" },
      { name: "Scikit-learn", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/1200px-Scikit_learn_logo_small.svg.png" },
      { name: "Keras", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Keras_logo.svg/1200px-Keras_logo.svg.png" },
      { name: "NLTK", logo: "https://miro.medium.com/max/592/1*YM2HXc7f4v02pZBEO8h-qw.png" },
      { name: "OpenCV", logo: "https://opencv.org/wp-content/uploads/2020/07/OpenCV_logo_black-2.png" }
    ],
    // Web Development
    [
      { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" },
      { name: "Node.js", logo: "https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg" },
      { name: "TypeScript", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" },
      { name: "Next.js", logo: "https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png" },
      { name: "Tailwind CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png" },
      { name: "GraphQL", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png" }
    ],
    // Cloud & DevOps
    [
      { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png" },
      { name: "Docker", logo: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" },
      { name: "Kubernetes", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/1200px-Kubernetes_logo_without_workmark.svg.png" },
      { name: "GitHub Actions", logo: "https://github.githubassets.com/images/modules/site/features/actions-icon-actions.svg" },
      { name: "Terraform", logo: "https://www.datocms-assets.com/2885/1620155116-brandhcterraformverticalcolor.svg" },
      { name: "Azure", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png" }
    ]
  ];

  // For client logos section
  const clientLogos = [
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/200px-Microsoft_logo.svg.png" },
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/220px-Google_2015_logo.svg.png" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/200px-Amazon_logo.svg.png" },
    { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/200px-IBM_logo.svg.png" },
    { name: "Intel", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/200px-Intel_logo_%282006-2020%29.svg.png" },
    { name: "Nvidia", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Nvidia_logo.svg/200px-Nvidia_logo.svg.png" }
  ];

  // For industry applications section
  const industryApplications = [
    {
      industry: "Healthcare",
      icon: <Heart className="h-8 w-8" />,
      applications: [
        "Predictive diagnostics and early disease detection",
        "Medical image analysis and interpretation",
        "Personalized treatment recommendations",
        "Patient monitoring and care management"
      ]
    },
    {
      industry: "Finance",
      icon: <Briefcase className="h-8 w-8" />,
      applications: [
        "Fraud detection and prevention",
        "Algorithmic trading and investment",
        "Risk assessment and management",
        "Customer service automation"
      ]
    },
    {
      industry: "Manufacturing",
      icon: <Cpu className="h-8 w-8" />,
      applications: [
        "Predictive maintenance and equipment optimization",
        "Quality control and defect detection",
        "Supply chain optimization",
        "Production planning and scheduling"
      ]
    },
    {
      industry: "Retail",
      icon: <ShoppingBag className="h-8 w-8" />,
      applications: [
        "Personalized shopping experiences",
        "Inventory management and optimization",
        "Customer behavior analysis",
        "Demand forecasting and pricing optimization"
      ]
    }
  ];

  // For FAQ section
  const faqs = [
    {
      question: "What types of AI solutions do you develop?",
      answer: "We develop a wide range of AI solutions including machine learning models, natural language processing systems, computer vision applications, predictive analytics tools, and recommendation engines. Our solutions are customized to address specific business challenges and opportunities."
    },
    {
      question: "How long does it typically take to develop an AI solution?",
      answer: "The development timeline varies depending on the complexity of the solution, the availability of data, and specific requirements. Simple projects might take 4-8 weeks, while more complex enterprise solutions can take 3-6 months. We provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you provide ongoing support after deployment?",
      answer: "Yes, we offer comprehensive support and maintenance services to ensure your AI solution continues to perform optimally. This includes monitoring, performance optimization, model retraining, and technical support to address any issues that may arise."
    },
    {
      question: "What data requirements are needed for AI development?",
      answer: "Effective AI solutions typically require quality data for training and validation. The specific requirements depend on your project, but we can work with various data formats and volumes. If you have limited data, we can discuss strategies such as synthetic data generation or transfer learning."
    },
    {
      question: "How do you ensure the security and privacy of our data?",
      answer: "We implement robust security measures throughout the development process, including data encryption, secure access controls, and compliance with relevant regulations like GDPR and HIPAA. We can also sign NDAs and establish clear data handling protocols tailored to your requirements."
    }
  ];

  // For team highlights section
  const teamHighlights = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief AI Scientist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      expertise: "Machine Learning, Neural Networks",
      background: "Ph.D. in Computer Science, 15+ years in AI research"
    },
    {
      name: "Michael Chen",
      role: "Lead AI Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      expertise: "Deep Learning, Computer Vision",
      background: "Former Tech Lead at Google AI, 10+ years experience"
    },
    {
      name: "Priya Patel",
      role: "Data Science Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      expertise: "Predictive Analytics, NLP",
      background: "M.S. in Data Science, Led projects for Fortune 500 companies"
    }
  ];

  // For case studies section
  const caseStudies = [
    {
      title: "AI-Powered Customer Insights Platform",
      description: "Developed a machine learning solution that analyzes customer data to provide actionable insights, resulting in a 35% increase in customer retention.",
      industry: "Retail",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      technologies: ["TensorFlow", "Python", "AWS", "React"],
      results: ["35% increase in customer retention", "42% improvement in targeting accuracy", "3.2x ROI within 6 months"]
    },
    {
      title: "Predictive Maintenance System",
      description: "Built an IoT-connected AI system that predicts equipment failures before they occur, reducing downtime by 78% for a manufacturing client.",
      industry: "Manufacturing",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      technologies: ["PyTorch", "IoT Sensors", "Azure", "Time Series Analysis"],
      results: ["78% reduction in unplanned downtime", "43% decrease in maintenance costs", "18% increase in equipment lifespan"]
    },
    {
      title: "Natural Language Processing for Healthcare",
      description: "Created an NLP solution that extracts critical information from medical records, improving diagnostic accuracy and saving physicians 15+ hours per week.",
      industry: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      technologies: ["BERT", "NLP", "Python", "Google Cloud"],
      results: ["15+ hours saved per physician weekly", "28% improvement in diagnostic accuracy", "67% faster information retrieval"]
    }
  ];

  // For blog preview section
  const blogPosts = [
    {
      title: "The Future of AI in Business Operations",
      excerpt: "Explore how artificial intelligence is transforming business operations and creating new opportunities for growth and efficiency.",
      date: "May 15, 2023",
      image: "https://images.unsplash.com/photo-1677442135968-6276536b128b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      views: 1240,
      slug: "future-of-ai-in-business"
    },
    {
      title: "Building Secure Web Applications in 2023",
      excerpt: "Learn the latest best practices for developing secure web applications that protect user data and prevent security breaches.",
      date: "April 28, 2023",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      views: 986,
      slug: "secure-web-applications-2023"
    },
    {
      title: "Machine Learning Models for Predictive Analytics",
      excerpt: "Discover how machine learning models can be used to predict customer behavior and optimize business strategies.",
      date: "April 10, 2023",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      views: 1567,
      slug: "ml-models-predictive-analytics"
    }
  ];

  // For process steps
  const processSteps = [
    {
      number: "01",
      title: "Discovery & Analysis",
      description: "We begin by understanding your business needs, challenges, and goals to define the scope of your AI solution.",
      icon: <Users className="h-6 w-6" />
    },
    {
      number: "02",
      title: "Solution Design",
      description: "Our experts design a custom AI solution architecture tailored to your specific requirements and data environment.",
      icon: <Layers className="h-6 w-6" />
    },
    {
      number: "03",
      title: "Development & Training",
      description: "We develop and train AI models using your data, ensuring they deliver accurate and valuable insights.",
      icon: <Code className="h-6 w-6" />
    },
    {
      number: "04",
      title: "Integration & Deployment",
      description: "We seamlessly integrate the AI solution into your existing systems and deploy it to your production environment.",
      icon: <Zap className="h-6 w-6" />
    },
    {
      number: "05",
      title: "Monitoring & Optimization",
      description: "We continuously monitor the performance of your AI solution and optimize it to ensure it delivers maximum value.",
      icon: <Clock className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Cyberdetox - Advanced AI Development Solutions"
        description="Cyberdetox specializes in cutting-edge AI development, creating intelligent solutions that transform how businesses operate while ensuring digital wellness and security."
      />
      <Hero />

      {/* Stats Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container-custom">
          <div className="text-center mb-10">
            <FloatingElement animationType="slide-up" delay={0.1}>
              <h2 className="heading-lg mb-4">Our Impact in Numbers</h2>
            </FloatingElement>
            <FloatingElement animationType="slide-up" delay={0.2}>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                We've helped businesses across industries achieve remarkable results through our AI development expertise
              </p>
            </FloatingElement>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
            {[
              { value: 150, label: "Clients Worldwide", icon: <Globe className="h-8 w-8" /> },
              { value: 200, label: "Projects Completed", icon: <CheckCircle className="h-8 w-8" /> },
              { value: 15, label: "Years Experience", icon: <Award className="h-8 w-8" /> },
              { value: 98, label: "Client Satisfaction", icon: <Users className="h-8 w-8" /> }
            ].map((stat, index) => (
              <FloatingElement
                key={index}
                animationType="fade"
                delay={0.3 + index * 0.1}
                hoverEffect={true}
              >
                <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:shadow-md">
                  <div className="inline-flex items-center justify-center bg-gradient-to-r from-reelred/10 to-reelblack/10 p-3 rounded-full mb-4 text-reelred">
                    {stat.icon}
                  </div>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-reelred to-reelblack bg-clip-text text-transparent mb-2">
                    <CountUp end={stat.value} />
                  </div>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              </FloatingElement>
            ))}
          </div>
        </div>
        {/* Background animation */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <HexagonNetwork width={1200} height={400} nodeCount={40} />
        </div>

        {/* Animated background elements */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-reelred/5 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-reelblack/5 blur-3xl animate-pulse-slow animation-delay-1000"></div>
      </section>

      {/* Client Logos Section */}
      <section className="py-12 bg-gray-50 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center mb-10">
            <FloatingElement animationType="slide-up" delay={0.1}>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-reelred/10 text-reelred text-sm font-medium mb-4">
                <Building className="h-4 w-4 mr-2" />
                Trusted By Industry Leaders
              </div>
            </FloatingElement>
            <FloatingElement animationType="slide-up" delay={0.2}>
              <h2 className="heading-md mb-2">Our Clients</h2>
            </FloatingElement>
            <FloatingElement animationType="slide-up" delay={0.3}>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We've partnered with leading organizations across industries to deliver transformative AI solutions
              </p>
            </FloatingElement>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clientLogos.map((client, index) => (
              <FloatingElement
                key={index}
                animationType="fade"
                delay={0.4 + index * 0.1}
                hoverEffect={true}
              >
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 h-20 w-40 flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-10 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </FloatingElement>
            ))}
          </div>
        </div>

        {/* Background animation */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <HexagonNetwork width={1200} height={200} nodeCount={20} />
        </div>
      </section>

      <Services />

      {/* How We Work Process Section */}
      <section className="section bg-gradient-to-r from-reelred/5 to-reelblack/5 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FloatingElement animationType="slide-up" delay={0.1}>
              <h2 className="heading-lg mb-4">Our AI Development Process</h2>
            </FloatingElement>
            <FloatingElement animationType="slide-up" delay={0.2}>
              <p className="text-gray-600 text-lg">
                We follow a structured approach to AI development that ensures we deliver high-quality solutions that meet your business needs.
              </p>
            </FloatingElement>
          </div>

          <div className="relative">
            {/* Process steps */}
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {processSteps.map((step, index) => (
                <FloatingElement
                  key={index}
                  animationType="slide-up"
                  delay={0.3 + index * 0.1}
                  hoverEffect={true}
                >
                  <div
                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative z-10 h-full"
                  >
                    <div className="absolute -top-3 -left-3 bg-gradient-to-r from-reelred to-reelblack text-white w-10 h-10 rounded-full flex items-center justify-center font-bold animate-pulse-slow">
                      {step.number}
                    </div>
                    <div className="mb-4 text-reelred">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>

                    {/* Animated arrow connecting to next step (hidden on mobile) */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute -right-3 top-1/2 transform translate-x-full -translate-y-1/2 text-reelred animate-bounce-horizontal">
                        <ArrowRight className="h-6 w-6" />
                      </div>
                    )}
                  </div>
                </FloatingElement>
              ))}
            </div>

            {/* Connecting line (visible on larger screens) */}
            <div className="hidden lg:block absolute top-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-reelred to-reelblack z-0"></div>
          </div>

          <div className="text-center mt-12">
            <FloatingElement animationType="slide-up" delay={0.8} hoverEffect={true}>
              <Link to="/services" className="button-primary inline-flex items-center">
                Learn More About Our Process
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </FloatingElement>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-reelred/10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-reelblack/10 blur-2xl animate-pulse-slow animation-delay-1000"></div>

        {/* Hexagon Network Animation */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <HexagonNetwork width={1200} height={600} nodeCount={25} />
        </div>
      </section>

      <ProductShowcase />

      {/* Case Studies Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FloatingElement animationType="slide-up" delay={0.1}>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyberpink/10 text-cyberpink text-sm font-medium mb-4">
                <Sparkles className="h-4 w-4 mr-2" />
                Success Stories
              </div>
            </FloatingElement>
            <FloatingElement animationType="slide-up" delay={0.2}>
              <h2 className="heading-lg mb-4">Our AI Solutions in Action</h2>
            </FloatingElement>
            <FloatingElement animationType="slide-up" delay={0.3}>
              <p className="text-gray-600 text-lg">
                Explore how our AI development expertise has helped businesses across industries achieve remarkable results
              </p>
            </FloatingElement>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <FloatingElement
                key={index}
                animationType="slide-up"
                delay={0.4 + index * 0.1}
                hoverEffect={true}
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={getOptimizedImageUrl(study.image, 600, 85)}
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-cyberpink">
                      {study.industry}
                    </div>
                  </div>

                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                    <p className="text-gray-600 mb-4">{study.description}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-500 mb-2">TECHNOLOGIES USED</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 mb-2">KEY RESULTS</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, resultIndex) => (
                          <li
                            key={resultIndex}
                            className="flex items-start text-sm"
                          >
                            <CheckCircle className="h-4 w-4 text-cyberpink mr-2 shrink-0 mt-0.5" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Link
                      to="/contact"
                      className="inline-flex items-center text-cyberpink font-medium hover:text-cyberpurple transition-colors"
                    >
                      Discuss a Similar Project
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </FloatingElement>
            ))}
          </div>

          <div className="text-center mt-12">
            <FloatingElement animationType="slide-up" delay={0.8} hoverEffect={true}>
              <Link to="/contact" className="button-secondary inline-flex items-center">
                Start Your AI Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </FloatingElement>
          </div>
        </div>
      </section>

      {/* Industry Applications Section */}
      <section className="section bg-gradient-to-r from-cyberpink/5 to-cyberpurple/5 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FloatingElement animationType="slide-up" delay={0.1}>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyberpurple/10 text-cyberpurple text-sm font-medium mb-4">
                <Target className="h-4 w-4 mr-2" />
                Industry Solutions
              </div>
            </FloatingElement>
            <FloatingElement animationType="slide-up" delay={0.2}>
              <h2 className="heading-lg mb-4">AI Applications Across Industries</h2>
            </FloatingElement>
            <FloatingElement animationType="slide-up" delay={0.3}>
              <p className="text-gray-600 text-lg">
                Discover how our AI solutions are transforming operations and driving innovation across diverse industries
              </p>
            </FloatingElement>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industryApplications.map((industry, index) => (
              <FloatingElement
                key={index}
                animationType="slide-up"
                delay={0.4 + index * 0.1}
                hoverEffect={true}
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 h-full">
                  <div className="bg-gradient-to-r from-cyberpink to-cyberpurple p-6 text-white">
                    <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      {industry.icon}
                    </div>
                    <h3 className="text-xl font-bold">{industry.industry}</h3>
                  </div>

                  <div className="p-6">
                    <ul className="space-y-3">
                      {industry.applications.map((application, appIndex) => (
                        <li key={appIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-cyberpink mr-3 shrink-0 mt-0.5" />
                          <span>{application}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 pt-0">
                    <Link
                      to="/services"
                      className="inline-flex items-center text-cyberpink font-medium hover:text-cyberpurple transition-colors"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </FloatingElement>
            ))}
          </div>

          <div className="text-center mt-12">
            <FloatingElement animationType="slide-up" delay={0.8} hoverEffect={true}>
              <Link to="/services" className="button-primary inline-flex items-center">
                Explore All Industry Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </FloatingElement>
          </div>
        </div>

        {/* Background animation */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <HexagonNetwork width={1200} height={600} nodeCount={30} />
        </div>

        {/* Animated background elements */}
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-cyberpink/5 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-cyberpurple/5 blur-3xl animate-pulse-slow animation-delay-1000"></div>
      </section>

      {/* Technologies Section */}
      <section className="section bg-gray-50 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <FloatingElement animationType="slide-up" delay={0.1}>
              <h2 className="heading-lg mb-4">Technologies We Use</h2>
            </FloatingElement>
            <FloatingElement animationType="slide-up" delay={0.2}>
              <p className="text-gray-600 text-lg">
                We leverage cutting-edge technologies and frameworks to build powerful, scalable, and secure solutions.
              </p>
            </FloatingElement>
          </div>

          {/* Tabs */}
          <FloatingElement animationType="slide-up" delay={0.3}>
            <div className="flex justify-center mb-10">
              <div className="inline-flex bg-white rounded-lg p-1 shadow-sm border border-gray-100">
                {techCategories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`flex items-center px-4 py-2 rounded-md transition-all ${
                      activeTab === index
                        ? 'bg-gradient-to-r from-cyberpink to-cyberpurple text-white shadow-md'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {category.icon}
                    <span className="ml-2">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </FloatingElement>

          {/* Tech logos grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {techStacks[activeTab].map((tech, index) => (
              <FloatingElement
                key={index}
                animationType="fade"
                delay={0.4 + index * 0.05}
                hoverEffect={true}
              >
                <div
                  className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center h-32"
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="h-12 w-auto object-contain mb-3"
                    loading="lazy"
                  />
                  <p className="text-sm font-medium text-gray-700">{tech.name}</p>
                </div>
              </FloatingElement>
            ))}
          </div>

          <div className="text-center mt-12">
            <FloatingElement animationType="slide-up" delay={0.8} hoverEffect={true}>
              <Link to="/services" className="button-secondary inline-flex items-center">
                Explore Our Tech Stack
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </FloatingElement>
          </div>
        </div>

        {/* Background animation */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <HexagonNetwork width={1200} height={600} nodeCount={30} />
        </div>

        {/* Animated background elements */}
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-cyberpink/5 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-cyberpurple/5 blur-3xl animate-pulse-slow animation-delay-1000"></div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FloatingElement animationType="slide-up" delay={0.1}>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyberpurple/10 text-cyberpurple text-sm font-medium mb-4">
                <Award className="h-4 w-4 mr-2" />
                Our Advantages
              </div>
            </FloatingElement>
            <FloatingElement animationType="slide-up" delay={0.2}>
              <h2 className="heading-lg mb-4">Why Choose Our AI Development</h2>
            </FloatingElement>
            <FloatingElement animationType="slide-up" delay={0.3}>
              <p className="text-gray-600 text-lg">
                We combine cutting-edge AI expertise with a deep understanding of business needs to provide transformative solutions that drive growth and innovation.
              </p>
            </FloatingElement>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "End-to-End AI Solutions",
                description: "From concept to deployment, we handle every aspect of AI development to deliver complete, production-ready solutions.",
                icon: <Layers className="h-6 w-6" />
              },
              {
                number: "02",
                title: "Custom ML Models",
                description: "We build and train machine learning models tailored to your specific business challenges and data environments.",
                icon: <Brain className="h-6 w-6" />
              },
              {
                number: "03",
                title: "AI Integration Services",
                description: "Our experts seamlessly integrate AI capabilities into your existing systems and workflows.",
                icon: <Zap className="h-6 w-6" />
              },
              {
                number: "04",
                title: "Scalable Architecture",
                description: "Our solutions are built on scalable architectures that can grow with your business and handle increasing data volumes.",
                icon: <Server className="h-6 w-6" />
              },
              {
                number: "05",
                title: "Data Security & Privacy",
                description: "We implement robust security measures to protect your data and ensure compliance with privacy regulations.",
                icon: <Shield className="h-6 w-6" />
              },
              {
                number: "06",
                title: "Ongoing Support & Maintenance",
                description: "We provide continuous support and maintenance to ensure your AI solutions remain effective and up-to-date.",
                icon: <Clock className="h-6 w-6" />
              }
            ].map((item, index) => (
              <FloatingElement
                key={index}
                animationType="slide-up"
                delay={0.4 + index * 0.1}
                hoverEffect={true}
              >
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full relative">
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-cyberpink to-cyberpurple text-white w-10 h-10 rounded-full flex items-center justify-center font-bold animate-pulse-slow">
                    {item.number}
                  </div>
                  <div className="mb-4 text-cyberpink">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </FloatingElement>
            ))}
          </div>

          <div className="text-center mt-12">
            <FloatingElement animationType="slide-up" delay={1.0} hoverEffect={true}>
              <Link to="/services" className="button-secondary inline-flex items-center">
                Explore Our AI Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </FloatingElement>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-cyberpink/5 blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-cyberpurple/5 blur-2xl animate-pulse-slow animation-delay-1000"></div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FloatingElement animationType="slide-up" delay={0.1}>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyberpink/10 text-cyberpink text-sm font-medium mb-4">
                <HelpCircle className="h-4 w-4 mr-2" />
                Common Questions
              </div>
            </FloatingElement>
            <FloatingElement animationType="slide-up" delay={0.2}>
              <h2 className="heading-lg mb-4">Frequently Asked Questions</h2>
            </FloatingElement>
            <FloatingElement animationType="slide-up" delay={0.3}>
              <p className="text-gray-600 text-lg">
                Find answers to common questions about our AI development services and process
              </p>
            </FloatingElement>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <FloatingElement
                key={index}
                animationType="slide-up"
                delay={0.4 + index * 0.1}
              >
                <div className="mb-6 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer">
                      <h3 className="text-xl font-bold text-gray-800">{faq.question}</h3>
                      <div className="ml-4">
                        <div className="bg-gradient-to-r from-cyberpink to-cyberpurple text-white p-1 rounded-full transform transition-transform duration-300 group-open:rotate-45">
                          <PlusCircle className="h-6 w-6" />
                        </div>
                      </div>
                    </summary>
                    <div className="px-6 pb-6 text-gray-600">
                      <div className="border-t border-gray-100 pt-4">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </details>
                </div>
              </FloatingElement>
            ))}
          </div>

          <div className="text-center mt-12">
            <FloatingElement animationType="slide-up" delay={0.9} hoverEffect={true}>
              <Link to="/contact" className="button-secondary inline-flex items-center">
                Have More Questions? Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </FloatingElement>
          </div>
        </div>

        {/* Background animation */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <HexagonNetwork width={1200} height={600} nodeCount={25} />
        </div>

        {/* Animated background elements */}
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-cyberpink/5 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-cyberpurple/5 blur-3xl animate-pulse-slow animation-delay-1000"></div>
      </section>

      <Testimonials />

      {/* Blog Preview Section */}
      <section className="section bg-gray-50 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <FloatingElement animationType="slide-up" delay={0.1}>
                <h2 className="heading-lg mb-2">Latest Insights</h2>
              </FloatingElement>
              <FloatingElement animationType="slide-up" delay={0.2}>
                <p className="text-gray-600 text-lg">
                  Stay updated with our latest articles and industry insights
                </p>
              </FloatingElement>
            </div>
            <FloatingElement animationType="slide-up" delay={0.3} hoverEffect={true}>
              <Link to="/blog" className="mt-4 md:mt-0 inline-flex items-center text-cyberpink font-semibold hover:text-cyberpurple transition-colors">
                View All Articles
                <ChevronRight className="ml-1 h-5 w-5" />
              </Link>
            </FloatingElement>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <FloatingElement
                key={index}
                animationType="slide-up"
                delay={0.4 + index * 0.1}
                hoverEffect={true}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 block h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={getOptimizedImageUrl(post.image, 600, 85)}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-cyberpink flex items-center">
                      <Eye className="h-3 w-3 mr-1" />
                      {post.views} views
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-cyberpink transition-colors">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="inline-flex items-center font-medium text-cyberpink">
                      Read More
                      <ChevronRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </FloatingElement>
            ))}
          </div>

          <div className="text-center mt-12">
            <FloatingElement animationType="slide-up" delay={0.8} hoverEffect={true}>
              <Link to="/blog" className="button-secondary inline-flex items-center">
                Browse All Articles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </FloatingElement>
          </div>
        </div>

        {/* Background animation */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <HexagonNetwork width={1200} height={600} nodeCount={20} />
        </div>

        {/* Animated background elements */}
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-cyberpink/5 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-cyberpurple/5 blur-3xl animate-pulse-slow animation-delay-1000"></div>
      </section>

      {/* Team Highlights Section */}
      <section className="section bg-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FloatingElement animationType="slide-up" delay={0.1}>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyberpurple/10 text-cyberpurple text-sm font-medium mb-4">
                <Users className="h-4 w-4 mr-2" />
                Meet Our Experts
              </div>
            </FloatingElement>
            <FloatingElement animationType="slide-up" delay={0.2}>
              <h2 className="heading-lg mb-4">Our AI Leadership Team</h2>
            </FloatingElement>
            <FloatingElement animationType="slide-up" delay={0.3}>
              <p className="text-gray-600 text-lg">
                Led by industry veterans with deep expertise in artificial intelligence and machine learning
              </p>
            </FloatingElement>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamHighlights.map((member, index) => (
              <FloatingElement
                key={index}
                animationType="slide-up"
                delay={0.4 + index * 0.1}
                hoverEffect={true}
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 h-full">
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyberdark/70 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <h3 className="font-bold text-xl">{member.name}</h3>
                        <p className="opacity-90">{member.role}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-500 mb-2">EXPERTISE</h4>
                      <p className="text-gray-700">{member.expertise}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 mb-2">BACKGROUND</h4>
                      <p className="text-gray-700">{member.background}</p>
                    </div>
                  </div>
                </div>
              </FloatingElement>
            ))}
          </div>

          <div className="text-center mt-12">
            <FloatingElement animationType="slide-up" delay={0.8} hoverEffect={true}>
              <Link to="/about" className="button-secondary inline-flex items-center">
                Meet Our Full Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </FloatingElement>
          </div>
        </div>

        {/* Background animation */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <HexagonNetwork width={1200} height={600} nodeCount={20} />
        </div>

        {/* Animated background elements */}
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-cyberpink/5 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-cyberpurple/5 blur-3xl animate-pulse-slow animation-delay-1000"></div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-reelred to-reelblack text-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <FloatingElement animationType="slide-up" delay={0.1}>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
                <Sparkles className="h-4 w-4 mr-2" />
                Start Your AI Journey Today
              </div>
            </FloatingElement>

            <FloatingElement animationType="slide-up" delay={0.2}>
              <h2 className="heading-lg mb-6">Ready to Transform Your Business with AI?</h2>
            </FloatingElement>

            <FloatingElement animationType="slide-up" delay={0.3}>
              <p className="text-lg opacity-90 mb-8">
                Get in touch with our team of AI specialists to discuss how our development services can accelerate your innovation and growth.
              </p>
            </FloatingElement>

            <div className="flex flex-wrap gap-4 justify-center">
              <FloatingElement animationType="slide-up" delay={0.4} hoverEffect={true}>
                <Link
                  to="/contact"
                  className="bg-white text-reelred font-semibold py-3 px-8 rounded-md hover:bg-gray-100 transition-all duration-300 hover:shadow-lg inline-flex items-center"
                >
                  Start Your AI Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </FloatingElement>

              <FloatingElement animationType="slide-up" delay={0.5} hoverEffect={true}>
                <Link
                  to="/product"
                  className="bg-transparent border border-white text-white font-semibold py-3 px-8 rounded-md hover:bg-white/10 transition-all duration-300 hover:shadow-lg inline-flex items-center"
                >
                  Explore Our AI Solutions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </FloatingElement>
            </div>

            {/* Additional contact options */}
            <FloatingElement animationType="slide-up" delay={0.6}>
              <div className="mt-12 pt-8 border-t border-white/20 flex flex-wrap justify-center gap-8">
                <div className="flex items-center text-white/90">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>info@reelface.com</span>
                </div>
                <div className="flex items-center text-white/90">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>+1 (323) 555-REEL</span>
                </div>
              </div>
            </FloatingElement>
          </div>
        </div>

        {/* Animated background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <HexagonNetwork width={1200} height={400} nodeCount={40} />
        </div>

        {/* Animated background elements */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-white/10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-white/10 blur-3xl animate-pulse-slow animation-delay-1000"></div>
        <div className="absolute top-3/4 left-1/3 w-40 h-40 rounded-full bg-white/10 blur-2xl animate-pulse-slow animation-delay-2000"></div>
      </section>
    </div>
  );
};

export default Index;
