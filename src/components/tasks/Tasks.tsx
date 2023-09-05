import React,  { useEffect, useState} from 'react';
import axios from 'axios';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
  }

const Tasks = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        axios
          .get("https://jsonplaceholder.typicode.com/todos")
          .then((response) => setTodos(response.data))
          .catch((error) => console.log(error));
      }, []);  

      const itemsPerPage = 10;
      const totalPages = Math.ceil(todos.length / itemsPerPage);

      const handleCheckbox = (id: number) => {
        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        );
      };

      const getPageTodos = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return todos.slice(startIndex, endIndex);
      };

      const renderPageNumbers = () => {
        const pageNumbers = [];
      
        for (let i = 1; i <= totalPages; i++) {
          if (i <= 3 || (i >= currentPage - 1 && i <= currentPage + 1) || i > totalPages - 1) {
            pageNumbers.push(
              <span
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`cursor-pointer p-3 bg-gray-100 rounded-full mr-2 ${currentPage === i ? "font-bold bg-gray-200" : ""}`}
              >
                {i}
              </span>
            );
          } else if (i >= 4 ) {
            pageNumbers.push(<span key={i}>.</span>);
          }
        }      
        return pageNumbers;
      };
       
          

  return (
    <div className="px-4 lg:px-8 py-8">
        <h1 className='text-[16px] font-semibold pb-8'>My Tasks</h1>
        <ul>
        {getPageTodos().map((todo) => {
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
        <div className='flex items-center justify-between pt-[5rem]'>
        <button
          onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <div className='w-[25%]'>
        {renderPageNumbers()}
        </div>
        <button
          onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div> 
    </div>
  )
}

export default Tasks;
