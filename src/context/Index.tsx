import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { Todo, AppContextProp } from "../types/types";
import { toast } from "react-toastify";
const AppContext = createContext<AppContextProp>(null!);

export const AppProvider: React.FC<AppContextProp> = ({ children }) => {
  const [selectedTask, setSelectedTask] = useState<Todo | null>(null);
  const [editTaskVisible, setEditTaskVisible] = useState(false);
  const [addTaskVisible, setAddTaskVisible] = useState(false);
  const [taskDetailsVisible, setTaskDetailsVisible] = useState(false);
  const [todos, setTodos] = useState<Todo[]>([]);

  const getRandomDate = () =>{
    const startDate = new Date(2023, 7, 1); 
    const endDate = new Date(2023, 7, 31);

    const startTime = startDate.getTime();
    const endTime = endDate.getTime();
    const randomDate =
      Math.floor(Math.random() * (endTime - startTime + 1)) +
      startTime;
    return new Date(randomDate);
  }

  const getRandomTime = () => {
    const hours = Math.floor(Math.random() * 24);
    const minutes = Math.floor(Math.random() * 60);
    const seconds = Math.floor(Math.random() * 60);
    return new Date(0, 0, 0, hours, minutes, seconds);
  }

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}`)
      .then((response) => setTodos(
        response.data.map((todo: Todo) => ({
          ...todo,
          date: getRandomDate(),
          fromTime : getRandomTime(),
          toTime: getRandomTime()
        }))
      ))
      .catch((error) => console.log(error));
  }, []);


  const toggleEditTaskVisibility = () => {
    setEditTaskVisible(true);
    setAddTaskVisible(false);
    setTaskDetailsVisible(false);
  };

  const toggleAddTaskVisibility = () => {
    setAddTaskVisible(true);
    setEditTaskVisible(false);
    setTaskDetailsVisible(false);
  };


  const deleteTask = (taskId: number) => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/${taskId}`)
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

  const handleCheckbox = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleTaskClick = (id: number) => {
    const task = todos.find((todo) => todo.id === id);
    if (task) {
      setSelectedTask(task);
    }
    setTaskDetailsVisible(true);
    setEditTaskVisible(false);
    setAddTaskVisible(false);
  };

  const contextData = {
    deleteTask,
    toggleEditTaskVisibility,
    toggleAddTaskVisibility,
    taskDetailsVisible,
    editTaskVisible,
    addTaskVisible,
    selectedTask,
    setSelectedTask,
    handleCheckbox,
    handleTaskClick,
    todos,
  };
  return (
    <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
  );
}

export default AppContext;
