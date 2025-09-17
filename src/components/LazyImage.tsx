import { useState, useEffect, useRef } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { ImageOff } from 'lucide-react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholderColor?: string;
  aspectRatio?: string;
  objectFit?: string;
  fallbackSrc?: string;
}

const LazyImage = ({
  src,
  alt,
  className = '',
  placeholderColor = '#f3f4f6',
  aspectRatio = 'aspect-[16/9]',
  objectFit = 'object-cover',
  fallbackSrc = '/placeholder-image.svg',
  ...props
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Reset states when src changes
    setIsLoaded(false);
    setHasError(false);
    setCurrentSrc(src);
  }, [src]);

  useEffect(() => {
    // Set up Intersection Observer to detect when image is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } // Start loading when image is 200px from viewport
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const handleImageError = () => {
    if (!hasError && fallbackSrc && fallbackSrc !== src) {
      // Try fallback image if available and not already using it
      console.log('Image failed to load, trying fallback:', fallbackSrc);
      setHasError(true);
      setCurrentSrc(fallbackSrc);
    } else {
      // If fallback also fails or no fallback available
      console.log('Both original and fallback images failed to load');
      setHasError(true);
      setIsLoaded(true); // Remove skeleton
    }
  };

  return (
    <div
      className={`relative overflow-hidden ${aspectRatio} ${className}`}
      style={{ backgroundColor: placeholderColor }}
      ref={imgRef}
    >
      {!isLoaded && <Skeleton className="absolute inset-0 w-full h-full animate-pulse" />}

      {isInView && (
        <>
          <img
            src={currentSrc}
            alt={alt}
            className={`w-full h-full transition-all duration-500 ${objectFit} ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
            loading="lazy"
            {...props}
          />

          {/* Show error state if both original and fallback images fail */}
          {hasError && (!fallbackSrc || fallbackSrc === src) && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 text-gray-400">
              <ImageOff className="h-8 w-8 mb-2" />
              <span className="text-xs">Image not available</span>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default LazyImage;
