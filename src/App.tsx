import React from 'react';
import Header from './components/header/Header';
import DateList from './components/dateList/DateList';
import Tasks from './components/tasks/Tasks';
import Calender from './components/calender/Calender';


function App() {
  return (
    <div>
      <Header />
      <div className='flex'>
        <div className='w-[70%]'>
          <DateList />
          <Tasks />
        </div>
        <div className='w-[27%]'>
          <Calender />
        </div>
      </div>
    </div>
  );
}

export default App;
