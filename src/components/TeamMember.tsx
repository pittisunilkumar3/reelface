
import {
  Linkedin,
  Twitter,
  Mail,
  MapPin
} from 'lucide-react';
import FloatingElement from '@/components/FloatingElement';
import LazyImage from '@/components/LazyImage';
import { fallbackImages, getOptimizedImageUrl } from '@/utils/imageOptimization';

interface TeamMemberProps {
  name: string;
  title: string;
  image: string;
  bio: string;
  expertise?: string[];
  location?: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

const TeamMember = ({
  name,
  title,
  image,
  bio,
  expertise,
  location,
  linkedin,
  twitter,
  email
}: TeamMemberProps) => {
  return (
    <FloatingElement
      animationType="fade"
      hoverEffect={true}
      className="h-full"
    >
      <div className="flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 group transition-all duration-300 hover:shadow-md">
        <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100">
          <LazyImage
            src={getOptimizedImageUrl(image, 500, 90)}
            alt={name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            fallbackSrc={fallbackImages.team}
          />
          {location && (
            <div className="absolute bottom-3 left-3 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium flex items-center shadow-sm">
              <MapPin className="h-3 w-3 mr-1 text-cyberpink" />
              {location}
            </div>
          )}
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-1">{name}</h3>
          <p className="text-cyberpink mb-3 font-medium">{title}</p>
          <p className="text-gray-600 text-sm mb-4 flex-grow">{bio}</p>

          {expertise && expertise.length > 0 && (
            <div className="mb-4">
              <h4 className="text-xs uppercase text-gray-500 mb-2 font-semibold">Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-center space-x-3 pt-3 border-t border-gray-100">
            {linkedin && (
              <FloatingElement
                animationType="scale"
                duration={2}
              >
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-2 rounded-full hover:bg-cyberpink hover:text-white transition-colors"
                  aria-label={`${name}'s LinkedIn`}
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </FloatingElement>
            )}
            {twitter && (
              <FloatingElement
                animationType="scale"
                duration={2}
                delay={0.2}
              >
                <a
                  href={twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-2 rounded-full hover:bg-cyberpink hover:text-white transition-colors"
                  aria-label={`${name}'s Twitter`}
                >
                  <Twitter className="h-4 w-4" />
                </a>
              </FloatingElement>
            )}
            {email && (
              <FloatingElement
                animationType="scale"
                duration={2}
                delay={0.4}
              >
                <a
                  href={`mailto:${email}`}
                  className="bg-gray-100 p-2 rounded-full hover:bg-cyberpink hover:text-white transition-colors"
                  aria-label={`Email ${name}`}
                >
                  <Mail className="h-4 w-4" />
                </a>
              </FloatingElement>
            )}
          </div>
        </div>
      </div>
    </FloatingElement>
  );
};

export default TeamMember;
