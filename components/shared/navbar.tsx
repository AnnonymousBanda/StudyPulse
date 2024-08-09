import Link from "next/link";
import {Logo, Menu, ToogleTheme, Profile, NavColor} from '@/components'
import { SignedIn, UserButton } from '@clerk/nextjs'

const Navbar = () => {
    return (
      <>
        <NavColor />
          <div className='w-full h-full py-[0.75rem] box-border flex items-center'>
            <nav className='flex items-center justify-between w-full'>
              <div>
                <Link href='/'>
                  <Logo/>
                </Link>
                <Menu/>
              </div>
              <div className='flex gap-[15px] items-center'>
                <ToogleTheme/>
                {/* <Profile/> */}
                <div className="w-[5.5rem]">
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                </div>              
              </div>
            </nav>
          </div>
      </>
      );
}

export default Navbar
