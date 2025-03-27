import React from 'react';
import Image from 'next/image';

const Construction = () => {
  return (
    
    <div className="h-screen w-screen flex items-center justify-center">
      <Image
        src="/underconstruction.webp"
        alt="Under Construction"
        layout="fill" // Ensures the image fills the container
        objectFit="cover" // Maintains aspect ratio while covering the container
      />
    </div>
  );
};

export default Construction;