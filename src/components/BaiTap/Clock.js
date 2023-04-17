import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(new Date().toLocaleTimeString());
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>Current Time:</h1>
      <p>{time}</p>
    </div>
  );
}

export default Clock;