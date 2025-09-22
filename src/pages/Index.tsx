
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
const CountUp = ({ end, duration = 2000, suffix = "" }) => {
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

  return <span ref={countRef}>{count}{suffix}</span>;
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
      question: "What is ReelFace?",
      answer: "ReelFace is a specialised service where I become the exclusive face of your brand’s reels — creating authentic, engaging video content to grow your reach and awareness."
    },
    {
      question: "How is ReelFace different from influencers?",
      answer: "Most influencers promote dozens of brands at once, which kills exclusivity. ReelFace works with select clients and offers clear packages, so your message stays unique and consistent."
    },
    {
      question: "Who can use ReelFace?",
      answer: "Startups & small businesses, cafés, salons, gyms, wellness brands, fashion, beauty, lifestyle, F&B, gadgets, and founders & professionals who want personal branding."
    },
    {
      question: "Do you offer exclusivity for my brand?",
      answer: "Yes. Depending on the plan, we sign an agreement for brand exclusivity within your category (e.g., one café, one salon in a city)."
    },
    {
      question: "How long does it take to deliver a reel?",
      answer: "Usually 1–2 working days after receiving your product/brief. (Rush delivery available at extra cost.)"
    },
    {
      question: "Can you post on your Instagram page too?",
      answer: "Absolutely! Collaboration on my Instagram page is part of every package — boosting your visibility."
    },
    {
      question: "Do you provide strategy or only videos?",
      answer: "All plans include basic guidance on scripting, hooks, and posting. Gold and Personal Branding packages come with strategy calls & audience insights."
    },
    {
      question: "What if I need ongoing content every month?",
      answer: "You can subscribe to a monthly retainer (custom pricing) or upgrade to a bigger package anytime."
    },
    {
      question: "How do I book your service?",
      answer: "DM on Instagram, fill out the website form, or WhatsApp me. We’ll set up a discovery call, finalise the package, sign an agreement, and start creating!"
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


  return (
    <div className="min-h-screen flex flex-col">
      
      <SEO
        title="ReelFace - Advanced Book ReelFace"
        description="ReelFace specializes in cutting-edge AI development, creating intelligent solutions that transform how businesses operate while ensuring digital wellness and security."
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
                Where Memorable Presence Meets Measurable Growth.
              </p>
            </FloatingElement>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
            {[
              { value: 50, suffix: "+", label: "Clients", icon: <Globe className="h-8 w-8" /> },
              { value: 3, suffix: "M+", label: "Organic Views", icon: <CheckCircle className="h-8 w-8" /> },
              { value: 2, suffix: "+", label: "Years Experience", icon: <Award className="h-8 w-8" /> },
              { value: 90, suffix: "%", label: "Repeat Clients", icon: <Users className="h-8 w-8" /> }
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
                    <CountUp end={stat.value} suffix={stat.suffix} />
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


      <Services />


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
      

    </div>
  );
};

export default Index;
