"use client";
import { useTheme } from "@/contexts/ThemeProvider";

const navColor = ({children}:{children:React.ReactNode}) => {
    const {theme} = useTheme();
  return (
    <div className={"opacity-100 "+(theme==='light'?'bg-light-secondary':'bg-dark-secondary')}>{children}</div>
  )
}

export default navColor
