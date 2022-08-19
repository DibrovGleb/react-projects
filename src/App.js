import './App.sass';
import { useState } from 'react';

const imgArr = require.context('./pokemons', false, /\.(png|svg)$/),
      images = imgArr.keys().map(imgArr)

const CreateImage=()=> {
  let randomIndex = Math.floor(Math.random() * 11)
  return <img src={images[randomIndex]} alt="" />
}

function App() {
  const [count, setCount] = useState(0),
        [imagesList, setInputList] = useState([]),
        onClickPlus = ()=>{
          setCount(count + 1)
          setInputList(imagesList.concat(<CreateImage key={imagesList.length} />))
        },
        onClickMinus = ()=>{ 
          if(count >0) setCount(count - 1); setInputList(imagesList.slice(0, imagesList.length - 1))
        }

  return (
    <div className="App">
      <h2>Counter</h2>
      <h1>{count}</h1>
      <div className="buttons">
        <button onClick={onClickMinus} className='minus'>- Minus</button>
        <button onClick={onClickPlus} className='plus'>+ Plus</button>
      </div>
      <div className="images-container">
        {imagesList}
      </div>
    </div>
    
  );
}

export default App;
