import React, { useContext, useState } from 'react';
import AppContext from '../../context/Index';
// import { format } from 'date-fns';

const Tasks = () => {
  const {handleCheckbox, handleTaskClick, todos} = useContext(AppContext);
  const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 10;
    const totalPages = Math.ceil(todos.length / itemsPerPage);

  const getTodosPage = () => {
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
      } else if (i >= 4) {
        pageNumbers.push(<span key={i}>.</span>);
      }
    }
    return pageNumbers;
  };
  

  return (
    <div className="px-4 py-8 lg:px-8">
      <h1 className='text-[16px] font-semibold pb-8'>My Tasks</h1>
      <ul>
        {getTodosPage().map((todo) => {
          return (
            <li key={todo.id} onClick={() => handleTaskClick(todo.id)}>
              <div className={`flex items-center mb-4 bg-gray-50 justify-between hover:bg-gray-200 rounded-lg shadow-sm p-4 ${todo.completed ? 'opacity-50 line-through' : ''}`}>
                <div className='flex items-center '>
                  <input type="checkbox" name="" id="" className='mr-3 w-[20px] h-[20px]' checked={todo.completed} onChange={() => handleCheckbox(todo.id)} />
                  <div>
                    <h1 className='text-sm font-medium'>{todo.title}</h1>
                    <p className='text-sm font-[400]'> {todo.fromTime} - {todo.toTime }</p>
                  </div>
                </div>
                <div>
                  <h1 className='text-xs font-[400]'>{todo.date === new Date().toISOString().slice(0, 10) ? 'Today' : new Date(todo.date).toDateString()}</h1>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
      <div className='flex items-center justify-between pt-[3rem] lg:pt-[5rem] bottom-0'>
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
