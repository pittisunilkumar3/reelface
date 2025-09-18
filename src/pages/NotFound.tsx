import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import SEO from '@/components/SEO';
import { AlertTriangle } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <SEO
        title="Page Not Found - ReelFace"
        description="The page you are looking for does not exist."
      />
      <div className="text-center bg-white p-10 rounded-xl shadow-md max-w-md w-full">
        <div className="inline-flex items-center justify-center bg-red-100 p-3 rounded-full mb-6">
          <AlertTriangle className="h-10 w-10 text-red-600" />
        </div>
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">Oops! The page you're looking for doesn't exist.</p>
        <p className="text-gray-500 mb-8">
          The page might have been moved, deleted, or never existed. Please check the URL or navigate back to the home page.
        </p>
        <Link to="/" className="button-primary inline-flex">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
