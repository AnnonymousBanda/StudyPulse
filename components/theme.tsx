'use client'

import React from 'react'
import { useTheme } from '@/contexts/ThemeProvider'
import Image from 'next/image'
import {Theme as ThemeSvg} from '@/public'
import { useRef } from 'react'

const Theme = () => {
	const { theme, setTheme } = useTheme()
	const ballRef = useRef<HTMLDivElement>(null)
	
	const HandleClick = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
		ballRef.current?.style.setProperty('transform', `translateX(${theme === 'light' ? '30px' : '0px'})`);
	}

	return (
		<div className='flex items-center justify-around rounded-full bg-black h-[30px] w-[60px] relative cursor-pointer' onClick={HandleClick}>
			<div className='w-[30px] h-[30px] rounded-full bg-slate-600 absolute left-0 transition duration-300 ease-in-out' ref={ballRef}></div>
			<Image src={ThemeSvg.Light} alt='light theme' height={30} width={30}/>
			<Image src={ThemeSvg.Dark} alt='dark theme' height={25} width={25}/>
		</div>
	)
}

export default Theme
