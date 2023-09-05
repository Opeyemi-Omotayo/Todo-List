import React from 'react';

const Tasks = () => {
  return (
    <div className="px-4 lg:px-8 py-8">
        <h1 className='text-[16px] font-semibold pb-8'>My Tasks</h1>
        <div className='flex items-center bg-gray-50 justify-between rounded-lg shadow-sm p-4'>
            <div className='flex items-center'>
            <input type="checkbox" name="" id="" className='mr-3 w-[20px] h-[20px]'/>
            <div>
                <h1 className='text-sm font-medium'>Create Wireframe</h1>
                <p className='text-sm font-[400]'>11:00 am - 11:30 am</p>
            </div>
            </div>
            <div>
                <h1 className='text-sm font-[400]'>Today</h1>
            </div>
        </div>
      
    </div>
  )
}

export default Tasks;
