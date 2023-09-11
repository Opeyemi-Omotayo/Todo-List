import React, {useContext} from 'react';
import { TfiClose } from 'react-icons/tfi';
import { AiOutlineCalendar, AiOutlineClockCircle } from 'react-icons/ai';
import AppContext from '../../context/Index';
import { toast } from 'react-toastify';


const TaskDetails = () => {
    const {deleteTask,toggleEditTaskVisibility, showCalender ,selectedTask, closeSheet, formatTime} = useContext(AppContext);
    if (!selectedTask) {
        return null;
    }

    const handleDeleteClick = () => {
        if (selectedTask.id) {
            deleteTask(selectedTask.id);
            closeSheet();
            showCalender(); 
            toast("Task deleted!")      
        }
    };

    return (
        <>
        <div className='flex flex-col p-6 lg:hidden'>
            <div className='flex items-end justify-end pb-2'>
                <TfiClose className='text-lg font-bold text-black cursor-pointer' onClick={closeSheet}/>
            </div>
            <h1 className='pb-8 text-lg font-bold'>{selectedTask.title}</h1>
            <p className='flex items-center pb-2'>
                <span className='mr-2 text-blue'>
                    <AiOutlineCalendar />
                </span>
                <span className='text-base font-medium'>
                {new Date(selectedTask.date).toDateString()}
                </span>
            </p>
            <p className='flex items-center '>
                <span className='mr-2 text-blue'>
                    <AiOutlineClockCircle />
                </span>
                <span className='text-base font-medium'>
                {formatTime(selectedTask.fromTime)} - {formatTime(selectedTask.toTime)}
                </span>
            </p>
            <div className='flex items-center justify-between pt-8'>
                <button onClick={handleDeleteClick} className='border rounded-lg shadow-sm w-[48%] py-2'>Delete</button>
                <button onClick={toggleEditTaskVisibility } className='bg-blue text-white shadow-sm rounded-lg w-[48%] py-2'>Edit</button>
            </div>
        </div>
        <div className='flex-col hidden p-6 rounded-lg shadow-lg lg:flex '>
            <div className='flex items-end justify-end pb-2'>
                <TfiClose className='text-lg font-bold text-black cursor-pointer' onClick={showCalender}/>
            </div>
            <h1 className='pb-8 text-lg font-bold'>{selectedTask.title}</h1>
            <p className='flex items-center pb-2'>
                <span className='mr-2 text-blue'>
                    <AiOutlineCalendar />
                </span>
                <span className='text-base font-medium'>
                {new Date(selectedTask.date).toDateString()}
                </span>
            </p>
            <p className='flex items-center '>
                <span className='mr-2 text-blue'>
                    <AiOutlineClockCircle />
                </span>
                <span className='text-base font-medium'>
                    {formatTime(selectedTask.fromTime)} - {formatTime(selectedTask.toTime)}
                </span>
            </p>
            <div className='flex items-center justify-between pt-8'>
                <button onClick={handleDeleteClick} className='border rounded-lg shadow-sm w-[48%] py-2'>Delete</button>
                <button onClick={toggleEditTaskVisibility } className='bg-blue text-white shadow-sm rounded-lg w-[48%] py-2'>Edit</button>
            </div>
        </div>
        </>
    )
}

export default TaskDetails;
