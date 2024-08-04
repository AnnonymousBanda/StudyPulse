import Image from "next/image";
import Link from "next/link";
import { Logo, Theme, Setting, Hamburger } from '@/public'

const Navbar = () => {
    return (
        <div className='w-full px-[2rem] py-[1rem] border-solid border-b-[1px] border-[#BDBDBD] '>
          <nav className='max-container flex items-center justify-between w-full'>
            <div>
              <Link href='/'>
                <Image src={Logo.LogoLight} alt='logo of StudyPulse' width={200} height={40} className='md:block hidden' />
              </Link>
              <Image src={Hamburger} alt='menu button' width={25} height={25} className='md:hidden block' />
            </div>
            <div className='flex gap-[15px] items-center'>
              <Image src={Theme.Light} alt='light theme' width={40} height={40} className='md:block hidden' />
              <div className="w-[6.5rem] h-[6.5rem] rounded-full bg-light-primary"></div>
              <Image src={Setting.SettingLight} alt='settings' width={25} height={25} className='md:block hidden' />
            </div>
          </nav>
        </div>
      );
}

export default Navbar