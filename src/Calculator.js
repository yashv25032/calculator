import React, { useState } from 'react';
import './index.css';

const Calculator = () => {

    const [input, setInput] = useState('');

    const handlevalue = (value) => {

        setInput(input + value);

    }

    const handlecalculate = () => {

        setInput(eval(input).toString());

    }

    const handleclear = () => {

        setInput('');

    }

    const handlecancel = () => {

        setInput(input.slice(0, -1));

    }

    return (
        <>
            <div className="App">
                <h1>Simple Calculator</h1>
                <div className="calculator">{input}</div>
                <div className='buttons'>
                    <button className='cancel' onClick={() => handlecancel()}>cancel</button>
                </div>

                <div className="buttons">

                    <button onClick={() => handlevalue('7')}>7</button>
                    <button onClick={() => handlevalue('8')}>8</button>
                    <button onClick={() => handlevalue('9')}>9</button>
                    <button onClick={() => handlevalue('+')}>+</button>
                    <button onClick={() => handlevalue('4')}>4</button>
                    <button onClick={() => handlevalue('5')}>5</button>
                    <button onClick={() => handlevalue('6')}>6</button>
                    <button onClick={() => handlevalue('-')}>-</button>
                    <button onClick={() => handlevalue('1')}>1</button>
                    <button onClick={() => handlevalue('2')}>2</button>
                    <button onClick={() => handlevalue('3')}>3</button>
                    <button onClick={() => handlevalue('*')}>*</button>
                    <button onClick={() => handlevalue('0')}>0</button>
                    <button onClick={() => handlecalculate()} >=</button>
                    <button onClick={() => handlevalue('/')}>/</button>
                    <button onClick={() => handleclear()} >C</button>
                </div>
            </div>

        </>
    );
}

export default Calculator;
