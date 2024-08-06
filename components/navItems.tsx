'use client';
import { useTheme } from "@/contexts/ThemeProvider";
import Image from 'next/image';
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarItemProps {
  LightSvg: string;
  DarkSvg: string;
  label: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ LightSvg, DarkSvg, label }) => {
  const pathname = usePathname();
  const { theme } = useTheme();

  const href = `/${label==='Home'?'':label.toLowerCase()}`

  return (
    <div className="flex">
      <Link href={href}>
        <div className="flex flex-row gap-[1rem] items-center">
            <Image 
              src={theme === 'light' ? LightSvg : DarkSvg} 
              alt='navigation logo'
              width={30}
              height={30}
            />
            <span className={(theme==='light'?'text-light-primary':'text-dark-primary')+' text-[2rem]'}>{label}</span>
        </div>                              
      </Link>
    </div>
  );
}

export default SidebarItem;
