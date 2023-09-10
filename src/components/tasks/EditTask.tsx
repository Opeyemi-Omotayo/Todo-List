import React, { useState, useContext } from 'react';
import { TfiClose } from 'react-icons/tfi';
import { AiOutlineBell } from 'react-icons/ai';
import AppContext from '../../context/Index';
import { toast } from 'react-toastify';


const EditTask = () => {
    const { showCalender, selectedTask, editTask, closeSheet} = useContext(AppContext);
    const [title, setTitle] = useState(selectedTask?.title || '');
    const [toTime, setToTime] = useState(selectedTask?.toTime || '');
    const [fromTime, setFromTime] = useState(selectedTask?.fromTime || '');
    const [date, setDate] = useState(selectedTask?.date || '');

    if (!selectedTask) {
        return null;
    }

    const handleEditClick = () => {
        if (!title) {
            toast("please enter a title!")
            return;
        } 
        if (!toTime || !fromTime) {
            toast("please select time!");
            return;
        }  
        if(!date){
            toast("please select date!");
            return;
        }
        editTask(selectedTask.id, {
          title,
          fromTime,
          toTime,
          date,
        });
        setTitle("");
        setFromTime("");
        setToTime("");
        setDate("");
        toast("Task edited successfully!")
        if (window.innerWidth >= 1024) {
            showCalender();
        }else{
            closeSheet()
        }
      };
    

    return (
        <>
        <div className='flex flex-col p-6 rounded-lg lg:hidden'>
            <div className='flex items-center justify-between pb-8'>
                <h1 className='text-lg font-bold'>Edit Task</h1>
                <TfiClose className='text-black cursor-pointer ' onClick={closeSheet}/>
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
                <button onClick={closeSheet} className='border rounded-lg shadow-sm w-[48%] py-2'>Cancel</button>
                <button onClick={handleEditClick} className='bg-blue text-white shadow-sm rounded-lg w-[48%] py-2'>Save</button>
            </div>

        </div>
        <div className='flex-col hidden p-6 rounded-lg shadow-lg lg:flex '>
            <div className='flex items-center justify-between pb-8'>
                <h1 className='text-lg font-bold'>Edit Task</h1>
                <TfiClose className='text-black cursor-pointer ' onClick={showCalender}/>
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
                <button onClick={handleEditClick} className='bg-blue text-white shadow-sm rounded-lg w-[48%] py-2'>Save</button>
            </div>

        </div>
        </>
    )
}

export default EditTask
