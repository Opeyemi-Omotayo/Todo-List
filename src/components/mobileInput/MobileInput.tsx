import React from "react";
import {FaMicrophone} from "react-icons/fa"

function MobileInput() {

  return (
    <div className="fixed bottom-0 w-full py-3 flex lg:hidden justify-between px-6 lg:px-14  border-b solid border-gray-500 bg-white items-center">
    <div className="flex w-full py-4 px-3 rounded-[0.5rem] justify-between gap-8 border solid border-[#D0D5DD] bg-gray-50 shadow-sm">
     <p className="text-[#475467] text-base font-workSans font-normal">Input Task</p>
     <div className="">
      <FaMicrophone size={24} color="#3F5BF6"/>
    </div>
    </div>
    </div>
  )
}

export default MobileInput;