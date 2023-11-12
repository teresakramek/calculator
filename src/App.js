import './App.css';

function App() {
  return (
    <div className="App">
      <article className="App-article">
        <div className="App-calculator">
        <div className="output">0</div>
          <div className="keys">
            <button className="keyOperatorAdd calculatorKey">+</button>
            <button className="keyOperatorSub calculatorKey">-</button>
            <button className="keyOperatorMul calculatorKey">&times;</button>
            <button className="keyOperatorDiv calculatorKey">÷</button>
            <button className="calculatorKey">7</button>
            <button className="calculatorKey">8</button>
            <button className="calculatorKey">9</button>
            <button className="calculatorKey">4</button>
            <button className="calculatorKey">5</button>
            <button className="calculatorKey">6</button>
            <button className="calculatorKey">1</button>
            <button className="calculatorKey">2</button>
            <button className="calculatorKey">3</button>
            <button className="calculatorKey">0</button>
            <button className="calculatorKey">.</button>
            <button className="calculatorKey">AC</button>
            <button className="calculatorKey enter">=</button>
          </div>
        </div>
      </article>
    </div>
  );
}

export default App;
