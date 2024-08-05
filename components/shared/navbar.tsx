import Image from "next/image";
import Link from "next/link";
import { Logo } from '@/public'
import {Menu, Theme, Profile} from '@/components'

const Navbar = () => {
    return (
        <div className='w-full px-[2rem] py-[1rem] border-solid border-b-[1px] border-[#BDBDBD] '>
          <nav className='max-container flex items-center justify-between w-full'>
            <div>
              <Link href='/'>
                <Image src={Logo.LogoLight} alt='logo of StudyPulse' width={200} height={40} className='md:block hidden' />
              </Link>
              <Menu/>
            </div>
            <div className='flex gap-[15px] items-center'>
              <Theme/>
              <Profile/>
            </div>
          </nav>
        </div>
      );
}

export default Navbar
