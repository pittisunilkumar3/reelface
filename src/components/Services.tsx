
import { Shield, Laptop, Clock, Users, Server, Lock, Code, Brain, Cpu, Globe, PenTool, Layers, Star, Camera, FileText, Film, Mic, User, Scissors } from 'lucide-react';
import FeatureCard from './FeatureCard';

import type { LucideIcon } from 'lucide-react';

const Services = () => {
  interface Service {
    title: string;
    description: string;
    icon: LucideIcon;
    priority: boolean;
  }
  
  const services: ReadonlyArray<Service> = Object.freeze([
    {
      title: "Exclusive Brand Face for Reels",
      description: "Stand out on social media with a unique brand face designed exclusively for your reels.",
      icon: Star,
      priority: true,
    },
    {
      title: "Professional Reel Shoots",
      description: "High-quality reel production tailored to enhance your online presence and engagement.",
      icon: Camera,
      priority: true,
    },
    {
      title: "Script Planning & Content Strategy",
      description: "Comprehensive script writing and content strategy to align with your brand goals.",
      icon: FileText,
      priority: true,
    },
    {
      title: "Professional Photoshoots & Video Trailers",
      description: "Creative photoshoots and cinematic video trailers to highlight your brand and services.",
      icon: Film,
      priority: true,
    },
    {
      title: "Podcast & Interview Production",
      description: "Full-service podcast and interview production to share your voice and expertise with the world.",
      icon: Mic,
      priority: false,
    },
    {
      title: "Personal Branding for Professionals",
      description: "Tailored personal branding strategies to help professionals build a strong online identity.",
      icon: User,
      priority: true,
    },
    {
      title: "Professional Editing Services",
      description: "Expert editing for videos, photos, and audio to deliver polished and professional content.",
      icon: Scissors,
      priority: false,
    },
  ]);


  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Our Services</h2>
          <p className="text-gray-600 text-lg">
            We give your brand an exclusive human face for reels — making it easy to create authentic, high-quality video content that builds trust and awareness.
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
