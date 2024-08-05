'use client';
import Image from 'next/image'
import {ProfilePic} from "@/public";
import { useTheme } from '@/contexts/ThemeProvider';
import clsx from 'clsx';

const profile = () => {
  const { theme } = useTheme()
  const profileClasses = clsx({'border-light-primary': theme==='light', 'border-dark-primary': theme==='dark'})
  return (
    <div className={`w-[5rem] h-[5rem] rounded-full border-2 overflow-hidden cursor-pointer ${profileClasses}`}>
        <Image src={ProfilePic} alt='profile pic' className="w-full h-full object-cover"/>
    </div>
  )
}

export default profile