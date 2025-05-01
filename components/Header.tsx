import React from 'react';

interface HeaderProps {
  title: string;
  subtitle: string;
}

function Header({ title, subtitle }: HeaderProps) {
  return (
    <div>
      <header
        className="w-full py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/images/background.jpg")' }}
      >
        <div className="bg-[#a60f3597] py-8 px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white uppercase">{title}</h1>
          <h2 className="text-3xl sm:text-6xl font-bold text-white uppercase mt-4">{subtitle}</h2>
        </div>
      </header>
    </div>
  );
}

export default Header;