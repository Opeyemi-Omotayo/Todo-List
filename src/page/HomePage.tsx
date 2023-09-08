import React, { useContext} from 'react';
import Header from '../components/header/Header';
import DateList from '../components/dateList/DateList';
import Tasks from '../components/tasks/Tasks';
import EditTask from '../components/tasks/EditTask';
import TaskDetails from '../components/tasks/TaskDetails';
import Calender from '../components/calender/Calender';
import AppContext from '../context/Index';
import MobileInput from '../components/mobileInput/MobileInput';


const HomePage = () => {
const {editTaskVisible} = useContext(AppContext);
  
  return (
    <div>
      <Header />
        <div className='flex'>
          <div className='w-full lg:w-[68%] '>
            <DateList />
            <Tasks  />
            <MobileInput />
          </div>
          <div className='hidden lg:w-[29%] border-l pl-8'>
            <Calender />
            {editTaskVisible ? (
              <EditTask   />
            ) : (
              <TaskDetails   />
            )}
            {/* <AddTask /> */}
          </div>
        </div>
    </div>
  )
}

export default HomePage;
