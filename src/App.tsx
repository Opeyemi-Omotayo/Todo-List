import React, {useState} from 'react';
import axios from 'axios';
import Header from './components/header/Header';
import DateList from './components/dateList/DateList';
import Tasks from './components/tasks/Tasks';
import Calender from './components/calender/Calender';
import TaskDetails from './components/tasks/TaskDetails';
import AddTask from './components/tasks/AddTask';
import EditTask from './components/tasks/EditTask';
import { ToastContainer, Slide, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  
  const deleteTask = (taskId:number) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${taskId}`)
      .then((response) => {
        if (response.status === 200) {
          toast(`Task with the ID of ${taskId} deleted.`);
          setSelectedTask(null);
        } 
      })
      .catch((error) => {
        toast(`Error deleting task: ${error}`);
      });
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
            <TaskDetails selectedTask={selectedTask} toggleEdit={toggleEditTaskVisibility} onDelete={deleteTask}/>
          )}
          {/* <AddTask /> */}
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
        theme='dark'
      />
    </div>
  );
}

export default App;
