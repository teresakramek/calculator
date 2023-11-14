import './App.css';
import Container from './components/Container';
import Screen from './components/Screen';
import BtnBox from './components/BtnBox';
import Button from './components/Button';

function App() {

  const btnValues = [
    ["AC", "+/-", "%", "÷"],
    [7, 8, 9, "x"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ]
  
  return (
    <div className="App">
      <Container>
        <Screen />
          <BtnBox>
            {btnValues.flat().map((btn, i) => (
              <Button
                value={btn}
                key={i}
              />
            ))}
          </BtnBox>
      </Container>
      {/* <article className="App-article">
        <div className="App-calculator">
        <div className="output">0</div>
          <div className="keys">
            <button className="calculatorKey">AC</button>
            <button className="calculatorKey">+/-</button>
            <button className="calculatorKey">%</button>
            <button className="keyOperatorAdd calculatorKey">+</button>
            <button className="keyOperatorSub calculatorKey">-</button>
            <button className="keyOperatorMul calculatorKey">&times;</button>
            <button className="keyOperatorDiv calculatorKey">÷</button>
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
      </article> */}
    </div>
  );
}

export default App;
