
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  priority?: boolean;
}

const FeatureCard = ({ title, description, icon: Icon, priority = false }: FeatureCardProps) => {
  return (
    <div className={`bg-white rounded-xl p-6 shadow-sm border ${priority ? 'border-cyberblue' : 'border-gray-100'} hover:shadow-md transition-shadow group`}>
      <div className={`${priority ? 'bg-cyberblue/20' : 'bg-cyberblue/10'} p-3 rounded-lg inline-block mb-4 group-hover:bg-cyberblue/20 transition-colors`}>
        <Icon className="h-6 w-6 text-cyberblue" />
      </div>
      {priority && (
        <span className="bg-cyberblue text-white text-xs px-2 py-1 rounded-full mb-2 inline-block">
          Priority Service
        </span>
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
