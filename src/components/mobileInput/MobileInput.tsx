import React, { useContext } from "react";
import {FaMicrophone} from "react-icons/fa";
import AppContext from "../../context/Index";

function MobileInput() {
  const {toggleAddTaskVisibility} = useContext(AppContext);

  return (
    <div className="fixed bottom-0 flex items-center justify-between w-full px-6 py-3 bg-white border-b border-gray-500 lg:hidden lg:px-14 solid">
    <div onClick={toggleAddTaskVisibility} className="flex w-full py-4 px-3 rounded-[0.5rem] justify-between gap-8 border solid border-[#D0D5DD] bg-gray-50 shadow-sm">
     <p className="text-[#475467] text-base font-workSans font-normal">Input Task</p>
     <div className="">
      <FaMicrophone size={24} color="#3F5BF6"/>
    </div>
    </div>
    </div>
  )
}

export default MobileInput;