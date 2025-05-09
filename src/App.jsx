import React, { useState } from 'react';

import './App.css';
import { formatDate } from './Functions/FormatDate';


function App() {
  const [inputDate, setInputDate] = useState('2025-05-09'); // Default to 09 May 2025  const [daysToAdd, setDaysToAdd] = useState(7); // Default to 7 days for futureDate

  const handleDateChange = (e) => setInputDate(e.target.value);



  const selectedDate = new Date(inputDate);


  return (
    <div className="app-container">
      <h1>Date Formatter</h1>
      <div className="input-group">
        <label>
          Select Date:
          <input
            type="date"
            value={inputDate}
            onChange={handleDateChange}
            className="date-input"
          />
        </label>
      </div>
    
      
      <div className="output">
        <p><strong>Selected Date:</strong> {formatDate(selectedDate, 'D-MM-YYYY')}</p>
        <p><strong> Date :</strong> {formatDate(selectedDate, 'lll')}</p>
        <p><strong> Date :</strong> {formatDate(selectedDate, 'D MM YYYY H:mm:s')}</p>
      </div>
    </div>
  );
}

export default App;