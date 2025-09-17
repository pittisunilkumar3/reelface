
import { Shield, Laptop, Clock, Users, Server, Lock, Code, Brain, Cpu, Globe, PenTool, Layers } from 'lucide-react';
import FeatureCard from './FeatureCard';

const Services = () => {
  const services = [
    {
      title: "AI Development",
      description: "Custom AI solutions designed and built for your specific business needs and use cases.",
      icon: Brain,
      priority: true,
    },
    {
      title: "Machine Learning Implementation",
      description: "Integration of machine learning models to enhance your products and services with intelligent capabilities.",
      icon: Cpu,
      priority: true,
    },
    {
      title: "Website Development",
      description: "Professional website design and development services tailored to your brand and business objectives.",
      icon: Code,
      priority: true,
    },
    {
      title: "Digital Marketing",
      description: "Strategic digital marketing solutions to increase your online visibility and drive customer engagement.",
      icon: Globe,
      priority: false,
    },
    {
      title: "Software Development",
      description: "Full-stack development services with a focus on AI-powered applications and systems.",
      icon: Laptop,
      priority: true,
    },
    {
      title: "Logo Design",
      description: "Creative and professional logo design services to establish your brand identity.",
      icon: PenTool,
      priority: false,
    },
    {
      title: "UI/UX Design",
      description: "User-centered interface and experience design to create intuitive and engaging digital products.",
      icon: Layers,
      priority: false,
    },
    {
      title: "Security Assessments",
      description: "Comprehensive evaluation of your digital security posture to identify vulnerabilities and risks.",
      icon: Shield,
      priority: false,
    },
    {
      title: "Security Monitoring",
      description: "Continuous monitoring of your digital environment to detect and respond to potential threats.",
      icon: Server,
      priority: false,
    },
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Our Services</h2>
          <p className="text-gray-600 text-lg">
            We provide comprehensive AI development, web development, and design solutions to help businesses innovate and secure their digital assets.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FeatureCard 
              key={index} 
              title={service.title} 
              description={service.description} 
              icon={service.icon}
              priority={service.priority}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
