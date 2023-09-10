import {
  eachDayOfInterval,
  endOfMonth,
  format,
  isEqual,
  startOfMonth,
} from "date-fns";
import { useMemo } from "react";
import { classNames } from "../../micro/calender";

interface CalenderProps {
  date: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
}

const DateList = ({ date, setSelectedDate }: CalenderProps) => {
  
  const daysInMonth = useMemo(() => {
    return eachDayOfInterval({
      start: startOfMonth(date),
      end: endOfMonth(date),
    });
  }, [date]);

  return (
    <div className='flex flex-col w-full gap-4 px-4 lg:px-8 xl:pl-16'>
      <h3 className='leading-6 text-[#101828] font-semibold'>
        {format(date, "MMMM yyyy")}
      </h3>
      <ul className='w-full overflow-x-auto pb-2 scrollbar-none sm:scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-[blue] scrollbar-track-gray-100 flex gap-[16px]'>
        {daysInMonth.map((day) => (
          <li key={day.toISOString()} className='min-w-[62px] w-full'>
            <button
              onClick={() => setSelectedDate(day)}
              className={classNames(
                "border w-full items-center justify-around h-[68px] rounded-lg flex text-sm py-[10px] flex-col gap-2 ",
                isEqual(day, date) && "bg-blue text-white"
              )}
            >
              <span>{format(day, "E")}</span>
              <span>{format(day, "dd")}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default DateList;
