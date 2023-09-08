import React, { useContext} from 'react';
import Header from '../components/header/Header';
import DateList from '../components/dateList/DateList';
import Tasks from '../components/tasks/Tasks';
import EditTask from '../components/tasks/EditTask';
import TaskDetails from '../components/tasks/TaskDetails';
import Calender from '../components/calender/Calender';
import AppContext from '../context/Index';


const HomePage = () => {
const {editTaskVisible} = useContext(AppContext);
  
  return (
    <div>
      <Header />
        <div className='flex'>
          <div className='w-[68%]'>
            <DateList />
            <Tasks  />
          </div>
          <div className='w-[29%] border-l pl-8'>
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