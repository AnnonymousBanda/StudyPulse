'use client';
import React, { useState } from 'react';
import {Home, Lecture, Focus, Schedule, Stats } from '@/public';
import { NavItems } from '@/components';
import { useTheme } from '@/contexts/ThemeProvider';

const items = [
    {
        label: 'Home',
        LightSvg: Home.HomeLight,
        DarkSvg: Home.HomeDark,
    },
    {
        label: 'Lecture',
        LightSvg: Lecture.LectureLight,
        DarkSvg: Lecture.LectureDark,
    },
    {
        label: 'Focus',
        LightSvg: Focus.FocusLight,
        DarkSvg: Focus.FocusDark,
    },
    {
        label: 'Schedule',
        LightSvg: Schedule.ScheduleLight,
        DarkSvg: Schedule.ScheduleDark,
    },
    {
        label: 'Stats',
        LightSvg: Stats.StatsLight,
        DarkSvg: Stats.StatsDark,
    }
]

type MenuStateTypes = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const MenuButton: React.FC<MenuStateTypes> = ({ isOpen, setIsOpen }) => {
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const { theme } = useTheme();
  const bgColor = theme === 'light' ? 'bg-light-primary' : 'bg-dark-primary';

  return (
    <div
      className={`sm:hidden absolute top-[15px] z-50 flex flex-col items-center justify-center w-12 h-12 cursor-pointer transition-all duration-300 ${isOpen ? 'gap-0' : 'gap-[5px]'}`}
      onClick={handleClick}
    >
      <div
        className={`w-8 h-1 ${bgColor} rounded-full transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
      />
      <div
        className={`w-8 h-1 ${bgColor} rounded-full transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}
      />
      <div
        className={`w-8 h-1 ${bgColor} rounded-full transition-transform duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
      />
    </div>
  );
};

const Menu: React.FC = () => {    
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { theme } = useTheme();
  const bgColor = theme === 'light' ? 'bg-light-secondary' : 'bg-dark-secondary';
 
  return (
    <>
        <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className={`sm:hidden fixed top-0 h-svh flex flex-col justify-center left-0 z-10 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className={`flex justify-center items-center gap-[4rem] py-[2.5rem] pl-[1rem] pr-[2rem] ${bgColor} rounded-r-3xl`}>
            <div className='flex flex-col gap-[4rem]'>
              {items.map((item, index) => (
                  <NavItems key={index} LightSvg={item.LightSvg} DarkSvg={item.DarkSvg} label={item.label}/>
              ))}
            </div>
          </div>
        </div>
    </>
  );
}

export default Menu;
