"use client";
import { useTheme } from "@/contexts/ThemeProvider"
import Image from 'next/image'
import { Logo as LogoSvg } from '@/public'

const Logo = () => {
  const { theme } = useTheme()
  return (
    <Image src={theme==='light'?LogoSvg.LogoLight:LogoSvg.LogoDark} alt='logo of StudyPulse' width={0} height={0} className='sm:block hidden w-[12rem] h-auto' />
  )
}

export default Logo