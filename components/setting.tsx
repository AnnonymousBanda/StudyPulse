'use client';
import React from 'react'
import Image from 'next/image'
import { Setting } from '@/public'
import { useRef } from 'react';

const setting = () => {
    const settingRef = useRef<HTMLImageElement>(null)
    const degRef = useRef<number>(0)
    const handleClick = () => {
        degRef.current = degRef.current === 0 ? 180 : 0
        settingRef.current?.style.setProperty('transform', `rotate(${degRef.current}deg)`)
        console.log(degRef.current)
    }
  return (    
    <Image src={Setting.SettingLight} alt='settings' width={25} height={25} className='md:block hidden cursor-pointer transition duration-300 ease-in-out' ref={settingRef} onClick={handleClick}/>
  )
}

export default setting