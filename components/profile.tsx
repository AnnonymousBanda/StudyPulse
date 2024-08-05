import Image from 'next/image'
import {ProfilePic} from "@/public";

const profile = () => {
  return (
    <div className="w-[6.5rem] h-[6.5rem] rounded-full border-2 border-light-primary overflow-hidden">
        <Image src={ProfilePic} alt='profile pic' className="w-full h-full object-cover"/>
    </div>
  )
}

export default profile