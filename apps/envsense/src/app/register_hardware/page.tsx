import React from 'react';

interface CardProps {
  title: string;
  backgroundColor: string;
  imageUrl: string; // URL for the image
}

const HardwareCard: React.FC<CardProps> = ({
  title,
  backgroundColor,
  imageUrl,
}) => {
  return (
    <div
      className={`w-85   h-80 ${backgroundColor} shadow-lg rounded-lg flex flex-col items-center justify-center cursor-pointer transition-transform transform hover:scale-105`}
    >
      {/* Image Section */}
      <div className="w-24 h-24 mb-4">
        <img
          src={imageUrl} // Dynamically setting the image based on the passed prop
          alt={title}
          className="object-cover w-full h-full rounded-full"
        />
      </div>

      {/* Title Section */}
      <h3 className="text-lg font-bold text-black mb-1 text-center">{title}</h3>
    </div>
  );
};

// Sample data for cards
const cardData = [
  {
    title: 'Add a DicksonOne logger',
    backgroundColor: 'bg-gray-100',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTFxE8-qwsJO9clsTXBCUIuJRT13K_Cyph2g&s',
  },
  {
    title: 'Add a Gateway',
    backgroundColor: 'bg-gray-100',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKEat6iLOg4fKNW7LeEDdHek3P-_XuNbG-5g&s',
  },
  {
    title: 'Add a Third-Party data logger',
    backgroundColor: 'bg-gray-100',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtzYix9oIlYKQk530VubJmoapSfKNWwz_4Ww&s',
  },
  {
    title: 'Monitor Data',
    backgroundColor: 'bg-gray-100',
    imageUrl: 'https://via.placeholder.com/150/FFFF00/000000?text=Monitor',
  },
];

const HardwareCardContainer: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 p-8">
      {cardData.map((card, index) => (
        <HardwareCard
          key={index}
          title={card.title}
          backgroundColor={card.backgroundColor}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
};

export default HardwareCardContainer;
