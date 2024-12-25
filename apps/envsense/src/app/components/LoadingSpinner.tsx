// src/components/LoadingSpinner.tsx

const LoadingSpinner = () => {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-16 h-16 border-4 border-t-4 border-gray-200 rounded-full animate-spin border-t-blue-500"></div>
      </div>
    );
  };
  
  export default LoadingSpinner;
  