import React, {useState} from 'react';
import Header from './components/header/Header';
import DateList from './components/dateList/DateList';
import Tasks from './components/tasks/Tasks';
import Calender from './components/calender/Calender';
import TaskDetails from './components/tasks/TaskDetails';
import AddTask from './components/tasks/AddTask';
import EditTask from './components/tasks/EditTask';

type Todo = {
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [selectedTask, setSelectedTask] = useState<Todo | null>(null);
  const [editTaskVisible, setEditTaskVisible] = useState(false);

  const toggleEditTaskVisibility = () => {
    setEditTaskVisible(!editTaskVisible);
  }; 

  return (
    <div>
      <Header />
      <div className='flex'>
        <div className='w-[68%]'>
          <DateList />
          <Tasks setSelectedTask={setSelectedTask}/>
        </div>
        <div className='w-[29%] border-l pl-8'>
          <Calender /> 
          {editTaskVisible ? (
            <EditTask task={selectedTask} toggleVisibility={toggleEditTaskVisibility} />
          ) : (
            <TaskDetails selectedTask={selectedTask} toggleEdit={toggleEditTaskVisibility} />
          )}
          {/* <AddTask /> */}
          {/* <EditTask /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
