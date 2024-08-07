"use client";
import { useTheme } from "@/contexts/ThemeProvider";

const navColor = () => {
    const {theme} = useTheme();
  return (
    <div className={"h-[55px] w-screen absolute z-[-100] top-0 left-0 opacity-100 "+(theme==='light'?'bg-light-secondary':'bg-dark-secondary')}></div>
  )
}

export default navColor
