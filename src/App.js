import { type } from '@testing-library/user-event/dist/type';
import './App.css';
import { useState } from 'react';

function App() {

  const [calcState, setCalc] = useState([]);
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState(0);

  const handleButton = value => {
    // @todo check if number or operation
    const expectedType = expectedValueType()

    assertOperation(expectedType, value)
    assertNumber(expectedType, value)

    calcState.push(value)
    setCalc(calcState)
    setDisplay(calcState.join(''))
  }

  const calculate = () => {
    const calculated = calcState.reduce(
      (accumulator, currentValue) => { 
        return Number(accumulator) + Number(currentValue) 
      },
      Number(0),
    )
    setResult(calculated)
  }

  const expectedValueType = () => {
    return typeof calcState[calcState.length-1] === "number" ? "operation" : "number"
  }

  const assertOperation = (expectedType, value) => {
    if (expectedType === 'operation' && !['+', '-', '*', '/'].includes(value)) {
      new Error('Wrong type | expected operation')
    }
  }

  const assertNumber = (expectedType, value) => {
    if (expectedType === 'number' && typeof value !== "number") {
      new Error('Wrong type | expected number')
    }
  }

  return (
    <div className="App">
      <article className="App-article">
        <div className="App-calculator">
        <div className="output">{ display }</div>
          <div className="keys">
            <button className="calculatorKey">AC</button>
            <button className="calculatorKey">+/-</button>
            <button className="calculatorKey">%</button>
            <button className="keyOperatorAdd calculatorKey" onClick={() => handleButton('+')}>+</button>
            <button className="keyOperatorSub calculatorKey" onClick={() => handleButton('-')}>-</button>
            <button className="keyOperatorMul calculatorKey" onClick={() => handleButton('*')}>&times;</button>
            <button className="keyOperatorDiv calculatorKey" onClick={() => handleButton('/')}>÷</button>
            <button className="calculatorKey" onClick={() => handleButton(7)}>7</button>
            <button className="calculatorKey" onClick={() => handleButton(8)}>8</button>
            <button className="calculatorKey" onClick={() => handleButton(9)}>9</button>
            <button className="calculatorKey" onClick={() => handleButton(4)}>4</button>
            <button className="calculatorKey" onClick={() => handleButton(5)}>5</button>
            <button className="calculatorKey" onClick={() => handleButton(6)}>6</button>
            <button className="calculatorKey" onClick={() => handleButton(1)}>1</button>
            <button className="calculatorKey" onClick={() => handleButton(2)}>2</button>
            <button className="calculatorKey" onClick={() => handleButton(3)}>3</button>
            <button className="calculatorKey" onClick={() => handleButton(3)}>0</button>
            <button className="calculatorKey">.</button>
            
            <button className="calculatorKey enter" onClick={() => calculate()}>=</button>
          </div>
        </div>
      </article>
    </div>
  );
}

export default App;
