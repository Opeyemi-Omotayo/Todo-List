import React, { useContext, useState } from 'react';
import { startOfDay } from 'date-fns';
import Header from '../components/header/Header';
import DateList from '../components/dateList/DateList';
import Tasks from '../components/tasks/Tasks';
import EditTask from '../components/tasks/EditTask';
import TaskDetails from '../components/tasks/TaskDetails';
import AddTask from '../components/tasks/AddTask';
import AppContext from '../context/Index';
import MobileInput from '../components/mobileInput/MobileInput';
import { Calender } from '../components/calender/Calender';
import Sheet from 'react-modal-sheet';



const HomePage = () => {
  const { editTaskVisible, addTaskVisible, taskDetailsVisible, snapPoints, closeSheet  } = useContext(AppContext);
  const [selectedDate, setSelectedDate] = useState(startOfDay(new Date()));

  return (
    <>
     <Sheet
        data-testid='bottom-sheet'
        disableDrag
        className='lg:hidden'
        isOpen={addTaskVisible || editTaskVisible || taskDetailsVisible}
        onClose={closeSheet}
        snapPoints={snapPoints}
        initialSnap={1}
      >
        <Sheet.Container className='rounded-3xl'>
          <Sheet.Content>
          {taskDetailsVisible && <TaskDetails />}
          {addTaskVisible && <AddTask />}
          {editTaskVisible && <EditTask />}
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    <div>
      <Header />
      <div className='flex'>
        <div className='w-full lg:w-[68%] '>
          <DateList />
          <Tasks />
          <MobileInput />
        </div>
        <div className='hidden lg:block lg:w-[29%] border-l pl-8'>
          {!editTaskVisible && !taskDetailsVisible && !addTaskVisible && <Calender selectedDate={selectedDate} setSelectedDate={setSelectedDate} />}
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
