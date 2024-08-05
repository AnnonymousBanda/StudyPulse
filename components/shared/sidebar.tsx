import {Home, Lecture, Focus, Schedule, Stats } from '@/public';
import { SidebarItem } from '@/components';

const items = [
    {
        label: 'Home',
        LightSvg: Home.HomeLight,
        DarkSvg: Home.HomeDark,
        DisabledSvg: Home.HomeInactive
    },
    {
        label: 'Lecture',
        LightSvg: Lecture.LectureLight,
        DarkSvg: Lecture.LectureDark,
        DisabledSvg: Lecture.LectureInactive
    },
    {
        label: 'Focus',
        LightSvg: Focus.FocusLight,
        DarkSvg: Focus.FocusDark,
        DisabledSvg: Focus.FocusInactive
    },
    {
        label: 'Schedule',
        LightSvg: Schedule.ScheduleLight,
        DarkSvg: Schedule.ScheduleDark,
        DisabledSvg: Schedule.ScheduleInactive
    },
    {
        label: 'Stats',
        LightSvg: Stats.StatsLight,
        DarkSvg: Stats.StatsDark,
        DisabledSvg: Stats.StatsInactive
    }
]

const Sidebar = () => {
  return (
    <div className='flex flex-col gap-[4rem] h-svh py-[5rem]'>
        {items.map((item, index) => (
            <SidebarItem key={index} LightSvg={item.LightSvg} DarkSvg={item.DarkSvg} DisabledSvg={item.DisabledSvg} label={item.label}/>
        ))}
    </div>
  )
}

export default Sidebar