
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductShowcase = () => {
  const features = [
    "Comprehensive digital wellness assessment",
    "Real-time screen time monitoring",
    "Personalized digital detox programs",
    "Enterprise cybersecurity solutions",
    "Multi-device security management",
    "Data protection and privacy tools"
  ];

  return (
    <section className="section">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-lg mb-6">Our Digital <span className="text-cyberblue">Wellness Platform</span></h2>
            <p className="text-gray-700 mb-8 text-lg">
              Our flagship platform combines digital wellness tools with robust cybersecurity solutions, helping you maintain a healthy relationship with technology while keeping your digital life secure.
            </p>
            
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-3 bg-cyberblue/10 p-1 rounded-full">
                    <Check className="h-4 w-4 text-cyberblue" />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Link to="/product" className="button-primary">
              Discover Our Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-cyberblue-light to-cybergreen rounded-xl p-1">
              <div className="bg-white rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&q=80&w=1000" 
                  alt="Digital Wellness Dashboard"
                  className="w-full h-auto rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">ReelFace Dashboard</h3>
                  <p className="text-gray-600">Monitor and manage your digital wellness and security</p>
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -z-10 top-1/3 -right-6 w-24 h-24 bg-cyberblue/30 rounded-full blur-xl"></div>
            <div className="absolute -z-10 bottom-1/4 -left-10 w-32 h-32 bg-cybergreen/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
