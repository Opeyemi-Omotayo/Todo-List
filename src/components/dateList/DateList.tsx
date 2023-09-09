import React from "react";
import { format, addDays, isToday } from "date-fns";

const DateList = () => {
  const numberOfDays = 15;
  const currentDate = new Date();
  const currentMonthYear = format(currentDate, "MMMM yyyy");

  const dateArray = Array.from({ length: numberOfDays }, (_, index) => {
    const date = addDays(currentDate, index);
    return date;
  });

  return (
    <div className="px-4 lg:px-8">
      <p className="text-sm font-semibold mb-4">{currentMonthYear}</p>
      <ul className="w-full overflow-x-auto pb-2 scrollbar-none sm:scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-blue scrollbar-track-gray-100 flex gap-[16px]">
        {dateArray.map((date, index) => (
          <li key={index} className="text-center ">
            <div className={`text-sm font-semibold w-[55px] py-2 text-grey rounded-lg shadow-sm border ${isToday(date) ? "bg-blue text-white" : ""
              }`}>
              <p >
                {format(date, "EEE").toUpperCase()}
              </p>
              <p>
                {format(date, "dd")}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DateList;
