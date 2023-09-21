import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');
  return (
    <div className="calculator">
      {/* Display the input */}
      <div className="input">{input}</div>
      <div className="buttons">
        <button className='special' onClick={() => setInput('')}>AC</button>
        <button onClick={() => setInput(input + '%')}>%</button>
        <button onClick={() => setInput(input + '/')}>/</button>
        <button onClick={() => setInput(input + '*')}>*</button>
        <button onClick={() => setInput(input + '0')}>0</button>
        <button onClick={() => setInput(input + '1')}>1</button>
        <button onClick={() => setInput(input + '2')}>2</button>
        <button onClick={() => setInput(input + '+')}>+</button>
        <button onClick={() => setInput(input + '3')}>3</button>
        <button onClick={() => setInput(input + '4')}>4</button>
        <button onClick={() => setInput(input + '5')}>5</button>
        <button onClick={() => setInput(input + '-')}>-</button>
        <button onClick={() => setInput(input + '6')}>6</button>
        <button onClick={() => setInput(input + '7')}>7</button>
        <button onClick={() => setInput(input + '8')}>8</button>
        <button onClick={() => setInput(input.slice(0, -1))}>DEL</button>
        <button onClick={() => setInput(input + '9')}>9</button> 
        {/* <button onClick={() => setInput(input + '+/-')}>+/-</button> */}
        <button  onClick={() => setInput(eval(input).toString())}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
