import React from 'react';
import { FaCheckCircle, FaTimesCircle, FaInfoCircle } from 'react-icons/fa';

interface RecyclingItemProps {
  name: string;
  category: string;
  recyclable: boolean;
  description: string;
  specialInstructions: string;
}

export const RecyclingItem: React.FC<RecyclingItemProps> = ({
  name,
  category,
  recyclable,
  description,
  specialInstructions
}) => {
  return (
    <div className={`border rounded-lg overflow-hidden shadow-sm ${recyclable ? 'border-green-200' : 'border-red-200'}`}>
      <div className={`p-4 ${recyclable ? 'bg-green-50' : 'bg-red-50'}`}>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg text-gray-800">{name}</h3>
            <span className="inline-block mt-1 px-2 py-1 text-xs rounded-full bg-white text-gray-600">
              {category}
            </span>
          </div>
          <span className={`flex items-center text-sm font-medium ${recyclable ? 'text-green-600' : 'text-red-600'}`}>
            {recyclable ? (
              <FaCheckCircle className="mr-1" />
            ) : (
              <FaTimesCircle className="mr-1" />
            )}
            {recyclable ? 'Reciclable' : 'No reciclable'}
          </span>
        </div>
        
        <p className="mt-3 text-gray-600 text-sm">{description}</p>
      </div>
      
      <div className="bg-white p-4 border-t">
        <div className="flex items-start">
          <FaInfoCircle className="flex-shrink-0 mt-1 mr-2 text-gray-400" />
          <div>
            <h4 className="text-xs font-semibold text-gray-500">INSTRUCCIONES:</h4>
            <p className="text-sm text-gray-700">{specialInstructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};