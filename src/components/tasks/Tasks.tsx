import React,  { useEffect, useState} from 'react';
import axios from 'axios';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
  }

const Tasks = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    useEffect(() => {
        axios
          .get("https://jsonplaceholder.typicode.com/todos")
          .then((response) => setTodos(response.data))
          .catch((error) => console.log(error));
      }, []);  

      const handleCheckbox = (id: number) => {
        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        );
      };

  return (
    <div className="px-4 lg:px-8 py-8">
        <h1 className='text-[16px] font-semibold pb-8'>My Tasks</h1>
        <ul>
            {todos.map((todo) => {
                return(
                    <li key={todo.id}>
                    <div className={`flex items-center mb-4 bg-gray-50 justify-between rounded-lg shadow-sm p-4 ${todo.completed ? 'opacity-50' : ''}`}>
                    <div className='flex items-center'>
                    <input type="checkbox" name="" id="" className='mr-3 w-[20px] h-[20px]' checked={todo.completed} onChange={() => handleCheckbox(todo.id)}/>
                    <div>
                        <h1 className='text-sm font-medium'>{todo.title}</h1>
                        <p className='text-sm font-[400]'>11:00 am - 11:30 am</p>
                    </div>
                    </div>
                    <div>
                        <h1 className='text-sm font-[400]'>Today</h1>
                    </div>
                </div>
                    </li>
                )
            })}          
        </ul>     
    </div>
  )
}

export default Tasks;
