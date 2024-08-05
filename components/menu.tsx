'use client';
import Link from 'next/link';
import React, { useState } from 'react';

type MenuStateTypes = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const MenuButton: React.FC<MenuStateTypes> = ({ isOpen, setIsOpen }) => {
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`md:hidden absolute z-50 flex flex-col items-center justify-center w-12 h-12 cursor-pointer transition-all duration-300 ${isOpen ? 'gap-0' : 'gap-[5px]'}`}
      onClick={handleClick}
    >
      <div
        className={`w-8 h-1 bg-light-primary rounded-full transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
      />
      <div
        className={`w-8 h-1 bg-light-primary rounded-full transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}
      />
      <div
        className={`w-8 h-1 bg-light-primary rounded-full transition-transform duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
      />
    </div>
  );
};

const Menu: React.FC = () => {    
  const [isOpen, setIsOpen] = useState<boolean>(false);
 
  return (
    <>
        <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-light-secondary z-10 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className='flex flex-col items-center justify-center gap-10 h-full'>
                <Link href='/home' className='text-p-medium text-light-primary cursor-pointer'>Home</Link>
                <Link href='/lecture' className='text-p-medium text-light-primary cursor-pointer'>Lecture</Link>
                <Link href='/focus' className='text-p-medium text-light-primary cursor-pointer'>Focus</Link>
                <Link href='/schedule' className='text-p-medium text-light-primary cursor-pointer'>Schedule</Link>
                <Link href='/stats' className='text-p-medium text-light-primary cursor-pointer'>Stats</Link>
            </div>
        </div>
    </>
  );
}

export default Menu;
