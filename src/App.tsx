import React, { SetStateAction } from 'react';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppProvider } from './context/Index';
import HomePage from './page/HomePage';
import { Todo } from './types/types';

function App() {
  return (
    <div>
      <AppProvider 
        toggleEditTaskVisibility={function ():void {
          throw new Error("Unable to toggle edit task!")
        }}
        toggleAddTaskVisibility={function ():void {
          throw new Error("Unable to toggle add task!")
        }}
        deleteTask={function (id: number): void {
          throw new Error("Unable to delete task!");
        }}
        editTaskVisible= {false}
        addTaskVisible={false}
        taskDetailsVisible={false}
        selectedTask= {null}
        setSelectedTask={function (value: SetStateAction<Todo | null> ): void {
          throw new Error("Unable to set task!");
        } }
        handleCheckbox={function (id: number): void {
          throw new Error("Unable to toggle checkbox !");
        }}       
        handleTaskClick={function (id: number): void {
          throw new Error("Unable to click task!");
        }}
        todos={[]}
        >
        <HomePage />
      </AppProvider>


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
