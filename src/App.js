import './App.sass';
import { useState, useRef, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0),
        onClickPlus = ()=>{
          setCount(count + 1)
        },
        onClickMinus = ()=>{ if(count >0) {setCount(count - 1)} }
  return (
    <div className="App">
      <h2>Counter</h2>
      <h1>{count}</h1>
      <div className="buttons">
        <button onClick={onClickMinus} className='minus'>- Minus</button>
        <button onClick={onClickPlus} className='plus'>+ Plus</button>
      </div>
    </div>
  );
}

export default App;
