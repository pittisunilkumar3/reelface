/**
 * Utility functions for image optimization
 */

// Define a list of fallback images to use when primary images fail to load
export const fallbackImages = {
  hero: '/placeholder-image.svg',
  product: '/placeholder-image.svg',
  service: '/placeholder-image.svg',
  blog: '/placeholder-image.svg',
  team: '/placeholder-image.svg',
  default: '/placeholder-image.svg',
};

/**
 * Generates a responsive image URL with appropriate size parameters
 * @param url Original image URL
 * @param width Desired width
 * @param quality Image quality (1-100)
 * @returns Optimized image URL
 */
export const getOptimizedImageUrl = (
  url: string,
  width: number = 800,
  quality: number = 80
): string => {
  // Handle empty or undefined URLs
  if (!url) {
    return '/placeholder-image.svg';
  }

  try {
    // Check if URL is from Unsplash
    if (url.includes('unsplash.com')) {
      // Unsplash already provides optimization parameters
      const baseUrl = url.split('?')[0];
      return `${baseUrl}?w=${width}&q=${quality}&auto=format&fit=crop`;
    }

    // Check if URL is a local path (starts with /)
    if (url.startsWith('/')) {
      return url; // Return as is for local paths
    }

    // For other image sources, return the original URL
    // In a production app, you might implement other provider-specific optimizations
    return url;
  } catch (error) {
    console.error('Error optimizing image URL:', error);
    return '/placeholder-image.svg';
  }
};

/**
 * Generates a set of srcset values for responsive images
 * @param url Original image URL
 * @param widths Array of widths to generate
 * @param quality Image quality (1-100)
 * @returns srcset string for use in img element
 */
export const generateSrcSet = (
  url: string,
  widths: number[] = [320, 640, 960, 1280, 1920],
  quality: number = 80
): string => {
  if (!url) return '';

  try {
    if (url.includes('unsplash.com')) {
      const baseUrl = url.split('?')[0];
      return widths
        .map((width) => `${baseUrl}?w=${width}&q=${quality}&auto=format&fit=crop ${width}w`)
        .join(', ');
    }

    // For other image sources, return empty string
    // In a production app, you might implement other provider-specific optimizations
    return '';
  } catch (error) {
    console.error('Error generating srcset:', error);
    return '';
  }
};

/**
 * Generates sizes attribute for responsive images
 * @returns sizes string for use in img element
 */
export const getResponsiveSizes = (): string => {
  return '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';
};

/**
 * Calculates aspect ratio padding for maintaining image dimensions
 * @param width Image width
 * @param height Image height
 * @returns CSS padding-bottom value as a string
 */
export const getAspectRatioPadding = (width: number, height: number): string => {
  return `${(height / width) * 100}%`;
};
