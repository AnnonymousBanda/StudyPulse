import {Home, Lecture, Focus, Schedule, Stats } from '@/public';
import { NavItems } from '@/components';

const items = [
    {
        label: 'Home',
        LightSvg: Home.HomeLight,
        DarkSvg: Home.HomeDark,
    },
    {
        label: 'Lecture',
        LightSvg: Lecture.LectureLight,
        DarkSvg: Lecture.LectureDark,
    },
    {
        label: 'Focus',
        LightSvg: Focus.FocusLight,
        DarkSvg: Focus.FocusDark,
    },
    {
        label: 'Schedule',
        LightSvg: Schedule.ScheduleLight,
        DarkSvg: Schedule.ScheduleDark,
    },
    {
        label: 'Stats',
        LightSvg: Stats.StatsLight,
        DarkSvg: Stats.StatsDark,
    }
]

const Sidebar = () => {
  return (
    <div className='flex flex-col gap-[4rem] py-[5rem]'>
        {items.map((item, index) => (
            <NavItems key={index} LightSvg={item.LightSvg} DarkSvg={item.DarkSvg} label={item.label} className={"left-sidebar-icons"}/>
        ))}
    </div>
  )
}

export default Sidebar