import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isEqual,
  isSameMonth,
  isToday,
  startOfDay,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";
import { useMemo, useState } from "react";
import { classNames } from "../../micro/calender";
import { CalenderProps } from "../../types/types";

const days = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];



export const Calender = ({
  selectedDate,
  setSelectedDate,
  setShowingDatePicker,
  sectionClasses,
}: CalenderProps) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const newDays = useMemo(() => {
    return eachDayOfInterval({
      start: startOfWeek(startOfMonth(currentMonth), { weekStartsOn: 1 }),
      end: endOfWeek(endOfMonth(currentMonth)),
    });
  }, [currentMonth]);

  return (
    <div
      className={classNames(
        "w-full py-[20px] sm:border shadow-lg border-gray-50  px-4  max-w-md gap-2 flex flex-col rounded-lg",
        sectionClasses
      )}
    >
      <header className='flex flex-col gap-4'>
        <div className='flex items-center justify-between'>
          <button onClick={prevMonth}>
          &lt;
          </button>
          <h2 className='font-semibold leading-[24px] text-grey'>
            {format(currentMonth, "MMMM yyyy")}
          </h2>
          <button onClick={nextMonth}>
          &gt;
          </button>
        </div>
        <div className='flex items-center justify-between '>
          <p className='w-[68%] text-grey shadow-sm border-gray-200 p-[8px_14px_8px_14px] border rounded-[8px]'>
            {format(selectedDate, "MMM d, yyyy")}
          </p>
          <button
            onClick={() => {
              setSelectedDate(startOfDay(new Date()));
              setCurrentMonth(new Date());
            }}
            className='button-transparent shadow-sm text-grey- w-[28%] border-gray-200 p-[8px_14px_8px_14px] border rounded-[8px] '
          >
            Today
          </button>
        </div>
      </header>
      <section className='flex flex-col'>
        <header className='grid grid-cols-7 '>
          {days.map((day) => {
            return (
              <h3
                key={day}
                className='w-[40px] rounded-[20px] items-center justify-center flex h-[40px] font-medium text-grey text-[14px]'
              >
                {day}
              </h3>
            );
          })}
        </header>
        <ul className='grid grid-cols-7 grid-rows-5 gap-1'>
          {newDays.map((date) => (
            <li key={date.toISOString()}>
              <button
                onClick={() => {
                  setSelectedDate(date);
                  setShowingDatePicker?.(false);
                }}
                className={`w-[40px] cursor-pointer rounded-[20px] h-[40px] items-center justify-center flex relative
                ${!isEqual(date, selectedDate) && "hover:bg-[#F9FAFB]"}
                 ${isEqual(date, selectedDate) && "bg-[#3F5BF6] text-white"}
                ${
                  isSameMonth(date, new Date())
                    ? "text-gray-600"
                    : "text-gray-400"
                }`}
              >
                <time dateTime={format(date, "yyyy-MM-dd")}>
                  {format(date, "d")}
                </time>
                {isToday(date) && (
                  <div className='w-[5px] bottom-1 rounded-full bg-blue text-white  absolute h-[5px]' />
                )}
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};