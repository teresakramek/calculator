import './App.css';
import Container from './components/Container';
import Screen from './components/Screen';
import BtnBox from './components/BtnBox';
import Button from './components/Button';
import CalcProvider from './engine/CalcEngine';
import Index from './pages/Index';

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
      <Index />
      <CalcProvider>
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
      </CalcProvider>
    </div>
  );
}

export default App;