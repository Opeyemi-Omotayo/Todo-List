import React, { useContext, useState } from 'react';
import { startOfDay } from 'date-fns';
import Header from '../components/header/Header';
import DateList from '../components/dateList/DateList';
import EditTask from '../components/tasks/EditTask';
import TaskDetails from '../components/tasks/TaskDetails';
import AddTask from '../components/tasks/AddTask';
import AppContext from '../context/Index';
import MobileInput from '../components/mobileInput/MobileInput';
import { Calender } from '../components/calender/Calender';
import Sheet from 'react-modal-sheet';
import Pagination from '../components/pagination/Pagination';



const HomePage = () => {
  const { editTaskVisible, addTaskVisible, taskDetailsVisible, snapPoints, calenderVisible ,closeSheet,isTaskDetailsModalOpen ,isAddTaskModalOpen, isEditTaskModalOpen  } = useContext(AppContext);
  const [selectedDate, setSelectedDate] = useState(startOfDay(new Date()));

  return (
    <>
     <Sheet
        data-testid='bottom-sheet'
        disableDrag
        className='lg:hidden'
        isOpen={isAddTaskModalOpen || isEditTaskModalOpen || isTaskDetailsModalOpen}
        onClose={closeSheet}
        snapPoints={snapPoints}
        initialSnap={1}
      >
        <Sheet.Container className='rounded-3xl'>
          <Sheet.Content>
          {isTaskDetailsModalOpen && <TaskDetails />}
          {isAddTaskModalOpen && <AddTask />}
          {isEditTaskModalOpen && <EditTask />}
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    <div className="font-workSans">
      <Header />
      <div className='flex' >
        <div className='w-full lg:w-[68%] '>
          <DateList setSelectedDate={setSelectedDate} date={selectedDate}/>
          <Pagination />
          <MobileInput />
        </div>
        <div className='hidden lg:block lg:w-[29%] border-l pl-8 xl:pr-6'>
          {calenderVisible || (!editTaskVisible && !taskDetailsVisible && !addTaskVisible) ? (<Calender selectedDate={selectedDate} setSelectedDate={setSelectedDate} />) : ""}
          {taskDetailsVisible && <TaskDetails />}
          {editTaskVisible && <EditTask />}
          {addTaskVisible && <AddTask />}
        </div>
      </div>
    </div>
    </>
  )
}

export default HomePage;
