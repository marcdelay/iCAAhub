import React from 'react';

const PaintingPage: React.FC = () => {
    return (
        <div className="container mx-auto min-h-screen flex flex-col justify-center items-center">
            <h1>Building a website for business needs.</h1>
            <p>
                Welcome to JVC&apos;s Painting Parties! This is the first website I created for my business. 
                As the owner of JVC&apos;s Painting Parties, I needed a website to connect with customers and 
                decided to use this opportunity to learn coding. Initially, I used Google Forms to gather 
                information from customers and Eventbrite for scheduling future events. Now, I am proud to 
                showcase this website I built from scratch!
            </p>
            <div>
               {/* add link to page showcasing the website */}
            </div>
        </div>
    );
};

export default PaintingPage;