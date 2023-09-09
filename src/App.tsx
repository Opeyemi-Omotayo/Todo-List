import React, { SetStateAction, useEffect } from 'react';
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
        deleteTask={function (id: number | string): void {
          throw new Error("Unable to delete task!");
        }}
        editTaskVisible= {false}
        addTaskVisible={false}
        taskDetailsVisible={false}
        selectedTask= {null}
        setSelectedTask={function (value: SetStateAction<Todo | null> ): void {
          throw new Error("Unable to set task!");
        } }
        handleCheckbox={function (id: number | string): void {
          throw new Error("Unable to toggle checkbox !");
        }}       
        handleTaskClick={function (id: number | string): void {
          throw new Error("Unable to click task!");
        }}
        todos={[]}
        addTask={function (title: string,fromTime:  Date | number | string,toTime:  Date | number | string,date: any ): void {
          throw new Error("Unable to add Task!");
        } }
        editTask={function(taskId: number | string, updatedTask: Partial<Todo>) : void {
          throw new Error("Unable to edit task!");
        }}
        isAddTaskModalOpen={false}
        snapPoints={[]}
        closeSheet={function ():void {
          throw new Error("Unable to close add task modal!")
        }}
        isEditTaskModalOpen={false}
        isTaskDetailsModalOpen={false}
        formatTime={function(timeString: any) : void {
          throw new Error("Unable to format time!");
        }}
        loading={false}
        color={undefined}
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
