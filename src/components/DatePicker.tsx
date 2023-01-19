import React, { useState } from 'react';
import './DatePicker.css';

interface DatePickerProps {
    name: string;
    // startDate: Date;
    startDate: string;
    // endDate: Date;
    endDate: string;
    // onChange: (startDate: Date, endDate: Date) => void;
    onChange: (startDate: string, endDate: string) => void;
}

const DatePicker: React.FC<DatePickerProps> = (props) => {
  const [startDate, setStartDate] = useState(props.startDate);
  const [endDate, setEndDate] = useState(props.endDate);

  const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(event.target.value);
  };

//   const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setStartDate(new Date(Date.parse(event.target.value)));
//   };

//   const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setEndDate(new Date(Date.parse(event.target.value)));
//   };

  return (
    <div className="birth-data-picker">
      <div className="birth-data-picker__date-range">
        <label className='date-title-label' style={{  }}>
          {props.name}
          <input
            type="date"
            value={startDate}
            // value={startDate.toISOString().substring(0,10)}
            onChange={handleStartDateChange}
            required
          />
        </label>
      </div>
      {/* <button onClick={() => props.onChange(startDate, endDate)}>
        Update
      </button> */}
    </div>
  );
};

export default DatePicker;
