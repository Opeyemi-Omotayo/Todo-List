import React, { useContext, useState, CSSProperties } from 'react';
import AppContext from '../../context/Index';
import ClipLoader from "react-spinners/ClipLoader";


const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Tasks = () => {
  const {handleCheckbox, handleTaskClick, todos, formatTime, loading, color} = useContext(AppContext);
  const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 10;
    const totalPages = Math.ceil(todos.length / itemsPerPage);

  const getTodosPage = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return todos.slice(startIndex, endIndex);
  };


  return (
    <div className="px-4 py-8 lg:px-8">
      <h1 className='text-[16px] font-semibold pb-8'>My Tasks</h1>
      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <ul>
        {getTodosPage().map((todo) => {
          return (
            <li key={todo.id} onClick={() => handleTaskClick(todo.id)  }>
              <div className={`flex items-center mb-4 bg-gray-50 justify-between hover:bg-gray-200 rounded-lg shadow-sm p-4 ${todo.completed ? 'opacity-50 line-through' : ''}`}>
                <div className='flex items-center '>
                  <input type="checkbox" name="" id="" className='mr-3 w-[20px] h-[20px]' checked={todo.completed} onChange={() => handleCheckbox(todo.id)} />
                  <div>
                    <h1 className='text-sm font-medium'>{todo.title}</h1>
                    <p className='text-sm font-[400]'> {formatTime(todo.fromTime)} - {formatTime(todo.toTime)}</p>
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
      <div className='flex items-center justify-between pt-[3rem] pb-[5rem] lg:pt-[5rem]'>
        <button
          onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <div className='w-[25%]'>
        <span>Page {currentPage} of {totalPages}</span>
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
