import React, { useContext, useState} from 'react';
import { TfiClose } from 'react-icons/tfi';
import { AiOutlineBell } from 'react-icons/ai';
import AppContext from '../../context/Index';
import { toast } from 'react-toastify';

const AddTask = () => {
    const [title, setTitle] = useState("");
    const [toTime, setToTime] = useState("00:00");
    const [fromTime, setFromTime] = useState("00:00");
    const [date, setDate] = useState("");
    const { addTask, closeSheet, showCalender } = useContext(AppContext);

    const handleAddTask = () => {
        if (!title) {
            toast("please enter a title!")
            return;
        }
        if (!toTime || !fromTime) {
            toast("please select time!");
            return;
        }
        if (!date) {
            toast("please select date!");
            return;
        }
        addTask(title, toTime, fromTime, date);
        setTitle("");
        setFromTime("");
        setToTime("");
        setDate("");
        toast("Task added successfully!")
        showCalender();
        closeSheet();
    }


    return (
        <div>
            <div className="block lg:hidden">

                <div className="flex flex-col w-full px-6 py-1 ">
                    <div className='flex items-center justify-between py-8'>
                        <h1 className='text-lg font-bold'>Add Task</h1>
                        <TfiClose className='text-black cursor-pointer ' onClick={closeSheet} />
                    </div>
                    <textarea
                        id=""
                        rows={5}
                        value={title}
                        onChange={(e) => { setTitle(e.target.value); }}
                        className='p-4 text-black border border-gray-300 rounded-lg shadow-sm outline-none bg-gray-50'
                    />
                    <div className='flex items-center justify-between py-4 text-grey'>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => { setDate(e.target.value); }}
                            className='flex w-[32%]  cursor-pointer text-xs items-center rounded-lg shadow-sm border px-3 py-2' />

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
                        <div className='flex items-center text-base text-grey'>
                            <AiOutlineBell className='mr-1' />
                            <p >10 minutes before</p>
                        </div>

                        <TfiClose className='text-xs font-bold cursor-pointer' />
                    </div>
                    <div className='flex items-center justify-between pt-8'>
                        <button onClick={closeSheet} className='border rounded-lg shadow-sm w-[48%] py-2'>Cancel</button>
                        <button onClick={handleAddTask} className='bg-blue text-white shadow-sm rounded-lg w-[48%] py-2'>Add</button>
                    </div>

                </div>

            </div>
            <div className='flex-col hidden p-6 rounded-lg shadow-lg lg:flex'>
                <div className='flex items-center justify-between pb-8'>
                    <h1 className='text-lg font-bold'>Add Task</h1>
                    <TfiClose className='text-black cursor-pointer ' onClick={showCalender} />
                </div>
                <textarea
                    id=""
                    rows={5}
                    value={title}
                    onChange={(e) => { setTitle(e.target.value); }}
                    className='p-4 text-black border border-gray-300 rounded-lg shadow-sm outline-none bg-gray-50'
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
                    <div className='flex items-center text-base text-grey'>
                        <AiOutlineBell className='mr-1' />
                        <p >10 minutes before</p>
                    </div>

                    <TfiClose className='text-xs font-bold cursor-pointer' />
                </div>
                <div className='flex items-center justify-between pt-8'>
                    <button onClick={showCalender} className='border rounded-lg shadow-sm w-[48%] py-2'>Cancel</button>
                    <button onClick={handleAddTask} className='bg-blue text-white shadow-sm rounded-lg w-[48%] py-2'>Add</button>
                </div>

            </div>
        </div>
    )
}

export default AddTask;
