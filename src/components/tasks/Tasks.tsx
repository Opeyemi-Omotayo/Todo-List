import React, { useContext, useState, CSSProperties } from 'react';
import AppContext from '../../context/Index';
import ClipLoader from "react-spinners/ClipLoader";
import { motion } from 'framer-motion';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "blue",
};

const Tasks = () => {
  const { handleCheckbox, handleTaskClick, todos, formatTime, loading, color } = useContext(AppContext);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 15;
  const totalPages = Math.ceil(todos.length / itemsPerPage);

  const getTodosPage = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return todos?.slice(startIndex, endIndex);
  };
  const wrapper = {
    initial: { y: 1, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1.5,
      },
    },
  };

  const item = {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 },
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      if (i <= 3 || (i >= currentPage - 1 && i <= currentPage + 1) || i > totalPages - 1) {
        pageNumbers.push(
          <span
            key={i}
            onClick={() => setCurrentPage(i)}
            className={`cursor-pointer text-sm p-3 bg-gray-50 w-[50px] h-6 rounded-[50%] mr-2 ${currentPage === i ? "font-semibold bg-gray-100" : ""}`}
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
    <div className="px-4 py-8 lg:px-8 xl:pl-16">
      <h1 className='text-[16px] font-semibold pb-8'>My Tasks</h1>
      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <motion.ul
        variants={wrapper}
        initial='initial'
        animate='animate'
      >
          {getTodosPage().map((todo) => {
            return (
              <motion.li
                layout
                variants={item}
                transition={{ type: "tween" }}
                className='w-full'
                key={todo.id} onClick={() => handleTaskClick(todo.id)}>
                <div className={`flex items-center cursor-pointer mb-4 bg-gray-50 justify-between hover:bg-gray-200 rounded-lg shadow-sm p-4 ${todo.completed ? 'opacity-50 line-through' : ''}`}>
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
              </motion.li>
            )
          })}
      </motion.ul>
      <div className='flex items-center justify-between pt-[3rem] pb-[5rem] lg:pt-[5rem]'>
        <button
          onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
          disabled={currentPage === 1}
          className='flex items-center'
        >
               <AiOutlineArrowLeft className='mr-2'/>
        <span>Previous</span> 
        </button>
        <div className='w-[40%]'>
         {renderPageNumbers()}
        </div>
        <button
          onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
          disabled={currentPage === totalPages}
          className='flex items-center'
        >
         <span>Next</span> 
          <AiOutlineArrowRight className='ml-2'/>
        </button>
    </div>
    </div>
  )
}

export default Tasks;
