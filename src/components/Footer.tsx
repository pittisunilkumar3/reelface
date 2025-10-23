
import { NavLink } from 'react-router-dom';
import {
  Linkedin,
  Facebook,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  MessageCircle
} from 'lucide-react';
import Logo from '@/components/Logo';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-reelblack-800 to-gray-900 text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6 p-3 bg-white/10 backdrop-blur-sm rounded-lg inline-block">
              <Logo size="md" />
            </div>
            <p className="text-gray-300 mb-6">
              Where real people create real impact through Crowd Face Marketing.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/reelface/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-gradient-to-r hover:from-reelred-500/80 hover:to-reelblack-800/80 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1Z1fbt9yPf/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-gradient-to-r hover:from-reelred-500/80 hover:to-reelblack-800/80 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/thereelface?igsh=MTJtMWhsM2Z1YjUyag%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-gradient-to-r hover:from-reelred-500/80 hover:to-reelblack-800/80 transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.017 0C8.396 0 7.929.01 6.71.048 5.493.087 4.73.222 4.058.42a5.916 5.916 0 0 0-2.134 1.384A5.916 5.916 0 0 0 .54 4.038C.222 4.73.087 5.493.048 6.71.01 7.929 0 8.396 0 12.017c0 3.624.01 4.09.048 5.303.039 1.217.174 1.98.372 2.652a5.916 5.916 0 0 0 1.384 2.134 5.916 5.916 0 0 0 2.134 1.384c.672.198 1.435.333 2.652.372 1.216.039 1.683.048 5.303.048 3.624 0 4.09-.01 5.303-.048 1.217-.039 1.98-.174 2.652-.372a5.916 5.916 0 0 0 2.134-1.384 5.916 5.916 0 0 0 1.384-2.134c.198-.672.333-1.435.372-2.652.039-1.216.048-1.683.048-5.303 0-3.624-.01-4.09-.048-5.303-.039-1.217-.174-1.98-.372-2.652A5.916 5.916 0 0 0 19.778 1.92 5.916 5.916 0 0 0 17.644.536C16.972.222 16.209.087 14.992.048 13.773.01 13.306 0 9.683 0h2.334zm-.081 1.802h.089c3.563 0 3.983.01 5.39.048 1.3.06 2.006.272 2.477.45a4.114 4.114 0 0 1 1.526.994 4.114 4.114 0 0 1 .994 1.526c.178.471.39 1.177.45 2.477.038 1.407.048 1.827.048 5.39 0 3.563-.01 3.983-.048 5.39-.06 1.3-.272 2.006-.45 2.477a4.114 4.114 0 0 1-.994 1.526 4.114 4.114 0 0 1-1.526.994c-.471.178-1.177.39-2.477.45-1.407.038-1.827.048-5.39.048-3.563 0-3.983-.01-5.39-.048-1.3-.06-2.006-.272-2.477-.45a4.114 4.114 0 0 1-1.526-.994 4.114 4.114 0 0 1-.994-1.526c-.178-.471-.39-1.177-.45-2.477-.038-1.407-.048-1.827-.048-5.39 0-3.563.01-3.983.048-5.39.06-1.3.272-2.006.45-2.477a4.114 4.114 0 0 1 .994-1.526A4.114 4.114 0 0 1 4.11 2.252c.471-.178 1.177-.39 2.477-.45 1.407-.038 1.827-.048 5.39-.048z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M12.017 5.838a6.179 6.179 0 1 0 0 12.358 6.179 6.179 0 0 0 0-12.358zM12.017 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.624-10.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Become a Face', path: '/becomeaface' },
                { name: 'Pricing', path: '/pricing' },
                { name: 'Community', path: '/community' },
                { name: 'Contact', path: '/contact' }
              ].map(({ name, path }) => (
                <li key={name}>
                  <NavLink
                    to={path}
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowUpRight className="h-3 w-3 mr-2" />
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-white/10 p-2 rounded-full mr-3 shrink-0">
                  <MapPin className="h-4 w-4 text-reelred-400" />
                </div>
                <span className="text-gray-300">
                  Hyderabad, Telangana<br />
                  India
                </span>
              </li>
             
              <li className="flex items-center">
                <div className="bg-white/10 p-2 rounded-full mr-3 shrink-0">
                  <MessageCircle className="h-4 w-4 text-reelred-400" />
                </div>
                <a
                  href="https://wa.me/919505613553"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  WhatsApp: +91 9505613553
                </a>
              </li>
              <li className="flex items-center">
                <div className="bg-white/10 p-2 rounded-full mr-3 shrink-0">
                  <Mail className="h-4 w-4 text-reelred-400" />
                </div>
                <a
                  href="mailto:thereelface@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  thereelface@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative my-12">
          <hr className="border-white/10" />
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 px-4">
            <div className="flex space-x-3">
              <div className="h-2 w-2 rounded-full bg-reelred-500"></div>
              <div className="h-2 w-2 rounded-full bg-reelblack-800"></div>
              <div className="h-2 w-2 rounded-full bg-white"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© {year} ReelFace. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <NavLink to="/privacy-policy" className="hover:text-white transition-colors hover:underline">Privacy Policy</NavLink>
            <NavLink to="/terms-of-service" className="hover:text-white transition-colors hover:underline">Terms of Service</NavLink>
            <NavLink to="/cookies-policy" className="hover:text-white transition-colors hover:underline">Cookies Policy</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
