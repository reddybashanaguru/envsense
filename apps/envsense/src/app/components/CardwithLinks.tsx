'use client';
import React from 'react';
import Link from 'next/link';

// Define the type for the props
interface CardWithLinksProps {
  title: string;
  links: { label: string; href: string }[]; // Array of objects with label and href for links
}

const CardWithLinks: React.FC<CardWithLinksProps> = ({ title, links }) => {
  return (
    <div className="w-[520px] h-55 bg-white shadow-lg rounded-lg cursor-pointer p-4 flex flex-col">
      <h2 className="text-xl font-bold text-black text-center mb-4">{title}</h2>
      <div className="flex flex-col space-y-3 overflow-y-auto flex-1">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="bg-blue-100 text-blue-500 p-3 rounded-md hover:bg-blue-200 transition-all duration-200"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardWithLinks;
