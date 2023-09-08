import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns';
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
      const date = format(new Date(randomDate), 'yyyy-MM-dd')
    return date;
  }

  const getRandomTime = () => {
    const hours = Math.floor(Math.random() * 24);
    const minutes = Math.floor(Math.random() * 60);
    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
    return formattedTime;
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

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


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

  const addTask =(
    title: string,
    fromTime: Date | number | string,
    toTime: Date | number | string,
    date: any
    ) => {
      setTodos([
        ...todos,
        {
          id: uuidv4(),
          userId: Math.floor(Math.random() * 5) + 1,
          title: title,
          fromTime: fromTime,
          toTime: toTime,
          date: date,
          completed: false,
        },
      ]);
  }

  const deleteTask = (id: number | string) => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/${id}`)
      .then((response) => {
        if (response.status === 200) {
          toast(`Task with the ID of ${id} deleted.`);
          setSelectedTask(null);
        }
      })
      .catch((error) => {
        toast(`Error deleting task: ${error}`);
      });
  };

  const handleCheckbox = (id: number | string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleTaskClick = (id: number | string) => {
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
    addTask,
  };
  return (
    <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
  );
}

export default AppContext;
