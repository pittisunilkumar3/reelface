/**
 * Utility functions for performance monitoring and optimization
 */

/**
 * Measures and logs component render time
 * @param componentName Name of the component being measured
 * @param callback Optional callback to execute with timing information
 * @returns Cleanup function to call when component unmounts
 */
export const measureRenderTime = (
  componentName: string,
  callback?: (duration: number) => void
): () => void => {
  const startTime = performance.now();
  let frameId: number;

  // Use requestAnimationFrame to measure after render is complete
  frameId = requestAnimationFrame(() => {
    const endTime = performance.now();
    const duration = endTime - startTime;
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Performance] ${componentName} rendered in ${duration.toFixed(2)}ms`);
    }
    
    if (callback) {
      callback(duration);
    }
  });

  // Return cleanup function
  return () => {
    cancelAnimationFrame(frameId);
  };
};

/**
 * Debounce function to limit how often a function can be called
 * @param func Function to debounce
 * @param wait Wait time in milliseconds
 * @returns Debounced function
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  return (...args: Parameters<T>) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    
    timeout = setTimeout(() => {
      func(...args);
    }, wait);
  };
};

/**
 * Throttle function to limit how often a function can be called
 * @param func Function to throttle
 * @param limit Limit time in milliseconds
 * @returns Throttled function
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle = false;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
};

/**
 * Measures and reports Web Vitals metrics
 */
export const reportWebVitals = (): void => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    // Use PerformanceObserver to observe longtasks
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (process.env.NODE_ENV === 'development') {
              console.warn(`[Performance] Long task detected: ${entry.duration.toFixed(2)}ms`);
            }
          });
        });
        
        observer.observe({ entryTypes: ['longtask'] });
      } catch (e) {
        console.error('PerformanceObserver for longtask not supported');
      }
    }
  }
};
