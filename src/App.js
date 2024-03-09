import { useState } from 'react';
import './App.css';

function App() {
  const checks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '+', '-', '*', '/', '.'];
  const [result, setResult] = useState(0);
  const concatCheck = e => {
    result === 0 ?
      setResult(e.target.innerText)
      : setResult(result.toString().concat(e.target.innerText))
  }
  return (
    <div className="App">
      <div className="calc">
        <div className="result"><span>{result}</span></div>
        <div className="buttons">
          <button onClick={() => {
            setResult(0);
          }}>AC</button>
          <button onClick={() => {
            if (result > 9) {
              setResult(result.slice(0,-1))
            }
            if (result > 1 && result < 9)  {
              setResult(0)
            }
          }}>C</button>
          {checks.map(check => <button onClick={concatCheck} key={check}>{check}</button>)}
          <button onClick={() => {
            try { setResult(eval(result)) }
            catch { setResult(0) }
          }}>=</button>
        </div>
      </div>
    </div>
  );
}
export default App;
