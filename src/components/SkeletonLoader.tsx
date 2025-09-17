import { Skeleton } from '@/components/ui/skeleton';

interface SkeletonLoaderProps {
  type: 'card' | 'text' | 'image' | 'avatar' | 'button' | 'input';
  count?: number;
  className?: string;
}

const SkeletonLoader = ({ type, count = 1, className = '' }: SkeletonLoaderProps) => {
  const renderSkeleton = () => {
    switch (type) {
      case 'card':
        return (
          <div className={`bg-white rounded-xl shadow-sm border border-gray-100 p-6 ${className}`}>
            <Skeleton className="h-12 w-12 rounded-full mb-4" />
            <Skeleton className="h-6 w-3/4 mb-3" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        );
      
      case 'text':
        return (
          <div className={className}>
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        );
      
      case 'image':
        return (
          <Skeleton className={`aspect-[16/9] w-full rounded-lg ${className}`} />
        );
      
      case 'avatar':
        return (
          <Skeleton className={`h-12 w-12 rounded-full ${className}`} />
        );
      
      case 'button':
        return (
          <Skeleton className={`h-10 w-32 rounded-md ${className}`} />
        );
      
      case 'input':
        return (
          <Skeleton className={`h-10 w-full rounded-md ${className}`} />
        );
      
      default:
        return <Skeleton className={`h-4 w-full ${className}`} />;
    }
  };

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="mb-4">
          {renderSkeleton()}
        </div>
      ))}
    </>
  );
};

export default SkeletonLoader;
