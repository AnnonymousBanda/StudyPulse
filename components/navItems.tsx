'use client';
import { useTheme } from "@/contexts/ThemeProvider";
import Image from 'next/image';
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarItemProps {
  LightSvg: string;
  DarkSvg: string;
  label: string;
  className: string | undefined;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ LightSvg, DarkSvg, label, className }) => {
  const pathname = usePathname();
  const { theme } = useTheme();

  const href = `/${label==='Home'?'':label.toLowerCase()}`
  return (
    <div className="flex">
      <Link href={href}>
        <div className="relative">
          <div className={(pathname===href?`before:content-[''] before:absolute before:z-[100] before:left-0 before:bottom-0 before:w-[110%] before:translate-x-[-5%] before:hover:h-6 before:transition-all before:ease-in-out before:h-2 before:opacity-20 ${theme==='light'?'before:bg-light-primary':'before:bg-dark-primary'} before:rounded-t-lg before:z-[-1] before:text`:'')+' flex flex-row gap-[1rem] items-center'}>
              <Image
                src={theme === 'light' ? LightSvg : DarkSvg} 
                alt='navigation logo'
                width={0}
                height={0}
                className="w-[3rem] h-auto"
              />
              <span className={(theme==='light'?'text-light-primary':'text-dark-primary')+' text-[2rem] '+className}>{label}</span>
          </div>                              
        </div>
      </Link>
    </div>
  );
}

export default SidebarItem;
