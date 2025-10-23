
import { Shield, Laptop, Clock, Users, Server, Lock, Code, Brain, Cpu, Globe, PenTool, Layers, Star, Camera, FileText, Film, Mic, User, Scissors, MessageCircle, Video, Sparkles } from 'lucide-react';
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
      title: "Crowd Face Marketing (Primary Service)",
      description: "Real people visit your location, capture videos/photos, and post from their profiles. You gain authentic reach, trust & new customers. Perfect for: Restaurants, cafés, salons, boutiques, gyms, clinics, entertainment spaces, and local businesses.",
      icon: Users,
      priority: true,
    },
    {
      title: "Content Creation",
      description: "High-quality visual content that delivers attention and engagement. Reels & Shorts, Product videos, Brand storytelling videos, Concept planning & scripting, Social media captions and strategy. We make content that doesn't just look great — it works great.",
      icon: Sparkles,
      priority: true,
    },
    {
      title: "Video Production Services",
      description: "Professional shoots designed to elevate your brand image. Onsite shoots, Interview & founder profile videos, Promotional & advertising films, Editing, color grading & sound design, Studio-level output. From idea to final edit — everything handled by our team.",
      icon: Video,
      priority: true,
    },
    {
      title: "Face as a Service (FaaS)",
      description: "If you need relatable faces to represent your brand — we provide creators and everyday people who match your customer profile. Brand ambassadors, Store launches, Spokesperson videos, Social media promotions.",
      icon: User,
      priority: true,
    },
  ]);


  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Reelface Services</h2>
          <p className="text-gray-600 text-lg">
            At Reelface, we help brands grow online using the power of real faces, real stories, and real reach. Whether you want to boost footfall, increase visibility, or build a strong brand identity — we've got you covered.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
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
