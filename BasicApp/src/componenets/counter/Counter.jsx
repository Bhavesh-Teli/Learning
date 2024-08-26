import React, { useState } from 'react';

const Counter = () => {
  
  let [counter, setCounter] = useState(1);

  const addValue = () => {
    if (counter >= 20) {
      setCounter(1);
    } else {
      setCounter(counter + 1); // Use setCounter to update state
    }
  };

  const removeValue = () => {
    if (counter <= 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1); // Use setCounter to update state
    }
  };

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl inline-block'>Counter Value: {counter}</h1>
      <br />
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  );
};

export default Counter;
