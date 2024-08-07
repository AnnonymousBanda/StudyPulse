import Link from "next/link";
import {Logo, Menu, ToogleTheme, Profile, NavColor} from '@/components'

const Navbar = () => {
    return (
      <>
        <NavColor />
          <div className='w-full py-[0.75rem]'>
            <nav className='flex items-center justify-between w-full'>
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
      </>
      );
}

export default Navbar
