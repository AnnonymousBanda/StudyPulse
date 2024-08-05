import Link from "next/link";
import {Logo, Menu, ToogleTheme, Profile} from '@/components'

const Navbar = () => {
    return (
        <div className='w-full wide:px-[0.5rem] px-[1rem] py-[0.5rem]'>
          <nav className='max-container flex items-center justify-between w-full'>
            <div>
              <Link href='/'>
                <Logo/>
              </Link>
              <Menu/>
            </div>
            <div className='flex gap-[15px] items-center'>
              <ToogleTheme/>
              <Profile/>
            </div>
          </nav>
        </div>
      );
}

export default Navbar
