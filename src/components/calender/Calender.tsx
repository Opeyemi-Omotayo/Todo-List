import React from 'react';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Calender = () => {
    const [value, onChange] = useState<Value>(new Date());

    return (
      <div className='rounded-lg shadow-lg'>
        <DateTimePicker onChange={onChange} value={value} className={'rounded-lg shadow-lg bg-red-500'} />
      </div>
    );
}

export default Calender;
