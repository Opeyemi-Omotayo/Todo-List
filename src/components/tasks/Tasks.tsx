import React, { useContext } from 'react';
import AppContext from '../../context/Index';
import { motion } from 'framer-motion';
import { Spinner} from '@chakra-ui/react';


const Tasks = ({currentTodos} : any) => {
  const { handleCheckbox, handleTaskClick, formatTime, loading, color } = useContext(AppContext);
  
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

  

  return (
    <div className="px-4 py-8 lg:px-8 xl:pl-16 font-workSans">
      <h1 className='text-base font-semibold pb-8'>My Tasks</h1>
     {loading && <div className='flex items-center justify-center h-[200px]'>
      <Spinner className='text-blue'/>
     </div>
     }
      <motion.ul
        variants={wrapper}
        initial='initial'
        animate='animate'
      >
         {currentTodos &&
        currentTodos.map((todo:any) => (
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
                      <p className='text-sm text-grey font-[400]'> {formatTime(todo.fromTime)} - {formatTime(todo.toTime)}</p>
                    </div>
                  </div>
                  <div>
                    <h1 className='text-xs text-grey font-[400]'>{todo.date === new Date().toISOString().slice(0, 10) ? 'Today' : new Date(todo.date).toDateString()}</h1>
                  </div>
                </div>
              </motion.li>
            ))}
      </motion.ul>
    </div>
  )
}

export default Tasks;
