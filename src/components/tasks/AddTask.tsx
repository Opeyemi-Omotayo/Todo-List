import React, { useContext, useState } from 'react';
import { TfiClose } from 'react-icons/tfi';
import { AiOutlineBell } from 'react-icons/ai';
import AppContext from '../../context/Index';


const AddTask = () => {
    const [title, setTitle] = useState("");
    const [toTime, setToTime] = useState("");
    const [fromTime, setFromTime] = useState("");
    const [date, setDate] = useState("");
    const {addTask} = useContext(AppContext);

    const handleAddTask =() => {
        addTask(title, toTime, fromTime, date);
    }



    return (
        <div className='rounded-lg shadow-lg p-6 flex flex-col'>
            <div className='flex items-center justify-between pb-8'>
                <h1 className='text-lg font-bold'>Add Task</h1>
                <TfiClose className=' text-black cursor-pointer' />
            </div>
            <textarea
                id=""
                rows={5}
                value={title}
                onChange={(e) => { setTitle(e.target.value); }}
                className='bg-gray-50 border p-4 text-black border-gray-300 rounded-lg shadow-sm outline-none'
            />
            <div className='flex items-center justify-between py-4 text-grey'>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => { setDate(e.target.value); }}
                    className='flex w-[32%] cursor-pointer text-xs items-center rounded-lg shadow-sm border px-3 py-2' />

                <input
                    onChange={(e) => { setFromTime(e.target.value); }}
                    type="time"
                    value={fromTime}
                    className="flex w-[32%] cursor-pointer text-xs items-center rounded-lg shadow-sm border px-3 py-2"
                />

                <input
                    onChange={(e) => { setToTime(e.target.value); }}
                    type="time"
                    value={toTime}
                    className="flex w-[32%] cursor-pointer text-xs items-center rounded-lg shadow-sm border px-3 py-2"
                />

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
                <button onClick={handleAddTask} className='bg-blue text-white shadow-sm rounded-lg w-[48%] py-2'>Add</button>
            </div>

        </div>
    )
}

export default AddTask;
