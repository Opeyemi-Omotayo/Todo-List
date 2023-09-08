import React, {useContext} from 'react';
import { TfiClose } from 'react-icons/tfi';
import { AiOutlineCalendar, AiOutlineClockCircle } from 'react-icons/ai';
import AppContext from '../../context/Index';


const TaskDetails = () => {
    const {deleteTask, toggleEditTaskVisibility, toggleAddTaskVisibility, selectedTask} = useContext(AppContext);
    if (!selectedTask) {
        return null;
    }

    const handleDeleteClick = () => {
        if (selectedTask.id) {
            deleteTask(selectedTask.id);
            toggleAddTaskVisibility();
        }
    };

    return (
        <div className='rounded-lg shadow-lg p-6 flex flex-col'>
            <div className='flex items-end justify-end pb-2'>
                <TfiClose className='font-bold text-lg text-black' onClick={toggleAddTaskVisibility}/>
            </div>
            <h1 className='text-lg font-bold pb-8'>{selectedTask.title}</h1>
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
                <button onClick={handleDeleteClick} className='border rounded-lg shadow-sm w-[48%] py-2'>Delete</button>
                <button onClick={toggleEditTaskVisibility} className='bg-blue text-white shadow-sm rounded-lg w-[48%] py-2'>Edit</button>
            </div>
        </div>
    )
}

export default TaskDetails;
