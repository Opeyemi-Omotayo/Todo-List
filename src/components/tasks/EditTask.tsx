import React from 'react';
import { TfiClose } from 'react-icons/tfi';
import { AiOutlineBell, AiOutlineCalendar, AiOutlineClockCircle } from 'react-icons/ai';


const EditTask = () => {
  return (
    <div className='rounded-lg shadow-lg p-6 flex flex-col'>
    <div className='flex items-center justify-between pb-8'>
        <h1 className='text-lg font-bold'>Edit Task</h1>
        <TfiClose className=' text-black cursor-pointer' />
    </div>
    <textarea
        id=""
        rows={5}
        value=" create wireframe"
        className='bg-gray-50 border p-4 text-black border-gray-300 rounded-lg shadow-sm outline-none'
    />
    <div className='flex items-center justify-between py-4 text-grey'>
        <div className='flex items-center rounded-lg shadow-sm border px-3 py-2'>
            <span className='mr-2'>
                <AiOutlineCalendar />
            </span>
            <span className='font-medium text-sm '>
                Today
            </span></div>
        <div className='flex items-center rounded-lg shadow-sm border px-3 py-2'>
            <span className=' mr-2'>
                <AiOutlineClockCircle />
            </span>
            <span className='font-medium text-sm'>
                00:00
            </span>
        </div>
        <div className='flex items-center rounded-lg shadow-sm border px-3 py-2'>
            <span className=' mr-2'>
                <AiOutlineClockCircle />
            </span>
            <span className='font-medium text-sm'>
                00:00
            </span>
        </div>

    </div>
    <div className='flex items-center justify-between'>
        <div className='flex items-center text-grey text-base'>
            <AiOutlineBell className='mr-1' />
            <p >10 minutes before</p>
        </div>

        <TfiClose className='font-bold text-xs cursor-pointer' />
    </div>
    <div className='flex items-center justify-between pt-8'>
        <button className='border rounded-lg shadow-sm w-[48%] py-2'>Cancel</button>
        <button className='bg-blue text-white shadow-sm rounded-lg w-[48%] py-2'>Save</button>
    </div>

    </div>
  )
}

export default EditTask
