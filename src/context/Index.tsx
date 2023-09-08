import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { Todo, AppContextProp } from "../types/types";
import { toast } from "react-toastify";
const AppContext = createContext<AppContextProp>(null!);

export const AppProvider: React.FC<AppContextProp> = ({ children })=> {
    const [selectedTask, setSelectedTask] = useState<Todo | null>(null);
    const [editTaskVisible, setEditTaskVisible] = useState(false);
    const [todos, setTodos] = useState<Todo[]>([]);
    
    useEffect(() => {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}`)
        .then((response) => setTodos(response.data))
        .catch((error) => console.log(error));
    }, []);
  

    const toggleEditTaskVisibility = () => {
        setEditTaskVisible(!editTaskVisible);
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
      };

    const contextData = {
       deleteTask,
       toggleEditTaskVisibility,
       editTaskVisible,
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
