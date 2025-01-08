import React from "react";

const Annotation: React.FC = () => {
  return (
    <div className="mt-4 mx-auto w-full max-w-5xl">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-gray-700 text-left md:text-left">
            Annotations
          </h2>
        </div>

        <div className="p-4 bg-gray-300 rounded-md text-gray-700 text-left md:text-center">
          <p>There is no annotation in this range</p>
        </div>
      </div>
    </div>
  );
};

export default Annotation;
