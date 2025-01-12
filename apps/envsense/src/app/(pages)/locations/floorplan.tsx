'use client';
import React, { useState } from 'react';
import { XMarkIcon, PaperClipIcon } from '@heroicons/react/24/solid'; // Make sure this is correct

export default function FloorPlan() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="h-[50vh] w-[60vw] bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="relative p-2">
        <button
          className="px-2 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 absolute top-0 right-0 mr-2"
          style={{ fontSize: '0.8rem' }}
          onClick={openModal}
        >
          + Add Floor Plan
        </button>
        <h2>0 Total</h2>

        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-1/3 relative -mt-20">
              <h3 className="text-sm font-bold mb-3 ">Add Floor Plan</h3>
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                onClick={closeModal}
              >
                <XMarkIcon className="h-6 w-6" />
              </button>

              <div className="flex flex-col justify-between mb-4">
                <div className="text-center">
                  <button className="px-2 py-1  text-black rounded-lg hover:bg-blue-600">
                    <PaperClipIcon className="h-6 w-6" />
                  </button>
                </div>

                <h3 className="text-lg font-semibold text-center mb-4">
                  Drag and Drop Here to Upload Floor Plan
                </h3>

                <div className="text-center">
                  <button className="px-2 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                    Browse
                  </button>
                </div>
              </div>
              <div className="flex justify-end space-x-4 mt-14">
                <button className="px-2 py-1 bg-gray-300 text-black rounded-lg hover:bg-gray-400">
                  Cancel
                </button>
                <button className="px-2 py-1 bg-blue-100 text-black rounded-lg hover:bg-blue-300">
                  Add Floor Plan
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
