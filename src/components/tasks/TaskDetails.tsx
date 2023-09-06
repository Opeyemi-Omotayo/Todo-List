import React from 'react';
import { TfiClose } from 'react-icons/tfi';
import { AiOutlineCalendar, AiOutlineClockCircle } from 'react-icons/ai';

const TaskDetails = () => {
    return (
        <div className='rounded-lg shadow-lg p-6 flex flex-col'>
            <div className='flex items-end justify-end'>
                <TfiClose className='font-bold text-lg text-black' />
            </div>
            <h1 className='text-lg font-bold pb-8'>Create Wireframe</h1>
            <p className='flex items-center pb-2'>
                <span className='text-blue mr-2'>
                    <AiOutlineCalendar />
                </span>
                <span className='font-medium text-base'>
                    20th January, 2023
                </span>
            </p>
            <p className='flex items-center '>
                <span className='text-blue mr-2'>
                    <AiOutlineClockCircle />
                </span>
                <span className='font-medium text-base'>
                    11:00am - 11:30am
                </span>
            </p>
            <div className='flex items-center justify-between pt-8'>
                <button className='border rounded-lg shadow-sm w-[48%] py-2'>Delete</button>
                <button className='bg-blue text-white shadow-sm rounded-lg w-[48%] py-2'>Edit</button>
            </div>
        </div>
    )
}

export default TaskDetails;
