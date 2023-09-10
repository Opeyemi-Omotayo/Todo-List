import React, { createContext, useState, useEffect, useCallback } from "react";
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns';
import axios from "axios";
import { Todo, AppContextProp } from "../types/types";
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
  const [calenderVisible, setCalenderVisible] = useState(false);
  const [snapPoints, setSnapPoints] = useState([1, 0.85]);
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#ffffff");
  const saved = JSON.parse(localStorage.getItem("todos")!);


  const closeSheet = () => {
    setIsAddTaskModalOpen(false);
    setIsEditTaskModalOpen(false);
    setIsTaskDetailsModalOpen(false);
  };

  const showCalender = () => {
    setCalenderVisible(true);
    setAddTaskVisible(false);
    setEditTaskVisible(false);
    setTaskDetailsVisible(false);
  }

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

  const sortArray = (todos:any) => {
    let sortedArray = todos?.sort((a: Todo, b: Todo) => {
      const dateA: Date = new Date(a.date);
      const dateB: Date = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });
    return sortedArray;
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}`)
      .then((response) => {
      setLoading(false)
      setColor("#3F5BF6")
      const data = response.data.map((todo: Todo) => ({
          ...todo,
          date: getRandomDate(),
          fromTime: getRandomTime(),
          toTime: getRandomTime()
        }))
        if(!(saved && saved.length > 0)) {
          const sortedData = sortArray(data)
          setTodos(sortedData)
        }
        else{
          setTodos(saved)
        }
              })
      .catch((error) => console.log(error));
  }, [loading]);

    const addTask = (
      title: string,
      fromTime: Date | number | string,
      toTime: Date | number | string,
      date: any
    ) => {
      const newTask = {
        id: uuidv4(),
        userId: Math.floor(Math.random() * 5) + 1,
        title: title,
        fromTime: fromTime,
        toTime: toTime,
        date: date,
        completed: false,
      };
      const newAdds = [...todos, newTask]
      const sortedAddTask = sortArray(newAdds)
    
      setTodos(sortedAddTask);
    }
    
  
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
  
    useEffect(() => {
      const saved = localStorage.getItem("todos");
      if (saved) {
        setTodos(JSON.parse(saved));
      }
    }, []);


  const toggleEditTaskVisibility = () => {
    if (window.innerWidth >= 1024) {
    setEditTaskVisible(true);
    setAddTaskVisible(false);
    setTaskDetailsVisible(false);
    setCalenderVisible(false);
    } else{
      setIsEditTaskModalOpen(true);
    setIsAddTaskModalOpen(false);
    setIsTaskDetailsModalOpen(false);
    setSnapPoints([1, 0.75]);
    }
  };

  const toggleAddTaskVisibility = () => {
    if (window.innerWidth >= 1024) {
      setAddTaskVisible(true);
    setEditTaskVisible(false);
    setTaskDetailsVisible(false);
    setCalenderVisible(false);
    } else {
      setIsAddTaskModalOpen(true);
    setIsEditTaskModalOpen(false);
    setIsTaskDetailsModalOpen(false);
    setSnapPoints([1, 0.75]);
    }
  };

  const editTask = (taskId: number | string, updatedTask: Partial<Todo>) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) =>
        todo.id === taskId ? { ...todo, ...updatedTask } : todo
      );
      const sortedUpdatedTodos = sortArray(updatedTodos);
      return sortedUpdatedTodos;
    });
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
    setCalenderVisible(false);
    } else{
      setIsTaskDetailsModalOpen(true);
    setIsEditTaskModalOpen(false);
    setIsAddTaskModalOpen(false);
    setSnapPoints([1, 0.60]);
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
    showCalender,
    calenderVisible,
    saved,
  };
  return (
    <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
  );
}

export default AppContext;
