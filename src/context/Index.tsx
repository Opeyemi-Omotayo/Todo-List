import React, { createContext, useState, useEffect, CSSProperties } from "react";
import { v4 as uuidv4 } from 'uuid';
import { format, set } from 'date-fns';
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
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
  const [isEditTaskModalOpen, setIsEditTaskModalOpen] = useState(false);
  const [isTaskDetailsModalOpen, setIsTaskDetailsModalOpen] = useState(false);
  const [snapPoints, setSnapPoints] = useState([1, 0.85]);
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#ffffff");




  const closeSheet = () => {
    setIsAddTaskModalOpen(false);
    setIsEditTaskModalOpen(false);
    setIsTaskDetailsModalOpen(false);
  };

  const getRandomDate = () => {
    const startDate = new Date(2023, 7, 1);
    const endDate = new Date(2023, 7, 31);

    const startTime = startDate.getTime();
    const endTime = endDate.getTime();
    const randomDate =
      Math.floor(Math.random() * (endTime - startTime + 1)) +
      startTime;
    const formattedDate = format(new Date(randomDate), 'yyyy-MM-dd')
    return formattedDate;
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
      .then((response) => {
      setLoading(!loading)
      setColor("#3F5BF6")
      setTodos(
        response.data.map((todo: Todo) => ({
          ...todo,
          date: getRandomDate(),
          fromTime: getRandomTime(),
          toTime: getRandomTime()
        }))
              )})
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const sortArray = () => {
    let sortedArray = todos?.sort((a: Todo, b: Todo) => {
      const dateA: Date = new Date(a.date);
      const dateB: Date = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });
    return sortedArray;
  };

  useEffect(() => {
    sortArray()
  }, [todos])

  const toggleEditTaskVisibility = () => {
    if (window.innerWidth >= 1024) {
    setEditTaskVisible(true);
    setAddTaskVisible(false);
    setTaskDetailsVisible(false);
    } else{
      setIsEditTaskModalOpen(true);
    setIsAddTaskModalOpen(false);
    setIsTaskDetailsModalOpen(false);
    setSnapPoints([1, 0.55]);
    }
  };

  const toggleAddTaskVisibility = () => {
    if (window.innerWidth >= 1024) {
      setAddTaskVisible(true);
    setEditTaskVisible(false);
    setTaskDetailsVisible(false);
    } else {
      setIsAddTaskModalOpen(true);
    setIsEditTaskModalOpen(false);
    setIsTaskDetailsModalOpen(false);
    setSnapPoints([1, 0.55]);
    }
  };

  const addTask = (
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

  const editTask = (taskId: number | string, updatedTask: Partial<Todo>) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === taskId ? { ...todo, ...updatedTask } : todo
      )
    );
  };


  const deleteTask = (taskId: number | string) => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== taskId)
    );
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
    if (window.innerWidth >= 1024) {
    setTaskDetailsVisible(true);
    setEditTaskVisible(false);
    setAddTaskVisible(false);
    } else{
      setIsTaskDetailsModalOpen(true);
    setIsEditTaskModalOpen(false);
    setIsAddTaskModalOpen(false);
    setSnapPoints([1, 0.55]);
    }
  };

  const formatTime = (timeString:any) => {
    const time = new Date(`2000-01-01T${timeString}`);
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;

    return `${formattedHours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
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
    editTask,
    isAddTaskModalOpen,
    snapPoints,
    closeSheet,
    isEditTaskModalOpen,
    isTaskDetailsModalOpen,
    formatTime,
    loading,
    color,
  };
  return (
    <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
  );
}

export default AppContext;
