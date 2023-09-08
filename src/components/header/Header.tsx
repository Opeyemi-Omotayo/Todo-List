import React, {useContext} from 'react';
import Navbar from '../navbar/Navbar';
import { AiOutlinePlus} from 'react-icons/ai';
import AppContext from '../../context/Index';

const Header = () => {
    const { toggleAddTaskVisibility } = useContext(AppContext);
    const time = new Date();
    const hours = time.getHours();
    let greeting = "Good Morning!";

    if (hours >= 12 && hours < 17) {
        greeting = "Good Afternoon!";
    } else if (hours >= 17) {
        greeting = "Good Evening!";
    }

    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-between p-4 lg:p-8 '>
                <div>
                    <h1 className='text-2xl md:text-3xl font-semibold'>{greeting}</h1>
                    <p className='text-[16px] text-grey'>You got some task to do. </p>
                </div>
                <button onClick={toggleAddTaskVisibility} className='bg-blue hidden  text-white lg:flex items-center py-3 px-4 rounded-lg shadow-md'>
                    <AiOutlinePlus className='mr-2'/>
                    <h1 className='text-[14px]'>Create New Task</h1>
                </button>
            </div>

        </div>
    )
}

export default Header;
