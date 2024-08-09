'use client'

import React from 'react'
import { useTheme } from '@/contexts/ThemeProvider'
import Image from 'next/image'
import {Theme as ThemeSvg} from '@/public'
import { useRef } from 'react'
import {clsx} from 'clsx'

const ToogleTheme = () => {
	const { theme, setTheme } = useTheme()
	const ballRef = useRef<HTMLDivElement>(null)
	const ballInitialPosition= useRef<string>(theme === 'light' ? 'right-[2.5px]' : 'left-[2.5px]')
	
	const HandleClick = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
		if(ballInitialPosition.current === 'left-[5px]') 
			ballRef.current?.style.setProperty('transform', `translateX(${theme === 'dark' ? '18px' : '0px'})`);
		else
			ballRef.current?.style.setProperty('transform', `translateX(${theme === 'light' ? '-18px' : '0px'})`);
	}

	const ballClassName=clsx({'bg-light-primary' : theme === 'light'}, {'bg-dark-primary' : theme === 'dark'})
	const toogleClassName=clsx({'bg-light-secondary border-light-primary' : theme === 'light'}, {'bg-dark-secondary border-dark-primary' : theme === 'dark'})
	return (
		<div className={`flex items-center justify-around rounded-full h-[18px] w-[36px] relative box-content p-[0.25rem] border ${toogleClassName}`}>
			<div className={`w-[18px] h-[18px] rounded-full absolute cursor-pointer ${ballInitialPosition.current} transition duration-300 ease-in-out ${ballClassName}`} ref={ballRef} onClick={HandleClick}></div>
			<Image src={ThemeSvg.Light} alt='light theme' height={0} width={0} className='w-[1.8rem] h-auto'/>
			<Image src={ThemeSvg.Dark} alt='dark theme' height={0} width={0} className='w-[1.5rem] h-auto'/>
		</div>
	)
}

export default ToogleTheme
