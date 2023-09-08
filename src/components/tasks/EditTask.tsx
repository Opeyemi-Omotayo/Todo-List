import React, { useState, useContext } from 'react';
import { TfiClose } from 'react-icons/tfi';
import { AiOutlineBell } from 'react-icons/ai';
import AppContext from '../../context/Index';
import { toast } from 'react-toastify';


const EditTask = () => {
    const { toggleAddTaskVisibility, selectedTask, editTask} = useContext(AppContext);
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
            toast("please enter time!");
            return;
        }  
        if(!date){
            toast("please enter date!");
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
      };
    

    return (
        <div className='rounded-lg shadow-lg p-6 flex flex-col'>
            <div className='flex items-center justify-between pb-8'>
                <h1 className='text-lg font-bold'>Edit Task</h1>
                <TfiClose className=' text-black cursor-pointer' onClick={toggleAddTaskVisibility}/>
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
                <button onClick={toggleAddTaskVisibility} className='border rounded-lg shadow-sm w-[48%] py-2'>Cancel</button>
                <button onClick={handleEditClick} className='bg-blue text-white shadow-sm rounded-lg w-[48%] py-2'>Save</button>
            </div>

        </div>
    )
}

export default EditTask
